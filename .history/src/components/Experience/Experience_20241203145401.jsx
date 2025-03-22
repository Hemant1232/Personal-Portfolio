import React from "react";
import Data from "./Data";
import { PiGraduationCapLight } from "react-icons/pi";

const Experience = () => {
  return (
    <div className=" relative flex flex-col  mt-44 mx-[14%] my-[7%]">
      <h2 className="text-4xl font-bold text-title_color mb-10">Experience</h2>
      <div>
        <div className=" bg-[#fff] shadow-xl rounded-2xl m-auto px-4 py-8 w-11/12">
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <div className=" relative  flex items-start gap-3">
                  <div>
                  <PiGraduationCapLight className=" text-red-600 text-3xl mt-1 " />
                  <div className=" min-h-16 ml-3 border-l-2 m-auto border-red-400 "></div>
                  </div>

                  <div>
                    <span className="text-sm text-slate-600 font-medium">{val.year}</span>
                    <h3 className="text-xl font-semibold">{val.title}</h3>
                    <p className="text-sm text-slate-600 font-medium">{val.desc}</p>
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
