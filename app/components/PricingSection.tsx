export const PricingSection: React.FC = () => {
  return (
    <div
      id="pricingSection"
      className="PricingSection scroll-section w-full bg-indigo-950 pt-4 pb-1"
    >
      <div className="flex max-xl:flex-col flex-1 justify-center px-6 py-4 w-full max-md:px-5 gap-3">
        <TimeRespectSection />
        <PricingDetailsSection />
      </div>
    </div>
  );
};

const TimeRespectSection: React.FC = () => {
  const features = [
    "Comprehensive onboarding questionnaire",
    "Two meetings max: Kickoff + Pre-launch",
    "Project board for feedback and status",
    "Training video for post-launch",
  ];

  return (
    <div className="flex flex-col px-12 py-20 bg-orange-50 rounded-3xl border border-white border-solid min-w-60 max-md:px-5 max-md:max-w-full">
      <div className="max-w-full flex-start text-6xl font-semibold tracking-tight leading-none text-zinc-900  max-md:max-w-full max-md:text-4xl">
        We Respect Your Time
      </div>
      <div className="self-stretch mt-11 w-full text-2xl font-medium tracking-tighter leading-tight text-zinc-900 max-md:mt-10 max-md:max-w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-wrap gap-3 items-center mt-4 w-full max-md:max-w-full"
          >
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/e662ef444926833c95fcf9e96f07c728bbecaa1e73b850fd92d7713f0a06a646?placeholderIfAbsent=true"
              className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
              alt="Feature check"
            />
            <div className="flex-1 shrink self-stretch my-auto basis-0 max-md:max-w-full">
              {feature}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mt-11 w-36 max-w-full min-h-[145px] max-md:mt-10" />
    </div>
  );
};

const PricingDetailsSection: React.FC = () => {
  const pricingOptions = [
    {
      type: "Website",
      name: "Core (3-4 pages)",
      duration: "2 MO",
      price: "$3,500 ($1,750/month)",
      variant: "orange",
      features: [
        "Basic brand styling and typography",
        "1 round of design revision",
        "Web development in Webflow or custom coding",
        "Basic contact forms and email setup",
        "Mobile-responsive design",
        "SEO fundamentals and analytics",
      ],
    },
    {
      type: "Website",
      name: "Growth (up to 7 pages)",
      duration: "2 MO",
      price: "$5,500 ($2,750/month)",
      variant: "orange",
    },
    {
      type: "Add-on",
      name: "Copywriting Improvement",
      price: "$600",
      variant: "indigo",
    },
    {
      type: "Add-on",
      name: "Advanced Forms & Automation",
      price: "$600",
      variant: "indigo",
    },
    {
      type: "Add-on",
      name: "Booking & Calendar Integration",
      price: "$600",
      variant: "indigo",
    },
  ];

  return (
    <div className="flex-1 shrink px-12 py-20 bg-orange-50 rounded-3xl border border-white border-solid basis-0 min-w-[40rem] max-md:px-5 max-md:max-w-full">
      <div className="text-6xl font-semibold tracking-tight leading-none text-zinc-900 max-md:max-w-full max-md:text-4xl">
        Clear Pricing, Exceptional Results
      </div>
      <div className="mt-11 w-full max-md:mt-10 max-md:max-w-full">
        {pricingOptions.map((option, index) => (
          <div key={index} className="flex flex-col w-full max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start w-full text-base font-semibold tracking-tighter leading-tight max-md:max-w-full">
              <div className="flex gap-2 items-start min-w-60">
                <div
                  className={`gap-2.5 self-stretch px-3 py-1.5 whitespace-nowrap ${
                    option.variant === "orange"
                      ? "bg-orange-600"
                      : "bg-indigo-950"
                  } rounded-[100px] text-neutral-100`}
                >
                  {option.type}
                </div>
                <div className="gap-2.5 self-stretch px-3 py-1.5 bg-orange-300 rounded-[100px] text-stone-900">
                  {option.name}
                </div>
                {option.duration && (
                  <div className="gap-2.5 self-stretch px-3 py-1.5 font-medium border border-orange-300 border-solid rounded-[100px] text-zinc-500">
                    {option.duration}
                  </div>
                )}
              </div>
              <div className="flex gap-3 items-center text-zinc-900">
                <div className="gap-2.5 self-stretch py-1.5 my-auto rounded-[100px]">
                  {option.price}
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/199a943f64589fc3a226414875ff6282d9f890fa8b6afd55510bd030db658805?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
                  alt="Price info"
                />
              </div>
            </div>
            {option.features && (
              <div className="gap-2.5 self-start p-2.5 mt-2 text-sm tracking-tight leading-5 text-black">
                {option.features.map((feature, idx) => (
                  <div key={idx}>{feature}</div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
