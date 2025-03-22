import React from "react";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className= " relative flex flex-col mx-[14%] my-[7%] ">
      <h2 className="text-4xl font-bold text-title_color mb-10">About Me</h2>
      <div className="flex flex-row gap-3">

      <img className="w-60 h-[230px]" src="https://i.ibb.co/k89WFzY/about-us-pic.png" alt="" />

      <div className="flex bg-slate-50  rounded-3xl drop-shadow-lg ">
        <div className="rela w-2 h-2 border-4 border-black"></div>
        
      </div>

      
      </div>
      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
