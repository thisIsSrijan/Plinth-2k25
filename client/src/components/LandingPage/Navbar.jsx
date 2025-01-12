import logo from "../../assets/landingpage/NEW LOGO  1.svg";
import Menubar from "./Menubar";

const Navbar = () => {
  return (
    <div className="text-white w-full h-[6rem] flex justify-between items-center fixed z-10 overflow-hidden  bg-black/5 backdrop-blur-sm rounded-lg">
      <div className="">
        <img src={logo} alt="Plinth Logo" className="sm:h-[5rem] xsm:h-[4rem] uxsm:h-[4rem]" />
      </div>
      <div className="flex flex-row justify-center items-center gap-8 mb-5 ">
        <a
          href="#"
          className="md:flex items-center justify-center w-fit h-full c1:text-[2rem] 
  2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.1rem] 
   poppins-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] 
  hover:text-[#A7F818] hover:opacity-80 hover:bg-none uxsm:hidden mt-6"
        >
          Competitions
        </a>
        <a
          href="#"
          className="md:flex items-center justify-center max-w-fit h-full c1:text-[2rem] 
  2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.1rem] 
   poppins-medium text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] to-[#999999] 
  hover:text-[#A7F818] hover:opacity-80 hover:bg-none uxsm:hidden mt-6"
        >
          About Us
        </a>

        {/* <button className="c1:w-[35rem] c1:h-[6rem] mt-6  2xl:w-[25.5rem] xl:w-[22.5rem] lg:w-[20.5rem] md:w-[18.5rem] sm:w-[16.5rem] h-[3.50rem] rounded-[1.25rem] border-2 bg-[#1A1A1A] border-[#666666]  shadow-inner shadow-[#c6c6c6] c1:text-[3rem] 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.1rem] poppins-medium greycolor">Register</button> */}
        <button
          className="mt-6  2xl:w-[12.5rem] xl:w-[11.5rem] lg:w-[10.5rem] md:w-[9.5rem] sm:w-[8.5rem] uxsm:w-[7.5rem] uxsm:mr-24 xsm:mr-20 md:mr-8
    h-[3.5rem] md:rounded-[1.25rem] border-2 border-[#6666664D] rounded-[2rem]
    c1:text-[2rem] 2xl:text-[1.5rem] xl:text-[1.2rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.1rem] poppins-medium bg-[#131313]  shadow-[inset_0_0_10px_1px_#C6C6C640] 
    text-[#fff] relative overflow-hidden 
    transition-all duration-300 ease-in-out
    hover:text-[#A7F818] hover:shadow-[inset_0_0_10px_#A7F818,0_0_30px_#A7F818] "
        >
          <span className="relative z-10">Register</span>
          <span className="absolute inset-0 bg-[#A7F818] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
          <span className="absolute inset-0 border border-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
        </button>





      </div>
    {/* <Menubar></Menubar> */}

    </div>
  );
};

export default Navbar;