import React from "react";

function EventImageCard({
  eventName,
  imageSrc,
  className = "", // Allow additional Tailwind classes to be passed
}) {
  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv) {
          glowDiv.style.boxShadow = "inset 0 0 50px 25px #88b904";
        }
      }}
      onMouseLeave={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv) {
          glowDiv.style.boxShadow = "inset 0 0 39px 15px #588704";
        }
      }}
    >
      {/* Outer Circle with Blur and Border */}
      <div className="relative w-[100%] h-[100%]">
        {/* Base circle with dark background */}
        <div className="absolute inset-0 rounded-full bg-black" />

        {/* Main border with glow */}
        <div className="absolute inset-0 rounded-full border-[3px] border-[#588704]" />

        {/* Inner glow along the border */}
        <div
          className="absolute inset-[0px] rounded-full opacity-50 blur-sm glow-effect"
          style={{
            boxShadow: "inset 0 0 39px 15px #588704",
          }}
        />
      </div>

      {/* Event Name Banner */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-b from-[#012000] to-[#054F03] rounded-lg border border-[#054F03]">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -top-1 text-center text-white font-bold"
          style={{
            fontSize: "1.2rem", // You can adjust this for responsive text size
            fontFamily: "Phonk",
            wordWrap: "break-word",
          }}
        >
          {eventName}
        </div>
      </div>

      {/* Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[27%] w-[50%] h-[50%]">
        <img
          src={imageSrc}
          alt={eventName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default EventImageCard;
