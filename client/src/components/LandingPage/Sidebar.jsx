import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiLayout, FiImage } from "react-icons/fi";
import { LuUsers, LuFileText, LuTrophy } from "react-icons/lu";
import { PiPersonArmsSpreadFill } from "react-icons/pi";
import { Info } from "lucide-react";

const Sidebar = () => {
  const location = useLocation();

  const icons = [
    { icon: <FiHome />, label: "Home", path: "/" },
    { icon: <Info />, label: "About", path: "/about" },
    { icon: <LuTrophy />, label: "Competitions", path: "/competitions" },
    { icon: <LuFileText />, label: "Accommodation", path: "/accommodation" },
    {
      icon: <PiPersonArmsSpreadFill />,
      label: "Campus Ambassador",
      path: "/campus-ambassador",
    },
    { icon: <LuUsers />, label: "Teams", path: "/teams" },
  ];

  return (
    <div className="fixed h-[100vh] left-6 z-20 group flex flex-col justify-center items-center">
      <div
        style={{
          borderRadius: "20px",
          boxShadow: "0 0 0 3px rgba(234, 252, 161, 0.3)",
        }}
        className="py-6 flex flex-col justify-start items-start bg-white/5 backdrop-blur-md text-center transition-all duration-500 ease-in-out group-hover:w-56 w-16 overflow-hidden"
      >
        {icons.map((item, index) => (
          <Link to={item.path} key={index} className="w-full ">
            <div
              className={`flex items-center p-[0.8rem] px-[1.5rm] cursor-pointer hover:bg-white/10 transition-all duration-300 ${
                location.pathname === item.path ? "bg-transparent" : ""
              }`}
            >
              <div
                className={`rounded-full p-2 ${
                  location.pathname === item.path ? "scale-110" : ""
                }`}
                style={{
                  transition: "all 0.3s ease",
                  boxShadow:
                    location.pathname === item.path
                      ? "0 0 10px 2px rgba(60, 60, 60, 0.2)"
                      : "",
                  border:
                    location.pathname === item.path ? "2px solid #0E2407" : "",
                  background:
                    location.pathname === item.path
                      ? "radial-gradient(circle, #413d3d 50%, rgba(65, 61, 61, 0) 100%)"
                      : "",
                }}
              >
                {React.cloneElement(item.icon, {
                  className: `md:w-[1.5rem] md:h-[1.5rem] sm:w-[1.3rem] sm:h-[1.3rem] transition-all duration-300 ${
                    location.pathname === item.path
                      ? "text-[#A7F818]"
                      : "text-white group-hover:text-[#A7F818]"
                  }`,
                })}
              </div>
              <span
                className={`ml-3 text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-[#A7F818]"
                    : "hover:text-[#A7F818]"
                }`}
              >
                {item.label}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
