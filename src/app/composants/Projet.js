"use client";
import Image from "next/image";
import Link from "next/link";

function Projet({ nom, description, image, slug }) {
  return (
    <Link href={`/projets/${slug}`} className="group block h-full">
      <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700">
          <Image
            src={image}
            width={700}
            height={600}
            alt={`Aperçu du projet ${nom}`}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {nom}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed flex-1">
            {description}
          </p>
          <div className="mt-4 flex items-center text-indigo-600 dark:text-indigo-400 font-medium text-sm group-hover:gap-2 transition-all">
            Voir le projet
            <svg
              className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Projet;
