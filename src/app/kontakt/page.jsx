import React from "react";
import StartPage from "@/components/general/StartPage";
import ContactSection from "@/components/kontakt/ContactSection";

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage />
      </div>
      <ContactSection />
    </div>
  );
};

export default page;
