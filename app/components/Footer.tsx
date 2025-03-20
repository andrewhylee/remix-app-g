export const Footer: React.FC = () => {
  return (
    <div className="Footer flex flex-col scroll-section w-full gap-14">
      <div className="text-3xl tracking-tighter text-center leading-tight italic mx-2">
        Designed & developed with clarity, empathy, and impact—crafted in NYC
      </div>
      <div className="flex flex-col self-center px-5 max-w-xl">
        <img
          loading="lazy"
          src="/studio_muni_big_logo_black.png"
          className="object-cover inset-0 size-full"
          alt="Studio Muni Logo"
        />
      </div>
      <div className="text-center text-base tracking-tighter pb-14">
        (C) 2025 STUDIO MUNI
      </div>
    </div>
  );
};
