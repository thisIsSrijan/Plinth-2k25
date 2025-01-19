import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadingPercentage(100);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container">
      <div id="loader">
        <div id="title" className="flexi">
          <p className="loading-text">PLINTH&#39;25 LOADING</p>
          <p className="loading-number">%</p>
        </div>
        <div id="loading-bar-border">
          <div className="loading-bar"></div>
        </div>
        <div id="warning">
          <div className="warning-text">
            <span className="exclamation">!</span>
            <span>CAUTION, Do not turn off.</span>
          </div>
          <div id="line-cascates"></div>
        </div>
      </div>
    </div>
  );
}

export default Preloader;
