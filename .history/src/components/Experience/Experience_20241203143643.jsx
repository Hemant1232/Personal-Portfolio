import React from "react";
import Data from "./Data";
import { PiGraduationCapLight } from "react-icons/pi";

const Experience = () => {
  return (
    <div className=" relative flex flex-col border-2 border-black mx-[14%] my-[7%]">
      <h2 className="text-4xl font-bold text-title_color mb-10">Experience</h2>
      <div>
        <div clas>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <div>
                  <PiGraduationCapLight/>
                  <span>{val.year}</span>
                  <h3>{val.title}</h3>
                  <p>{val.desc}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Experience;
