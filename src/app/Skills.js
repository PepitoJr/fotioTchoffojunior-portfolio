import { Code2 } from "lucide-react";
import {
  FaDatabase,
  FaJava,
  FaNodeJs,
  FaPython,
  FaReact,
  FaSymfony,
  FaWindows,
} from "react-icons/fa";
import {
  SiAndroid,
  SiCss3,
  SiDotnet,
  SiExpress,
  SiFedora,
  SiFigma,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiPhpstorm,
  SiPostman,
  SiSqlite,
  SiTailwindcss,
  SiUbuntu,
} from "react-icons/si";

const categories = [
  {
    title: "Langages de programmation",
    items: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400" />,
      },
      { name: "Java", icon: <FaJava className="text-red-600" /> },
      { name: "Python", icon: <FaPython className="text-yellow-500" /> },
    ],
  },
  {
    title: "Développement (langages & frameworks)",
    items: [
      { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
      { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-sky-500" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Symfony", icon: <FaSymfony className="text-blue-600" /> },
      { name: ".NET", icon: <SiDotnet className="text-indigo-600" /> },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400" />,
      },
      { name: "Android", icon: <SiAndroid className="text-green-600" /> },
    ],
  },

  {
    title: "Bases de données",
    items: [
      { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
      { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
      { name: "SQL Server", icon: <FaDatabase className="text-red-500" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
      { name: "Oracle", icon: <SiOracle className="text-red-600" /> },
    ],
  },
  {
    title: "Contrôle de version",
    items: [
      { name: "Git", icon: <SiGit className="text-orange-500" /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab className="text-orange-600" /> },
    ],
  },
  {
    title: "Outils",
    items: [
      { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
      { name: "VS Code", icon: <Code2 className="text-sky-500" /> },
      {
        name: "Visual Studio",
        icon: <FaWindows className="text-purple-600" />,
      },
      { name: "PhpStorm", icon: <SiPhpstorm className="text-pink-500" /> },
      { name: "Figma", icon: <SiFigma className="text-pink-600" /> },
    ],
  },
  {
    title: "Systèmes d’exploitation",
    items: [
      {
        name: "Windows (XP, 7, 8, 10, 11)",
        icon: <FaWindows className="text-blue-500" />,
      },
      { name: "Ubuntu", icon: <SiUbuntu className="text-orange-500" /> },
      { name: "Fedora", icon: <SiFedora className="text-blue-500" /> },
    ],
  },
];
export default function Skills() {
  return (
    <section id="competences" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center bg-linear-to-r from-gray-600 to-purple-600 bg-clip-text text-transparent">
          Compétences
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="p-6 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {cat.title}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-3 p-3 rounded-lg border border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/40"
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
