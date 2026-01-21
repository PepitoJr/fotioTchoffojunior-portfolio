"use client";

import { motion } from "framer-motion";
import { projects } from "../lib/projects";
import Projet from "./composants/Projet";

function MesProjets() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="projets"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-linear-to-r from-gray-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets Récents
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets les plus récents et les plus
            représentatifs de mon travail.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="project-card group"
            >
              <Projet
                nom={project.nom}
                description={project.description}
                image={project.image}
                tags={project.tags}
                slug={project.slug}
                githubLink={project.github}
              />
            </motion.div>
          ))}
        </motion.div>
        <div></div>
      </div>
    </section>
  );
}

export default MesProjets;
