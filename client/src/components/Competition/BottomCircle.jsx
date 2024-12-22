import React from "react";
import { motion } from "framer-motion";
import {
  Group11,
  Group12,
  Group13,
  Group14,
  Group15,
  Glow_Circle,
} from "../../assets/competition/svg";

function BottomCircle() {
  return (
    <motion.div
      className="h-[50%] w-full flex flex-col justify-center items-center mt-[2vh] md:mt-[3vh]"
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex justify-center items-center w-full gap-[4vw]">
        <img
          src={Group11}
          alt="Group 11"
          className="w-[10vw] h-[17vh] mb-[4vh]"
        />
        <img src={Group12} alt="Group 12" className="w-[10vw] h-[17vh]" />
        <img src={Group13} alt="Group 13" className="w-[10vw] h-[17vh]" />
        <img
          src={Group14}
          alt="Group 14"
          className="w-[10vw] h-[17vh] mb-[4vh]"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <img src={Glow_Circle} alt="Glow" className="w-[13vw] h-[20vh]" />
        <img src={Group15} alt="Group 15" className="w-[14vw] h-[20vh]" />
        <img src={Glow_Circle} alt="Glow" className="w-[13vw] h-[20vh]" />
      </div>
    </motion.div>
  );
}

export default BottomCircle;
