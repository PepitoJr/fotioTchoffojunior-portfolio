"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => setMounted(true), []);

  const navLinks = [
    { href: "/#projets", label: "Projets" },
    { href: "/#competences", label: "Compétences" },
    { href: "/#contact", label: "Contact" },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/imgs/photo-moi/monLogo.png"
              alt="Logo Portfolio"
              width={65}
              height={65}
              className="object-contain"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side buttons */}
          <div className="flex items-center gap-3">
            {/* Theme toggle */}
            {mounted && (
              <button
                aria-label="Basculer le thème"
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              aria-label="Menu mobile"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
