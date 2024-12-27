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

function TopCircle() {
  return (
    <motion.div
      className="h-[50%] w-full flex flex-col justify-start items-center mt-[5vh] md:mt-[3vh]"
      animate={{ y: [0, -7, 0] }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Top Row */}
      <div className="flex justify-center items-center w-full gap-[5vw]">
        <GlowCircle className="w-[8rem] h-[8rem]" />
        <EventImageCard
          eventName="Quizzinga"
          imageSrc={Quizzinga}
          className="w-[10rem] h-[10rem]"
        />
        <GlowCircle className="w-[8rem] h-[8rem]" />
      </div>

      {/* Bottom Row */}
      <div className="flex justify-center items-center w-full gap-[4vw]">
        <EventImageCard
          eventName="Cybros"
          imageSrc={Cybros}
          className="w-[10rem] h-[10rem] mt-[3vh]"
        />
        <EventImageCard
          eventName="E Cell"
          imageSrc={ECell}
          className="w-[10rem] h-[10rem]"
        />
        <EventImageCard
          eventName="DebSoc"
          imageSrc={DebSoc}
          className="w-[10rem] h-[10rem]"
        />
        <EventImageCard
          eventName="Astronomy"
          imageSrc={Astronomy}
          className="w-[10rem] h-[10rem] mt-[3vh]"
        />
      </div>
    </motion.div>
  );
}

export default TopCircle;
