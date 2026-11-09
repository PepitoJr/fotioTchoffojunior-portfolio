import Image from "@/app/composants/ImageChargement";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaFilePdf, FaWindows } from "react-icons/fa";
import { SiDotnet, SiSqlite } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

export default function ZuFreedomPage() {
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
              src="/imgs/photo-projets/zuFreedomTableauDeBord.jpeg"
              alt="Tableau de bord de Zu-Freedom"
              fill
              className="object-cover object-left-top"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Zu-Freedom – gestion des enregistrements de patients
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Application de bureau Windows développée pour la Communauté missionnaire de réveil.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Des fiches patients prêtes à imprimer en quelques secondes
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Zu-Freedom permet au personnel de santé d&apos;enregistrer rapidement les personnes
                  accueillies : nom, âge, lieu de résidence, pathologies et durée de la maladie.
                </p>
                <p>
                  À chaque enregistrement, l&apos;application génère une fiche d&apos;urgence bilingue au
                  format PDF, avec un filigrane personnalisable, que l&apos;on peut visualiser ou
                  imprimer directement. Les données sont stockées localement dans une base SQLite.
                </p>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Caractéristiques principales
              </h2>

              <div className="space-y-12">
                {/* Démarrage */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Session d&apos;enregistrement
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Au lancement, le membre du personnel de santé indique son nom, un message et
                    éventuellement une image de filigrane qui apparaîtra sur les fiches.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/zuFreedomDemarrage.jpeg"
                        alt="Écran de démarrage"
                        width={607}
                        height={412}
                        className="w-full"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/zuFreedomNouvelEnregistrement.jpeg"
                        alt="Nouvel enregistrement"
                        width={1280}
                        height={679}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Patient */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Enregistrement d&apos;un patient
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Un formulaire simple pour saisir les informations du patient. Après
                    l&apos;enregistrement, l&apos;application propose de visualiser la fiche PDF ou de
                    l&apos;imprimer directement.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/zuFreedomPatient.jpeg"
                        alt="Formulaire patient"
                        width={1280}
                        height={681}
                        className="w-full"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/zuFreedomConfirmation.jpeg"
                        alt="Confirmation et choix d'impression"
                        width={1280}
                        height={681}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Fiche PDF */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Fiche d&apos;urgence en PDF
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Une fiche bilingue français / anglais, lisible de loin, avec le filigrane de la
                    communauté, le nom du personnel de santé et la date.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/zuFreedomPdf.jpeg"
                      alt="Fiche d'urgence générée en PDF"
                      width={1280}
                      height={691}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Tableau de bord */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Tableau de bord
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Le nombre total de patients, ceux de la semaine et ceux du jour, avec la liste des
                    derniers enregistrements.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/zuFreedomTableauDeBord.jpeg"
                      alt="Tableau de bord"
                      width={1280}
                      height={680}
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

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <TbBrandCSharp className="text-5xl text-purple-700 dark:text-purple-400" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">C#</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Langage</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiDotnet className="text-5xl text-purple-600 dark:text-purple-400" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">.NET 8</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Plateforme</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaWindows className="text-5xl text-sky-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">WinForms</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Interface</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiSqlite className="text-5xl text-sky-700" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">SQLite</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Base de données</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaFilePdf className="text-5xl text-red-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">iTextSharp</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Génération PDF</div>
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
