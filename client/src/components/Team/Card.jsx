import { Mail, Linkedin, Instagram } from 'lucide-react';

const Card = ({ name, designation, image, linkedin, email, instagram }) => {
  const aws = import.meta.env.VITE_AWS;
  const imageUrl = `${aws}${image}`;

  return (
    <div className="ml-2 group relative rounded-[15px] w-[280px] h-[400px] border-[2px] border-[#A7F818] p-3 lg:w-[200px] lg:h-[300px] xl:w-[280px] xl:h-[380px] overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-[#A7F818]/50">
      {/* Container with the image and text */}
      <div className="relative w-full h-full">
        {/* Image */}
        <img
          src={imageUrl}
          alt="Member"
          className="rounded-[15px] w-full h-full object-cover object-center transition-transform duration-300 "
        />

        {/* Black gradient at the bottom */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black/85 to-transparent rounded-b-[15px] transition-opacity duration-300 group-hover:opacity-0"></div>

        {/* Text elements */}
        <h2 className={` ${designation === "Associate General Secretary" ? "!leading-[18px] " : "" } uppercase absolute bottom-28 left-[18px] text-[#C0C0C0FC] font-poppins font-semibold text-[20px] leading-[5px] lg:text-[15px] lg:leading-[3px] xl:text-[20px] xl:leading-[20px] transition-all duration-300 group-hover:bottom-32 group-hover:text-[#A7F818]`}>
          {designation}
        </h2>
        <h1 className={` ${name === "Ravindra Singh Shekhawat" ? "!text-[28px]" : "" } absolute w-[230px] h-[92px] bottom-0 left-[18px] text-white font-poppins text-[35px] font-semibold leading-[30px] text-left decoration-slice lg:text-[30px] lg:leading-[25px] lg:w-[180px] lg:h-[70px] lg:bottom-7 xl:h-[92px] xl:text-[35px] xl:leading-[32px] xl:w-[230px] xl:bottom-0 transition-all duration-300 group-hover:bottom-4`}>
          {name}
        </h1>

        {/* Social Media Icons */}
        <div className="absolute right-2 bottom-2 flex space-x-3 md:bottom-0 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:bottom-4">
          {/* {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
              <Linkedin className="text-white w-6 h-6 hover:text-[#A7F818] transition duration-300" />
            </a>
          )}
          {email && (
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
              <Mail className="text-white w-6 h-6 hover:text-[#A7F818] transition duration-300" />
            </a>
          )} */}
          {instagram && (
            <a href={instagram} target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
              <Instagram className="text-white w-6 h-6 hover:text-[#A7F818] transition duration-300" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;