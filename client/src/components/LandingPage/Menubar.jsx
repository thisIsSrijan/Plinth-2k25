import React from "react";
import { useState } from "react";
// import {
//     FaHome,
//     FaDashboard,
//     FaProductHunt,
//     FaEnvelope,
//     FaImages,
//     FaCalendarAlt,
//     FaUsers,
//     FaFileAlt,
//     FaTrophy,
//     FaInfoCircle,
//   } from "react-icons/fa";
import { FiHome,FiLayout,FiImage } from "react-icons/fi";
import { LuShoppingBag,LuCalendar,LuUsers,LuFileText,LuMail,LuTrophy } from "react-icons/lu";
import { IoMdInformationCircleOutline } from "react-icons/io";


const menuItems = [
    { icon: <FiHome />, label: "Home" },
    { icon: <FiLayout />, label: "Dashboard" },
    { icon: <LuShoppingBag />, label: "Products" },
    { icon: <LuMail />, label: "Messages" },
    { icon: <FiImage />, label: "Gallery" },
    { icon: <LuCalendar />, label: "Calender" },
    { icon: <LuUsers />, label: "Activity" },
    { icon: <LuFileText />, label: "Documents" },
    { icon: <LuTrophy />, label: "Competitions" },
    { icon: <IoMdInformationCircleOutline />, label: "About Us" },
  ];

const Menubar=()=>{

    const [isOpen, setIsOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState("");
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
    const handleMenuClick = (label) => {
      setSelectedItem(label); // Update selected menu item
    };

    return (
        <div className="relative z-50">
             <button
        className={`uxsm:flex md:hidden fixed top-5 right-5 text-3xl bg-transparent text-white p-2 rounded-md shadow-md z-50 ${isOpen ? "uxsm:hidden" :"sm:flex"}`}
        onClick={toggleNavbar}
      >
        ☰
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-fit w-34 bg-[#666]/40 backdrop-blur-md text-white rounded-lg shadow-lg transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-xl bg-transparent p-1 rounded-full"
          onClick={toggleNavbar}
        >
          ✕
        </button>

        {/* Menu Items */}
        <ul className="mt-16 space-y-0">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className="flex items-center space-x-4 px-6 py-2 transition duration-300 cursor-pointer"
              onClick={() => handleMenuClick(item.label)}
            >
              <div
                className={`text-xl flex gap-2 ${
                  selectedItem === item.label ? "text-[#A7F818]" : "hover:text-[#A7F818]"
                }`}
              >
                {item.icon}
                <span
                  className={`text-lg ${
                    selectedItem === item.label ? "text-[#A7F818]" : "hover:text-[#A7F818]"
                  } mb-1 leading-5`}
                >
                  {item.label}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
        </div>
    )
}
export default Menubar;