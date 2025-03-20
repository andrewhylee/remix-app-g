import React from "react";
import { Button } from "~/components/Button.comp";
import { Card } from "~/components/Card.comp";

type Section3Props = {
  className?: string | undefined;
};

export const Section3: React.FC<Section3Props> = ({ className = "" }) => {
  return (
    <div className={"Section3 " + className}>
      <h2>Simple, Flat-Fee Pricing</h2>
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-8">
        <Card
          className="bg-black text-white flex justify-center md:h-[755px]"
          ctaTitle="Work with Studio Muni"
          ctaLink="https://calendly.com/drewhlee75/30min"
          ctaLogo="/sun_logo.png"
          ctaText="Book a 15-min call"
          ctaSubText="No-pressure chat to explore your needs."
          ctaBottomText1="Prefer to email?"
          ctaBottomText2="hello@studiomuni.com"
        />
        <div id="pricing"></div>
        <Card className="bg-white text-black" isPassingCustomElements={true}>
          <div className="flex flex-col items-center justify-center my-10 gap-8">
            <h2 className="text-center w-6/12">Website Upgrade</h2>
            <h2 className="self-start ml-5 text-4xl font-sans tracking-normal">
              $3,500
            </h2>
            <p className="self-start ml-5 text_caption text-[var(--gray1)]">
              A fast, streamlined way to refresh your website
            </p>
            <p>-----------------------------------------------</p>
            <p className="self-start ml-5 text_body">What’s included</p>
            <ul className="self-start ml-8 list-disc text_caption">
              <li>Website Redesign & Development </li>
              <li>Up to 5 Pages</li>
              <li>Mobile Optimization </li>
              <li>SEO-Friendly Setup </li>
              <li>4-Week Delivery </li>
              <li>2 Rounds of Design Revisions</li>
              <li>Post-Launch Training Video </li>
            </ul>
            <Button
              className="ml-5 mr-5 self-stretch"
              link="mailto:drewhlee75@gmail.com"
              textContent="Get Started"
            />
            <p className="flex flex-row gap-2 text_caption underline">
              <img src="/green_plus_xs.png" alt="Show More Icon" />
              Need More? Expand Your Scope
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
