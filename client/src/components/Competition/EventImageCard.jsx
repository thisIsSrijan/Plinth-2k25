import PropTypes from "prop-types";
import { useEventContext } from "../../Context/EventContext.jsx";

/**
 * EventImageCard component displays a circular card with a glow effect and handles event selection.
 *
 * @param {string} eventName - The name of the event.
 * @param {string} imageSrc - The source URL of the event image.
 * @param {string} className - Additional CSS classes for the card.
 * @returns {JSX.Element} The rendered EventImageCard component.
 */
function EventImageCard({ eventName, imageSrc, className = "" }) {
  const { selectedEvent, setSelectedEvent } = useEventContext();

  /**
   * Handles the event change and updates the selected event.
   * @param {string} event - The event name to set as selected.
   */
  const handleEventChange = (event) => {
    console.log(event);
    setSelectedEvent(eventName);
    const carboxElement = document.querySelector('#carbox-section');
    if (carboxElement) {
      carboxElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Function to get the appropriate glow effect
  const getGlowEffect = (isHovered = false) => {
    if (selectedEvent === eventName) {
      return "inset 0 0 60px 40px rgba(136, 185, 4, 0.9)"; // Stronger glow for selected state
    }
    return isHovered
      ? "inset 0 0 60px 35px rgba(132, 185, 4, 0.8)"
      : "inset 0 0 90px 55px rgba(88, 135, 4, 0.6)";
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv && selectedEvent !== eventName) {
          glowDiv.style.boxShadow = getGlowEffect(true);
        }
      }}
      onMouseLeave={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv && selectedEvent !== eventName) {
          glowDiv.style.boxShadow = getGlowEffect(false);
        }
      }}
      onClick={() => handleEventChange(eventName)}
    >
      {/* Outer Circle with Blur and Border */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-black" />
        <div className="absolute inset-0 rounded-full border-[3px] border-[#588704]" />
        <div
          className="absolute inset-[0px] rounded-full opacity-50 blur-md glow-effect transition-all duration-300"
          style={{
            boxShadow: getGlowEffect(false),
          }}
        />
      </div>

      {/* Event Name Banner */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-b from-[#012000] to-[#054F03] rounded-lg border border-[#054F03] text-center flex flex-col justify-center">
        <div
          className="font-phonk text-base xsm:text-xl lg:text-base c1:text-2xl bg-gradient-to-b from-white to-[#3D3D3D] inline-block text-transparent bg-clip-text"
          style={{
            wordWrap: "break-word",
          }}
        >
          {eventName}
        </div>
      </div>

      {/* Image */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-[27%] w-[50%] h-[50%]">
        <img
          src={imageSrc}
          alt={eventName}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

EventImageCard.propTypes = {
  eventName: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default EventImageCard;