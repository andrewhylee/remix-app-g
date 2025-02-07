import React from "react";
import { Navbar } from "./Navbar";

export const WorkSection: React.FC = () => {
  return (
    <div className="flex flex-col pr-1.5 pb-5 w-full bg-orange-50 max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        <Navbar theme="light" />
        <div className="flex overflow-hidden flex-col px-6 py-4 w-full min-h-[620px] max-md:px-5 max-md:max-w-full">
          <div className="flex flex-wrap flex-1 gap-3 size-full max-md:max-w-full">
            <div className="flex py-20 rounded-3xl border border-white border-solid bg-stone-900 min-h-[557px] min-w-60 max-md:max-w-full" />
            <div className="flex flex-1 shrink py-20 rounded-3xl border border-white border-solid basis-0 bg-stone-900 h-[557px] min-w-60 w-[584px]" />
          </div>
          <div className="self-center mt-4 text-base font-semibold tracking-tighter leading-none text-black">
            Project Name{" "}
            <span className="text-[#717681]">Custom Code / Scope</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3.5 items-center self-center mt-9">
        <div className="flex shrink-0 self-stretch my-auto rounded-full bg-stone-900 h-[18px] w-[18px]" />
        <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[18px] w-[18px]" />
        <div className="flex shrink-0 self-stretch my-auto rounded-full bg-zinc-300 h-[18px] w-[18px]" />
      </div>
    </div>
  );
};
