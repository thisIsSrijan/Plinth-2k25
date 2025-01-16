// App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useState, useEffect } from "react";
import PreloaderWrapper from "./components/Preloader/PreloaderWrapper";
import UsePreloader from "./hooks/UsePreloader";
import About from "./components/About/About";
import Competitions from "./components/Competition/Competitions";
import Accomodation from "./components/Accomodations/Accomodations";
import Teams from './components/Team/Team';
import CampusAms from "./components/CampusAmbassador/CampusAms";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/LandingPage/Navbar";
import Aboutlnmiit from "./components/About/Aboutlnmiit";
import Aboutplinth from "./components/About/Aboutplinth";
import Sidebar from "./components/LandingPage/Sidebar";
import Menubar from "./components/LandingPage/Menubar";
import PageTransitionWrapper from './components/PageTransitionWrapper';
import './styles/PageTransitionAnimation.css';

// Layout component to wrap the common elements
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Menubar />
      <div className="md:flex uxsm:hidden">
        <Sidebar />
      </div>
      {children}
};

function App() {
  return (
    <BrowserRouter>
      <Layout>
      <PageTransitionWrapper>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/about-lnmiit" element={<Aboutlnmiit />} />
          <Route path="/about-plinth" element={<Aboutplinth />} />
          <Route path="/campus" element={<Campus />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/campus-ambassador" element={<CampusAms />} />
        </Routes>
        </PageTransitionWrapper>
      </Layout>
    </BrowserRouter>
  );
}

export default App;