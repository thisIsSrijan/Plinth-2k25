
import React, { useState, useEffect } from "react";
import data from "./data.json"; // Importing your team data from the JSON file
import TeamSection from "./TeamSection"; // Import the TeamSection component

import "../../assets/cynatar/Cynatar.otf";

const plinth = "/assets/plinth.png";

const Team = () => {
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    setTeamData(data); // Set the data from your JSON file
  }, []);

  return (
    <div className="bg-black h-full w-full text-white flex flex-col justify-center">
      <section
        className="flex flex-col items-center justify-start pt-20 w-full h-screen relative"
        style={{
          backgroundImage: "url('/public/assets/plinth.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h2
          className="text-[#A7F818] text-center text-4xl sm:text-[60px] md:text-[85px] relative z-10 lg:text-[100px] xl:text-[140px]"
          style={{ fontFamily: "Cynatar, sans-serif", letterSpacing: "0.35em" }}
        >
          OUR TEAM
        </h2>
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-t from-transparent to-black"></div>
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[rgb(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)]"></div>
      </section>


      {/* Centered Image */}



      {/* Various team divisions */}
      <section className="flex flex-col w-full justify-center items-center gap-10 font-melete overflow-hidden">
      <TeamSection
    title="FEST HEADS"
    members={teamData?.festHeads} // Properly map fest heads data
  />
  <TeamSection
    title="DEVELOPERS TEAM"
    members={teamData?.developers} // Map correct domain data
  />
   <TeamSection
    title="UI/UX TEAM"
    members={teamData?.uiUx} // Map UI/UX team data
  />
  <TeamSection
    title="PUBLIC RELATIONS TEAM"
    members={teamData?.publicRelations} // Ensure the correct domain
  />
  <div className="flex flex-col gap-2 text-center"><h3 className="text-2xl text-center ">TEAM MEMBERS:</h3>
  <p className="font-poppins  text-center font-medium text-2xl leading-8">Lokesh Malik, Jatin Agrawal, Tushar Agrawal.</p></div>
  
  <TeamSection
    title="EVENT MANAGEMENT TEAM"
    members={teamData?.eventManagement} // Ensure domain match
  />
  <div className="flex w-full  justify-center items-center">
  <TeamSection
    title="CREATIVE TEAM"
    members={teamData?.creative} // Map creative team data
  />

  </div>
  <div className="flex flex-col gap-2 text-center"><h3 className="text-2xl text-center ">TEAM MEMBERS:</h3>
  <p className="font-poppins  text-center font-medium text-2xl leading-8">Yash Jain, Amiya Singh, Kunal Sharma.</p></div>
 
  <TeamSection
    title="SPONSORSHIP TEAM"
    members={teamData?.sponsorship} // Sponsorship data
  />
  <div className="flex flex-col gap-2 text-center"><h3 className="text-2xl text-center ">TEAM MEMBERS:</h3>
  <p className="font-poppins text-center font-medium text-2xl leading-8 px-10">Pratham Agarwal, Shivam Mishra, Jayant Singhal, Akshansh Singh, Nirmaan Chachan, Umang Jindal, Harshal Paliwal, Garvit Goyal, Devashish Tripathi, Anup Kumar Upadhyay, Shrayansh Goinka, Haitaanh Dixit, Rithvik Bansal, Puneet Jeswani, Swarit Srivastava.</p></div>

  <TeamSection
    title="ASSOCIATE GENERAL SECRETARY"
    members={teamData?.associateGeneralSecretary} // AGS data
  />

  <TeamSection
    title="SOCIAL MEDIA"
    members={teamData?.socialMedia} // Social Media team data
  />
   <TeamSection
    title="FINANCE CONVENOR"
    members={teamData?.FinanceConvenor} // Social Media team data
  />
</section>

    </div>
  );
};

export default Team;
