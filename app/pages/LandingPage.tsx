import React from "react";
import { Navbar } from "../components/Navbar";
import { IntroSection } from "../components/IntroSection";
import { Footer } from "../components/Footer";
import { Section1 } from "~/components/Section1.comp";
import { Section2 } from "~/components/Section2.comp";
import { Section3 } from "~/components/Section3.comp";
import { Section4 } from "~/components/Section4.comp";
// import "../styles/landingPage.css";

export const LandingPage: React.FC = () => {
  return (
    // <div className=" size-full bg-conic from-blue-600 to-sky-400 to-50% w-full">
    <div className="bg-gradient-to-tr from-orange-100 to-orange-200">
      <div className="scroll-container bg-orange-50 px-6 max-w-[900px] mx-auto">
        <Navbar />
        <IntroSection />
        <Section1 className="mb-36" />
        <Section2 className="mb-36 " />
        <Section3 className="flex flex-col gap-8 mb-36" />
        <Section4 className="flex flex-col gap-8 mb-36" />
        <Footer />
      </div>
    </div>
  );
};
