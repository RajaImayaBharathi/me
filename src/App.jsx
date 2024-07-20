import React from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import HomePage from "./pages/HomePage";
import Experience from "./pages/Experience";
import Socialicons from "./Components/Socialicons";
import AboutPage from "./pages/AboutPage";
import AchivementPage from "./pages/AchivementPage";
import Project from "./pages/Project";
import Contact from "./pages/Contact";


function App() {
  

  return (
    <React.Fragment>
      <div className="flex flex-col h-screen select-none">
        <div className="bg-mainDark sticky top-0" >
          <NavBar/>
        </div>
        <div className="mainContentSection flex flex-col justify-between items-center ">
          <div className="px-8 max-w-[1580px] space-y-40">
            <HomePage/>
            <AboutPage/>
            <Experience/>
            <Project/>
            <AchivementPage/>
          </div>
        </div>
        <Contact/>
        <Socialicons className="BottomSocailIcons"/>
      </div>
    </React.Fragment>
  );
}

export default App;
