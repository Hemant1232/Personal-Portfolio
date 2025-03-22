import React from "react";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className= " relative flex flex-col mx-[14%] my-[7%] ">
      <h2 className="text-4xl font-bold text-title_color mb-10">About Me</h2>
      <div className="flex flex-row gap-3">

      <img className="w-60 h-[230px]" src="https://i.ibb.co/k89WFzY/about-us-pic.png" alt="" />

        <div className="h-5 w-7 transform rot border-1 bg-black  border-black"></div>
      <div className="flex bg-slate-50  rounded-3xl drop-shadow-lg ">
        <div className="w-[50%] mx-5 leading-8 tracking-normal my-4 text-slate-700 text-base">
          <p>
            I am eager to pursue a dynamic career in IT, leveraging my software
            development and UX design skills in challenging and innovative
            projects
          </p>
          <a href="#linkofresume"></a>
        </div>

        <div>
          <div>
            <div>
              <h3>Development</h3>
              <span>90%</span>
            </div>
            <div> Bar Chart</div>
          </div>
          <div>
            <div>
              <h3>Programming</h3>
              <span>90%</span>
            </div>
            <div> Bar Chart</div>
          </div>
          <div>
            <div>
              <h3>hitesh</h3>
              <span>90%</span>
            </div>
            <div> Bar Chart</div>
          </div>
        </div>
      </div>

      
      </div>
      {/* <AboutBox /> */}
    </section>
  );
};

export default About;
