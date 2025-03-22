import React from "react";
import Sidebar from "./components/Sidebar/SideBar";
import Home from "./components/Introduction/Home";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Recent Works/Projects";

const App = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div >
        <Sidebar />
      </div>

      {/* Main Content */}
      <main className=" bg-body_color flex-1 overflow-y-auto">
        <Home />
        <About />
        <Experience />
        <Projects />
      </main>
    </div>
  );
};

export default App;
