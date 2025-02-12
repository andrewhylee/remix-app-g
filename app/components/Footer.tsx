export const Footer: React.FC = () => {
  return (
    <div className="Footer scroll-section w-full bg-lime-50 max-md:max-w-full">
      <div className="w-full min-h-[700px] max-md:max-w-full">
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
                  src="/studio_muni_big_logo_black.png"
                  className="object-cover inset-0 size-full"
                  alt="Background pattern"
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
