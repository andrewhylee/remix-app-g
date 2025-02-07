import React from "react";
import { Navbar } from "./Navbar";
import { IntroSection } from "./IntroSection";
import { ServiceSection } from "./ServiceSection";
import { WorkSection } from "./WorkSection";
import { PricingSection } from "./PricingSection";
import { FAQSection } from "./FAQSection";
import { Footer } from "./Footer";

export const LandingPage: React.FC = () => {
  return (
    <div>
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <Navbar theme="dark" />
          <IntroSection />
        </div>
      </div>
      <ServiceSection />
      <WorkSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </div>
  );
};
