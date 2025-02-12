import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";

type NavbarProps = {
  workToShowExists: boolean;
};

export const Navbar: React.FC<NavbarProps> = ({ workToShowExists = false }) => {
  const [logoSrc, setLogoSrc] = useState<string>("/studio_muni_logo_w.png"); // 0 = "dark" | 1 = "light"
  const [textColor, setTextColor] = useState<string>("text-neutral-100");
  const [bg, setBg] = useState<string>("bg-transparent");

  useEffect(() => {
    const a = document.getElementsByClassName("NavBar")[0];
    const b = document.getElementsByClassName("IntroSection")[0];
    const handleScroll = () => {
      const isInDarkIntroSection =
        window.scrollY > b.clientHeight - a.clientHeight;
      if (isInDarkIntroSection) {
        setLogoSrc("/studio_muni_logo_b.png");
        setTextColor("text-neutral-900");
        setBg("bg-orange-50");
      } else {
        setLogoSrc("/studio_muni_logo_w.png");
        setTextColor("text-neutral-100");
        setBg("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`NavBar flex overflow-hidden justify-center items-start  w-full text-base font-semibold whitespace-nowrap ${textColor} pt-4 px-5 md:px-6 ${bg} fixed`}
    >
      <div className="flex flex-col md:flex-row flex-1 shrink justify-center items-center w-full basis-0">
        <div className="flex flex-wrap flex-1 shrink justify-between items-center self-stretch my-auto w-full basis-0 ">
          <img
            loading="lazy"
            src={logoSrc}
            className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[200px] mr-8"
            alt="Logo"
          />
          <div className="flex overflow-hidden gap-8 items-center self-stretch my-auto min-w-60">
            {workToShowExists && (
              <Link
                className="self-stretch px-3 py-6 my-auto"
                to="#workSection"
              >
                Work
              </Link>
            )}
            <Link
              to="#serviceSection"
              className="self-stretch px-3 py-6 my-auto"
            >
              Service
            </Link>
            <Link
              to="#pricingSection"
              className="self-stretch px-3 py-6 my-auto"
            >
              Pricing
            </Link>
            <Link
              to="mailto:drewhlee75@gmail.com"
              className="flex gap-3 justify-center items-center self-stretch px-6 py-2.5 my-auto leading-snug text-white bg-orange-600 rounded-[50px] max-md:px-5"
            >
              <div className="self-stretch my-auto">Contact</div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/58476e87985644dea27ee0e2029622cf/fc31c2428ae7bae3c35d11dfe315fd92c42095f3ed5138d94e9f0da4a61cf044?placeholderIfAbsent=true"
                className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
                alt="Contact icon"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
