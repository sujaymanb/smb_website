import React from "react";
import { FadeIn } from "./FadeIn";

const navlinkes = [
  {
    name: "home",
    link: "#home",
  },
  {
    name: "projects",
    link: "#work",
  },
  {
    name: "about",
    link: "#about",
  },
  {
    name: "contact",
    link: "#contact",
  },
];
function Navbar() {
  return (
    <div>
      <FadeIn>
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center mx-auto max-lg:mx-2 mt-6 z-50">
          <span className="leading-6 mx-6 font-typewriter text-lg text-primary">
            SUJAY BAJRACHARYA
          </span>
          <div className="flex justify-end gap-y-8 max-md:gap-3 max-sm:hidden z-50">
            {navlinkes.map((navlink) => (
              <a
                href={navlink.link}
                className={`font-typewriter text-center hover:bg-dark hover:text-back md:w-[120px] z-50 underline transition-all duration-150 ease-[ease-out] text-nav text-lg max-md:px-2 ${
                  navlink.link === "#home" ? "text-nav-home" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center items-center sm:hidden z-50">
          <div className="z-50 flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px] underline bg-back px-8 py-4 fixed bottom-5 mx-auto">
            {navlinkes.map((navlink) => (
              <a
                href={navlink.link}
                className={`md:w-[120px] transition-all duration-300 ease-[ease-out] text-nav text-lg leading-6 text-center px-6 max-md:px-2 py-0 hover:text-nav-hover ${
                  navlink.link === "#home" ? "text-nav-home" : "text-nav"
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>
      </FadeIn>
    </div>
  );
}

export default Navbar;
