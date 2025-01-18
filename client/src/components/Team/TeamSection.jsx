import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../../assets/melete/Melete-Bold.otf";
import Card from "./Card";

const TeamSection = ({ title, members }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Use a ref to track the section
  const sectionRef = React.useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation
        }
      },
      { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className=" flex flex-col w-full justify-center" ref={sectionRef}>
      {/* Title */}
      <div
        className="bg-[#A7F818] mb-8 py-8 text-center text-black flex items-center justify-center text-[17px] leading-[25px] sm:text-[24px] font-melete font-extrabold h-[20px]"
        style={{
          fontFamily: "Melete, sans-serif",
          background:
            "radial-gradient(circle, rgba(167, 248, 24, 1) 0%, rgba(167, 248, 24, 0.8) 60%, rgba(0, 0, 0, 0.6) 100%)", // Improved radial gradient with better contrast
          position: "relative", // Set position relative for the text gradient to work
        }}>
        <span
          style={{
            background:
              "linear-gradient(to right, #A7F818, #000000 50%, #A7F818)",
            WebkitBackgroundClip: "text",
            color: "#000",
          }}>
          {title}
        </span>
      </div>

      {/* Cards Section */}
      <div className="flex justify-center w-full">
        <div
          className={`grid ${
            members?.length === 1 ? "grid-cols-1 place-items-center": members?.length === 2 ? "grid-cols-1 place-items-center md:grid-cols-2 sm:grid-cols-2 xsm:grid-cols-1 xxsm:grid-cols-1" : members?.length === 3 ? "grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-2 xxsm:grid-cols-1" : "grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 "
          } gap-10 p-2 lg:gap-5 xl:gap-10`}>
          {" "}
          {members?.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }} // Start state
              animate={isVisible ? { opacity: 1, y: 0 } : {}} // Animate only when visible
              transition={{
                duration: 0.6,
                delay: index * 0.2, // Stagger the animation
              }}>
              <Card
                name={member?.name}
                designation={member?.designation}
                image={member?.image}
                linkedin={member?.linkedin}
                email={member?.email}
                instagram={member?.instagram}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;