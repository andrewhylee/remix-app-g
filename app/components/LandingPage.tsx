import React from "react";
import { Navbar } from "./Navbar";
import { IntroSection } from "./IntroSection";
import { ServiceSection } from "./ServiceSection";
import { WorkSection } from "./WorkSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";
// import "../styles/landingPage.css";

export const LandingPage: React.FC = () => {
  return (
    <div className="scroll-container">
      <Navbar workToShowExists={false} />
      <IntroSection />
      <ServiceSection />
      <WorkSection workToShowExists={false} />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
