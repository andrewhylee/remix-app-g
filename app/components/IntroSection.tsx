import React from "react";

export const IntroSection: React.FC = () => {
  return (
    <div className="overflow-hidden px-6 pb-4 w-full min-h-[628px] max-md:px-5 max-md:max-w-full">
      <div className="px-12 py-20 w-full rounded-3xl border border-white border-solid bg-neutral-100 bg-opacity-10 max-md:px-5 max-md:max-w-full">
        <div className="text-8xl font-semibold tracking-tighter leading-[90px] text-neutral-100 max-md:max-w-full max-md:text-4xl max-md:leading-10">
          Modern Websites For Established Pros
        </div>
        <div className="mt-11 text-2xl tracking-tighter leading-7 text-neutral-100 max-md:mt-10 max-md:max-w-full">
          We help established businesses stand out with striking design and
          high-performing websites. While competitors look outdated, you'll
          become the fresh face clients remember.
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center items-center mt-5 w-full max-md:max-w-full">
        <div className="flex overflow-hidden flex-col flex-1 shrink justify-center self-stretch px-12 my-auto rounded-3xl basis-0 min-h-[73px] min-w-60 max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
            {[3, 10, 10, 10, 10].map((num, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center self-stretch my-auto w-[154px]"
              >
                <img
                  loading="lazy"
                  src={`URL_${num}`}
                  className={`object-contain max-w-full ${
                    index === 0
                      ? "aspect-[6.71] w-[154px]"
                      : "aspect-[4.39] w-[101px]"
                  }`}
                  alt={`Partner logo ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 items-start self-stretch my-auto leading-none min-w-60 text-neutral-100">
          <div className="flex flex-col justify-center items-center px-12 py-5 bg-orange-600 rounded-3xl min-h-[89px] min-w-60 max-md:px-5">
            <div className="text-base tracking-normal">
              Fixed pricing. Starts at $3,500.
            </div>
            <div className="flex gap-4 items-center mt-1 text-2xl font-semibold tracking-tight">
              <div className="self-stretch my-auto">See Pricing</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/2f2864ef0e345aeba2af16bc6eecb5c094bb41e777ed23cdbfe8f1ff751d09f6?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                alt="Pricing arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
