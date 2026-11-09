import Image from "@/app/composants/ImageChargement";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiPhp, SiSymfony } from "react-icons/si";

export default function AutoPartsPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Retour aux projets
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {/* Hero Section */}
          <div className="relative w-full h-100 md:h-125">
            <Image
              src="/imgs/photo-projets/autoPartsCatalogue.jpeg"
              alt="Catalogue de pièces AutoParts"
              fill
              className="object-cover object-top"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              AutoParts : boutique de pièces automobiles
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Plateforme e-commerce de vente de pièces auto, avec retrait des commandes en centre.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Trouver la bonne pièce, rapidement
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  AutoParts permet aux clients de rechercher une pièce par numéro OEM, catégorie ou
                  marque, de filtrer selon l&apos;origine des pièces et le type de véhicule, puis de
                  commander en ligne.
                </p>
                <p>
                  Les commandes sont récupérées dans un centre de retrait choisi par le client.
                  L&apos;administrateur gère tout le catalogue, les commandes et les centres depuis un
                  tableau de bord dédié.
                </p>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Caractéristiques principales
              </h2>

              <div className="space-y-12">
                {/* Catalogue */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Catalogue avec filtres
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Recherche par OEM, catégorie ou marque, filtres par origine et type de véhicule, tri
                    des résultats et affichage du stock disponible pour chaque pièce.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/autoPartsCatalogue.jpeg"
                      alt="Catalogue des pièces"
                      width={1280}
                      height={613}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Pièces épuisées */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Alertes de rupture de stock
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Les clients consultent les pièces épuisées et peuvent s&apos;inscrire pour être
                    notifiés dès qu&apos;elles sont de nouveau disponibles.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/autoPartsEpuisees.jpeg"
                      alt="Pièces en rupture de stock"
                      width={1280}
                      height={612}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Dashboard admin */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Tableau de bord administrateur
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Des actions rapides pour gérer les commandes, ajouter des pièces, créer des
                    catégories, des marques, des types de véhicule et des origines, et consulter
                    l&apos;inventaire.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/autoPartsDashboard.jpeg"
                      alt="Tableau de bord administrateur"
                      width={1280}
                      height={611}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Centres de retrait */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Gestion des centres de retrait
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    L&apos;administrateur crée, modifie, active ou désactive les centres où les clients
                    récupèrent leurs commandes.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/autoPartsCentres.jpeg"
                      alt="Gestion des centres de retrait"
                      width={1280}
                      height={505}
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technologies utilisées
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiSymfony className="text-5xl text-gray-900 dark:text-white" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Symfony 7.4</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Framework</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiPhp className="text-5xl text-indigo-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">PHP</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Backend</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaGithub className="text-5xl text-gray-900 dark:text-white" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Git/GitHub</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Contrôle de version</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
