import React from "react";
import Sidebar from "./components/Sidebar/SideBar";
import Home from "./components/Introduction/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Recent Works/Projects";

const App = () => {
  return (
    <>
    <div></div>
      {/* <Sidebar /> */}

      <main className=" absolute top-5 r-52 border-4 border-red-800">
      <Home />
      <About />
      <Experience />
      <Projects />
      </main>
    </>
  );
};

export default App;
