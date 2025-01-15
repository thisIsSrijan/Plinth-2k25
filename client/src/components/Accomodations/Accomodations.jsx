import React, { useState } from "react";

const plinthAcc = "/assets/Accomodationimg.png";

const Accomodation = () => {

  return (
    <div>
      <div className="bg-black h-full w-full text-white flex flex-col justify-center px-6 sm:px-8 md:px-10 lg:px-14 gap-8 py-10">
        {/* Title Section */}
        <div className="bg-black w-full text-white flex flex-col justify-center items-center">
          <section className="flex flex-col items-center justify-start pt-14 w-full">
            <h2
              className="text-[#A7F818] text-center text-3xl sm:text-4xl md:text-[50px] lg:text-[70px] xl:text-[90px] leading-tight"
              style={{ fontFamily: "Cynatar, sans-serif", letterSpacing: "0.35em" }}
            >
              ACCOMODATION
            </h2>
          </section>

          {/* Centered Image */}
          <div className="flex items-center justify-center w-full h-full my-14 relative">
            <img
              src={plinthAcc}
              alt="Accomodation"
              className="h-auto w-full object-cover md:w-[70%]"
            />
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute inset-0 w-full h-full bg-gradient-to-l from-[rgba(0,0,0,0.8)] via-transparent to-[rgba(0,0,0,0.8)]"></div>
          </div>
        </div>

        {/* Description Section */}
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide font-poppins "
        >
           Plinth, a tech-driven event, offers accommodation passes and Pronite Passes to blend technology with an enjoyable atmosphere.
           The event aims to attract a large crowd and provides secure, comfortable accommodations.The organizers also offer a diverse cafeteria with various cuisines.
        </p>

        {/* Timings Section */}
        <h2
          className="text-[#A7F818] text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug tracking-wide"
          style={{ fontFamily: "Melete" }}
        >
          TIMINGS
        </h2>
        <ul className="list-disc pl-8 text-sm sm:text-base md:text-lg lg:text-xl font-poppins">
          <li>Check-in: 7:00 AM to 10:00 PM on your check-in date</li>
          <li>Check-out: Anytime on or before your check-out date</li>
        </ul>

        {/* Instructions Section */}
        <h2
          className="text-[#A7F818] text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-relaxed tracking-wide"
          style={{ fontFamily: "Melete" }}
        >
          INSTRUCTIONS
        </h2>
        <ul className="list-disc pl-8 text-sm sm:text-base md:text-lg lg:text-xl font-poppins">
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
    "Plinth 2024 and LNMIIT will not be responsible for any mishaps that occur throughout the duration of stay for Plinth 2024."
  ].map((instruction, index) => (
    <li key={index}>{instruction}</li>
  ))}
</ul>

<style jsx>{`
  ul {
    list-style-type: disc;
  }
  
  li::marker {
    color: #A7F818;
  }
`}</style>


        {/* Cancellation Policy Section */}
        <h2
          className="text-[#A7F818] text-left text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal leading-snug tracking-wide"
          style={{ fontFamily: "Melete" }}
        >
          CANCELLATION POLICY
        </h2>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide font-poppins"
        >
          <span className="text-[#A7F818]">•</span> There shall be no refunds for cancellation once the registration process has been completed.
        </p>
        <p
          className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed tracking-wide font-poppins"
        >
          <span className="text-[#A7F818]">•</span> Hence, careful review of the schedule is appreciated.
        </p>

        {/* Checkbox and Agreement Section */}
        <div className="flex justify-center">
          <button
            className="mt-4 px-4 sm:px-6 py-2 sm:py-3 bg-[#A7F818] text-black font-bold text-sm sm:text-base md:text-lg uppercase tracking-wide rounded-md shadow-lg hover:bg-[#c0fc34] transition-all w-[200px] sm:w-[250px]"
            style={{ fontFamily: "Poppins, sans-serif" }}
          >
            Register Now!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Accomodation;
