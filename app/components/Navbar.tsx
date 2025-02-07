import React from "react";

interface NavbarProps {
  theme?: "light" | "dark";
}

export const Navbar: React.FC<NavbarProps> = ({ theme = "light" }) => {
  const textColor = theme === "dark" ? "text-neutral-100" : "text-stone-900";
  const logoSrc =
    theme === "dark"
      ? "https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/256d511106efc1fe1951d5f4f5fef5b92c8e78a770f5d2a6b675274318299e14?placeholderIfAbsent=true"
      : "https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/2f22c2a3286c781a0906f524da2d70f5189a6087e9583a0f6fa4ca0579230630?placeholderIfAbsent=true";

  return (
    <div
      className={`flex overflow-hidden justify-center items-start px-6 w-full text-base font-semibold whitespace-nowrap ${textColor} max-md:px-5 max-md:max-w-full`}
    >
      <div className="flex flex-1 shrink justify-center items-center w-full basis-0 min-w-60 max-md:max-w-full">
        <div className="flex flex-wrap flex-1 shrink gap-10 justify-between items-center self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
          {theme === "dark" ? (
            <img
              loading="lazy"
              src={logoSrc}
              className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[200px]"
              alt="Logo"
            />
          ) : (
            <div className="flex overflow-hidden flex-col justify-center self-stretch px-0.5 py-2 my-auto w-[200px]">
              <div className="flex relative flex-col items-center px-5 pt-2.5 pb-1 aspect-[7.88] w-[197px] max-md:px-5">
                <img
                  loading="lazy"
                  src={logoSrc}
                  className="object-cover absolute inset-0 size-full"
                  alt="Logo"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/97f43116d8f13ca03711c1ddce3d81c6f1dc78f89708bd0e66736cbe8a3ee8d7?placeholderIfAbsent=true"
                  className="object-contain aspect-square w-[11px]"
                  alt="Logo detail"
                />
              </div>
            </div>
          )}
          <div className="flex overflow-hidden gap-8 items-center self-stretch my-auto min-w-60 max-md:max-w-full">
            <div className="self-stretch px-3 py-6 my-auto">Work</div>
            <div className="self-stretch px-3 py-6 my-auto">Service</div>
            <div className="self-stretch px-3 py-6 my-auto">Pricing</div>
            <div className="flex gap-3 justify-center items-center self-stretch px-6 py-2.5 my-auto leading-snug text-white bg-orange-600 rounded-[50px] max-md:px-5">
              <div className="self-stretch my-auto">Contact</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/fc31c2428ae7bae3c35d11dfe315fd92c42095f3ed5138d94e9f0da4a61cf044?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Contact icon"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
