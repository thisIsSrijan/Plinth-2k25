import React from "react";
import { motion, useInView } from "framer-motion";

const aws = import.meta.env.VITE_AWS
const plinthAcc = `${aws}/Accomodationimg.png`

const Section = ({ children, animationVariant, transitionDelay = 0 }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariant}
      transition={{ duration: 1, delay: transitionDelay, ease: "easeOut" }}
      className="w-5/6 mx-auto"
    >
      {children}
    </motion.div>
  );
};

const Accomodation = () => {
  // Animation Variants
  const topToBottom = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const leftToRight = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const rightToLeft = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div className="bg-black text-white py-10">
      {/* Title Section */}
      <section className="flex flex-col items-center justify-center w-5/6 mx-auto pt-14 ">
        <motion.h2
          className="text-[#A7F818] text-center text-3xl sm:text-4xl md:text-[50px] lg:text-[70px] xl:text-[120px] leading-tight"
          style={{ fontFamily: "Cynatar, sans-serif", letterSpacing: "0.25em" }}
          initial="hidden"
          animate="visible"
          variants={topToBottom}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          ACCOMODATION
        </motion.h2>
      </section>

      {/* Centered Image */}
      <motion.div
        className="flex items-center justify-center w-5/6 mx-auto my-14 relative"
        initial="hidden"
        animate="visible"
        variants={topToBottom}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <img
          src={plinthAcc}
          alt="Accomodation"
          className="h-auto w-full object-cover md:w-[60%]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)]"></div>
      </motion.div>

      {/* Description Section */}
      <div className="flex flex-col gap-10">
      <Section animationVariant={leftToRight}>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide font-poppins text-left">
          Plinth, a tech-driven event, offers accommodation passes and Pronite Passes to blend
          technology with an enjoyable atmosphere. The event aims to attract a large crowd and
          provides secure, comfortable accommodations. The organizers also offer a diverse
          cafeteria with various cuisines.
        </p>
      </Section>

      {/* Timings Section */}
      <Section animationVariant={rightToLeft}>
        <h2
          className="text-[#A7F818] mb-5 text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug tracking-wide "
          style={{ fontFamily: "Melete" }}
        >
          TIMINGS
        </h2>
        <ul className="list-disc pl-8 text-sm sm:text-base md:text-lg lg:text-xl font-poppins">
          <li>Check-in: 7:00 AM to 10:00 PM on your check-in date</li>
          <li>Check-out: Anytime on or before your check-out date</li>
        </ul>
      </Section>

      {/* Instructions Section */}
      <Section animationVariant={leftToRight}>
        <h2
          className="text-[#A7F818] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed tracking-wide mb-5"
          style={{ fontFamily: "Melete" }}
        >
          INSTRUCTIONS
        </h2>
        <ul className="list-disc pl-8 text-sm sm:text-base md:text-lg lg:text-xl font-poppins text-left">
          {[
            "All guests carrying electronic items of any kind will have to declare them at the LNMIIT Jaipur main gate through a ‘Gate Pass’. The belongings will also be checked on the way out of LNMIIT Jaipur along with the ‘Gate Pass’; failing to do so will result in the belongings being impounded.",
            "All guests will be provided with mattresses and a blanket. Plinth will not provide a mattress cover or pillows and subsequently, are encouraged to arrange them independently (if required).",
            "Any commodities issued to the guests would have to be returned in sound condition to the organizers during check-out.",
            "Random checks would be made to avoid any illegal stay at the campus. Any team failing to produce their electronic/physical receipts of accommodation would be heavily fined and disqualified.",
            "Entry will be only through the ‘Main Gate’ of LNMIIT Jaipur. All other gates will be closed for entry.",
            "All guests are required to carry their valid government photo ID proofs at all times. In addition, the student participants are also required to carry their valid College photo ID card. Any guest failing to produce their ID card will not be permitted inside the campus during Plinth 2024.",
            "Alcohol, drugs, sharp objects, and explosives of any kind are strictly prohibited inside the campus and items deemed unsafe will be prohibited. The decision of the Security and Plinth team will be final in any dispute.",
            "No outside vehicles will be allowed into the campus during Plinth 2024.",
            "All the guests are required to maintain the decorum and cleanliness of the campus and follow the rules of the campus.",
            "Plinth 2024 and LNMIIT will not be responsible for any mishaps that occur throughout the duration of stay for Plinth 2024.",
          ].map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </Section>

      {/* Register Button */}
      <Section animationVariant={rightToLeft}>
        <div className="flex justify-center">
          <a href="https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543"
          target="_blank">
          <button
            className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#A7F818] text-black font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide rounded-md shadow-lg hover:bg-[#c0fc34] transition-all w-[200px] sm:w-[250px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Register Now!
          
          </button>
          </a>
        </div>
      </Section>
      </div>
    </div>
  );
};

export default Accomodation;
