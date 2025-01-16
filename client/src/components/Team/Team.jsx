import React, { useState, useEffect } from "react";
import data from "./data.json"; // Importing your team data from the JSON file
import TeamSection from "./TeamSection"; // Import the TeamSection component
import { motion } from "framer-motion";
import "../../assets/cynatar/Cynatar.otf";

const Team = () => {
  const [teamData, setTeamData] = useState(null);
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeInOut" } },
  };
  useEffect(() => {
    setTeamData(data); // Set the data from your JSON file
  }, []);

  return (
    <div className="bg-black text-white flex flex-col justify-center items-center max-w-[100vw] overflow-hidden">
      <section
        className="flex flex-col items-center justify-center pt-20 w-full min-h-screen relative bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/plinth.png')" }}
      >
        <motion.h2
          className="text-[#A7F818] text-center text-4xl sm:text-[60px] md:text-[85px] lg:text-[100px] xl:text-[140px] relative z-10"
          style={{ fontFamily: "Cynatar, sans-serif", letterSpacing: "0.35em" }}
          initial="hidden"
          animate="visible"
          variants={titleVariants}
        >
          OUR TEAM
        </motion.h2>
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[rgb(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)]"></div>
      </section>

      {/* Various team divisions */}
      <section className="flex flex-col w-full justify-center items-center gap-10 font-melete overflow-hidden px-4 md:px-10 lg:px-20">
        <TeamSection title="FEST HEADS" members={teamData?.festHeads} />
        <TeamSection title="TECH COUNCIL" members={teamData?.TC} />
        <TeamSection title="DEVELOPERS TEAM" members={teamData?.developers} />
        <div className="flex flex-col gap-2 text-center w-full">
          <h3 className="text-2xl">TEAM MEMBERS:</h3>
          <p className="font-poppins font-medium text-2xl leading-8">
          Saanvi Chabaque, Sankalp Jain, Pranshu Saxena, Garvit Jain, Vanshika Thadani
          </p>
        </div>
        <TeamSection title="UI/UX TEAM" members={teamData?.uiUx} />
        <TeamSection title="PUBLIC RELATIONS TEAM" members={teamData?.publicRelations} />

        <div className="flex flex-col gap-2 text-center w-full">
          <h3 className="text-2xl">TEAM MEMBERS:</h3>
          <p className="font-poppins font-medium text-2xl leading-8">
            Lokesh Malik, Jatin Agrawal, Tushar Agrawal.
          </p>
        </div>

        <TeamSection title="EVENT MANAGEMENT TEAM" members={teamData?.eventManagement} />

        <div className="flex flex-wrap w-full justify-center items-center gap-5">
          <TeamSection title="CREATIVE TEAM" members={teamData?.creative} />
        </div>

        <div className="flex flex-col gap-2 text-center w-full">
          <h3 className="text-2xl">TEAM MEMBERS:</h3>
          <p className="font-poppins font-medium text-2xl leading-8">
            Yash Jain, Amiya Singh, Kunal Sharma.
          </p>
        </div>

        <TeamSection title="SPONSORSHIP TEAM" members={teamData?.sponsorship} />

        <div className="flex flex-col gap-2 text-center w-full">
          <h3 className="text-2xl">TEAM MEMBERS:</h3>
          <p className="font-poppins text-center font-medium text-2xl leading-8 px-4 sm:px-10">
            Pratham Agarwal, Shivam Mishra, Jayant Singhal, Akshansh Singh, Nirmaan Chachan, Umang Jindal,
            Harshal Paliwal, Garvit Goyal, Devashish Tripathi, Anup Kumar Upadhyay, Shrayansh Goinka, Haitaanh Dixit,
            Rithvik Bansal, Puneet Jeswani, Swarit Srivastava.
          </p>
        </div>

        {/* <TeamSection title="ASSOCIATE GENERAL SECRETARY" members={teamData?.associateGeneralSecretary} />
        <TeamSection title="SOCIAL MEDIA" members={teamData?.socialMedia} /> */}
      </section>
    </div>
  );
};

export default Team;