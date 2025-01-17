import { useEffect, useRef, useState } from "react";
import "../styles/PageTransitionAnimation.css";

const PageTransitionAnimation = () => {
  const matrixRef = useRef(null);
  const [randomFact, setRandomFact] = useState("");

  const techFacts = [
"Tim Berners-Lee's first website is still online.",
"Email predates the World Wide Web.",
"The first 1GB hard drive weighed 500 pounds.",
"There are 1.5 billion websites today.",
"The term 'bug' came from a moth in a computer.",
"90% of data was created in two years.",
"The first virus, Brain, appeared in 1986.",
"Archie, the first search engine, debuted in 1990."
  ];

  useEffect(() => {
    // Pick a random tech fact
    const randomIndex = Math.floor(Math.random() * techFacts.length);
    const fact = techFacts[randomIndex];
    setRandomFact(fact);

    // Matrix animation setup
    if (matrixRef.current) {
      const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*";
      for (let i = 0; i < 500; i++) {
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

    // Update status with random fact and dots
    const updateStatus = (randomFact) => {
      const dots = ["", ".", "..", "..."];
      let dotIndex = 0;

      const interval = setInterval(() => {
        const progressText = document.querySelector(".progress-text");
        if (progressText) {
          progressText.textContent = `${randomFact}`;
          dotIndex = (dotIndex + 1) % dots.length;
        }
      }, 800);

      return () => clearInterval(interval);
    };

    const cleanup = updateStatus(fact);
    return cleanup;
  }, []);

  return (
    <div className="overflow-hidden">
      <div className="loader-container">
        <div className="matrix-bg" ref={matrixRef}></div>
        <div className="hexagon-container">
          <div className="hexagon"></div>
        </div>
        <div className="hologram"></div>
        <div className="loader-wrapper">
          <div className="data-stream" style={{ left: "-100px", animationDelay: "0s" }}></div>
          <div className="data-stream" style={{ left: "100px", animationDelay: "1s" }}></div>
          <div className="data-stream" style={{ right: "-100px", animationDelay: "0.5s" }}></div>
          <div className="status-text status-left">
            {"> INITIALIZING SYSTEMS"}
            <br />
            {"> SCANNING NETWORK"}
            <br />
            {"> ANALYZING DATA"}
            <br />
            {"> QUANTUM SYNC: ACTIVE"}
          </div>
          <div className="status-text status-right">
            {"STATUS: PROCESSING"}
            <br />
            {"BUFFER: 87%"}
            <br />
            {"UPLINK: STABLE"}
            <br />
            {"SECURITY: ENCRYPTED"}
          </div>
          <div className="scanner"></div>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 100 100"
            style={{ transform: "rotate(-90deg)" }}
          >
            <circle className="circle outer" cx="50" cy="50" r="45" />
            <circle className="circle middle" cx="50" cy="50" r="35" />
            <circle className="circle inner" cx="50" cy="50" r="25" />
            <path className="circle outer" d="M10,50 L90,50" style={{ opacity: 0.3 }} />
            <path className="circle outer" d="M50,10 L50,90" style={{ opacity: 0.3 }} />
          </svg>
          <div className="progress-text">
            {randomFact}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTransitionAnimation;
