import React from "react";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className= " relative flex flex-col mx-[14%] my-[7%] border-2 border-red-500">
      <h2 className="text-4xl font-bold text-title_color mb-10">About Me</h2>
      <div className="flex flex-row gap-3">

      <img className="w-60 h-[230px]" src="https://i.ibb.co/k89WFzY/about-us-pic.png" alt="" />

      <div className="flex border-2 bg-slate-50 border-black rounded-2xl">
        <div className="w-[50%] mx-2 my-4 text-">
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
