import { motion } from "framer-motion";

const About = ({
    title = "",
    description = "",
    buttontext = "",
    buttonlink = ""
}) => {
    return (
        <div className="w-full min-h-[100vh] bg-black relative overflow-hidden ">
            
            <div className="glowing-div bottom-1/2 "></div>
            <div className="flex flex-col gap-10 justify-center items-center z-10  ">

                <motion.div
                    className="c1:text-[4rem] 2xl:text-[2.5rem] xl:text-[2.3rem] lg:text-[2rem] 
                    md:text-[1.8rem] sm:text-[1.5rem] xsm:text-[1.3rem] font-melete font-[400] 
                    bg-gradient-to-b from-[#A7F818] to-[#4F6203] bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: -50 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    {title}
                </motion.div>

                <motion.div
                    className=" h-fit 2xl:text-[1.875rem] xl:text-[1.5rem] lg:text-[1.5rem] md:text-[1.3rem] 
                    sm:text-[1.3rem] xsm:text-[1.1rem] c1:max-w-[110rem] uxl:max-w-[80rem] 2xl:max-w-[70rem] 
                    xl:max-w-[60rem] lg:max-w-[50rem] md:max-w-[40rem] sm:max-w-[30rem] xsm:max-w-[25rem] 
                    uxsm:max-w-[20rem] text-justify poppins-medium font-[400] bg-gradient-to-b from-white to-gray-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, x: -100 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    {description}
                </motion.div>

                <div className="z-10">
                    <a href={buttonlink} target="_blank" rel="noopener noreferrer">
                        <button
                            className="2xl:w-[18.5rem] xl:w-[16.5rem] lg:w-[16.5rem] md:w-[13rem] sm:w-[10rem] uxsm:w-[10rem] 
                            h-[3.3rem] rounded-[1.25rem] border-1 border-[#6666664D] uxsm:text-[1.2rem]
                            md:text-[1.5rem] poppins-medium bg-[#171717] shadow-[inset_0_0_10px_1px_#C6C6C640] 
                            text-[#fff] relative overflow-hidden
                            transition-all duration-300 ease-in-out 
                            hover:text-[#A7F818] hover:shadow-[inset_0_0_20px_#A7F818,0_0_40px_#A7F818] mb-5"
                        >
                            <span className="relative ">{buttontext}</span>
                            <span className="absolute inset-0 bg-[#A7F818] transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                            <span className="absolute inset-0 border border-white opacity-20 transform scale-x-0 origin-left transition-transform duration-300 ease-in-out hover:scale-x-100"></span>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default About;
