export const projects = [
  {
    id: 1,
    slug: "app-quizz",
    nom: "Application de création de Quizz",
    description:
      "Cette application permet à un enseignant de concevoir ou de générer des quizz avec l'IA. Les technologies utilisées sont React.js, Node.js et l'API OpenAI.",
    image: "/imgs/photo-projets/heroQuizz.png",
    tags: ["React.js", "Node.js", "OpenAI"],
    github: "#",
    live: "#",
  },
  {
    id: 2,
    slug: "fast-food-laravel",
    nom: "Site de vente de fast-food",
    description:
      "Plateforme e-commerce pour la vente de plats à emporter, avec gestion des disponibilités en temps réel. Développé avec Laravel 10 et Tailwind CSS.",
    image: "/imgs/photo-projets/heroLaravel.png",
    tags: ["Laravel 12", "Tailwind CSS", "MySQL"],
    github: "#",
    live: "#",
  },
  {
    id: 3,
    slug: "lavalife-clone",
    nom: "Plateforme de rencontre (LavaLife)",
    description:
      "Clone moderne de LavaLife, une plateforme de rencontre en ligne. Développé avec ASP.NET Core, SQL Server et une interface utilisateur réactive.",
    image: "/imgs/photo-projets/heroLavaLife.png",
    tags: ["ASP.NET Core", "SQL Server", "Bootstrap"],
    github: "#",
    live: "#",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
