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
  {
    id: 4,
    slug: "courrier-retrouve",
    nom: "Courrier Retrouvé (application mobile)",
    description:
      "Application mobile qui permet de signaler une lettre mal livrée en la photographiant : l'IA lit l'enveloppe et retrouve son destinataire. Développée avec Flutter, Node.js et PostgreSQL.",
    image: "/imgs/photo-projets/courrierRetrouveLogo.jpeg",
    imageContain: true,
    tags: ["Flutter", "Node.js", "PostgreSQL", "IA"],
    github: "https://github.com/PepitoJr/lettreTrouveeApk",
    live: "#",
  },
  {
    id: 5,
    slug: "autoparts",
    nom: "AutoParts (vente de pièces auto)",
    description:
      "Boutique en ligne de pièces automobiles avec catalogue filtrable, alertes de rupture de stock, centres de retrait et tableau de bord administrateur. Développée avec Symfony.",
    image: "/imgs/photo-projets/autoPartsCatalogue.jpeg",
    tags: ["Symfony 7.4", "PHP"],
    github: "#",
    live: "#",
  },
  {
    id: 6,
    slug: "zu-freedom",
    nom: "Zu-Freedom (application de bureau)",
    description:
      "Logiciel Windows d'enregistrement des patients pour une communauté missionnaire, avec génération et impression de fiches PDF. Développé en C# avec WinForms et SQLite.",
    image: "/imgs/photo-projets/zuFreedomTableauDeBord.jpeg",
    tags: ["C#", ".NET 8", "WinForms", "SQLite"],
    github: "#",
    live: "#",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}
