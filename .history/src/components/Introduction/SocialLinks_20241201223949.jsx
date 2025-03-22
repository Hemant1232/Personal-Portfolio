import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

const SocialLinks = () => {
  return (
    <div className="flex space-x-4"> {/* Adds space between the icons */}
      <a href="https://www.instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white hover:text-gray-400" />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-white hover:text-gray-400" />
      </a>
      <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white hover:text-gray-400" />
      </a>
    </div>
  );
};

export default SocialLinks;
