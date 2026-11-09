"use client";
import { cn } from "@/lib/utils";
import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useGalerie } from "./Galerie";

// Remplace next/image : affiche un état de chargement animé tant que l'image n'est pas prête
// Dans une <Galerie>, l'image s'y enregistre et l'ouvre au clic (sauf si galerie={false})
function ImageChargement({ className, wrapperClassName, fill, width, style, onLoad, galerie = true, ...props }) {
  const [chargee, setChargee] = useState(false);
  const compact = !fill && width && width < 150;
  const contexteGalerie = useGalerie();
  const dansGalerie = galerie && contexteGalerie;
  const enregistrer = dansGalerie ? contexteGalerie.enregistrer : null;
  const { src, alt } = props;

  useEffect(() => {
    if (enregistrer) return enregistrer({ src, alt });
  }, [enregistrer, src, alt]);

  const loader = (
    <span
      aria-hidden="true"
      className={cn(
        "img-loader pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden rounded-[inherit] bg-gray-100 dark:bg-gray-800 transition-opacity duration-500",
        chargee && "opacity-0"
      )}
    >
      <span className="img-loader-shimmer absolute inset-0" />
      {compact ? (
        <span className="relative h-5 w-5 rounded-full border-2 border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-400 animate-spin" />
      ) : (
        <span className="relative flex flex-col items-center gap-3">
          <span className="relative flex h-16 w-16 items-center justify-center">
            <span className="img-loader-ring absolute inset-0 rounded-full" />
            <span className="absolute inset-1.25 rounded-full bg-gray-100 dark:bg-gray-800" />
            <ImageIcon className="relative h-6 w-6 text-indigo-600 dark:text-indigo-400 animate-pulse" />
          </span>
          <span className="flex gap-1.5">
            {[0, 150, 300].map((delai) => (
              <span
                key={delai}
                className="h-1.5 w-1.5 rounded-full bg-indigo-500 animate-bounce"
                style={{ animationDelay: `${delai}ms` }}
              />
            ))}
          </span>
        </span>
      )}
    </span>
  );

  const image = (
    <Image
      {...props}
      fill={fill}
      width={width}
      {...(dansGalerie && { onClick: () => contexteGalerie.ouvrir(src) })}
      className={cn(
        className,
        chargee ? "opacity-100 blur-0" : "opacity-0 blur-md",
        dansGalerie && "cursor-zoom-in hover:brightness-95"
      )}
      style={{ transition: "opacity 700ms ease, filter 700ms ease, transform 300ms ease", ...style }}
      onLoad={(e) => {
        setChargee(true);
        onLoad?.(e);
      }}
    />
  );

  // Avec `fill`, le parent est déjà positionné : le loader se place directement dedans
  if (fill) {
    return (
      <>
        {loader}
        {image}
      </>
    );
  }

  return (
    <span className={cn("relative block", wrapperClassName)}>
      {loader}
      {image}
    </span>
  );
}

export default ImageChargement;
