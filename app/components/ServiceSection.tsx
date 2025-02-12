import React from "react";

export const ServiceSection: React.FC = () => {
  return (
    <div
      id="serviceSection"
      className="ServiceSection scroll-section w-full bg-orange-50 max-md:max-w-full pt-16 pb-8"
    >
      <div className="w-full">
        <div className="flex max-lg:flex-col gap-4 px-6 pb-4 size-full max-md:px-5 ">
          <div className="flex flex-col justify-center px-12 py-20 rounded-3xl border border-white border-solid bg-neutral-800 min-w-60 max-md:px-5 max-md:max-w-full">
            <div className="text-6xl font-semibold tracking-tight leading-[56px] text-neutral-100 max-md:max-w-full max-md:text-4xl max-md:leading-10">
              Websites That Power Your Business Growth
            </div>
            <div className="mt-12 w-full text-2xl font-medium tracking-tighter leading-tight max-w-[851px] text-neutral-100 max-md:mt-10 max-md:max-w-full">
              {[
                "For independent professionals who need a website that attracts premium clients",
                "For local businesses wanting to automate scheduling and client management",
                "For professional services looking to build trust and convert more referrals",
              ].map((text, index) => (
                <div
                  key={index}
                  className="flex flex-wrap gap-3 items-center mt-4 w-full max-md:max-w-full"
                >
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/cb327fb080370bd17424c6ae22624b5a1c8c71fe869679d3c81f94c89d06eaa2?placeholderIfAbsent=true"
                    className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                    alt="Checkmark"
                  />
                  <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
                    {text}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <ServiceTags />
        </div>
      </div>
    </div>
  );
};

const ServiceTags: React.FC = () => {
  const tags = [
    "Essential Branding",
    "UX Improvement",
    "Web Design",
    "Webflow Development",
    "Custom Code Development",
    "Site Optimization",
    "Automation",
    "Integrations",
    "+more",
  ];

  return (
    <div className="flex flex-col flex-1 shrink justify-center px-12 py-20 text-sm font-medium tracking-tight leading-none rounded-3xl border border-white border-solid basis-0 bg-neutral-800 lg:min-w-[320px] text-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex w-full min-h-[109px]" />
      <div className="flex flex-wrap gap-2 justify-center items-center self-center mt-2 max-w-full w-[294px]">
        {tags.map((tag, index) => (
          <div
            key={index}
            className="gap-2.5 self-stretch px-4 py-2 my-auto border border-solid border-stone-300 rounded-[50px]"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};
