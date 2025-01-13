
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
  className="flex flex-col items-center justify-start pt-14 w-full h-screen relative"
  style={{
    backgroundImage: "url('/public/assets/plinth.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <h2
    className="text-[#A7F818] text-center text-4xl md:text-[70px] relative z-10 lg:text-[90px] xl:text-[120px]"
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
      <section className="flex flex-col w-full gap-10 font-melete overflow-hidden">
        <TeamSection title="DEVELOPERS TEAM" members={teamData?.developers} />
        <TeamSection title="DESIGN TEAM" members={teamData?.designers} />
        <TeamSection title="CONTENT TEAM" members={teamData?.content} />
        <TeamSection title="UI/UX TEAM" members={teamData?.uiUx} />
        <TeamSection title="COUNCIL TEAM" members={teamData?.council} />
        <TeamSection title="TECH TEAM" members={teamData?.tech} />
        <TeamSection
          title="FEST HEADS"
          members={teamData?.creativeFestHeads}
        />
        <TeamSection title="SPONSORSHIP TEAM" members={teamData?.sponsorship} />
        <TeamSection
          title="PR MANAGEMENT TEAM"
          members={teamData?.prManagement}
        />
      </section>
    </div>
  );
};

export default Team;