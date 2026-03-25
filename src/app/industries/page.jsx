import StartPage from "@/components/general/StartPage";
import React from "react";
import VakanzenSection from "@/components/home/Vakanzen";
import StrategicQuote from "@/components/services/StrategicQuote";
import StackingCards from "@/components/industries/StackingCards";

const page = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center min-h-[40vh] p-3">
        <StartPage />
      </div>
      <VakanzenSection />
      <StackingCards />
      <StrategicQuote />
    </div>
  );
};

export default page;
