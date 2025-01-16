import React, { useEffect, useRef } from 'react';
import '../styles/PageTransitionAnimation.css'; 
const PageTransitionAnimation = () => {
  const matrixRef = useRef(null);

  useEffect(() => {
    if (matrixRef.current) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
      for (let i = 0; i < 50; i++) {
        const column = document.createElement("div");
        column.className = "matrix-column";
        column.style.left = `${i * 20}px`;
        column.style.animationDuration = `${Math.random() * 2 + 1}s`;

        let content = "";
        for (let j = 0; j < 50; j++) {
          content += characters[Math.floor(Math.random() * characters.length)] + "<br>";
        }
        column.innerHTML = content;
        matrixRef.current.appendChild(column);
      }
    }

    const updateStatus = () => {
      const dots = ["", ".", "..", "..."];
      let dotIndex = 0;

      const interval = setInterval(() => {
        const progressText = document.querySelector(".progress-text");
        if (progressText) {
          progressText.textContent = `QUANTUM CORE INITIALIZATION${dots[dotIndex]}`;
          dotIndex = (dotIndex + 1) % dots.length;
        }
      }, 500);

      return () => clearInterval(interval);
    };

    const cleanup = updateStatus();
    return cleanup;
  }, []);

  return (
    <div className="loader-container">
      <div className="matrix-bg" ref={matrixRef}></div>
      <div className="hexagon-container">
        <div className="hexagon"></div>
      </div>
      <div className="hologram"></div>
      <div className="loader-wrapper">
        <div className="data-stream" style={{ left: '-100px', animationDelay: '0s' }}></div>
        <div className="data-stream" style={{ left: '100px', animationDelay: '1s' }}></div>
        <div className="data-stream" style={{ right: '-100px', animationDelay: '0.5s' }}></div>
        <div className="status-text status-left">
          {'> INITIALIZING SYSTEMS'}<br />
          {'> SCANNING NETWORK'}<br />
          {'> ANALYZING DATA'}<br />
          {'> QUANTUM SYNC: ACTIVE'}
        </div>
        <div className="status-text status-right">
          {'STATUS: PROCESSING'}<br />
          {'BUFFER: 87%'}<br />
          {'UPLINK: STABLE'}<br />
          {'SECURITY: ENCRYPTED'}
        </div>
        <div className="scanner"></div>
        <svg width="100%" height="100%" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
          <circle className="circle outer" cx="50" cy="50" r="45" />
          <circle className="circle middle" cx="50" cy="50" r="35" />
          <circle className="circle inner" cx="50" cy="50" r="25" />
          <path className="circle outer" d="M10,50 L90,50" style={{ opacity: 0.3 }} />
          <path className="circle outer" d="M50,10 L50,90" style={{ opacity: 0.3 }} />
        </svg>
        <div className="progress-text">
          QUANTUM CORE INITIALIZATION...
        </div>
      </div>
    </div>
  );
};

export default PageTransitionAnimation;

