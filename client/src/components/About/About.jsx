const About = ({
    title = "",
    description = "",
    buttontext = "",
    buttonlink = ""
}) => {
    return (
        <div className="w-full h-full bg-black relative overflow-hidden ">
            <div class="glowing-div bottom-1/2 "></div>
            <div className="flex flex-col gap-10 justify-center items-center z-10  ">
                <div className="c1:text-[4rem] 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2rem] md:text-[1.8rem] sm:text-[1.5rem] xsm:text-[1.3rem] greencolor font-melete font-[400] ">{title}</div>
                <div className="text-white h-fit  2xl:text-[1.875rem] xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.3rem] sm:text-[1.3rem] xsm:text-[1.1rem] c1:max-w-[110rem] uxl:max-w-[80rem] 2xl:max-w-[70rem] xl:max-w-[60rem] lg:max-w-[50rem] md:max-w-[40rem] sm:max-w-[30rem] xsm:max-w-[25rem] uxsm:max-w-[20rem] text-justify poppins-medium greycolor font-[400]">{description}</div>
                <div className="z-10">
                    <a href={buttonlink} target="_blank" rel="noopener noreferrer">


                         {/* <button
                            className="2xl:w-[18.5rem] xl:w-[16.5rem] lg:w-[16.5rem] md:w-[13rem] sm:w-[10rem] 
  h-[3.75rem] rounded-[1.25rem] border-2 border-[#666666] shadow-inner shadow-[#c6c6c6] 
  text-[1.5rem] poppins-medium bg-[#1A1A1A] z-10 
  text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 
  hover:text-[#A7F818] hover:bg-blue-700 hover:text-opacity-100 hover:inset-4"
                        >
                            {buttontext}
                        </button> 
                         */}
                        <button
  className="2xl:w-[18.5rem] xl:w-[16.5rem] lg:w-[16.5rem] md:w-[13rem] sm:w-[10rem] uxsm:w-[10rem] 
    h-[3.3rem] rounded-[1.25rem] border-1 border-[#6666664D] uxsm:text-[1.2rem]
    md:text-[1.5rem] poppins-medium bg-[#171717]  shadow-[inset_0_0_10px_1px_#C6C6C640] 
    text-[#fff] relative overflow-hidden
    transition-all duration-300 ease-in-out 
    hover:text-[#A7F818] hover:shadow-[inset_0_0_20px_#A7F818,0_0_40px_#A7F818]"
>
  <span className="relative ">{buttontext}</span>
  <span className="absolute inset-0 bg-[#A7F818] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
  <span className="absolute inset-0 border border-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
</button>


                    </a>
                </div>
            </div>
            {/* <div className={`${title==="CAMPUS AMBASSADOR"?"mb-[40rem] sm:mb-[30rem] md:mb-[20rem] lg:mb-[20rem]":""}`}>

            <div class="glowing-div -z-0 "></div>
            </div> */}
            {/* {title !== "Campus Ambassador" && <div className="glowing-div bottom-1/2"></div>} */}
           {/* <div> className={`glowing-div -z-0 ${title === "Campus Ambassador" ? "mb-10" : ""}`}</div> */}
           <div
    className={`${
        title === "ABOUT PLINTH'25"
            ? "mb-[10rem] uxsm:mb-[16rem] xsm:mb-[20rem] sm:mb-[30rem] md:mb-[24rem] lg:mb-[5rem] "
            : ""
    } glowing-div -z-0`}
></div>

        </div>
    )
}
export default About;