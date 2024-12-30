import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import EventImageCard from "./EventImageCard";
import { useEventContext } from "../../Context/EventContext.jsx";
import {
  ECell,
  DebSoc,
  Astronomy,
  Quizzinga,
  Cybros,
  Cipher,
  Phoenix,
  ASME,
  SAE,
  Coding,
  LeftArrow,
  RightArrow,
} from "../../assets/competition/svg";

function ResCircle() {
  const scrollContainer = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { setSelectedEvent } = useEventContext();

  const events = [
    { eventName: "E Cell", imageSrc: ECell },
    { eventName: "DebSoc", imageSrc: DebSoc },
    { eventName: "Astronomy", imageSrc: Astronomy },
    { eventName: "Quizzinga", imageSrc: Quizzinga },
    { eventName: "E Cell", imageSrc: ECell },
    { eventName: "DebSoc", imageSrc: DebSoc },
    { eventName: "Astronomy", imageSrc: Astronomy },
    { eventName: "Quizzinga", imageSrc: Quizzinga },
    { eventName: "Astronomy", imageSrc: Astronomy },
    { eventName: "Quizzinga", imageSrc: Quizzinga },
    // { eventName: "Coding", imageSrc: Coding },
    { eventName: "E Cell", imageSrc: ECell },
    { eventName: "DebSoc", imageSrc: DebSoc },
    { eventName: "Astronomy", imageSrc: Astronomy },
    { eventName: "Quizzinga", imageSrc: Quizzinga },
    { eventName: "Cybros", imageSrc: Cybros },
    { eventName: "Cipher", imageSrc: Cipher },
    { eventName: "Phoenix", imageSrc: Phoenix },
    { eventName: "ASME", imageSrc: ASME },
    { eventName: "SAE", imageSrc: SAE },
    { eventName: "Coding", imageSrc: Coding },
  ];

  const updateActiveIndex = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      const center = container.scrollLeft + container.offsetWidth / 2;
      const children = Array.from(container.children);
      let closestIndex = 0;
      let closestDistance = Infinity;

      children.forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(center - childCenter);

        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      });

      setActiveIndex(closestIndex);
      if (events[closestIndex]) {
        setSelectedEvent(events[closestIndex].eventName);
      }
    }
  };

  const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };

  const debouncedUpdateActiveIndex = debounce(updateActiveIndex, 100);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      if (container.scrollLeft <= 0) {
        // When at start, jump to end and scroll one item left
        container.scrollLeft = container.scrollWidth;
      } else {
        container.scrollBy({
          left: -200,
          behavior: "smooth",
        });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      const container = scrollContainer.current;
      
      // Check if we're at or near the last item
      if (activeIndex >= events.length - 1) {
        // When at last item, jump to start
        container.scrollLeft = 0;
      } else {
        container.scrollBy({
          left: 200,
          behavior: "smooth",
        });
      }
    }
  };

  useEffect(() => {
    const container = scrollContainer.current;
    if (container) {
      container.addEventListener("scroll", debouncedUpdateActiveIndex);
      updateActiveIndex();

      // Add scroll snap behavior via CSS
      container.style.scrollSnapType = "x mandatory";

      return () => {
        container.removeEventListener("scroll", debouncedUpdateActiveIndex);
      };
    }
  }, []);

  return (
    <div className="relative w-full min-h-[45vh] xsm:min-h-[52vh] sm:min-h-[60vh] flex flex-col justify-around mt-6">
      <motion.div
        ref={scrollContainer}
        className="flex overflow-x-scroll space-x-4 items-center justify-center snap-x snap-mandatory pt-10 no-scrollbar"
        style={{
          overflowX: "scroll",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="shrink-0 w-[50%] flex justify-center snap-center transform transition-transform"
            animate={{
              x: 0,
              y: activeIndex === index ? -40 : 0,
            }}
            transition={{
              y: { type: "spring", stiffness: 300, damping: 30 },
            }}
          >
            <EventImageCard
              eventName={event.eventName}
              imageSrc={event.imageSrc}
              className="w-[8rem] h-[8rem] sm:w-[16rem] sm:h-[16rem] xsm:w-[13rem] xsm:h-[13rem] uxsm:w-[10rem] uxsm:h-[10rem]"
            />
          </motion.div>
        ))}
        <div className="shrink-0 w-[50%]"></div>
      </motion.div>

      <div className="flex justify-between">
        <button
          onClick={scrollLeft}
          className="bg-transparent px-4 py-2 rounded"
        >
          <img src={LeftArrow} alt="left" className="w-16 h-16" />
        </button>
        <button
          onClick={scrollRight}
          className="bg-transparent px-4 py-2 rounded"
        >
          <img src={RightArrow} alt="right" className="w-16 h-16" />
        </button>
      </div>
    </div>
  );
}

export default ResCircle;