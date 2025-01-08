import React, { useState } from "react";
import { FiHome,FiLayout,FiImage } from "react-icons/fi";
import { LuShoppingBag,LuCalendar,LuUsers,LuFileText,LuMail,LuShirt } from "react-icons/lu";


const Sidebar = () => {
    // State to track selected icon
    const [selectedIcon, setSelectedIcon] = useState(null);

    // Array of icons (you can expand this for dynamic rendering)
    const icons = [
        <FiHome />,
       <FiLayout></FiLayout>,
       <LuShoppingBag></LuShoppingBag>,
      <LuMail></LuMail>,
       <FiImage></FiImage>,
       <LuCalendar></LuCalendar>,
       <LuUsers></LuUsers>,
       <LuFileText></LuFileText>,
       <LuShirt></LuShirt>
    ];

    return (
        <div   style={{
            // position: "relative", // Necessary for the pseudo-element
            borderRadius: "20px", // Ensure radius applies
            overflow: "hidden", // Clip children
            // background: "transparent",
            boxShadow: "0 0 0 3px rgba(234, 252, 161, 0.3)", // Gradient border effect using shadow
        }}
          className="2xl:w-[4rem] xl:w-[4rem] lg:w-[4rem] md:w-[3rem] sm:w-[3rem] 2xl:h-[44rem] xl:h-[33rem] lg:h-[38rem] flex flex-col justify-start items-center bg-white/5 backdrop-blur-sm fixed top-[8rem] z-20 left-6 text-center  ">
            {icons.map((icon, index) => (
               <div
               key={index}
               onClick={() => setSelectedIcon(index)} // Set selected icon
               className={`rounded-full p-2 cursor-pointer mt-4 ${
                   selectedIcon === index ? "" : "bg-transparent" // Default background for unselected icons
               }`}
               style={
                   selectedIcon === index
                       ? {
                        // width: "2.5rem", // Fixed width
                        // height: "2.5rem",
                        // boxSizing: "border-box",
                             boxShadow: "0 0 10px 2px rgba(60, 60, 60, 0.2)", // Radial shadow effect
                             border: "2px solid #0E2407",
                              // Border color when selected
                            //  backgroundColor: "#413d3d", // Background for selected icon
                             background: "radial-gradient(circle, #413d3d 50%,rgba(65, 61, 61, 0) 100%)",
                         }
                       : {}
               }
           >
               {React.cloneElement(icon, {
                   className: `md:w-[1.5rem] md:h-[1.5rem] sm:w-[1.3rem] sm:h-[1.3rem] transition-all duration-800 text-center  ${
                       selectedIcon === index ? "text-[#A7F818] " : "text-white hover:text-[#A7F818]"
                   }`, // Text turns black if selected, otherwise remains white
               })}
           </div>
           
            ))}
        </div>
    );
};

export default Sidebar;
