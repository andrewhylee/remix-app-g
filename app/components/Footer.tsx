import React from "react";
import { Navbar } from "./Navbar";

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-lime-50 max-md:max-w-full">
      <div className="w-full min-h-[700px] max-md:max-w-full">
        <Navbar theme="light" />
        <div className="flex overflow-hidden flex-col px-6 py-4 w-full min-h-[620px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-col flex-1 justify-center items-center w-full max-md:max-w-full">
            <div className="text-5xl tracking-tighter text-center text-black leading-[56px] max-md:max-w-full max-md:text-4xl max-md:leading-[52px]">
              Driven by empathy, impact, and imagination
              <br />
              Based in New York City
            </div>
            <div className="flex overflow-hidden flex-col justify-center px-1.5 py-14 mt-4 max-w-full w-[1384px]">
              <div className="flex relative flex-col items-center px-20 pt-16 pb-7 min-h-[172px] max-md:px-5 max-md:max-w-full">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/571918360d15fb776a35731e3fe40bbc3992e4bf7c74c54e0a9946af204f6b32?placeholderIfAbsent=true"
                  className="object-cover absolute inset-0 size-full"
                  alt="Background pattern"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/e7ac9e95edd518ff9bf439bfa206519e8117d090db5a591cd1401fb966cf8e67?placeholderIfAbsent=true"
                  className="object-contain aspect-[1.01] w-[75px]"
                  alt="Logo mark"
                />
              </div>
            </div>
            <div className="self-stretch mt-4 text-base font-semibold tracking-tighter leading-none text-center text-zinc-900 max-md:max-w-full">
              <span className="font-bold">studio.muni</span>{" "}
              <span className="font-normal">
                is a design and development partnership founded by two
                creatives, Lira Ha and Drew Lee
              </span>
            </div>
          </div>
          <div className="self-center mt-4 text-base font-semibold tracking-tighter leading-none text-black">
            (C) 2024 STUDIO MUNI
          </div>
        </div>
      </div>
    </div>
  );
};
