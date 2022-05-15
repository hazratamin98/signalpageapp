import React from "react";
import Logo from "../image/logo.svg";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-4 ">
      <img className="max-w-full w-[80px] sm:w-auto" src={Logo} alt="..." />
      <button className="border border-white rounded text-white text-base font-medium py-1 px-2">
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
