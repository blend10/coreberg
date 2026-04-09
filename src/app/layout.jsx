import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/general/Footer";
import ScrollToTop from "@/components/general/ScrollToTop";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title:
    "COREBERG | Schweizer Personalberatung für Kader und Schlüsselpositionen | Recruitment Excellence | Fachspezialisten und Führungskräfte für Ihr Unternehmen",
  description:
    "COREBERG ist Ihre spezialisierte Personalberatung in der Schweiz für anspruchsvolle Kader und Schlüsselpositionen. Wir verbinden Unternehmen mit ausgewählten Persönlichkeiten, diskret, effizient und mit klarem Qualitätsanspruch. Fokus auf nachhaltige Besetzungen, direkte Ansprache und ein belastbares Netzwerk auf Entscheider Ebene.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col font-sans selection:bg-[#0A162C] selection:text-white"
        suppressHydrationWarning
      >
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
