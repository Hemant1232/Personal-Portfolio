import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="fle">
      <a href="">
        <FaInstagram />
      </a>
      <a href="">
        <FaGithub />
      </a>
      <a href="">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialLinks;
