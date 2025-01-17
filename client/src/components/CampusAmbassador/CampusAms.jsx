import React from "react";
import { motion } from "framer-motion";
// import CampImg from "../../assets/campusAms/CampusAmbassador.png";
// import GreenDot from "../../assets/campusAms/GreenDot.png";

const aws = import.meta.env.VITE_AWS

const CampImg = `${aws}/CampusAmbassador.png`
const GreenDot = `${aws}/GreenDot.png`

function CampusAms() {
  const shimmerAnimation = {
    initial: { opacity: 0.5 },
    animate: { opacity: [0.5, 1, 0.5] },
    transition: { duration: 1.5, repeat: Infinity },
  };

  return (
    <div className="min-h-screen w-screen bg-black flex flex-col items-center gap-[10vw] sm:gap-[5vw] xl:gap-[2vw] py-[4vh] pt-[6rem] md:pt-[0rem]">
      <motion.div
        className="w-full text-[#a7f818] text-[11vw] md:text-[7vw] xl:text-[6vw] font-cynatar flex flex-col justify-center items-center tracking-widest"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="leading-none"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          whileHover={{ textShadow: "0px 0px 15px #a7f818" }}
        >
          CAMPUS
        </motion.span>
        <motion.span
          className="leading-none"
          initial={{ scale: 0.7 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          whileHover={{ textShadow: "0px 0px 15px #a7f818" }}
        >
          AMBASSADOR
        </motion.span>
      </motion.div>

      <motion.div
        className="w-full text-white flex flex-col md:flex-row justify-center items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="w-full md:w-1/2 -ml-4 md:ml-0"
          whileHover={{ scale: 1.1, rotateY: 15 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={CampImg}
            alt="CampImg"
            className="drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]"
          />
        </motion.div>
        <div className="w-full md:w-1/2 poppins-regular text-justify px-[9vw] md:px-[5vw] text-sm sm:text-base xl:text-xl c1:text-4xl uxl:text-2xl leading-relaxed">
          Plinth 2024 is approaching, and the Campus Ambassador Program is
          seeking passionate individuals to join. The program encourages
          students from various fields to register for the festival through a
          dedicated Google form. The more registrations, greater the rewards.
          For 10+ registrations, free entry to the festival, unrestricted access
          to pronites, and a swag bag with goodies is provided. A letter of
          recommendation from LNMIIT acknowledges your contribution. For 15+
          registrations, all benefits are included, along with complimentary
          accommodation for the duration of the festival.
        </div>
      </motion.div>

      <div
        className="bg-[#a7f818]/20 w-[80%] rounded-[4rem] md:rounded-[3rem] flex flex-col justify-center items-center p-8 md:p-6 c1:p-9 c1:py-12 gap-[4vw] md:gap-[2vw] shadow-2xl"
      >
        <div
          className="text-[#a7f818] text-[6vw] xsm:text-2xl sm:text-3xl xl:text-4xl c1:text-6xl uxl:text-5xl font-melete"
        >
          BENEFITS
        </div>
        <div
          className="text-white text-sm sm:text-base lg:text-lg c1:text-2xl uxl:text-xl flex flex-col justify-center px-[3vw] poppins-regular gap-6"
        >
          <div className="flex gap-4 items-center">
              <img src={GreenDot} alt="GreenDot" />
            <span>
              For 10+ registrations, participants receive free entry to the
              festival, unrestricted access to pronites, and a swag bag with
              goodies. Additionally, a letter of recommendation from LNMIIT
              acknowledges their contribution.
            </span>
          </div>
          <div className="flex gap-4 items-center">
              <img src={GreenDot} alt="GreenDot"  />

            <span>
              For 15+ registrations, all aforementioned benefits are included,
              along with complimentary accommodation for the festival's
              duration.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CampusAms;