import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo González | Consultoría de Liderazgo Ético",
  description:
    "Consultor de liderazgo ético para personas y organizaciones. Estrategias de alto impacto para quienes lideran el futuro.",
  openGraph: {
    title: "Pablo González | Consultoría de Liderazgo Ético",
    description:
      "Estrategias de alto impacto para líderes que buscan transformación auténtica.",
    url: "https://pablomgonzalez.com",
    siteName: "Pablo González",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${manrope.variable}`}>
      <head>
        {/* Material Symbols */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-display antialiased">{children}</body>
    </html>
  );
}
