import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaLaravel } from "react-icons/fa";
import { SiMysql, SiTailwindcss } from "react-icons/si";

export default function FastFoodLaravelPage() {
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
              src="/imgs/photo-projets/heroLaravel.png"
              alt="Application de vente de fast-food"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Application de vente de fast-food
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed">
              Application permettant la vente de fast-food.
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
                      src="/imgs/photo-projets/loginLaravel.png"
                      alt="Page de connexion"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Inscription</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/signUpLaravel.png"
                      alt="Page d'inscription"
                      width={800}
                      height={500}
                      className="w-full"
                    />
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
                {/* Panier */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Panier</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/panierLaravel.png"
                      alt="Panier d'achat"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Paiement */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Paiement</h3>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/paiement.png"
                      alt="Page de paiement"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Dashboard Admin */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Dashboard Admin
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie, l&apos;administrateur de ce site aura la possibilité de gérer
                    les utilisateurs, de gérer les commandes et les paiements.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/dashboardAdminLaravel.png"
                      alt="Dashboard administrateur"
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
                  <FaLaravel className="text-5xl text-red-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Laravel</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">v12</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiMysql className="text-5xl text-blue-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">MySQL</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Base de données</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiTailwindcss className="text-5xl text-sky-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Tailwind CSS</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Styling</div>
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
              href="https://github.com/PepitoJr/site-Ecommerce-Laravel"
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
