import React from "react";

const ScrollDown = () => {
  return (
    <div className="absolute bottom-10 l-0 w-full">
      <a className="flex flex-col" href="#about">
        <span>Scroll Down</span>
        <span className="mouse relative block w-[1.25rem] h-[1.6rem] mx-auto mt-[0.75rem] border-2 border-[#454360] rounded-[1rem]">
  <span className="wheel absolute top-[0.5rem] left-[50%] w-[0.25rem] h-[0.25rem] bg-[var(--title-color)] rounded-full transform -translate-x-1/2 animate-ani-mouse"></span>
</span>

      </a>
    </div>
  );
};

export default ScrollDown;
