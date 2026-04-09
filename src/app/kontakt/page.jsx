import React from "react";
import ContactSection from "@/components/kontakt/ContactSection";
import Maps from "@/components/kontakt/Maps";
import StartPage2 from "@/components/kontakt/StartPage2";

export const metadata = {
  title: "Kontakt | COREBERG",
  description: "Nehmen Sie Kontakt mit uns auf für Ihre Personal- oder Karriereanliegen.",
};

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage2 />
      </div>
      <ContactSection />
      <Maps />
    </div>
  );
};

export default page;
