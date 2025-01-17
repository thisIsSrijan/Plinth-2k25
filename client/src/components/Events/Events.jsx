import React from "react";
import Navbar from "../LandingPage/Navbar";
const aws = import.meta.env.VITE_AWS;
const img1 = `${aws}/eventschirag.png`;
const img2 = `${aws}/eventsarpit.png`;
const sunburnlogo = `${aws}/sunburnlogo.png`;
const img4 = `${aws}/ninasuerte.png`;
const img5 = `${aws}/maskbox.png`;
const img6 = `${aws}/anandprerak.png`;
const tribeslogo = `${aws}/tribelogo.png`;
const mobCh = `${aws}/mobile-chirag.png`;
const mobsh = `${aws}/mobile-shailey.png`;
const mobar = `${aws}/mobile-arpit.png`;
const imgbox1 = `${aws}/mobileViewBox.jpeg`;
import { motion } from "framer-motion";

const Events = () => {
  const leftImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 10,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightImageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const animationVariants_bottom = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: -7, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="w-full h-full overflow-hidden">
      {/* desktop */}
      <div className="md:block hidden">
        <div className="w-[100%] aspect-[1728/3351]  bg-black relative overflow-x-hidden">
          {/* <Navbar /> */}

          {/* day 1 */}
          <div className="">
            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={leftImageVariants}
              className="absolute w-[25%]"
              src={img1}
            />

            <motion.img
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={rightImageVariants}
              className="absolute w-[30%] right-[0]"
              src={img2}
            />

            <div
              className="absolute w-[44.76%] flex flex-col top-[3.00%] left-[37.85%] "
              style={
                {
                  // rotate: "-1.97deg",
                }
              }>
              {/* <div className=" absolute  font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth z-10">
                  Day 1
                </div>
                <div className="font-cynatar  mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 z-1 plinth z-50">
                  Day 1
                </div>
                <div className=" -mt-10 ml-7">
                  <p className="c1:text-[2.3rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]">
                    JAN 24,2025
                  </p>
                </div> */}
              <motion.div
                className="absolute font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants_bottom}>
                Day 1
              </motion.div>
              <motion.div
                className="font-cynatar mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 plinth z-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                Day 1
              </motion.div>
              <motion.p
                className="c1:text-[2.3rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400] -mt-10 ml-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                JAN 24, 2025
              </motion.p>
            </div>

            <div
              className=" z-10  w-[102%]  h-[7.5rem] c1:h-[10rem]  absolute top-[20%] c1:top-[18%] rotate-[4deg] transform origin-top-left -translate-x-1
              text-center c1:text-[4rem] 2xl:text-[3.5rem] bg-custom-gradient
                xl:text-[2.3rem] lg:text-[2.4rem] md:text-[1.9rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white 
                font-melete font-[400] flex justify-center items-center ">
              <div className="z-10 bg-black h-[5.6rem] c1:h-[7rem] w-[100%] flex justify-center items-center ">
                <div className="bg-[linear-gradient(272.21deg,_#FFFFFF_1.56%,_#FFFFFF_10.18%,_#4B4B4B_12.38%,_#FFFFFF_16.47%,_#4B4B4B_26.27%,_#FFFFFF_42.01%,_#4B4B4B_49.2%,_#FFFFFF_57.75%,_#FFFFFF_70.63%,_#4B4B4B_78.26%,_#FFFFFF_84.94%,_#FFFFFF_89.23%,_#4B4B4B_96.96%)] bg-clip-text text-transparent text-5xl font-bold">
                  JAMMING & BONFIRE
                </div>
              </div>
            </div>

            {/* <div  className=" absolute top-[20%] c1÷:top-[16%] glowing-div"></div> */}
          </div>

          {/* day 2 */}
          <div className="">
            <div className="">
              <motion.img
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={leftImageVariants}
                className="w-[38.32%] absolute top-[31.5%] uxl:top-[24.5%] c1:top-[23%] left-[9%]"
                src={img4}
              />
              <p className="z-10 w-[10%] text-transparent font-monument text-center absolute text-[1.2rem] xl:text-[1.5rem] uxl:text-[2rem] c1:text-[2.7rem] top-[51%] xl:top-[51%] uxl:top-[45%] c1:top-[43%] left-[23%] c1:left-[22%] tracking-wider bg-gradient-to-b from-white to-[#999999] bg-clip-text">
                NINA SUERTE
              </p>
            </div>

            <div>
              <img
                className="w-[23.75%] absolute top-[40.8%] uxl:top-[33.82%] c1:top-[31.82%] left-[26.18%]"
                src={img5}></img>
              <p className="z-10 w-[15%] text-transparent font-monument text-center absolute text-[1.2rem] xl:text-[1.5rem] uxl:text-[2rem] c1:text-[2.7rem] top-[52%] xl:top-[53%] uxl:top-[47%] c1:top-[45%] left-[39%] tracking-wider bg-gradient-to-b from-white to-[#999999] bg-clip-text">
                MASK BOX
              </p>
            </div>
            <div className="">
              <img
                className="w-[18.80%] absolute top-[43.4%] uxl:top-[36.4%] c1:top-[34.4%] left-[9%] xl:left-[7.0%] uxl:left-[5.5%] c1:left-[4%]"
                src={img6}></img>
              <p className="z-10 w-[10%] text-transparent font-monument absolute text-[1.2rem] xl:text-[1.5rem] uxl:text-[2rem] c1:text-[2.7rem] top-[52%] xl:top-[53%] uxl:top-[46%] c1:top-[44.5%] left-[10%] xl:left-[8%] c1:left-[5%] tracking-wider bg-gradient-to-b from-white to-[#999999] bg-clip-text">
                PRERAK ANAND
              </p>
            </div>

            <div className="w-[44.76%] flex flex-col absolute top-[29.31%] uxl:top-[26.31%] c1:top-[25.31%] left-[56.47%]  ">
              {/* <div className="absolute    font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth">
                  DAY 2
                </div>
                <div className="  font-cynatar mr-4 c1:text-[19rem] tracking-wide 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 z-1 plinth">
                  DAY 2
                </div>
                <div className=" -mt-10 ml-7">
                  <p className="c1:text-[2.3rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]">
                    JAN 25,2025
                  </p>
                </div> */}

              <motion.div
                className="absolute font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants_bottom}>
                Day 2
              </motion.div>
              <motion.div
                className="font-cynatar mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 plinth z-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                Day 2
              </motion.div>
              <motion.p
                className="c1:text-[2.3rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400] -mt-10 ml-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                JAN 25, 2025
              </motion.p>
            </div>

            <div className="flex flex-row w-[44.76%] absolute top-[45%] md:top-[44%] uxl:top-[40%] c1:top-[37.7%] left-[56.47%] gap-x-[4%]">
              <img className=" w-[37.19%] " src={sunburnlogo}></img>
              <img className=" w-[30.36%] h-[10%]" src={tribeslogo}></img>
            </div>

            <div
              className=" z-10  w-[102%]  h-[7.5rem] c1:h-[10rem]  absolute top-[57%] uxl:top-[50.7%] c1:top-[48.5%] rotate-[-4deg] transform origin-top-left -translate-x-1
              text-center c1:text-[4rem] 2xl:text-[3.5rem] bg-custom-gradient
                xl:text-[2.3rem] lg:text-[2.4rem] md:text-[1.9rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white 
                font-melete font-[400] flex justify-center items-center ">
              {/* <img className="rotate-[0.83deg]" src={img3}></img> */}
              <div className="z-10 bg-black h-[5.6rem] c1:h-[7rem] w-[100%] flex justify-center items-center ">
                <div className="bg-[linear-gradient(272.21deg,_#FFFFFF_1.56%,_#FFFFFF_10.18%,_#4B4B4B_12.38%,_#FFFFFF_16.47%,_#4B4B4B_26.27%,_#FFFFFF_42.01%,_#4B4B4B_49.2%,_#FFFFFF_57.75%,_#FFFFFF_70.63%,_#4B4B4B_78.26%,_#FFFFFF_84.94%,_#FFFFFF_89.23%,_#4B4B4B_96.96%)] bg-clip-text text-transparent text-5xl font-bold">
                  SUNBURN CAMPUS
                </div>
              </div>
            </div>
            {/* <div  className=" absolute top-[57%] uxl:top-[50.7%] c1:top-[46.5%] glowing-div"></div> */}
          </div>

          {/* day3 */}
          <div className="">
            <div className="w-[44.76%] flex flex-col absolute top-[62%] uxl:top-[53.31%] c1:top-[51.31%] left-[35.47%]  ">
              <motion.div
                className="absolute font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants_bottom}>
                Day 3
              </motion.div>
              <motion.div
                className="font-cynatar mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 plinth z-50"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                Day 3
              </motion.div>
              <motion.p
                className="c1:text-[2.3rem] xl:text-[1.5rem] lg:text-[1.2rem] md:text-[1rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400] -mt-10 ml-7"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={animationVariants}>
                JAN 26, 2025
              </motion.p>
            </div>

            <div className="absolute top-[83%] uxl:top-[68%] c1:top-[65.9%] left-[24%] uxl:left-[29.09%] c1:left-[30.09%] lg:left-[18%] xl:left-[27%]">
              <p className="c1:text-[3.5rem] 2xl:text-[2.5rem] xl:text-[2.0rem] lg:text-[2.2rem] md:text-[1.7rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400] ">
                REVEALING SOON
              </p>
            </div>

            <div
              className=" z-10  w-[102%]  h-[7.5rem] c1:h-[10rem]  absolute top-[87.8%] uxl:top-[76%] c1:top-[75%] rotate-[4deg] transform origin-top-left -translate-x-1
              text-center c1:text-[4rem] 2xl:text-[3.5rem] bg-custom-gradient
                xl:text-[2.3rem] lg:text-[2.4rem] md:text-[1.9rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white 
                font-melete font-[400] flex justify-center items-center ">
              <div className="z-10 bg-black h-[5.6rem] c1:h-[7rem] w-[100%] flex justify-center items-center ">
                <div className="bg-[linear-gradient(272.21deg,_#FFFFFF_1.56%,_#FFFFFF_10.18%,_#4B4B4B_12.38%,_#FFFFFF_16.47%,_#4B4B4B_26.27%,_#FFFFFF_42.01%,_#4B4B4B_49.2%,_#FFFFFF_57.75%,_#FFFFFF_70.63%,_#4B4B4B_78.26%,_#FFFFFF_84.94%,_#FFFFFF_89.23%,_#4B4B4B_96.96%)] bg-clip-text text-transparent text-5xl font-bold">
                  BOLLYWOOD NIGHT
                </div>
              </div>
            </div>
            {/* <div  className=" absolute top-[87.8%] uxl:top-[74%] c1:top-[72%] glowing-div"></div> */}
          </div>
        </div>
      </div>









      {/* mobile */}
      <div className="md:hidden block ">
        <div className="w-[100%] aspect-[1728/3800] bg-black relative overflow-x-hidden">
          {/* <Navbar /> */}

          {/* day1 */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="w-[64.99%] h-[5.57%] absolute top-[14.89%] left-[17.28%] flex flex-col justify-center items-center">
            <p
              className="w-[100%] text-[3rem] lg:text-[4rem] xsm:text-[4rem] sm:text-[4.5rem] font-monument font-[400] plinth text-center"
              style={{
                rotate: "10deg",
                background: "linear-gradient(to bottom, #A7F818, black)",
                WebkitBackgroundClip: "text", // for Chrome/Safari
                backgroundClip: "text", // for other browsers
                color: "transparent", // Make sure text color is transparent to show the gradient
              }}>
              DAY 1
            </p>

            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">
              24 JAN'25
            </p>
          </motion.div>

          <div className="w-[50.92%] h-[19.47%] absolute top-[25.07%] left-[25.28%]">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              src={imgbox1}
              alt=""
            />
          </div>

          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-20 w-[24.67%] h-[16.84%] absolute top-[24.99%] left-[26.44%]"
            src={mobCh}
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[32.58%] h-[10.97%] absolute top-[30.94%] left-[35.54%]"
            src={mobsh}
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-20 w-[24.24%] h-[15.52%] absolute top-[26.39%] left-[49.59%]"
            src={mobar}
          />

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-[50.92%] h-[19.47%] absolute top-[38%] muxsm:top-[42.9%] muxsm:left-[34%] xsm:left-[313%] sm:left-[30%]">
            <div className="text-[0.35rem] sm:text-[0.7rem] xsm:text-[0.6rem] text-white font-melete font-[400] ">
              BONFIRE & JAMMING
            </div>
          </motion.div>
          
          {/* day2 */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-[60.99%] h-[5.57%] absolute top-[48.89%] left-[18.28%] flex flex-col justify-center items-center ">
            <p
              className="w-[100%] text-[3rem] lg:text-[4rem] xsm:text-[4rem] sm:text-[4.5rem] font-monument font-[400] plinth text-center"
              style={{
                rotate: "10deg",
                background: "linear-gradient(to bottom, #A7F818, black)",
                WebkitBackgroundClip: "text", // for Chrome/Safari
                backgroundClip: "text", // for other browsers
                color: "transparent", // Make sure text color is transparent to show the gradient
              }}>
              DAY 2
            </p>
            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">
              25 JAN'25
            </p>
          </motion.div>

          <div className="z-10 w-[72.91%] h-[23.31%] absolute top-[60.11%] left-[14.29%]">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              src={imgbox1}
              alt=""
            />
          </div>

          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[56.47%] h-[32.84%] absolute top-[52.97%] left-[28.50%]"
            src={img4}
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-20 w-[31.58%] h-[19.97%] absolute top-[64.14%] left-[55.54%]"
            src={img5}
          />
          <motion.img
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[29.24%] h-[19.52%] absolute top-[64.4%] left-[18.59%]"
            src={img6}
          />

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[50.92%] h-[19.47%] absolute top-[85.57%] sm:left-[32%] left-[30.28%] xsm:left-[29%]">
            <div className="text-[0.45rem] sm:text-[0.8rem] xsm:text-[0.7rem] text-white font-melete font-[400]">
              SUNBURN CAMPUS
            </div>
          </motion.div>

          {/* day3 */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="w-[52.99%] h-[5.57%] absolute top-[95.89%] left-[24.28%] flex flex-col justify-center items-center">
            <p
              className="w-[100%] text-[3rem] lg:text-[4rem] xsm:text-[4rem] sm:text-[4.5rem] font-monument font-[400] plinth text-center"
              style={{
                rotate: "10deg",
                background: "linear-gradient(to bottom, #A7F818, black)",
                WebkitBackgroundClip: "text", // for Chrome/Safari
                backgroundClip: "text", // for other browsers
                color: "transparent", // Make sure text color is transparent to show the gradient
              }}>
              DAY 3
            </p>
            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">
              26 JAN'25
            </p>
          </motion.div>

          <div className="z-10 w-[72.91%] h-[23.31%] absolute top-[104.31%] left-[14.29%]">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              src={imgbox1}
              alt=""
            />
          </div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[50.92%] h-[19.47%] absolute top-[129.57%] left-[28.28%]">
            <div className="text-[0.55rem] sm:text-[0.8rem] xsm:text-[0.7rem] muxsm: text-white font-melete font-[400]">
              BOLLYWOOD NIGHT
            </div>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="z-10 w-[43.86%] h-[4.76%] absolute top-[115%] muxsm:left-[30%] sm:left-[35%]">
            <p className="font-monument text-white font-[400] text-[1.3rem] xsm:text-[2rem]">
              REVEALING SOON
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Events;
