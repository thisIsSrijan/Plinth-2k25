import { motion } from "framer-motion";
import EventImageCard from "./EventImageCard";
import GlowCircle from "./GlowCircle";
import {
  ECell,
  DebSoc,
  Astronomy,
  Quizzinga,
  Cybros,
} from "../../assets/competition/svg";

const itemVariants = {
  animate: {
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1.5,
      ease: "easeOut",
      delay:0.5
    },
  },
};

function TopCircle() {
  return (
    <motion.div
      className="h-[50%] w-full flex flex-col justify-center items-center mt-[5vh] md:mt-[0vw]"
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="flex justify-center items-center w-full gap-[5vw]">
        <motion.div
          variants={itemVariants}
          initial={{ x: 150, y: 250, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <GlowCircle className="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] c1:w-[13rem] c1:h-[13rem]" />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ x: 0, y: 250, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <EventImageCard
            eventName="Quizzinga"
            imageSrc={Quizzinga}
            className="w-[8rem] cursor-pointer h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ x: -150, y: 250, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <GlowCircle className="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] c1:w-[13rem] c1:h-[13rem]" />
        </motion.div>
      </div>

      <div className="flex justify-center items-center w-full gap-[4vw]">
        <motion.div
          variants={itemVariants}
          initial={{ x: 250, y: 100, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <EventImageCard
            eventName="Cybros"
            imageSrc={Cybros}
            className="w-[8rem] cursor-pointer h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem] mt-[3vh]"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ x: 100, y: 100, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <EventImageCard
            eventName="E Cell"
            imageSrc={ECell}
            className="w-[8rem] cursor-pointer h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ x: -100, y: 100, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <EventImageCard
            eventName="DebSoc"
            imageSrc={DebSoc}
            className="w-[8rem] cursor-pointer h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          initial={{ x: -250, y: 100, scale: 0.5, opacity: 0 }}
          animate="animate"
        >
          <EventImageCard
            eventName="Astronomy"
            imageSrc={Astronomy}
            className="w-[8rem] cursor-pointer h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem] mt-[3vh]"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default TopCircle;
