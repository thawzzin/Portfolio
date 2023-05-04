import React from "react";
import { useState } from "react";
import "./Header.scss";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="absolute left-0 top-0 w-full h-screen">
      <header className=" absolute md:right-10 right-0 top-8 ">
        <div className="hidden md:flex md:justify-end gap-10 font-medium ">
          <a href="#home" className="nav">
            Home
          </a>
          <a href="#work" className="nav">
            Work
          </a>
          <a href="#about" className="nav">
            About Me
          </a>
          <a href="#contact" className="nav">
            Contact
          </a>
        </div>
        <div
          className="space-y-1 ml-auto md:hidden mr-5"
          onClick={() => setIsActive(!isActive)}
        >
          <div
            className={`w-5 h-[1px] bg-white transition-all duration-100 ${
              isActive ? "rotate-45 translate-y-[3px] " : ""
            }`}
          ></div>
          <div
            className={`w-5 h-[1px] bg-white ${isActive ? "hidden " : ""}`}
          ></div>
          <div
            className={`w-5 h-[1px] bg-white ${
              isActive ? "-rotate-45 -translate-y-[2px] " : ""
            }`}
          ></div>
        </div>
      </header>
      <div
        className={`${
          isActive ? "w-[60%]" : "w-0"
        } md:hidden bg-black absolute left-0 top-0 overflow-hidden h-screen z-50 transition-all duration-100`}
      >
        <div className="space-y-5 mt-10 ml-5" onClick={()=>setIsActive(!isActive)}>
          <a href="#home" className="nav block">
            Home
          </a>
          <a href="#work" className="nav block">
            Work
          </a>
          <a href="#about" className="nav block">
            About Me
          </a>
          <a href="#contact" className="nav block">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
