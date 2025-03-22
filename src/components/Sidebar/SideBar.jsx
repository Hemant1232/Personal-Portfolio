import React, { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { GoTrophy } from "react-icons/go";
import { BsSend } from "react-icons/bs";

const Sidebar = () => {
  const [toggle, showMenu] = useState(false);
  return (
    <>
      <aside className="fixed left-0 w-[110px] bg-body_color top-0 min-h-screen flex flex-col border-r-[1px] justify-between p-9 m-0" >
        <a href="#home" >
          <img src="https://i.ibb.co/w7NMgzw/User-Image.jpg" className="rounded-full" width={25} height={25} alt="sideLogo" />
        </a>

        <nav>
          <div className="flex flex-col text-2xl gap-4">
            <a className="   transition-all duration-300 hover:text-hover_color" href="#home">
               <IoHomeOutline/>
            </a>
            <a className="  transition-all duration-300 hover:text-hover_color" href="#about">
               <IoPersonOutline/>
            </a>
            <a className=" transition-all duration-300 hover:text-hover_color" href="#experience">
               <PiGraduationCap/>
            </a>
            <a className=" transition-all duration-300 hover:text-hover_color" href="#projects">
               <GoTrophy/>
            </a>
            <a className=" transition-all duration-300 hover:text-hover_color" href="#contact-us">
               <BsSend/>
            </a>
          </div>
        </nav>

        <div className="text-[hsl(245,15%,65%)] text-[0.875rem] transform rotate-180 writing-mode-vertical-rl">
          <span className="copyright">&copy; Hemant Tomar </span>
          <span className="copyright">&copy; 2023 - 2025.</span>
        </div>
      </aside>

      <div
        className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"}
        onClick={() => showMenu(!toggle)}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
