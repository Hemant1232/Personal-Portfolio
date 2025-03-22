import React from "react";
import Data from "./Data";
import { PiGraduationCapLight } from "react-icons/pi";

const Experience = () => {
  return (
    <div className=" relative flex flex-col border-2 mt-44 border-black mx-[14%] my-[7%]">
      <h2 className="text-4xl font-bold text-title_color mb-10">Experience</h2>
      <div>
        <div className="border-2  border-red-200 m-auto px-4 py-8 w-fit">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <div className="flex items-start gap-3">
                  <div>
                  <PiGraduationCapLight className="text-3xl mt-1 " />
                  <span className="h-32 border-l-2 bord "></span>
                  </div>

                  <div>
                    <span className="text-sm">{val.year}</span>
                    <h3 className="text-xl font-semibold">{val.title}</h3>
                    <p className="text-sm">{val.desc}</p>
                  </div>
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
