import React from "react";
import { FaFire } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const AboutBox = () => {
  return (
    <div>
      <div className="f">
        <span>
          <FaFire />
        </span>
        <h3>HardWorking</h3>
      </div>

      <div>
        <span>
          <FaTrophy />
        </span>
        <h3>HardWorking</h3>
      </div>

      <div>
        <span>
          <FaMedal />
        </span>
        <h3>Problem Solver</h3>
      </div>
    </div>
  );
};

export default AboutBox;
