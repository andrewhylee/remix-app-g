import React from "react";
import { Link } from "@remix-run/react";

type ButtonProps = {
  className: string | undefined;
  link: string | undefined;
  textContent: string | undefined;
};

export const Button: React.FC<ButtonProps> = ({
  className = "",
  link = "",
  textContent = "",
}) => {
  return (
    <Link
      to={link}
      className={`flex justify-center items-center px-5 py-5 bg-black rounded-3xl text-neutral-100 text-xl ${className}`}
    >
      {textContent}
    </Link>
  );
};
