import React from "react";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className=" relative flex flex-col mx-[14%] my-[7%] ">
      <h2 className="text-4xl font-bold text-title_color mb-10">About Me</h2>
      <div className="flex flex-row gap-3 mb-8">
        <img
          className="w-60 h-[230px]"
          src="https://i.ibb.co/k89WFzY/about-us-pic.png"
          alt=""
        />

        <div className="h-5 w-7  transform rotate-45 bg-[#fff] shadow-xl translate-x-[22px] translate-y-6 border-1  "></div>
        <div className="flex bg-[#fff] shadow-lg rounded-3xl   ">
          <div className="relative flex flex-col justify-start gap-4 w-[50%] mx-5 leading-8 tracking-normal my-4 text-slate-700 text-base">
            <p>
              I am eager to pursue a dynamic career in IT, leveraging my
              software development and UX design skills in challenging and
              innovative projects.
            </p>
            <a
            target=""
              href="https://drive.google.com/file/d/1yndHSlCbeA5KDsaZ7A8KcYh2nbyzJFz-/view?usp=drive_link"
              className="bg-first_color w-fit text-white font-semibold px-6 py-1 rounded-full"
              download={"Hemant's Resume"}
            >
              Download Resume
            </a>
          </div>

          <div className="w-[40%] flex flex-col gap-3 m-3 ">
            <div>
              <div>
                <h3>Development</h3>
                <span>90%</span>
              </div>
              <div className="h-[7px] bg-[#f1f1f1] rounded-[0.25rem]">
                <div className=" h-[7px] block bg-[#FFD15C]  w-[90%] rounded-[0.25rem]"></div>
              </div>
            </div>
            <div>
              <div>
                <h3>Programming</h3>
                <span>80%</span>
              </div>
              <div className="h-[7px] bg-[#f1f1f1] rounded-[0.25rem]">
                <div className=" h-[7px] block bg-[#FF4C60]  w-[80%] rounded-[0.25rem]"></div>
              </div>
            </div>
            <div>
              <div>
                <h3>Java</h3>
                <span>70%</span>
              </div>
              <div className="h-[7px] bg-[#f1f1f1] rounded-[0.25rem]">
                <div className=" h-[7px] block bg-[#6C6CC7]  w-[70%] rounded-[0.25rem]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
