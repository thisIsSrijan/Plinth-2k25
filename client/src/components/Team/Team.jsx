import React, { useState, useEffect } from "react";
import data from './data.json';
import Card from "./Card";
const plinth = "/assets/plinth.png";
const member = "/assets/member.png";

const Team = () => {
  // Move useState and useEffect inside the Team component
  const [teamData, setTeamData] = useState(null);

  useEffect(() => {
    // Here, you can directly use the imported JSON file
    setTeamData(data);
  }, []);

  // Ensure that teamData is loaded before trying to map over it
  if (!teamData) return <div>Loading...</div>;

  return (
    <div className="bg-black h-full w-full text-white flex flex-col justify-center">
      {/* This is the team section of the website */}
      <section className="flex flex-col items-center justify-start pt-14 w-full">
        <h2 className="font-poppins font-semibold leading-[8px] tracking-[0.35em] text-center text-[#A7F818] text-4xl md:text-[70px] lg:text-[90px] xl:text-[100px]">
          OUR TEAM
        </h2>
      </section>

      {/* Centered Image */}
      <div className="flex items-center justify-center w-full h-full my-14 relative">
        <img src={plinth} alt="" className="h-auto w-full object-cover md:w-[100%]" />
        <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
        <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[rgb(0,0,0)] via-transparent to-[rgba(0,0,0)]"></div>
      </div>

      {/* Various team divisions */}
      <section className="flex flex-col w-full gap-10">
        {/* Developers Team */}
        <div className="mt-14 flex flex-col w-full justify-between">
          <div className="bg-[#A7F818] py-8 text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[11px] h-[20px]">
            DEVELOPERS TEAM
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
              {teamData.developers.map((member, index) => (
                <Card key={index} name={member.name} designation={member.designation} image={member.image} />
              ))}
            </div>
          </div>
        </div>

        {/* Design Team */}
        <div>
          <div className="bg-[#A7F818] py-8 text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[11px] h-[20px]">
            DESIGN TEAM
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
              {teamData.designers.map((member, index) => (
                <Card key={index} name={member.name} designation={member.designation} image={member.image} />
              ))}
            </div>
          </div>
        </div>

        {/* Content Team */}
        <div>
          <div className="bg-[#A7F818] py-8 text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[5px] h-[20px]">
            CONTENT TEAM
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 p-4">
              {teamData.content.map((member, index) => (
                <Card key={index} name={member.name} designation={member.designation} image={member.image} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
