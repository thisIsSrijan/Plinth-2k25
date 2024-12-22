import React from "react";

const linkd = '/assets/linkedinp.png'
const mail = '/assets/emailp.png'
const insta = 'assets/instagramp.png'
const Card = ({ name, designation, image, linkedin, email, instagram }) => {
  return (
    <div className="relative rounded-2xl w-80 h-1/2 border-2 border-[#A7F818] p-5">
      {/* Container with the image and text */}
      <div className="relative w-full h-full">
        {/* Image with relative positioning */}
        <img
          src={image}
          alt="Member"
          className="rounded-2xl w-full h-full object-cover"
        />

        {/* Text elements on top of the image */}
        <h2 className="absolute bottom-20 left-2 text-white font-poppins text-2xl">
          {designation}
        </h2>

        <h1 className="absolute bottom-10 left-2 text-white font-poppins text-3xl">
          {name}
        </h1>

        {/* Social Media Icons */}
        <div className="absolute right-3 bottom-2 flex space-x-2">
          {
            <a href={linkedin} target="_blank" rel="noopener noreferrer">
              <img src={linkd} alt="LinkedIn" className="w-8 h-8" />
            </a>
          }
          {
            <a
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={mail} alt="Email" className="w-8 h-8" />
            </a>
          }
          {
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
          }
        </div>
      </div>
    </div>
  );
};

export default Card;
