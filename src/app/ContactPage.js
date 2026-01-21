"use client";
import { Github, Mail, Phone } from "lucide-react";

export default function ContactPage() {
  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    const toast = document.getElementById("contact-toast");
    const formData = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xlggwoqp", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        form.reset();
        toast.classList.remove("hidden");
        setTimeout(() => toast.classList.add("hidden"), 3500);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      alert("Impossible d'envoyer le message pour le moment.");
    }
  }

  return (
    <div id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Me contacter
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
            Une idée, un projet, une opportunité ? Envoyez-moi un message.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-8 text-center text-gray-900 dark:text-white">
            Coordonnées
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="tel:+14388752764"
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
            >
              <Phone
                className="text-indigo-600 dark:text-indigo-400"
                size={28}
              />
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Téléphone
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  +1 438 875 2764
                </div>
              </div>
            </a>
            <a
              href="mailto:fotiotchoffojunior@gmail.com"
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
            >
              <Mail
                className="text-indigo-600 dark:text-indigo-400"
                size={28}
              />
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Courriel
                </div>
                <div className="font-medium text-gray-900 dark:text-white break-all">
                  fotiotchoffojunior@gmail.com
                </div>
              </div>
            </a>
            <a
              href="https://github.com/PepitoJr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-indigo-500 dark:hover:border-indigo-500 hover:shadow-lg transition-all duration-300"
            >
              <Github
                className="text-indigo-600 dark:text-indigo-400"
                size={28}
              />
              <div className="text-center">
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  GitHub
                </div>
                <div className="font-medium text-gray-900 dark:text-white">
                  github.com/PepitoJr
                </div>
              </div>
            </a>
          </div>
        </section>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
            Envoyez-moi un message
          </h2>

          {/* Toast */}
          <div
            id="contact-toast"
            className="hidden fixed bottom-6 right-6 z-50 rounded-lg bg-green-600 text-white px-6 py-4 shadow-2xl font-medium"
          >
            Message envoyé avec succès
          </div>

          {/* Formulaire */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Nom
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="votre.email@exemple.com"
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Votre message..."
                rows={6}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
