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
  title: "Coreberg - Strategische Personalgewinnung",
  description: "Exzellente Personalberatung für nachhaltigen Unternehmenserfolg.",
  icons: {
    icon: "/images/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-[#0A162C] selection:text-white">
        <main className="flex-grow">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

