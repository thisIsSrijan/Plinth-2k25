import { useEventContext } from "../../Context/EventContext";
import NeonCard from "./NeonCard";
import eventsData from "./data";
const Carbox = () => {
  const { selectedEvent } = useEventContext(); 
  return (
<>
<div className=" items-center  uxsm:w-full  lg:h-auto bg-black pt-[5vw] xsm:py-[5vw] sm:py-[6.3vw] uxsm:py-[0.4vh] muxsm:py-[1.2vh] md:h-auto md:py-[-0vw] lg:py-[1.2vw] xl:py-[2.8vw] 2xl:py-[4vw] uxl:py-[5vw] xl:h-auto flex justify-center uxsm:h-auto muxsm:h-auto xsm:h-auto sm:h-auto">
      {/* Desktop/Tablet Layout (3 cards per row) - For screens ≥ 768px */}
      <div className="hidden items-center md:flex cursor-pointer overflow-hidden flex-col px-[2rem] py-[3rem] gap-[6vh]">
         
        {Array.from({ length: Math.ceil(eventsData[selectedEvent].length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex items-center gap-[4vw] flex-row">
            {eventsData[selectedEvent]
              .slice(rowIndex * 3, rowIndex * 3 + 3)
              .map((event) => (
                <NeonCard key={event.id} event={event} />
              ))}
          </div>
        ))}
      </div>

      {/* Mobile Layout (2 cards per row) - For screens < 768px */}
      <div className="flex  items-center md:hidden cursor-pointer flex-col gap-[2vh]">
        {Array.from({ length: Math.ceil(eventsData[selectedEvent].length / 2) }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex  gap-[4vw] flex-row">
            {eventsData[selectedEvent]
              .slice(rowIndex * 2, rowIndex * 2 + 2)
              .map((event) => (
                <NeonCard key={event.id} event={event} />
              ))}
          </div>
        ))}
      </div>
    </div>

</>
)};

export default Carbox;