import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex gap-7 my-6 text-title_color text-xl  " >
      <a className=" transition-all duration-300 hover:text-hover_color " href="">
        <FaInstagram />
      </a>
      <a className=" transition-all duration-300 hover:text-hover_color " href="">
        <FaGithub />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
