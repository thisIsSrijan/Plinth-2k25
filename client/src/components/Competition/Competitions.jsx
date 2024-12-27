import { EventProvider } from "./EventContext.jsx";
import TopCircle from "./TopCircle";
import BottomCircle from "./BottomCircle";
import { GlowEllipse } from "../../assets/competition/svg";
import Carbox from "./Carbox";

function Competititons() {
  return (
    <EventProvider>
      <div className="relative min-h-screen w-lg-h-sm:min-h-[110vh] w-full bg-black z-10  ">
        <div className="absolute h-screen w-full flex justify-center items-center bg-transparent z-0">
          <div className=" h-[75%] w-full flex flex-col justify-center items-center gap-1 text-[4.3vw] xl:text-[6vw] lg:text-[7vw] md:text-[6.5vw] 2xl:text-[4.3vw] c1:text-[5.5vw] tracking-[6px]">
            <div
              className="leading-none font-monument"
              style={{
                WebkitTextStrokeWidth: "1px",
                WebkitTextStrokeColor: "#EDFFCF",
              }}
            >
              COMPETITIONS
            </div>
            <div className=" text-[#A7F818] leading-none font-monument">
              COMPETITIONS
            </div>
            <div
              className="leading-none font-monument"
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
            className="h-screen w-full opacity-90"
          />
        </div>

        <div className="absolute min-h-screen w-full flex flex-col justify-center items-center bg-transparent z-20">
          <TopCircle />
          <BottomCircle />
        </div>
      </div>
      <div className="absolute z-20 bg-black w-full border-black">
        <Carbox />
      </div>
    </EventProvider>
  );
}

export default Competititons;
