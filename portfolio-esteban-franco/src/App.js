import React from "react";
import Navbar from "./components/Navbar"
import Hero from "./components/Hero";

function App() {
  return (
    <div className="h-screen w-screen bg-white text-black dark:bg-[#03001C] dark:text-white">
      <Navbar/>
      <Hero/>
    </div>
  );
}

export default App;

