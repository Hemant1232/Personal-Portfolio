import React from "react";
import Data from "./Data";

const Experience = () => {
  return (
    <div>
      <h2 className="text-3">Experience</h2>
      <div>
        <div>
          {Data.map((val, id) => {
            if (val.category === "education") {
              return (
                <div>
                  <i>{val.icon}</i>
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
