import React from "react";
import { Accordion, AccordionItem as Item } from "@szhsin/react-accordion";
import "../styles/Accordion.css";

type Section4Props = {
  className: string | undefined;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
const AccordionItem = ({
  header,
  ...rest
}: {
  children: string;
  header: string;
  initialEntered?: true;
}) => (
  <Item
    {...rest}
    header={({ state: { isEnter } }) => (
      <>
        {header}
        <img
          className={`ml-auto transition-transform duration-200 ease-out ${
            isEnter && "rotate-180"
          }`}
          src={"/chevron-down.svg"}
          alt="Chevron"
        />
      </>
    )}
    className="border-b"
    buttonProps={{
      className: ({ isEnter }) =>
        `flex w-full p-4 text-left hover:bg-slate-100 ${
          isEnter && "bg-orange-100"
        }`,
    }}
    contentProps={{
      className: "transition-height duration-200 ease-out",
    }}
    panelProps={{ className: "p-4" }}
  />
);

export const Section4: React.FC<Section4Props> = ({ className = "" }) => {
  return (
    <div className={"Section4 " + className}>
      <h2 className="text-center">Frequently Asked Questions</h2>

      <div className="mx-2 my-4 border-t">
        {/* `transitionTimeout` prop should be equal to the transition duration in CSS */}
        <Accordion transition transitionTimeout={200} allowMultiple>
          <AccordionItem
            header="Is 5 pages enough for my website?"
            initialEntered
          >
            For the purpose of starting to build your business&apos; online
            presence, we believe that this is a good starting place. However,
            this can also change depending on the needs of your business.
          </AccordionItem>

          <AccordionItem header="Why do you only do redesigns instead of building from scratch?">
            A lot of our clients come to us looking to improve their existing
            websites. Redesigns are often more cost-effective and allow us to
            leverage the existing structure, content, and functionality of the
            site, making the process more efficient.
          </AccordionItem>

          <AccordionItem header="What programs do you design in?">
            We usually present our desings in Figma, but it can be implemented
            to any content that your business might have whether that is Google
            Slides, Microsoft Powerpoint or a PDF.
          </AccordionItem>

          <AccordionItem header="What platform will my website be built on?">
            We use a variety of technologies, which may change based on the
            business requirements. Some exmaple technologies include (but not
            limited to) Shopify, Wix, Github, Django, Episerver, Webflow,
            Framer.io, etc.
          </AccordionItem>

          <AccordionItem header="Are there any refunds if I don’t like the service?">
            We&apos;ll state the terms and conditions on the initial contract to
            minimize any miscommunications. Please refer to that contract as the
            source of truth.
          </AccordionItem>

          <AccordionItem header="What are the payment terms?">
            We&apos;ll state the terms and conditions on the initial contract to
            minimize any miscommunications. Please refer to that contract as the
            source of truth.
          </AccordionItem>

          <AccordionItem header="Will I be able to edit my website after launch?">
            We can set up an on-going plan on how we can provide support to make
            sure the website is properly maintained.
          </AccordionItem>

          <AccordionItem header="What happens if I need help after launch?">
            We can set up an on-going plan on how we can provide support to make
            sure the website is properly maintained.
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};
