import React from "react";
import { motion } from "framer-motion";
import {
  Group7,
  Group8,
  Group9,
  Group10,
  Group16,
  Glow_Circle,
} from "../../assets/competition/svg";

function TopCircle() {
  return (
    <motion.div
      className="h-[50%] w-full flex flex-col justify-start items-center mt-[5vh] md:mt-[3vh]"
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex justify-center items-center w-full">
        <img src={Glow_Circle} alt="Glow" className="w-[13vw] h-[20vh]" />
        <img src={Group16} alt="Group 16" className="w-[14vw] h-[20vh]" />
        <img src={Glow_Circle} alt="Glow" className="w-[13vw] h-[20vh]" />
      </div>

      <div className="flex justify-center items-center w-full gap-[4vw]">
        <img
          src={Group7}
          alt="Group 7"
          className="w-[10vw] h-[17vh] mt-[3vh]"
        />
        <img src={Group8} alt="Group 8" className="w-[10vw] h-[17vh]" />
        <img src={Group9} alt="Group 9" className="w-[10vw] h-[17vh]" />
        <img
          src={Group10}
          alt="Group 10"
          className="w-[10vw] h-[17vh] mt-[3vh]"
        />
      </div>
    </motion.div>
  );
}

export default TopCircle;
