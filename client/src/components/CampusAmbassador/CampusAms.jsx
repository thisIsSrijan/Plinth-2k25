import React from 'react'
import CampImg from "../../assets/campusAms/CampusAmbassador.png";
import GreenDot from "../../assets/campusAms/GreenDot.png";

function CampusAms() {
  return (
    <div className="min-h-screen w-screen bg-black flex flex-col items-center gap-[10vw] sm:gap-[5vw] xl:gap-[2vw] py-[4vh]">
      <div className="w-full text-[#a7f818] text-[11vw] md:text-[7vw] xl:text-[6vw] font-cynatar flex flex-col justify-center items-center tracking-widest ">
        <span className="leading-none">CAMPUS</span>
        <span className="leading-none">AMBASSADOR</span>
      </div>

      <div className="w-full text-white flex flex-col md:flex-row justify-center items-center">
        <div className="w-full md:w-1/2 -ml-4 md:ml-0">
          <img src={CampImg} alt="CampImg" />
        </div>
        <div className="w-full md:w-1/2 poppins-regular text-center px-[9vw] md:px-[5vw] text-sm sm:text-base xl:text-xl c1:text-4xl uxl:text-2xl">
          Plinth 2024 is approaching, and the Campus Ambassador Program is
          seeking passionate individuals to join.The program encourages students
          from various fields to register for the festival through a dedicated
          Google form. The more registrations, greater the rewards. For 10+
          registrations, free entry to the festival, unrestricted access to
          pronites, and a swag bag with goodies is provided. A letter of
          recommendation from LNMIIT acknowledges your contribution. For 15+
          registrations, all benefits are included, along with complimentary
          accommodation for the duration of the festival.
        </div>
      </div>
      <div className="bg-[#a7f818]/20 w-[80%] rounded-[4rem] md:rounded-[3rem] flex flex-col justify-center items-center p-8 md:p-6 c1:p-9 c1:py-12 gap-[4vw] md:gap-[2vw]">
        <div className="text-[#a7f818] text-2xl sm:text-3xl xl:text-4xl c1:text-6xl uxl:text-5xl font-melete">
          BENEFITS
        </div>
        <div className="text-white text-sm sm:text-base lg:text-lg c1:text-2xl uxl:text-xl flex flex-col justify-center px-[3vw] poppins-regular gap-2">
          <div className="flex gap-3">
            <span className="w-6 h-3 ">
              <img src={GreenDot} alt="GreenDot" className="mt-2" />
            </span>
            <span>
              For 10+ registrations, participants receive free entry to the
              festival, unrestricted access to pronites, and a swag bag with
              goodies. Additionally, a letter of recommendation from LNMIIT
              acknowledges their contribution.
            </span>
          </div>
          <div className="flex gap-3">
            <span className="w-4 h-3 ">
              <img src={GreenDot} alt="GreenDot" className="mt-2" />
            </span>
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


export default CampusAms