import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./composants/Navbar";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio – Junior Fotio Tchoffo",
  description:
    "Développeur Web & Mobile. Découvrez mes compétences, mes projets et contactez-moi pour collaborer.",
  metadataBase: new URL("https://example.com"),
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/imgs/photo-moi/monLogo.png",
  },
  openGraph: {
    title: "Portfolio – Junior Fotio Tchoffo",
    description:
      "Développeur Web & Mobile. Découvrez mes compétences, mes projets et contactez-moi pour collaborer.",
    url: "https://example.com",
    siteName: "Portfolio – Junior Fotio Tchoffo",
    images: [
      { url: "/imgs/photo-projets/heroQuizz.png", width: 1200, height: 630, alt: "Aperçu Portfolio" },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio – Junior Fotio Tchoffo",
    description:
      "Développeur Web & Mobile. Découvrez mes compétences, mes projets et contactez-moi pour collaborer.",
    images: ["/imgs/photo-projets/heroQuizz.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
