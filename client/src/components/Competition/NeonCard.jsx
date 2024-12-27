import PropTypes from "prop-types";

const NeonCard = ({ event }) => {
  return (
    <div className="w-[18.9vw] uxsm:w-[38vw] xsm:w-[38vw] sm:w-[38vw] uxsm:h-[38.2vw] xsm:h-[38vw] sm:h-[38vw] h-[18.9vw] bg-black uxsm:border-[0.45vw] border-[0.4vw] hover:drop-shadow-[0_0_5vw_#22f717] border-[#a7f819] rounded-2xl relative">
      {/* Inner Content */}
      <div className="w-[17.3vw] uxsm:w-[36.4vw] xsm:w-[36.5vw] sm:w-[36.5vw] uxsm:border-[0.25vw] border-[0.1vw] border-[#a7f819] ml-[0.41vw] mt-[0.41vw] rounded-lg uxsm:rounded-xl xsm:rounded-xl sm:rounded-xl bg-[#a7f819] uxsm:h-[36.4vw] xsm:h-[36.5vw] sm:h-[36.5vw] h-[17.3vw] object-cover relative group">
        {/* "Event Name" Div */}
        <div className="absolute top-[0.3vh] left-[8.8vw] uxsm:left-[23vw] xsm:left-[23vw] sm:left-[23vw] rounded-lg uxsm:w-[10vw] xsm:w-[10vw] sm:w-[10vw] w-[8vw] h-[5vh] bg-transparent z-10 text-center font-bold uxsm:text-[2.1vw] xsm:text-[2.1vw] sm:text-[2.1vw] text-[1.3vw] text-black transition-opacity duration-300 group-hover:opacity-0">
          {event.name}
        </div>

        {/* Expanded Content */}
        <div className="absolute inset-0 justify-center opacity-0 bg-black rounded-lg uxsm:rounded-xl xsm:rounded-xl sm:rounded-xl transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-white uxsm:ml-[14vw] xsm:ml-[14vw] sm:ml-[14vw] ml-[6vw] mt-[1vw] uxsm:text-[2.1vw] xsm:text-[2.1vw] sm:text-[2.1vw] text-[1.3vw] font-bold">
            {event.name}
          </div>

          <div className="text-white uxsm:ml-[2.7vw] xsm:ml-[2.7vw] sm:ml-[2.7vw] ml-[1.2vw] uxsm:h-[25vw] xsm:h-[25vw] sm:h-[25vw] uxsm:w-[30vw] xsm:w-[30vw] sm:w-[30vw] h-[10vw] text-[1.1vw] uxsm:text-[2.2vw] xsm:text-[2.2vw] sm:text-[2.2vw] w-[14vw]">
            {/* Event description */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores vitae repudiandae architecto laboriosam? Et facere expedita dolorum Lorem ipsum dolor, sit amet.
          </div>

          {/* Action Buttons */}
          <div className="flex mt-[.5vh] uxsm:ml-[10vw] xsm:ml-[10vw] sm:ml-[10vw] ml-[1.2vw] items-center gap-[1vw] flex-row">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl text-[1.3vw] text-center pt-[0.4vh] bg-[#a7f819] uxsm:h-[3.5vw] xsm:h-[3.5vw] sm:h-[3.5vw] h-[2.5vw] uxsm:w-[8vw] xsm:w-[8vw] sm:w-[8vw] w-[6.5vw]"
            >
              Register
            </a>

            <a
              href={event.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl text-[1.2vw] text-center bg-slate-500 uxsm:h-[3.5vw] xsm:h-[3.5vw] sm:h-[3.5vw] h-[2.6vw] pt-[0.5vh] w-[6.5vw] uxsm:w-[8vw] xsm:w-[8vw] sm:w-[8vw]"
            >
              Read More
            </a>
          </div>
        </div>

        {/* Event Image */}
        <div
          className="rounded-lg object-cover overflow-hidden transition-opacity duration-300 group-hover:opacity-0"
          style={{
            clipPath:
              "polygon(0 0, 33% 0, 49% 15%, 100% 16%, 100% 100%, 0 100%)",
          }}
        >
          <img
            className="w-[17.5vw] h-[17.2vw]"
            src={event.image}
            alt={event.name}
            style={{
              clipPath:
                "polygon(0 0, 33% 0, 49% 15%, 100% 16%, 100% 100%, 0 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

NeonCard.propTypes = {
  event: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    registerLink: PropTypes.string.isRequired,
    readMoreLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default NeonCard;
