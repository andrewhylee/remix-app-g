export const Navbar: React.FC = () => {
  return (
    <div className="NavBar flex flex-row items-center w-full justify-between pt-6">
      <img
        loading="lazy"
        src={"/studio_muni_logo_b.png"}
        className="object-contain shrink-0 self-stretch my-auto aspect-[5] w-[150px] sm:w-[200px]"
        alt="Logo"
      />
      <a
        href="https://calendly.com/drewhlee75/30min"
        rel="noreferrer"
        target="_blank"
        className="flex justify-center items-center px-4 py-2.5 my-auto bg-transparent rounded-[5px] border-black border-2 border-solid"
      >
        Book a call →
      </a>
    </div>
  );
};
