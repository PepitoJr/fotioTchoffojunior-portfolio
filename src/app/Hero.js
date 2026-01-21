"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400">
                Salut, je suis Junior Fotio Tchoffo
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Développeur Web & Mobile
              </h1>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
                Je conçois des applications web et mobiles modernes qui ont un sens
                pour les utilisateurs.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-4 flex-wrap">
                <Link
                  target="_blank"
                  href="https://github.com/PepitoJr"
                  className="px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  Github
                </Link>
                <Link
                  target="_blank"
                  href="https://www.linkedin.com/in/junior-fotio-tchoffo-740163243/"
                  className="px-6 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-700 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
                >
                  LinkedIn
                </Link>
                <a
                  href="#projets"
                  className="px-6 py-3 rounded-lg bg-indigo-600 text-white text-base font-medium hover:bg-indigo-700 transition-all duration-200 shadow-md"
                >
                  Voir mes projets
                </a>
              </div>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              <Image
                className="rounded-2xl shadow-2xl w-full max-w-md object-cover"
                src="/imgs/photo-moi/juniorportfolio.jpeg"
                alt="photo de profil"
                width={400}
                height={400}
                priority
              />
              <div className="absolute -z-10 top-8 right-8 w-full h-full bg-indigo-600/10 rounded-2xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
