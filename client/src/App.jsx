import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import UsePreloader from "./hooks/UsePreloader";
import PreloaderWrapper from "./components/Preloader/PreloaderWrapper";
import PageTransitionWrapper from "./components/PageTransitionWrapper";
import About from "./components/About/Aboutcomponent";
import Competitions from "./components/Competition/Competitions";
import Accomodation from "./components/Accomodations/Accomodations";
import Teams from "./components/Team/Team";
import CampusAms from "./components/CampusAmbassador/CampusAms";
import LandingPage from "./components/LandingPage/LandingPage";
import Navbar from "./components/LandingPage/Navbar";
import Sidebar from "./components/LandingPage/Sidebar";
import Menubar from "./components/LandingPage/Menubar";
import Events from "./components/Events/Events";
import Footer from "./components/Footer/Footer";
import Cursor from "./components/Cursor/Cursor";
import Sponsors from "./components/Sponsors/Sponsors";
import "./App.css";

// Layout component to wrap the common elements
const Layout = ({ children }) => (
  <>
    <Navbar />
    <Menubar />
    <div className="md:flex uxsm:hidden relative z-50">
      <Sidebar />
    </div>
    {children}
  </>
);

const App = () => {
  const { isPreloading } = UsePreloader();
  const [path, setPath] = useState(false);
  const location = useLocation();

  // Update the `path` state based on the current route
  useEffect(() => {
    if (location.pathname === "/") {
      setPath(false); // Root path: do not show footer
    } else {
      setPath(true); // Other paths: show footer
    }
  }, [location]);

  if (isPreloading) {
    return <PreloaderWrapper isPreloading={isPreloading} />;
  }

  return (
    <Layout>
      <PageTransitionWrapper>
        <Cursor />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/campus" element={<CampusAms />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/accommodation" element={<Accomodation />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/campus-ambassador" element={<CampusAms />} />
          <Route path="/events" element={<Events />} />
          <Route path="/sponsors" element={<Sponsors />} />
        </Routes>
        {path && <Footer />}
      </PageTransitionWrapper>
    </Layout>
  );
};

const RootApp = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default RootApp;
