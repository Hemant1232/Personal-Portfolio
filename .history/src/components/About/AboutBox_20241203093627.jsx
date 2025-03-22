import React from "react";
import { FaFire } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

const AboutBox = () => {
  return (
    <div className="w-11/12 mx-auto mt-10 flex gap-3 text-3xl justify-evenly">
      <div className="flex gap-3">
        <span className="">
          <FaFire />
        </span>
        <h3>HardWorking</h3>
      </div>

      <div className="flex gap-3">
        <span>
          <FaTrophy />
        </span>
        <h3>HardWorking</h3>
      </div>

      <div className="flex">
        <span>
          <FaMedal />
        </span>
        <h3>Problem Solver</h3>
      </div>
    </div>
  );
};

export default AboutBox;
