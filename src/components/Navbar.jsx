import React from "react";
import { FadeIn } from "./FadeIn";

const navlinkes = [
  {
    name: "home.",
    link: "#home",
  },
  {
    name: "projects.",
    link: "#work",
  },
  {
    name: "about.",
    link: "#about",
  },
  {
    name: "contact.",
    link: "#contact",
  },
];
function Navbar() {
  return (
    <div>
      <FadeIn>
        <div className="flex max-w-[1240px] justify-between max-sm:justify-center items-center border-primary border-2 bg-primary/20 mx-auto px-8 py-4 max-lg:mx-2 rounded-[999px] mt-6 z-50">
          <span className="headername text-lg text-primary leading-6 -translate-x-[0.01em] ">
            SUJAY BAJRACHARYA
          </span>
          <div className="navbar flex justify-end items-center gap-x-8 gap-y-8 max-md:gap-3 max-sm:hidden z-50">
            {navlinkes.map((navlink) => (
              <a
                href={navlink.link}
                className={`md:w-[120px] z-50 transition-all duration-300 ease-[ease-out] text-nav text-lg leading-6 text-center px-6 max-md:px-2 py-0 hover:text-nav-hover ${
                  navlink.link === "#home" ? "text-nav-home" : ""
                }`}
              >
                {navlink.name}
              </a>
            ))}
          </div>
        </div>

        <div className="flex w-full justify-center items-center sm:hidden z-50">
          <div className="z-50 flex justify-around items-center gap-x-8 gap-y-8 max-w-[1240px]  bg-dark px-8 py-4 rounded-full fixed bottom-5 mx-auto">
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
