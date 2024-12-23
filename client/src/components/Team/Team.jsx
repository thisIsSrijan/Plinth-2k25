import React from "react";

import Card from "./Card";
const plinth = "/assets/plinth.png";
const member = "/assets/member.png";

const Team = () => {
  return (
    <div className="bg-black h-full w-full text-white flex flex-col justify-center">
      {/* This is the team section of the website */}
      <section className="flex flex-col items-center justify-start pt-14 w-full">
        <h2 className="font-poppins font-semibold  leading-[8px] tracking-[0.35em] text-center text-[#A7F818] text-4xl md:text-[70px]">
          OUR TEAM
        </h2>
      </section>

      {/* Centered Image */}
      <div className="flex items-center justify-center w-full h-full my-14 relative">
  <img src={plinth} alt="" className="h-auto  object-cover md:w-[80%]" />
  <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
</div>


      {/* Various team divisions */}
      <section className="flex flex-col w-full gap-10">
        {/* Developers Team */}
        <div className="mt-14 flex flex-col w-full justify-between">
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[11px] h-[20px]">
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
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[11px] h-[20px]">
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
          <div className="bg-[#A7F818] text-black flex items-center justify-center text-[24px] font-poppins font-semibold leading-[5px] h-[20px]">
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
