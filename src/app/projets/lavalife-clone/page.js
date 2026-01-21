import { ArrowLeft, Server } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaBootstrap, FaGithub } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";

export default function LavaLifePage() {
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
              src="/imgs/photo-projets/heroLavaLife.png"
              alt="Site de rencontre LavaLife"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Site de rencontre
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Cette application permet de mettre en contact des personnes, pour un travail, pour des
              amitiés ou pour toute autre relation. Avec envoi des messages et la possibilité de répondre
              à tous ces messages.
            </p>

            {/* Authentification */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Authentification des utilisateurs
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Login</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/loginLavaLife.png"
                      alt="Page de connexion"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Inscription (Étapes)
                  </h3>
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/inscriptionLavalifeStep1.png"
                        alt="Inscription étape 1"
                        width={800}
                        height={500}
                        className="w-full"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/inscriptionLavalifeStep2.png"
                        alt="Inscription étape 2"
                        width={800}
                        height={500}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Caractéristiques principales
              </h2>

              <div className="space-y-12">
                {/* Recherche de personne */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Recherche de personne
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nous pouvons rechercher des personnes par tranche d&apos;âge, par groupe ethnique, en
                    fonction des raisons et par sexe.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/pageAccueilLavaLife.png"
                      alt="Page d'accueil de LavaLife"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Consultation des messages */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Consultation des messages
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie nous avons la possibilité de lire le message, de supprimer les
                    messages, de répondre aux messages et de composer un message.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/consultationDesMsg.png"
                      alt="Consultation des messages"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Détails de l'utilisateur */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Détails de l&apos;utilisateur
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie, nous pouvons voir les détails de chaque utilisateur.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/detailsUtilsateurLavaLife.png"
                      alt="Page de détails de l'utilisateur"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Composer un message */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Composer un message
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie, nous pouvons envoyer des messages à tous les utilisateurs que nous
                    avons choisis.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/composerUnMsg.png"
                      alt="Composer un message"
                      width={800}
                      height={500}
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

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiDotnet className="text-5xl text-purple-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">ASP.NET</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Framework</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <Server className="text-5xl text-blue-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">SQL Server</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Base de données</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaBootstrap className="text-5xl text-purple-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Bootstrap</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">v5 & CSS</div>
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

            {/* Lien GitHub */}
            <Link
              target="_blank"
              href="https://github.com/PepitoJr/lavalife"
              className="inline-flex items-center gap-3 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-semibold hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors shadow-md hover:shadow-lg"
            >
              <FaGithub className="text-xl" />
              Voir le projet sur GitHub
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
