import varsityImage from '../../assets/competition/varsity.png';
import varsityImage2 from '../../assets/competition/varsity2.png';
import tshirt from "../../assets/competition/tshirt.png"
import wtshirt from "../../assets/competition/wtshirt.png"
import hoodie from "../../assets/competition/hoodie.png"
import btshirt from "../../assets/competition/btshirt.png"
import blackhoodie from "../../assets/competition/blackhoodie.png"
import {Bluehoodie} from "../../assets/competition/svg.js"
const MerchGrid = () => {
  return (
    <>

<div className='flex flex-col h-full w-full bg-black gap-[0.5rem] muxsm:pt-[3rem] xl:pt-[6rem]'>
    <div className='flex flex-row items-stretch w-full bg-black gap-[0rem] '>
        <div className='flex flex-col bg-black gap-[0.5rem] w-[25.5vw]  py-[0rem] items-center ml-[16.5vw]'>
            
            <div className='flex  muxsm:h-[35vw] muxsm:w-[45vw] xl:h-[18.8vw] xl:w-[25vw] object-contain '>
                <img src={varsityImage} alt="image" className=' w-full h-full object-cover ' />
            </div>

            <div className='flex bg-red-900 muxsm:h-[35vw] muxsm:w-[45vw] xl:h-[15.8vw] xl:w-[25vw]'>
                <img src={tshirt} className="w-full h-full" alt="image" />
            </div>

            <div className='flex bg-red-500 muxsm:h-[35.8vw] muxsm:w-[45vw] xl:h-[18.3vw] xl:w-[25vw]'>
                <img src={hoodie} alt="" />
            </div>
        </div>

        <div className='flex flex-col bg-black gap-[0.5rem] muxsm:w-[48vw] xl:w-[31.8vw] items-center py-[0rem]'>
            <div className='flex bg-white muxsm:h-[53.6vw] muxsm:w-[45vw] xl:h-[18.95vw] xl:w-[31.2vw]'>
            <img src={varsityImage2} className="w-full h-full" alt="image" />
            </div>
            <div className='flex bg-red-900 muxsm:h-[53.6vw] muxsm:w-[45vw] xl:h-[34.45vw] xl:w-[31.2vw]'>
            <img src={wtshirt} className="w-full h-full" alt="image" />
            </div>
        </div>
    </div>

    <div className='xl:h-[20.9vw] flex flex-row bg-black muxsm:gap-[0.5rem] xl:gap-[0.5rem] muxsm:w-[82vw] muxsm:h-[40vw] xl:w-[57vw] muxsm:ml-[7vw] xl:ml-[16.7vw]'>
        <div className='flex bg-white muxsm:h-[40vw] xl:h-[20.8vw] muxsm:w-[40vw] xl:w-[27.9vw]'>
                <img src={btshirt} alt="" />
        </div>
                
        <div className='flex bg-white muxsm:h-[40vw] xl:h-[20.8vw] muxsm:w-[40vw] xl:w-[28.3vw]'>
                <img src={blackhoodie} alt="" />
        </div>
    </div>

    <div className='xl:h-[30.6vw] muxsm:h-[55vw] flex flex-row bg-white muxsm:w-[81vw] xl:w-[56.8vw] muxsm:ml-[7.5vw] xl:ml-[16.7vw]'>
        <img src={Bluehoodie} className="w-full h-full" alt="" />
    </div>
    
     
</div>
</>
  )
}

export default MerchGrid