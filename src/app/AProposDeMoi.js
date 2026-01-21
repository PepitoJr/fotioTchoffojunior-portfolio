function AProposDeMoi() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-16">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center bg-linear-to-r from-gray-900 to-indigo-600 dark:from-gray-100 dark:to-indigo-400 bg-clip-text text-transparent">
              À propos de moi
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed text-center max-w-3xl mx-auto">
              Je suis un développeur, spécialisé dans le développement
              d&apos;applications web et mobile. À travers mes projets, je mets en
              pratique mes compétences techniques tout en développant une approche
              rigoureuse et professionnelle. Ce portfolio me permet de partager
              mon travail et de démontrer ma motivation à évoluer dans le domaine
              du numérique.
            </p>

            <div className="pt-6">
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                Je code principalement avec ces technologies :
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-linear-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 p-5 rounded-xl border border-blue-200 dark:border-indigo-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Front-end</p>
                  <p className="text-gray-700 dark:text-gray-300">React, Next.js, Tailwind</p>
                </div>
                <div className="bg-linear-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-green-900/20 p-5 rounded-xl border border-green-200 dark:border-green-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Back-end</p>
                  <p className="text-gray-700 dark:text-gray-300">Node.js/Express, Symfony, .NET</p>
                </div>
                <div className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-purple-900/20 p-5 rounded-xl border border-purple-200 dark:border-purple-800 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <p className="font-semibold text-gray-900 dark:text-white mb-2">Mobile</p>
                  <p className="text-gray-700 dark:text-gray-300">Kotlin et React Native</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-gray-50 to-indigo-50 dark:from-gray-800 dark:to-indigo-900/20 p-8 md:p-10 rounded-2xl border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              Ce que je recherche
            </h3>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Des opportunités freelance ou un poste où je peux contribuer à un
              produit à impact, apprendre avec une équipe, et livrer rapidement
              avec qualité.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AProposDeMoi;
