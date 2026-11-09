"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const GalerieContext = createContext(null);

const ZOOM = { duration: 0.35, ease: [0.2, 0, 0, 1] };

// Ouverture / fermeture : la photo s'agrandit depuis sa place dans la page (et y retourne) en restant
// opaque. Un fondu laisserait voir la page à travers la photo (effet « fantôme »).
// Navigation : la photo entre du côté de la flèche cliquée et l'ancienne sort du côté opposé.
const photoVariants = {
  depart: (c) => ({ ...c.zoomDepuis(), opacity: 1 }),
  retour: (c) => {
    const zoom = c.zoomVers();
    return zoom ? { ...zoom, opacity: 1, transition: ZOOM } : { opacity: 0, transition: { duration: 0.2 } };
  },
  entree: (c) => ({ x: `${c.direction * 35}%`, y: 0, scaleX: 1, scaleY: 1, opacity: 0 }),
  centre: { x: 0, y: 0, scaleX: 1, scaleY: 1, opacity: 1 },
  sortie: (c) => ({ x: `${c.direction * -35}%`, opacity: 0 }),
};

// Fond noir et commandes : simple fondu, pendant que la photo zoome
const fondu = {
  cache: { opacity: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  visible: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } },
};

// Image de la page associée à une photo de la galerie
function imageDansLaPage(src) {
  return document.querySelector(`img[data-galerie="${CSS.escape(src)}"]`);
}

// Rectangle occupé par une image de ce ratio, centrée en « object-contain » dans la zone
function ajuster(ratio, zone) {
  const largeur = Math.min(zone.width, zone.height * ratio);
  const hauteur = largeur / ratio;
  return {
    left: zone.left + (zone.width - largeur) / 2,
    top: zone.top + (zone.height - hauteur) / 2,
    width: largeur,
    height: hauteur,
  };
}

export function useGalerie() {
  return useContext(GalerieContext);
}

// Photo HD qui apparaît par-dessus l'aperçu déjà chargé dans la page
function PhotoPleinEcran({ src, alt, apercu }) {
  const [chargee, setChargee] = useState(false);
  return (
    <div className="relative h-full w-full" onClick={(e) => e.stopPropagation()}>
      {apercu && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={apercu} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-contain" />
      )}
      <Image
        src={src}
        alt={alt}
        fill
        sizes="100vw"
        className="object-contain"
        style={{ opacity: chargee ? 1 : 0, transition: "opacity 200ms ease" }}
        onLoad={() => setChargee(true)}
      />
    </div>
  );
}

