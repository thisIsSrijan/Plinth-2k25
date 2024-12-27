import { motion } from "framer-motion";
import EventImageCard from "./EventImageCard";
import GlowCircle from "./GlowCircle";
import {
  Cipher,
  Phoenix,
  ASME,
  SAE,
  Coding,
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
        <EventImageCard
          eventName="Cipher"
          imageSrc={Cipher}
          className="w-[10rem] h-[10rem] mb-[4vh]"
        />
        <EventImageCard
          eventName="Phoenix"
          imageSrc={Phoenix}
          className="w-[10rem] h-[10rem]"
        />
        <EventImageCard
          eventName="ASME"
          imageSrc={ASME}
          className="w-[10rem] h-[10rem]"
        />
        <EventImageCard
          eventName="SAE"
          imageSrc={SAE}
          className="w-[10rem] h-[10rem] mb-[4vh]"
        />
      </div>

      <div className="flex justify-center items-center w-full gap-[5vw]">
        <GlowCircle className="w-[8rem] h-[8rem]" />
        <EventImageCard
          eventName="Coding"
          imageSrc={Coding}
          className="w-[10rem] h-[10rem]"
        />
        <GlowCircle className="w-[8rem] h-[8rem]" />
      </div>
    </motion.div>
  );
}

export default BottomCircle;
