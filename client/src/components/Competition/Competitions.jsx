import { EventProvider } from "./EventContext.jsx";
import TopCircle from './TopCircle'
import BottomCircle from './BottomCircle';
import { GlowEllipse } from "../../assets/competition/svg";
import Carbox from './Carbox';

function Competititons() {
  return (
<div className="absolute min-h-screen w-full bg-black z-10 ">
  <div className="absolute h-screen w-full flex justify-center items-center bg-transparent z-0">
    <div className=" h-[75%] w-full flex flex-col justify-center items-center gap-1">
      <div
        className="text-[4.3vw] leading-none tracking-[6px] font-monument"
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#EDFFCF",
        }}
      >
        COMPETITIONS
      </div>
      <div className=" text-[#A7F818] text-[4.3vw] leading-none tracking-[6px] font-monument">
        COMPETITIONS
      </div>
      <div
        className="text-[4.3vw] leading-none tracking-[6px] font-monument"
        style={{
          WebkitTextStrokeWidth: "1px",
          WebkitTextStrokeColor: "#EDFFCF",
        }}
      >
        COMPETITIONS
      </div>
    </div>
  </div>

  <div className="absolute z-10 h-screen w-full">
    <img
      src={GlowEllipse}
      alt="GlowEllipse"
      className="h-screen w-full opacity-70"
    />
  </div>

  <div className="absolute min-h-screen w-full flex flex-col justify-center items-center bg-transparent z-20">
    <EventProvider>
    <TopCircle />
    <BottomCircle />
    <Carbox/>
    
    </EventProvider>         
  </div>
</div>

  );
}

export default Competititons




