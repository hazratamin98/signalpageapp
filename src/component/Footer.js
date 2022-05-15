import React from "react";

function Footer() {
  return (
    <div className="py-4 text-white  flex items-center justify-center sm:justify-start gap-4 sm:gap-0">
      <h1 className="text-sm sm:text-base sm:w-[55%] font-semibold text-right">
        CopyRight
      </h1>
      <div className="text-sm sm:text-base sm:w-[45%] font-medium  flex gap-4 sm:gap-10 sm:justify-end">
        <h1>Contact us </h1>
        <h1>Privacy Policy </h1>
      </div>
    </div>
  );
}

export default Footer;
