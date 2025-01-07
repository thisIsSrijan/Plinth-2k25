import Navbar from "./Navbar";
import { GlowEllipse } from "../../assets/competition/svg";
import { FaLocationDot } from "react-icons/fa6";
import { IoLocationOutline } from "react-icons/io5";

const LandingPage = () => {
    return (
        <div className="w-full uxsm:h-full md:h-full bg-black overflow-hidden">
            {/* <Navbar></Navbar> */}
            <div className="flex flex-col justify-center text-center items-center uxsm:mt-16 md:mt-0  w-full">
                <div className="flex flex-col justify-center items-center relative mt-[8rem]">
                    <div  className="absolute font-cynatar  w-[90rem] c1:text-[20rem] 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[5rem] font-[400] textfamily  plinth">
                        PLINTH 25
                    </div>
                    <div  className="w-[90rem] font-cynatar mr-4 c1:text-[20rem] 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[5rem] font-[400] textfamily3 z-1   plinth">
                        PLINTH 25
                    </div>
                   
                    
                </div>
                    <div  className="c1:text-[4rem] 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2rem] md:text-[1.8rem] sm:text-[1.7rem] xsm:text-[1.3rem] uxsm:text-[1.2rem]  greencolor md:mt-[6rem] uxsm:mt-[10rem] font-melete">24-26 JAN 2025</div>
                    <div  className="flex c1:text-[3.5rem] 2xl:text-[2rem] xl:text-[1.8rem] lg:text-[1.5rem] md:text-[1.3rem] sm:text-[1.4rem] xsm:text-[0.8rem] uxsm:text-[0.7rem] text-white greycolor font-melete"><span className="greycolor"><IoLocationOutline className="md:text-[2rem] sm:text-[1.5rem] xsm:text-[1.5rem] uxsm:text-[1rem]"></IoLocationOutline></span>LNMIIT,JAIPUR</div>
                
                    {/* <div className="mt-10 z-10">
                    <button className="w-[15rem] rounded-[2rem] border-2 border-[#666666] bg-[#1A1A1A] text-white py-2 shadow-inner shadow-[#c6c6c6] poppins-medium greycolor">
                        Who We Are?
                     </button>
                     
                </div> */}
                  <button
  className="mt-6 2xl:w-[25.5rem] xl:w-[22.5rem] lg:w-[18.5rem] md:w-[15.5rem] sm:w-[10.5rem] uxsm:w-[10rem]
    h-[3.75rem] rounded-[1.25rem] border-2 border-[#6666664D] 
    c1:text-[2rem] 2xl:text-[1.5rem] xl:text-[1.4rem] lg:text-[1.3rem] md:text-[1.2rem] sm:text-[1.1rem]  poppins-medium bg-[#1A1A1A]  shadow-[inset_0_0_10px_2px_#C6C6C640] 
    text-[#fff] relative overflow-hidden
    transition-all duration-300 ease-in-out
    hover:text-[#A7F818] hover:shadow-[inset_0_0_20px_#A7F818,0_0_40px_#A7F818]"
>
  <span className="relative ">Who We Are?</span>
  <span className="absolute inset-0 bg-[#A7F818] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
  <span className="absolute inset-0 border border-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
</button>

                

            <div className=" uxsm:w-full absolute uxsm:right-0 md:right-20 font-melete lg:mt-[8rem] md:mt-[5rem] sm:mt-[4rem] uxsm:mt-[3rem]  mb-[5rem] c1:text-[2.3rem] 2xl:text-[1.8rem] xl:text-[1.5rem] lg:text-[1.3rem] md:text-[1.1rem] sm:text-[0.9rem] uxsm:text-[0.5rem] ml-[20rem] flex justify-end items-end greycolor">A CYBER PARADOX</div>
            </div>
            <div class="glowing-div"></div>

        </div>
    )
};

export default LandingPage;



















