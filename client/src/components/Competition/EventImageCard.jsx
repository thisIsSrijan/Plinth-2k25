import PropTypes from "prop-types";
import { useEventContext } from "./EventContext.jsx"; // Ensure this import path is correct

/**
 * EventImageCard component displays a circular card with a glow effect and handles event selection.
 *
 * @param {string} eventName - The name of the event.
 * @param {string} imageSrc - The source URL of the event image.
 * @param {string} className - Additional CSS classes for the card.
 * @returns {JSX.Element} The rendered EventImageCard component.
 */

function EventImageCard({ eventName, imageSrc, className = "" }) {
  const { setSelectedEvent } = useEventContext();

  /**
   * Handles the event change and updates the selected event.
   * @param {string} event - The event name to set as selected.
   */
  const handleEventChange = (event) => {
    console.log(`Changing event to: ${event}`);
    setSelectedEvent(event);
  };

  return (
    <div
      className={`relative ${className}`}
      onMouseEnter={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv) {
          glowDiv.style.boxShadow = "inset 0 0 60px 20px rgba(136, 185, 4, 0.8)";
        }
      }}
      onMouseLeave={(e) => {
        const glowDiv = e.currentTarget.querySelector(".glow-effect");
        if (glowDiv) {
          glowDiv.style.boxShadow = "inset 0 0 40px 15px rgba(88, 135, 4, 0.6)";
        }
      }}
      onClick={() => handleEventChange(eventName)}
    >
      {/* Outer Circle with Blur and Border */}
      <div className="relative w-full h-full">
        <div className="absolute inset-0 rounded-full bg-black" />
        <div className="absolute inset-0 rounded-full border-[3px] border-[#588704]" />
        <div
          className="absolute inset-[0px] rounded-full opacity-50 blur-md glow-effect transition-all duration-500"
          style={{
            boxShadow: "inset 0 0 40px 15px rgba(88, 135, 4, 0.6)",
          }}
        />
      </div>

      {/* Event Name Banner */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4/5 h-6 bg-gradient-to-b from-[#012000] to-[#054F03] rounded-lg border border-[#054F03]">
        <div
          className="absolute left-1/2 transform -translate-x-1/2 -top-1 text-center text-white font-bold"
          style={{
            fontSize: "1.2rem",
            fontFamily: "Phonk",
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
