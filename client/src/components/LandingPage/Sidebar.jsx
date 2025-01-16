import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiLayout, FiImage } from "react-icons/fi";
import { LuUsers, LuFileText, LuTrophy } from "react-icons/lu";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import {  Info } from 'lucide-react';
const Sidebar = () => {
  const location = useLocation();
  
  const icons = [
    { icon: <FiHome />, label: "Home", path: "/" },
    // { icon: <Info />, label: "About Us", path: "/about" },
    { icon: <Info />, label: "About", path: "/about" },
    { icon: <LuTrophy />, label: "Competitions", path: "/competitions" },
    { icon: <LuFileText />, label: "Accommodation", path: "/accommodation" },
    { icon: <PiPersonArmsSpreadFill />, label: "Campus Ambassador", path: "/campus-ambassador" },
    { icon: <LuUsers />, label: "Teams", path: "/teams" },
    // { icon: <FiImage />, label: "Campus", path: "/campus" },
  ];

  return (
    <div
      style={{
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 0 0 3px rgba(234, 252, 161, 0.3)",
      }}
      className="2xl:w-[4rem] xl:w-[4rem] lg:w-[4rem] md:w-[3rem] sm:w-[3rem] 2xl:h-[44rem] xl:h-[33rem] lg:h-[38rem] flex flex-col justify-start items-center bg-white/5 backdrop-blur-sm fixed top-[8rem] z-20 left-6 text-center"
    >
      {icons.map((item, index) => (
        <Link to={item.path} key={index}>
          <div
            className={`rounded-full p-2 cursor-pointer mt-4`}
            style={{
              transition: "all 0.3s ease",
              transform: location.pathname === item.path ? "scale(1.1)" : "scale(1)",
              boxShadow: location.pathname === item.path ? "0 0 10px 2px rgba(60, 60, 60, 0.2)" : "",
              border: location.pathname === item.path ? "2px solid #0E2407" : "",
              background: location.pathname === item.path
                ? "radial-gradient(circle, #413d3d 50%, rgba(65, 61, 61, 0) 100%)"
                : "",
            }}
          >
            {React.cloneElement(item.icon, {
              className: `md:w-[1.5rem] md:h-[1.5rem] sm:w-[1.3rem] sm:h-[1.3rem] transition-all duration-300 text-center ${
                location.pathname === item.path
                  ? "text-[#A7F818]"
                  : "text-white hover:text-[#A7F818]"
              }`,
            })}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Sidebar;