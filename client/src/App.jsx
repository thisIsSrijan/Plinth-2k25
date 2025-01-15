import "./App.css";
import { useState, useEffect } from "react";
import PreloaderWrapper from "./components/Preloader/PreloaderWrapper";
import UsePreloader from "./hooks/UsePreloader";
import About from "./components/About/About";
import Competititons from "./components/Competition/Competitions";

import Accomodation from "./components/Accomodations/Accomodations";
import Teams from './components/Team/Team'

import CampusAms from "./components/CampusAmbassador/CampusAms";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/LandingPage/Navbar";
import Aboutlnmiit from "./components/About/Aboutlnmiit";
import Aboutplinth from "./components/About/Aboutplinth";
import Campus from "./components/About/Campus";
import Sidebar from "./components/LandingPage/Sidebar";
import Menubar from "./components/LandingPage/Menubar";

function App() {
  const { isPreloading, showContent } = UsePreloader();

  return (
    <>
      {/* <PreloaderWrapper isPreloading={isPreloading} /> */}
      <Competititons />
      {/* <CampusAms/> */}
      {/* <Navbar></Navbar> */}
      {/* <Menubar></Menubar> */}
      {/* <div className="md:flex uxsm:hidden">
        <Sidebar></Sidebar>
      </div> */}
      {/* <LandingPage /> */}
      {/* <About></About> */}
      {/* <Aboutlnmiit></Aboutlnmiit> */}
      {/* <Aboutplinth></Aboutplinth> */}
      {/* <Campus></Campus> */}
      {/* <Competititons />  */}
      <Accomodation/>
      
      <Teams/>
    </>
  );
}

export default App;
