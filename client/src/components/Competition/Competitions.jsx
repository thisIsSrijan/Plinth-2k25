import { EventProvider } from "../../Context/EventContext.jsx";
import TopCircle from "./TopCircle";
import BottomCircle from "./BottomCircle";
import ResCircle from "./ResCircle.jsx";
import { GlowEllipse } from "../../assets/competition/svg";
import Carbox from "./Carbox";

function Competititons() {
  return (
    <EventProvider>
      <div className="relative min-h-screen w-lg-h-sm:min-h-[130vh] w-md-h-xsm:min-h-[120vh] w-full bg-black hidden md:block  ">
        <div className="absolute h-screen w-lg-h-sm:h-[130vh] w-md-h-xsm:h-[120vh] w-full flex justify-center items-center bg-black z-0">
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

        <div className="absolute z-10 h-screen w-lg-h-sm:h-[130vh] w-md-h-xsm:h-[120vh] w-full">
          <img
            src={GlowEllipse}
            alt="GlowEllipse"
            className="h-screen w-full opacity-90"
          />
        </div>

        <div className="absolute min-h-screen w-lg-h-sm:min-h-[130vh] w-md-h-xsm:min-h-[120vh] w-full flex flex-col justify-center items-center bg-transparent z-20">
          <TopCircle />
          <BottomCircle />
        </div>
      </div>

      <div className="min-h-[45vh] xsm:min-h-[52vh] sm:min-h-[60vh] w-full bg-black flex flex-col justify-center md:hidden">
        <div
          className="opacity-40 h-auto flex flex-col items-center font-monument text-[8vw] font-extrabold"
          style={{
            WebkitTextStrokeWidth: "1px",
            WebkitTextStrokeColor: "#EDFFCF",
          }}
        >
          <div className="w-[90%] opacity-10 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-20 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-30 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-40 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-50 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-60 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-70 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
          <div
            className="w-[90%] text-center text-[#a7f818] leading-none -mb-[5px] sm:-mb-[9px]"
            style={{
              WebkitTextStrokeWidth: "0px",
            }}
          >
            COMPETITIONS
          </div>
          <div className="w-[90%] opacity-80 text-center leading-none -mb-[5px] sm:-mb-[9px]">
            COMPETITIONS
          </div>
        </div>

        <div className=" absolute w-full h-[45vh] bg-[#a7f818]/30 rounded-full blur-[200px] z-10" />

        <div className=" absolute w-full min-h-[45vh] xsm:min-h-[52vh] sm:min-h-[60vh] z-20">
          <ResCircle />
        </div>
      </div>

      <div className="absolute bg-black w-full border-black">
        <Carbox />
      </div>
    </EventProvider>
  );
}

export default Competititons;
