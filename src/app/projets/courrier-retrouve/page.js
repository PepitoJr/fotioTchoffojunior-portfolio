import Image from "@/app/composants/ImageChargement";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub, FaNodeJs } from "react-icons/fa";
import { SiAnthropic, SiFirebase, SiFlutter, SiPostgresql, SiSocketdotio } from "react-icons/si";

export default function CourrierRetrouvePage() {
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
          <div className="relative w-full h-100 md:h-125 bg-black">
            <Image
              src="/imgs/photo-projets/courrierRetrouveLogo.jpeg"
              alt="Logo de l'application Courrier Retrouvé"
              fill
              className="object-contain"
              priority
            />
          </div>

          <div className="p-8 md:p-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Courrier Retrouvé : application mobile
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Application mobile qui aide les lettres mal livrées à retrouver leur destinataire.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-6 mb-12">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Une lettre trouvée, un destinataire retrouvé
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  Il arrive souvent de recevoir dans sa boîte aux lettres un courrier qui ne nous est pas
                  destiné. Courrier Retrouvé permet de photographier l&apos;enveloppe : l&apos;intelligence
                  artificielle lit l&apos;adresse et identifie le destinataire inscrit sur l&apos;application.
                </p>
                <p>
                  Le destinataire est alors notifié, et les deux personnes peuvent échanger dans une
                  messagerie privée en temps réel pour organiser la remise de la lettre. Un utilisateur
                  peut aussi déclarer une lettre qu&apos;il attend et qui n&apos;est jamais arrivée.
                </p>
              </div>
            </div>

            {/* Caractéristiques principales */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Caractéristiques principales
              </h2>

              <div className="space-y-12">
                {/* Accueil */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Écran d&apos;accueil
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    L&apos;utilisateur voit en un coup d&apos;œil le nombre de lettres qu&apos;il a trouvées et
                    reçues, et accède rapidement aux actions principales : signaler une lettre, consulter
                    ses lettres reçues, déclarer une perte ou suivre ses signalements.
                  </p>
                </div>

                {/* Signalement */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Signalement d&apos;une lettre en 4 étapes
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Photo du recto (et du verso si besoin), analyse de l&apos;enveloppe par l&apos;IA,
                    vérification des informations détectées, puis confirmation. Les images sont
                    compressées sur le téléphone avant l&apos;envoi.
                  </p>
                </div>

                {/* Lettres reçues */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                    Lettres reçues et messagerie
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Le destinataire retrouve les lettres qui lui sont adressées et peut contacter la
                    personne qui les a trouvées. La conversation se fait en temps réel, avec des
                    notifications push et la traduction des messages.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                  {[
                    { src: "/imgs/photo-projets/courrierRetrouveAccueil.jpeg", alt: "Écran d'accueil" },
                    { src: "/imgs/photo-projets/courrierRetrouveSignaler.jpeg", alt: "Signalement d'une lettre" },
                    { src: "/imgs/photo-projets/courrierRetrouveRecues.jpeg", alt: "Lettres reçues" },
                  ].map((capture) => (
                    <div
                      key={capture.src}
                      className="rounded-3xl overflow-hidden border-4 border-gray-900 dark:border-gray-600 shadow-lg max-w-70 mx-auto w-full"
                    >
                      <Image src={capture.src} alt={capture.alt} width={480} height={1040} className="w-full" />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Technologies */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Technologies utilisées
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiFlutter className="text-5xl text-sky-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Flutter</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Mobile</div>
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
                  <SiPostgresql className="text-5xl text-blue-700" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">PostgreSQL</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Base de données</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiSocketdotio className="text-5xl text-gray-900 dark:text-white" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Socket.IO</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Temps réel</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiFirebase className="text-5xl text-amber-500" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">Firebase</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Notifications</div>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-3 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all">
                  <SiAnthropic className="text-5xl text-orange-700 dark:text-orange-400" />
                  <div className="text-center">
                    <div className="font-semibold text-gray-900 dark:text-white">API Claude</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">IA</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Lien GitHub */}
            <Link
              target="_blank"
              href="https://github.com/PepitoJr/lettreTrouveeApk"
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
