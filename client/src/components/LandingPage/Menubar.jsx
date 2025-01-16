import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiHome, FiLayout, FiImage } from "react-icons/fi";
import { LuShoppingBag, LuCalendar, LuUsers, LuFileText, LuMail, LuTrophy } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { Home, Info, School, Flag, Building, Trophy, Bed, Users, UserPlus } from 'lucide-react';
import { PiPersonArmsSpreadFill } from "react-icons/pi";

const menuItems = [
    { icon: <FiHome />, label: "Home", path: "/" },
    // { icon: <Info />, label: "About Us", path: "/about" },
    { icon: <Info />, label: "About", path: "/about" },
    { icon: <LuTrophy />, label: "Competitions", path: "/competitions" },
    { icon: <LuFileText />, label: "Accommodation", path: "/accommodation" },
    { icon: <PiPersonArmsSpreadFill />, label: "Campus Ambassador", path: "/campus-ambassador" },
    { icon: <LuUsers />, label: "Teams", path: "/teams" },
    // { icon: <FiImage />, label: "Campus", path: "/campus" },
];


const Menubar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-50">
      <button
        className={`uxsm:flex md:hidden fixed w-[2.5rem] h-[2.5rem] top-8 right-5 border-2 border-[#666] text-2xl bg-transparent text-white pl-2 pt-[0.1rem] rounded-md shadow-md z-50 ${
          isOpen ? "uxsm:hidden" : "sm:flex"
        }`}
        onClick={toggleNavbar}
      >
        ☰
      </button>

      <div
        className={`fixed top-0 right-0 h-screen w-34 bg-[#666]/40 backdrop-blur-md text-white rounded-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-7 right-7 text-xl bg-transparent p-1 rounded-full"
          onClick={toggleNavbar}
        >
          ✕
        </button>

        <ul className="mt-16 space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                className="flex items-center space-x-4 px-6 py-2 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                <div
                  className={`text-xl flex gap-2 ${
                    location.pathname === item.path ? "text-[#A7F818]" : "hover:text-[#A7F818]"
                  }`}
                >
                  {item.icon}
                  <span className="text-lg mb-1 leading-5">{item.label}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Menubar;