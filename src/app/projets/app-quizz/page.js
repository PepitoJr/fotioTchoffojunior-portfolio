import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { SiShadcnui, SiTailwindcss } from "react-icons/si";

export default function AppQuizzPage() {
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
              src="/imgs/photo-projets/heroQuizz.png"
              alt="Application de création de Quizz"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Application de création de Quizz et de gestion des étudiants
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Application permettant aux enseignants de créer et gérer des quizz avec l&apos;IA.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Un gain de temps dans la création des Quizz et le suivi des étudiants
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  QuizzMaster est une application qui a été développée pour faciliter la création, la
                  correction des Quizz et la gestion des Quizz. Elle est facile à prendre en charge, et
                  facilite grandement la tâche des enseignants.
                </p>
                <p>
                  Cette application donne la possibilité de créer des Quizz manuellement ou grâce à
                  l&apos;intelligence artificielle. Les étudiants se connectent et peuvent répondre aux Quizz qui
                  sont destinés à leur groupe.
                </p>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Caractéristiques principales
              </h2>

              <div className="space-y-12">
                {/* Inscription */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Inscription de l&apos;enseignant et l&apos;étudiant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    L&apos;inscription des étudiants se fait soit par le professeur, ou par l&apos;élève lui-même.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/inscriptionQuizz.png"
                        alt="Inscription enseignant"
                        width={800}
                        height={500}
                        className="w-full"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                      <Image
                        src="/imgs/photo-projets/inscriptionEtudiantQuizz.png"
                        alt="Inscription élève"
                        width={800}
                        height={500}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Création des groupes */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Création des groupes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Les enseignants peuvent créer des groupes où ils vont ajouter les élèves. Les élèves
                    peuvent aussi rejoindre les groupes par eux-mêmes s&apos;ils possèdent le nom du groupe dans
                    lequel ils ont été ajoutés.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/ajoutGroupeQuizz.png"
                      alt="Ajout à un groupe"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Gestion des Étudiants */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Gestion des Étudiants
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Nous donnons la possibilité de gérer les étudiants, voir les groupes auxquels ils
                    appartiennent.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/gestionEtudiantQuizz.png"
                      alt="Gestion des étudiants"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Suivi des Étudiants */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Suivi des Étudiants
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie, nous pouvons voir le groupe auquel il appartient, le Quizz qui a été
                    fait, la note, le nombre de passages de chaque Quizz, la note pour chaque passage et la
                    progression de chaque Quizz.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/suiviEtudiantQuizz.png"
                      alt="Suivi des étudiants"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Tableau de bord de l'étudiant */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Tableau de bord de l&apos;étudiant
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie on peut voir le nombre de groupes, le total de QCM, le nombre de quizz
                    complétés, les QCM non complétés et les QCMs avec les groupes auxquels ils appartiennent.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/tableauDeBordEtudiant.png"
                      alt="Tableau de bord étudiant"
                      width={800}
                      height={500}
                      className="w-full"
                    />
                  </div>
                </div>

                {/* Espace pour passer le Quizz */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Espace pour passer le Quizz
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Dans cette partie l&apos;élève peut composer le Quizz en direct.
                  </p>
                  <div className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <Image
                      src="/imgs/photo-projets/espaceComposerQuizz.png"
                      alt="Espace de composition du quizz"
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

              <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaReact className="text-5xl text-sky-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">React</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Frontend</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <FaNodeJs className="text-5xl text-green-600" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Node.js</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Backend</div>
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
                  <SiShadcnui className="text-5xl text-gray-900 dark:text-white" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">ShadCn UI</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Composants</div>
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
              href="https://github.com/PepitoJr/projetStageSass"
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
