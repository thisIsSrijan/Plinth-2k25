import React from "react";

import Card from "./Card";
const plinth = '/assets/plinth.png';
const member = '/assets/member.png';


const Team = () => {
  return (
    <div className="bg-black h-full w-full text-white flex flex-col justify-center">
      {/* This is the team section of the website */}
      <section className=" flex flex-col items-center justify-center h-screen">
        <h2 className="font-poppins font-semibold text-[170px] leading-[11px] tracking-[0.35em] text-center text-[#A7F818]">
          OUR TEAM
        </h2>
        <div className="relative ">
          <img
            src={plinth}
            alt="Image with gradient overlay"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/50 via-black/77 to-black"></div>
        </div>
      </section>

      {/* Various team divisions */}
      <section className="flex flex-col w-full gap-10">
        {/* Developers Team */}
        <div className="flex flex-col w-full justify-between">
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[64px] font-poppins font-semibold leading-[11px] h-[60px]">
            DEVELOPERS TEAM
          </div>
          <div className="flex flex-wrap justify-evenly p-4">
            <Card name="John Doe" designation="Developer" image={member} />
            <Card name="Alice Johnson" designation="Developer" image={member} />
            <Card name="Michael Smith" designation="Developer" image={member} />
            <Card name="Sarah Lee" designation="Developer" image={member} />
          </div>
        </div>

        {/* Design Team */}
        <div>
            <h2 className="font-poppins text-white"> hgudcvjuevcuie</h2>
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[64px] font-poppins font-semibold leading-[11px] h-[60px]">
            DESIGN TEAM
          </div>
          <div className="flex flex-wrap justify-evenly p-4">
            <Card name="John Doe" designation="Designer" image={member} />
            <Card name="Alice Johnson" designation="Designer" image={member} />
            <Card name="Michael Smith" designation="Designer" image={member} />
            <Card name="Sarah Lee" designation="Designer" image={member} />
          </div>
        </div>

        {/* Content Team */}
        <div>
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[64px] font-poppins font-semibold leading-[11px] h-[60px]">
            CONTENT TEAM
          </div>
          <div className="flex flex-wrap justify-evenly p-4">
            <Card name="John Doe" designation="Content Writer" image={member} />
            <Card
              name="Alice Johnson"
              designation="Content Writer"
              image={member}
            />
            <Card
              name="Michael Smith"
              designation="Content Writer"
              image={member}
            />
            <Card
              name="Sarah Lee"
              designation="Content Writer"
              image={member}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
