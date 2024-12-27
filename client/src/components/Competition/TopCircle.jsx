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
        <GlowCircle className="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] c1:w-[13rem] c1:h-[13rem]" />
        <EventImageCard
          eventName="Quizzinga"
          imageSrc={Quizzinga}
          className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
        />
        <GlowCircle className="w-[6rem] h-[6rem] lg:w-[8rem] lg:h-[8rem] c1:w-[13rem] c1:h-[13rem]" />
      </div>

      <div className="flex justify-center items-center w-full gap-[4vw]">
        <EventImageCard
          eventName="Cybros"
          imageSrc={Cybros}
          className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem] mt-[3vh]"
        />
        <EventImageCard
          eventName="E Cell"
          imageSrc={ECell}
          className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
        />
        <EventImageCard
          eventName="DebSoc"
          imageSrc={DebSoc}
          className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem]"
        />
        <EventImageCard
          eventName="Astronomy"
          imageSrc={Astronomy}
          className="w-[8rem] h-[8rem] lg:w-[10rem] lg:h-[10rem] c1:w-[16rem] c1:h-[16rem] mt-[3vh]"
        />
      </div>
    </motion.div>
  );
}

export default TopCircle;