// Regroupe les images de la page et les affiche en plein écran dans un carrousel
function Galerie({ children }) {
  const [photos, setPhotos] = useState([]);
  const [index, setIndex] = useState(null);
  const [direction, setDirection] = useState(0);
  const [fermeture, setFermeture] = useState(false);
  // Photo cliquée dans la page : elle zoome depuis cette image tant qu'on n'a pas navigué
  const [srcDepart, setSrcDepart] = useState(null);
  // Zone de la photo : la photo n'est rendue qu'une fois la zone en place, pour calculer le zoom de départ
  const [zone, setZone] = useState(null);
  const toucheDepart = useRef(null);
  const elDepart = useRef(null);
  const cachees = useRef(new Set());

  const cacher = (el) => {
    el.style.visibility = "hidden";
    cachees.current.add(el);
  };
  const montrerTout = () => {
    cachees.current.forEach((el) => (el.style.visibility = ""));
    cachees.current.clear();
  };

  // Transformation qui place la photo plein écran exactement sur l'image `el` de la page
  const zoomSur = (el) => {
    if (!el || !zone) return null;
    const cible = el.getBoundingClientRect();
    if (cible.bottom < 0 || cible.top > window.innerHeight || cible.width === 0) return null;
    const cadre = zone.getBoundingClientRect();
    const ratio = el.naturalWidth && el.naturalHeight ? el.naturalWidth / el.naturalHeight : cible.width / cible.height;
    const photo = ajuster(ratio, cadre);
    const scaleX = cible.width / photo.width;
    const scaleY = cible.height / photo.height;
    return {
      x: cible.left - cadre.left - scaleX * (photo.left - cadre.left),
      y: cible.top - cadre.top - scaleY * (photo.top - cadre.top),
      scaleX,
      scaleY,
    };
  };

  const enregistrer = useCallback((photo) => {
    setPhotos((prev) => (prev.some((p) => p.src === photo.src) ? prev : [...prev, photo]));
    return () => setPhotos((prev) => prev.filter((p) => p.src !== photo.src));
  }, []);

  const ouvrir = useCallback(
    (src, el) => {
      const i = photos.findIndex((p) => p.src === src);
      if (i === -1) return;
      elDepart.current = el;
      setSrcDepart(src);
      cacher(el);
      setDirection(0);
      setFermeture(false);
      setIndex(i);
    },
    [photos]
  );

  const fermer = useCallback(() => {
    if (index === null || fermeture) return;
    const el = imageDansLaPage(photos[index].src);
    if (el) cacher(el);
    setFermeture(true);
  }, [index, fermeture, photos]);

  const terminerFermeture = () => {
    setIndex(null);
    setFermeture(false);
    setSrcDepart(null);
    montrerTout();
  };

  const allerA = useCallback(
    (i, sens) => {
      if (fermeture) return;
      setSrcDepart(null);
      montrerTout();
      setDirection(sens);
      setIndex(i);
    },
    [fermeture]
  );

  const naviguer = useCallback(
    (pas) => allerA((index + pas + photos.length) % photos.length, pas),
    [allerA, index, photos.length]
  );

  const ouvert = index !== null && photos[index];

  useEffect(() => {
    if (!ouvert) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") fermer();
      if (e.key === "ArrowRight") naviguer(1);
      if (e.key === "ArrowLeft") naviguer(-1);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [ouvert, fermer, naviguer]);

  // Bloque le défilement en gardant la place de la barre de défilement, pour que la page ne se décale pas
  useEffect(() => {
    if (!ouvert) return;
    const { overflow, paddingRight } = document.body.style;
    const largeurBarre = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = "hidden";
    if (largeurBarre > 0) document.body.style.paddingRight = `${largeurBarre}px`;
    return () => {
      document.body.style.overflow = overflow;
      document.body.style.paddingRight = paddingRight;
    };
  }, [ouvert]);

  const photo = ouvert ? photos[index] : null;
  const plusieurs = photos.length > 1;
  const etat = fermeture ? "cache" : "visible";
  const custom = {
    direction,
    zoomDepuis: () => zoomSur(elDepart.current) ?? { x: 0, y: 0, scaleX: 0.9, scaleY: 0.9 },
    zoomVers: () => (photo ? zoomSur(imageDansLaPage(photo.src)) : null),
  };

  return (
    <GalerieContext.Provider value={{ enregistrer, ouvrir }}>
      {children}

      {photo && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Galerie de photos"
          className="fixed inset-0 z-100 flex flex-col"
          initial="cache"
          animate={etat}
          onClick={fermer}
          onTouchStart={(e) => (toucheDepart.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (toucheDepart.current === null || !plusieurs) return;
            const ecart = e.changedTouches[0].clientX - toucheDepart.current;
            if (Math.abs(ecart) > 50) naviguer(ecart < 0 ? 1 : -1);
            toucheDepart.current = null;
          }}
        >
          {/* Pas de backdrop-blur : combiné au fondu, le flou disparaît d'un coup (flash) */}
          <motion.div variants={fondu} className="absolute inset-0 bg-black/90" />

          {/* Barre du haut */}
          <motion.div
            variants={fondu}
            className="relative flex items-center justify-between px-4 sm:px-6 py-4 text-white"
          >
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
          </motion.div>

          {/* Image principale */}
          <div ref={setZone} className="relative flex-1 min-h-0 mx-4 sm:mx-20">
            <AnimatePresence custom={custom}>
              {zone && (
                <motion.div
                  key={photo.src}
                  custom={custom}
                  variants={photoVariants}
                  initial={srcDepart === photo.src ? "depart" : "entree"}
                  animate={fermeture ? "retour" : "centre"}
                  exit="sortie"
                  transition={
                    srcDepart === photo.src
                      ? ZOOM
                      : { x: { type: "spring", stiffness: 260, damping: 32 }, opacity: { duration: 0.25 } }
                  }
                  onAnimationComplete={(variante) => variante === "retour" && terminerFermeture()}
                  style={{ originX: 0, originY: 0 }}
                  className="absolute inset-0 z-10"
                >
                  <PhotoPleinEcran
                    src={photo.src}
                    alt={photo.alt}
                    apercu={imageDansLaPage(photo.src)?.currentSrc}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Précharge les photos voisines pour qu'elles s'affichent sans attente */}
            {plusieurs && (
              <div aria-hidden="true" className="pointer-events-none invisible absolute h-px w-px overflow-hidden">
                {[-1, 1].map((pas) => {
                  const voisine = photos[(index + pas + photos.length) % photos.length];
                  return <Image key={pas} src={voisine.src} alt="" fill sizes="100vw" loading="eager" />;
                })}
              </div>
            )}

            {plusieurs && (
              <>
                <motion.button
                  variants={fondu}
                  aria-label="Photo précédente"
                  onClick={(e) => {
                    e.stopPropagation();
                    naviguer(-1);
                  }}
                  className="absolute left-0 sm:-left-16 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                >
                  <ChevronLeft size={28} />
                </motion.button>
                <motion.button
                  variants={fondu}
                  aria-label="Photo suivante"
                  onClick={(e) => {
                    e.stopPropagation();
                    naviguer(1);
                  }}
                  className="absolute right-0 sm:-right-16 top-1/2 -translate-y-1/2 z-20 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/25 transition-colors"
                >
                  <ChevronRight size={28} />
                </motion.button>
              </>
            )}
          </div>

          {/* Légende + miniatures */}
          <motion.div variants={fondu} className="relative px-4 py-4 space-y-3" onClick={(e) => e.stopPropagation()}>
            <p className="text-center text-sm text-white/80">{photo.alt}</p>
            {plusieurs && (
              <div className="flex justify-center gap-2 overflow-x-auto pb-1">
                {photos.map((p, i) => (
                  <button
                    key={p.src}
                    aria-label={`Voir : ${p.alt}`}
                    onClick={() => allerA(i, i > index ? 1 : -1)}
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
          </motion.div>
        </motion.div>
      )}
    </GalerieContext.Provider>
  );
}

export default Galerie;
