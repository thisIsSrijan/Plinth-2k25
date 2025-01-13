
import React from "react";
import "../../assets/melete/Melete-Bold.otf"; // Import the Melete font

import Card from "./Card";
const TeamSection = ({ title, members }) => {
  return (
    <div className="mt-14 flex flex-col w-full justify-between">
      {/* Apply the 'Melete' font to the title */}
      <div
        className="bg-[#A7F818] py-8 text-center text-black flex items-center justify-center text-[17px] leading-[25px] sm:text-[24px] font-melete font-semibold  h-[20px]"

        style={{
          fontFamily: "Melete, sans-serif", // Apply Melete font
        }}
      >
        {title}
      </div>
      <div className="flex justify-around ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-20 p-4 lg:gap-5 xl:gap-10">
          {members?.map((member, index) => (
            <Card
              key={index}
              name={member?.name}
              designation={member?.designation}
              image={member?.image}
              linkedin={member?.linkedin}
              email={member?.email}
              instagram={member?.instagram}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
