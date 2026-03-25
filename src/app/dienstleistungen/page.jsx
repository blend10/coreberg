import StartPage from "@/components/general/StartPage";
import React from "react";
import StrategicQuote from "@/components/services/StrategicQuote";
import AccordionServices from "@/components/services/AccordionServices";
import TrustedPartner from "@/components/home/TrustedPartner";

const page = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage />
      </div>
      <StrategicQuote />
      <AccordionServices />
      <TrustedPartner />
    </div>
  );
};

export default page;
