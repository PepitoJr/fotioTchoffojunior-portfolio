"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import ImageChargement from "./ImageChargement";

const GalerieContext = createContext(null);

// La photo entre du côté de la flèche cliquée et l'ancienne sort du côté opposé
const glissement = {
  entree: (direction) => ({ x: `${direction * 35}%`, opacity: 0, scale: 0.97 }),
  centre: { x: 0, opacity: 1, scale: 1 },
  sortie: (direction) => ({ x: `${direction * -35}%`, opacity: 0, scale: 0.97 }),
};

export function useGalerie() {
  return useContext(GalerieContext);
}

// Regroupe les images de la page et les affiche en plein écran dans un carrousel
function Galerie({ children }) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const toucheDepart = useRef(null);

  const enregistrer = useCallback((photo) => {
    setPhotos((prev) => (prev.some((p) => p.src === photo.src) ? prev : [...prev, photo]));
    return () => setPhotos((prev) => prev.filter((p) => p.src !== photo.src));
  }, []);

  const ouvrir = useCallback(
    (src) => {
      const i = photos.findIndex((p) => p.src === src);
      if (i !== -1) {
        setDirection(0);
        setIndex(i);
      }
    },
    [photos]
  );

  const fermer = useCallback(() => setIndex(null), []);

  const naviguer = useCallback(
    (pas) => {
      setDirection(pas);
      setIndex((i) => (i + pas + photos.length) % photos.length);
    },
    [photos.length]
  );

  const ouvert = index !== null && photos[index];

  useEffect(() => {
    if (!ouvert) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowRight") naviguer(1);
      if (e.key === "ArrowLeft") naviguer(-1);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [ouvert, fermer, naviguer]);

  const photo = ouvert ? photos[index] : null;
  const plusieurs = photos.length > 1;

  return (
    <GalerieContext.Provider value={{ enregistrer, ouvrir }}>
      {children}

      <AnimatePresence>
        {photo && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Galerie de photos"
            className="fixed inset-0 z-100 flex flex-col bg-black/90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={fermer}
            onTouchStart={(e) => (toucheDepart.current = e.touches[0].clientX)}
            onTouchEnd={(e) => {
              if (toucheDepart.current === null || !plusieurs) return;
              const ecart = e.changedTouches[0].clientX - toucheDepart.current;
              if (Math.abs(ecart) > 50) naviguer(ecart < 0 ? 1 : -1);
              toucheDepart.current = null;
            }}
          >
            {/* Barre du haut */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4 text-white">
              <span className="text-sm font-medium tabular-nums text-white/80">
                {index + 1} / {photos.length}
              </span>
              <button
                aria-label="Fermer"
                onClick={fermer}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Image principale */}
            <div className="relative flex-1 min-h-0 mx-4 sm:mx-20">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={photo.src}
                  custom={direction}
                  variants={glissement}
                  initial="entree"
                  animate="centre"
                  exit="sortie"
                  transition={{
                    x: { type: "spring", stiffness: 260, damping: 32 },
                    opacity: { duration: 0.25 },
                    scale: { duration: 0.3 },
                  }}
                  className="absolute inset-0"
                >
                  <div className="relative h-full w-full">
                    <ImageChargement
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      sizes="100vw"
                      galerie={false}
                      surFondSombre
                      className="object-contain"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Précharge les photos voisines pour qu'elles s'affichent sans attente */}
              {plusieurs && (
                <div aria-hidden="true" className="pointer-events-none invisible absolute h-px w-px overflow-hidden">
                  {[-1, 1].map((pas) => {
                    const voisine = photos[(index + pas + photos.length) % photos.length];
                    return (
                      <Image key={pas} src={voisine.src} alt="" fill sizes="100vw" loading="eager" />
                    );
                  })}
                </div>
              )}

              {plusieurs && (
                <>
                  <button
                    aria-label="Photo précédente"
                    onClick={(e) => {
                      e.stopPropagation();
                      naviguer(-1);
                    }}
                    className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                  >
                    <ChevronLeft size={28} />
                  </button>
                  <button
                    aria-label="Photo suivante"
                    onClick={(e) => {
                      e.stopPropagation();
                      naviguer(1);
                    }}
                    className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                  >
                    <ChevronRight size={28} />
                  </button>
                </>
              )}
            </div>

            {/* Légende + miniatures */}
            <div className="px-4 py-4 space-y-3" onClick={(e) => e.stopPropagation()}>
              <p className="text-center text-sm text-white/80">{photo.alt}</p>
              {plusieurs && (
                <div className="flex justify-center gap-2 overflow-x-auto pb-1">
                  {photos.map((p, i) => (
                    <button
                      key={p.src}
                      aria-label={`Voir : ${p.alt}`}
                      onClick={() => {
                        setDirection(i > index ? 1 : -1);
                        setIndex(i);
                      }}
                      className={cn(
                        "relative h-12 w-20 shrink-0 overflow-hidden rounded-md border-2 transition-all",
                        i === index ? "border-indigo-500 opacity-100" : "border-transparent opacity-50 hover:opacity-90"
                      )}
                    >
                      <Image src={p.src} alt="" fill sizes="80px" className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </GalerieContext.Provider>
  );
}

export default Galerie;
