import React from "react";
import { Navbar } from "./Navbar";

export const FAQSection: React.FC = () => {
  const faqItems = [
    {
      question: "Why does it take 2 months to build a website?",
      answer:
        "Building a great website is a collaborative process. While we handle the design and development, we also rely on your input to ensure the website reflects your business effectively. This includes time for you to review designs, provide thoughtful feedback, and gather content like images or text. Taking this time ensures the final website isn't just functional and visually appealing but also aligns with your vision and goals. By working together, we can create a site that truly works for your business",
    },
    { question: "Are there any refunds?" },
    { question: "What is included in the core package?" },
    { question: "Do you offer ongoing maintenance?" },
    { question: "Can I update the website myself?" },
  ];

  return (
    <div className="w-full bg-indigo-950 max-md:max-w-full">
      <div className="w-full min-h-[700px] max-md:max-w-full">
        <Navbar theme="dark" />
        <div className="flex overflow-hidden flex-col flex-1 justify-center px-6 py-4 w-full max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap flex-1 gap-3 size-full max-md:max-w-full">
            <div className="px-12 py-20 font-semibold bg-orange-50 rounded-3xl border border-white border-solid min-w-60 w-[800px] max-md:px-5 max-md:max-w-full">
              <div className="text-6xl tracking-tight leading-none text-zinc-900 max-md:max-w-full max-md:text-4xl">
                FAQ
              </div>
              <div className="mt-11 w-full text-xl tracking-tighter leading-tight text-zinc-900 max-md:mt-10 max-md:max-w-full">
                {faqItems.map((item, index) => (
                  <React.Fragment key={index}>
                    <div className="flex gap-2.5 items-start w-full max-md:max-w-full">
                      <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center w-full basis-0 min-w-60 max-md:max-w-full">
                        <div className="gap-2.5 self-stretch py-1.5 my-auto min-w-60 rounded-[100px] w-[393px]">
                          {item.question}
                        </div>
                        <img
                          loading="lazy"
                          src={
                            index === 0
                              ? "https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/65bd605d90be3a63923c6e2cc3532c57a847559515b64353acf32f51ba41f630?placeholderIfAbsent=true"
                              : "https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/598e67e969c7cbd40e735e289b46c7206b6ee7e40efafdb1fa0e0473663002af?placeholderIfAbsent=true"
                          }
                          className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                          alt="FAQ toggle"
                        />
                      </div>
                    </div>
                    {item.answer && (
                      <div className="flex-1 shrink gap-2.5 self-stretch px-2.5 mt-2 w-full text-base font-medium tracking-tighter leading-5 text-zinc-500 max-md:max-w-full">
                        {item.answer}
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
            <div className="overflow-hidden flex-1 shrink bg-orange-600 rounded-3xl basis-24 min-w-60 max-md:max-w-full">
              <div className="flex relative flex-col items-center px-20 pt-20 pb-8 w-full min-h-[596px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/4ce71008a8d126c7a6be0768385bd698733d6043b3f4c9775487421276a8945c?placeholderIfAbsent=true"
                  className="object-cover absolute inset-0 size-full"
                  alt="Background pattern"
                />
                <div className="relative max-w-full w-[306px]">
                  <div className="w-full">
                    <div className="text-4xl font-semibold tracking-tight leading-10 text-white">
                      Book a call and see if we are a good fit
                    </div>
                    <div className="flex gap-10 justify-between items-center py-1.5 mt-6 w-full text-sm tracking-tight leading-4 rounded-[100px] text-neutral-100">
                      <div className="flex gap-2.5 items-center self-stretch my-auto">
                        <div className="flex shrink-0 self-stretch my-auto h-[39px] w-[39px]" />
                        <div className="self-stretch my-auto">
                          If you prefer to email
                          <br />
                          <span className="text-[#f5f5f5]">
                            hello@studiomuni.com
                          </span>
                        </div>
                      </div>
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/ea6e99bfc06892b25375103c380c7dc88d2b9884ef7d410641a922b9768de115?placeholderIfAbsent=true"
                        className="object-contain shrink-0 self-stretch my-auto aspect-square w-[30px]"
                        alt="Contact icon"
                      />
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/054ee8db4dc6a3d41205d52f0fc37487df25be9d9faf82681b6b214edf4c9c49?placeholderIfAbsent=true"
                    className="object-contain mt-6 max-w-full aspect-[0.6] w-[181px]"
                    alt="Decorative element"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
