import React from "react";

function GlowCircle({ className = "" }) {
  return (
    <div className={`relative ${className}`}>
      {/* Base circle with dark background */}
      <div className="absolute inset-0 rounded-full bg-black" />

      {/* Main border with glow */}
      <div className="absolute inset-0 rounded-full border-[3px] border-[#A7F818 ]" />

      {/* Inner glow along the border */}
      <div
        className="absolute -inset-[2px] rounded-full blur-sm"
        style={{
          boxShadow: "inset 0 0 55px 10px #588704",
        }}
      />
    </div>
  );
}

export default GlowCircle;
