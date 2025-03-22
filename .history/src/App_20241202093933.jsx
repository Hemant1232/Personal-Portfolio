import React from "react";
import Sidebar from "./components/Sidebar/SideBar";
import Home from "./components/Introduction/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Recent Works/Projects";

const App = () => {
  return (
    <>
      <Sidebar />

      <Home />
      <About />
      <Experience />
      <Projects />
    </>
  );
};

export default App;
