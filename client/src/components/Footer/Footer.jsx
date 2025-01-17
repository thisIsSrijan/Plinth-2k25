import insta from "../../assets/footer/insta.png";
import linkd from "../../assets/footer/linkedin.png";
import plinthtext2 from "../../assets/footer/Logo.svg";
import Gdg from "../../assets/footer/gdg.svg";
import Web from "../../assets/footer/Web.png";
import Phone from "../../assets/footer/Phone.png"; // Make sure this is the phone image
import bg from "../../assets/footer/bgm.png"; // Background image import
import logo from "../../assets/footer/logo.png";

const Footer = () => {
  return (
    <div className="w-100% flex flex-col relative  flex-wrap text-white overflow-hidden ">
      <div className="flex flex-col md:flex-row w-full justify-around items-center gap-x-[20vw] lg:gap-x-[10vw] md:gap-x-[8vw] gap-y-6 p-10 bg-black ">
        <div className="flex flex-col w-full gap-5 uxsm:mx-auto md:mx-0  ">
          <div className="flex  items-center gap-2  ">
            {/* Logo */}
            <img src={logo} alt="Plinth Logo" className="xl:w-[8rem]  xl:h-[6rem] lg:w-[8rem] lg:h-[6rem] xl:mt-6 md:w-[6rem] md:h-[4rem] lg:mt-5 md:mt-5 xsm:w-[7rem] xsm:h-[5rem] uxsm:w-[5rem] uxsm:h-[4rem] uxsm:mx-auto md:mx-0" />
            {/* Text */}
            <div className="font-cynatar items-center tracking-wide text-white 2xl:text-[8rem] xl:text-[6rem] lg:text-[3rem] md:text-[4rem] sm:text-[5rem] uxsm:text-[2.8rem] xsm:text-[3rem] font-[400] textfamily3 w-[37rem] 2xl:w-[50rem] xl:w-[40rem] md:w-[25rem]">
              PLINTH 25
            </div>
          </div>
          {/* Subtitle */}
          <div className="font-melete bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent text-center md:mt-[-3rem] uxsm:mt-[-2rem] uxsm:text-[0.5rem] xsm:text-[0.8rem] md:text-[1rem]">
            A CYBER PARADOX
          </div>
          {/* Social Media Links */}
          <div className="flex justify-center gap-[2rem] mt-3 ">
            <a
              href="https://www.instagram.com/plinth.lnmiit/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={insta} alt="Instagram" className="w-8 h-8" />
            </a>
            <a
              href="https://www.linkedin.com/company/plinthlnmiit/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkd} alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="mailto:plinth@lnmiit.ac.in">
              <img src={Web} alt="Web" className="w-8 h-8" />
            </a>
          </div>
        </div>


        <div className="flex flex-col w-full   gap-5">
          <h2 className="text-center  font-melete font-normal tracking-[0.16em] text-2xl md:text-2xl sm:text-lg">
            CONTACT US:
          </h2>
          <div className="flex-col justify-around mx-auto">
            <ul className="list-none pl-[2.3rem]">
              <li className="flex items-center font-poppins font-normal leading-6 tracking-[0.16em] text-center text-[1rem] ">
                <img src={Phone} alt="phone icon" className="w-5 h-5 mr-2 " />{" "}
                YUG AGGARWAL : 8299099721
              </li>
              <li className="flex items-center font-poppins font-normal leading-6 tracking-[0.16em] text-center text-[1rem] ">
                <img src={Phone} alt="phone icon" className="w-5 h-5 mr-2" />{" "}
                RAJAT SHARMA : 8972192855
              </li>
            </ul>
          </div>
          <div className="flex flex-row gap-[4rem] text-center mx-auto">
        <div>
          <p className="xl:text-[1.2rem] lg:text-[1rem]">
            <a href="#">ALL RIGHTS RESERVED</a>
          </p>
          <p className="xl:text-[1.2rem] lg:text-[1rem]">
            <a href="#">PLINTH LNMIIT </a>
          </p>
        </div>
        <div>
          <p className="xl:text-[1.2rem] lg:text-[1rem]">
            <a href="#">ABOUT US</a>
          </p>
          <p className="xl:text-[1.2rem] lg:text-[1rem]">
            <a href="#">PRIVACY POLICY</a>
          </p>
        </div>
        </div>
        

        </div>
      </div>

      <div
        className=" text-black realtive bottom-0 w-full flex justify-center items-center "
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <a
          href="https://gdg.community.dev/gdg-on-campus-the-lnm-institute-of-information-technology-jaipur-india/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="font-poppins text-[12px] sm:text-[16px] xsm:text-[10px] md:text-2xl font-normal tracking-[0.16em] text-center">
            <img
              src={Gdg}
              alt="GDG logo"
              className="inline-block w-8 h-8 mr-3"
            />
            Designed and Developed by GDG on Campus, LNMIIT
          </p>
        </a>
      </div>
    </div>

  );
};

export default Footer;
