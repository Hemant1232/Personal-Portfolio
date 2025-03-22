import React from "react";
import Data from "./Data";

const Projects = () => {
  return (
    <div id="projects" className="w-9/12  mx-auto flex pt-28 flex-col gap-10">
      <h2 className="text-4xl mb-3 font-bold">Projects</h2>
      <div className="grid  grid-cols-3 gap-6 p-4">
        {Data.map((ele, idx) => (
          <div
            key={idx}
            className="bg-white shadow-md rounded-2xl overflow-hidden p-4 transition-transform transform hover:scale-110"
          >
            <div>
              <img
                className="w-full h-48 object-cover rounded-2xl"
                src={ele.Image}
                alt={ele.title}
              />
              <div className="mt-2">
                <span className="block text-sm text-gray-500">
                  {ele.category}
                </span>
                <h3 className="text-lg font-semibold mt-1">{ele.title}</h3>
              </div>
            </div>
            <div className="flex justify-between">
              <a
                href={ele.githubLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-block mt-3 mx-2 text-base text-blue-500 hover:underline"
              >
                View on GitHub
              </a>

              <a target="blank" href={ele.LiveDemo}
              target="_blank" rel="noopener noreferrer"
              className="inline-block mt-3 mx-2 text-blue-500 hover:underline"
              >
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
