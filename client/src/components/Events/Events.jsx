import React from "react";
import Navbar from "../LandingPage/Navbar";
import img1 from "../../assets/Events/eventschirag.png";
import img2 from "../../assets/Events/eventsarpit.png";
import img3 from "../../assets/Events/bar1.png";
import sunburnlogo from "../../assets/Events/sunburnlogo.png"
import img4 from "../../assets/Events/ninasuerte.png";
import img5 from "../../assets/Events/maskbox.png";
import img6 from "../../assets/Events/anandprerak.png";
import img7 from "../../assets/Events/bar2.png";
import tribeslogo from "../../assets/Events/tribelogo.png"
import mobCh from "../../assets/Events/mobile-chirag.png";
import mobsh from "../../assets/Events/mobile-shailey.png"
import mobar from "../../assets/Events/mobile-arpit.png"
import imgbox1 from "../../assets/Events/mobileViewBox.jpeg";





const Events=()=>{
    return(
        <div>
                {/* desktop */}
                <div className="md:block hidden">
                    <div className='w-[100%] aspect-[1728/3351]  bg-black relative overflow-x-hidden'>
                        <Navbar/>

                        {/* day 1 */}
                        <div className='w-[100%] h-[25%]'>
                            <div className='absolute   w-[29%] h-[88%] top-[5%] '>
                                <img src={img1}></img>
                            </div>
                            <div className='absolute w-[34%] h-[95%] left-[69%] top-[6.08%]'>
                                <img src={img2}></img>
                            </div>
                            <div className="absolute flex flex-col w-[44.42%] h-[49.92%] top-[3.00%] left-[37.85%] "
                            style={{
                                rotate:'-3.97deg'
                            }}>
                                <div className=" absolute  font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[12rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth z-10">
                                     DAY 1
                                </div>
                                <div className="font-cynatar  mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 z-1 plinth z-50">
                                    DAY 1
                                </div>
                
                            </div>
                            <div className='w-[48.58%] h-[4.13%] top-[16.40%] left-[35.45%] absolute'>
                                <p className='c1:text-[4rem] 2xl:text-[1.8rem] xl:text-[2rem] lg:text-[1.5rem] md:text-[1.3rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]'>JAN 24,2025</p>
                            </div>
                            <div className=' z-10  w-[125.75%]  h-[28.37%]  absolute top-[27.25%]'>
                                <img className="rotate-[0.83deg]"  src={img3}></img>
                            </div>
                            <div className="rotate-[2.9deg] z-20 w-[89.17%] h-[8.03%]  absolute top-[31%] left-[4.94%] c1:text-[4rem] 2xl:text-[3.5rem] xl:text-[2.3rem] lg:text-[2.4rem] md:text-[1.9rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white font-melete font-[400] ">JAMMING & BONFIRE</div>
                            {/* <div  className=" w-full h-full top-[107.25%] absolute  glowing-div"></div> */}

                        </div>

                        {/* day 2 */}
                        <div className='w-full  '>
                            <div className="w-[44.76%] h-[49.45%] top-[35.31%] left-[56.47%] flex flex-col absolute " 
                            style={{
                                rotate:'-3.97deg'
                            }}>
                                <div className="absolute    font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth">
                                    DAY 2
                                </div>
                                <div className="  font-cynatar mr-4 c1:text-[20rem] tracking-wide 2xl:text-[15rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 z-1 plinth">
                                    DAY 2
                                </div>
                                
                            </div>
                            <div className=''>
                                    <p className='absolute top-[48%] w-[44.76%] left-[58.47%] c1:text-[4rem] 2xl:text-[1.8rem] xl:text-[2rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]'>JAN 25,2025</p>
                                </div>
                            <div className='flex flex-row w-[44.76%] absolute top-[51%] left-[56.47%] gap-x-[4%]'>
                                <img className="aspect-[1.89] w-[47.19%]" src={sunburnlogo}></img>
                                <img className=" w-[33.36%] h-[10%]" src={tribeslogo}></img>
                            </div>

                            <div className='w-[60.32%] h-[39%] top-[33%] left-[-1%] absolute '>
                                <img src={img4}></img>
                                <p className="text-white font-cyntara">NINA SUERTE</p>
                            </div>

                            <div className=' w-[36.75%] h-[25.33%] top-[48.82%] left-[28.18%] absolute '>
                                <img src={img5}></img>
                                <p className="text-white font-cyntara">MASKBOX</p>

                            </div>
                            <div className='absolute w-[30.80%] h-[18.11%] top-[56.1%] left-[-0.31%] '>
                                <img src={img6}></img>
                                <p className="text-white font-cyntara">PRERAK ANAND</p>
                            </div>


                            <div className='z-10 w-[125.77%] h-[7.3%] absolute top-[68%] '> 
                                <img className='rotate-[-3.11deg]' src={img7}></img>
                            </div>
                            <div className="rotate-[-5.9deg] z-20 w-[89.21vw] h-[2.09vh] absolute top-[72.9%] left-[9%] c1:text-[4rem] 2xl:text-[3.8rem] xl:text-[2.9rem] lg:text-[2.6rem] md:text-[1.8rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white font-melete font-[400] ">SUNBURN CAMPUS</div>      
                            {/* <div  className=" w-full h-full top-[1892.25%] absolute  glowing-div"></div> */}

                        </div> 

                        {/* day3 */}
                        <div className='w-full h-auto '>
                            <div className="w-[44.02%] h-[49.12%] flex flex-col absolute top-[81%] left-[32.06%]">
                                    <div className="absolute left-[0.6vh]  font-cynatar uxsm:text-s tracking-wide c1:text-[20rem] 2xl:text-[14rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily plinth">
                                        DAY 3
                                    </div>
                                    <div className="  font-cynatar mr-4 c1:text-[20rem] tracking-wide 2xl:text-[14rem] xl:text-[13rem] lg:text-[12rem] md:text-[9rem] sm:text-[8rem] xsm:text-[5rem] uxsm:text-[4.5rem] font-[400] textfamily3 z-1 plinth">
                                        DAY 3
                                    </div>
                            </div>
                            <div className='absolute top-[93%] left-[32.06%]'>
                                        <p className='c1:text-[4rem] 2xl:text-[1.8rem] xl:text-[2rem] lg:text-[1.3rem] md:text-[1.3rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]'>JAN 26,2025</p>
                            </div>
                            <div className='absolute w-[68%] h-[1.22%] top-[104.99%] left-[19.09%]'>
                                    <p className='c1:text-[4rem] 2xl:text-[2.5rem] xl:text-[2.0rem] lg:text-[2.4rem] md:text-[1.7rem] sm:text-[1.2rem] xsm:text-[1rem] text-white font-melete font-[400]'>REVEALING SOON</p>
                            </div>
                            <div className='z-10 w-[125.77%] h-[7.37%] top-[120.93%] left-[-8.9%] absolute '>
                                <img className='rotate-[1.02deg]' src={img3}></img>
                            </div>
                            <div className="rotate-[3.2deg] z-20 absolute top-[124.4%] left-[9%] c1:text-[4rem] 2xl:text-[3.8rem] xl:text-[2.3rem] lg:text-[2.5rem] md:text-[1.9rem] sm:text-[1.5rem] xsm:text-[1.3rem] text-white font-melete font-[400] ">BOLLYWOOD NIGHT</div>   
                            {/* <div  className=" w-full  absolute top-[323%] glowing-div"></div> */}

                        </div>
                    </div>
                </div>

                {/* mobile */}
                <div className="md:hidden block">
                    <div className='w-[100%] aspect-[1728/3800]  bg-black relative overflow-x-hidden'>
                        <Navbar/>

                        {/* day1 */}
                        <div className="w-[64.99%] h-[5.57%] absolute top-[14.89%] left-[28.28%] flex flex-col ">
                            <p className="w-[100%] text-[1.2rem] xsm:text-[1.7rem] sm:text-[2.3rem] font-melete font-[400] textfamily3 plinth"
                            style={
                            {
                                rotate:'10deg'
                            }}
                            >DAY 1</p>
                            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">24 JAN'25</p>
                        </div>
                        <div className="w-[50.92%] h-[19.47%] absolute top-[25.07%] left-[25.28%]">
                            <img src={imgbox1} alt="" />
                        </div>
                        <img className="z-20 w-[24.67%] h-[16.84%] absolute top-[24.77%] left-[26.44%]" src={mobCh}></img>
                        <img className="z-10 w-[32.58%] h-[10.97%] absolute  top-[30.94%] left-[35.54%]" src={mobsh}></img>
                        <img className="z-20 w-[24.24%] h-[15.52%] absolute  top-[26.39%] left-[49.59%]" src={mobar}></img>
                        <div className="w-[50.92%] h-[19.47%] absolute top-[42.57%] left-[30.28%]">
                            <div className=" text-[0.35rem] sm:text-[0.7rem] xsm:text-[0.6rem] text-white font-melete font-[400] "> BONFIRE & JAMMING </div>
                        </div>
                        
                        {/* day2 */}
                        <div className="w-[49.99%] h-[5.57%] absolute top-[50.89%] left-[29.28%] flex flex-col ">
                            <p className="w-[100%] text-[1.2rem] xsm:text-[1.7rem] sm:text-[2.3rem] font-melete font-[400] textfamily3 plinth"
                            style={
                            {
                                rotate:'10deg'
                            }}
                            >DAY 2</p>
                            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">25 JAN'25</p>
                        </div>
                        <div className="z-10 w-[72.91%] h-[23.31%] absolute top-[59.31%] left-[14.29%]">
                            <img src={imgbox1} alt="" />
                        </div>
                        <img className="z-20 w-[49.67%] h-[28.84%] absolute top-[56.07%] left-[29.44%]" src={img4}></img>
                        <img className="z-10 w-[36.58%] h-[15.97%] absolute  top-[66.94%] left-[48.54%]" src={img5}></img>
                        <img className="z-10 w-[34.24%] h-[15.52%] absolute  top-[66.39%] left-[16.59%]" src={img6}></img>

                        <div className="z-10 w-[50.92%] h-[19.47%] absolute top-[84.57%] left-[30.28%]">
                            <div className=" text-[0.45rem] sm:text-[0.8rem] xsm:text-[0.7rem] text-white font-melete font-[400] ">SUNBURN CAMPUS </div>
                        </div>
                        


                        {/* day3 */}
                        <div className="w-[49.99%] h-[5.57%] absolute top-[95.89%] left-[29.28%] flex flex-col ">
                            <p className="w-[100%] text-[1.2rem] xsm:text-[1.7rem] sm:text-[2.3rem] font-melete font-[400] textfamily3 plinth"
                            style={
                            {
                                rotate:'10deg'
                            }}
                            >DAY 3</p>
                            <p className="text-white font-melete font-[400] text-[0.8rem] xsm:text-[1rem] sm:text-[1.5rem]">26 JAN'25</p>
                        </div>

                        <div className="z-10 w-[72.91%] h-[23.31%] absolute top-[104.31%] left-[14.29%]">
                            <img src={imgbox1} alt="" />
                        </div>
                        <div className="z-10 w-[50.92%] h-[19.47%] absolute top-[129.57%] left-[27.28%]">
                            <div className=" text-[0.45rem] sm:text-[0.8rem] xsm:text-[0.7rem] text-white font-melete font-[400] ">BOLLYWOOD NIGHT </div>
                        </div>
                        <div className="z-10 w-[43.86%] h-[4.76%] absolute top-[115%] left-[30%]">
                            <p className="font-monument text-white font-[400] text-[1.3rem] xsm:text-[2rem]">REVEALING SOON</p>
                        </div>
                    </div>
                </div>
        </div>
        
    )
};
export  default Events;