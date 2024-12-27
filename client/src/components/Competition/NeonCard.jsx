import PropTypes from "prop-types";

const NeonCard = ({ event }) => {
  return (
    <div className="uxsm:w-[38.2vw] xsm:w-[38.2vw] sm:w-[38.1vw] md:w-[29.2vw] lg:w-[24vw] xl:w-[20.1vw] 2xl:w-[18.9vw] h-[38vw] uxsm:h-[38.2vw] sm:h-[38.1vw] xsm:h-[38.27vw] md:h-[30vw] lg:h-[25.1vw] xl:h-[20.1vw] 2xl:h-[18.9vw] bg-black border-[0.45vw] hover:drop-shadow-[0_0_5vw_#22f717] border-[#a7f819] md:rounded-3xl xsm:md:rounded-3xl sm:md:rounded-3xl lg:rounded-3xl xl:rounded-3xl 2xl:rounded-3xl uxsm:rounded-[1.22rem] relative">
      {/* Inner Content */}
      <div className="w-[36.5vw] sm:w-[36.5vw] md:w-[27.5vw] lg:w-[22.5vw] xl:w-[18.5vw] 2xl:w-[17.3vw] border-[0.28vw] border-[#a7f819] ml-[0.41vw] mt-[0.41vw] rounded-2xl mr-[0.15rem] bg-[#a7f819] h-[36.5vw] sm:h-[36.4vw] md:h-[28.5vw] lg:h-[23.5vw] xl:h-[18.5vw] 2xl:h-[17.3vw] object-cover relative group">
        {/* "Event Name" Div */}
        <div className="absolute top-[0.3vh] left-[23vw] md:left-[18vw] lg:left-[12.5vw] xl:left-[10vw] 2xl:left-[8.8vw] rounded-lg w-[10vw] md:w-[9vw] lg:w-[8.5vw] xl:w-[8vw] 2xl:w-[8vw] h-[4vh] bg-transparent z-10 text-center font-bold text-[2.1vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.11vw] 2xl:text-[1.3vw] text-black transition-opacity duration-300 group-hover:opacity-0">
          {event.name}
        </div>

        {/* Expanded Content */}
        <div className="absolute inset-0 justify-center opacity-0 bg-black rounded-2xl transition-opacity duration-300 group-hover:opacity-100">
          <div className="text-white text-center sm:ml-[0vw] uxsm:ml-[0vw] xsm:ml-[0vw] ml-[14vw] md:ml-[0vw] lg:ml-[0vw] xl:ml-[0vw] 2xl:ml-[1vw] mt-[0.8vw]  text-[2.1vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.3vw] font-bold">
            {event.name}
          </div>

          <div className="text-white mx-auto h-[25vw] md:h-[20vw] lg:h-[15vw] xl:h-[12vw] 2xl:h-[10vw] w-[30vw] md:w-[25vw] lg:w-[20vw] xl:w-[16vw] 2xl:w-[14vw] text-[2.2vw]  uxsm:text-[2.1vw]  xsm:text-[2.1vw] sm:text-[2.1vw] md:text-[1.62vw] lg:text-[1.29vw] xl:text-[1vw] 2xl:text-[0.9vw] ">
            {event.description}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center mt-[0.3vw] uxsm:mt-[3.3vw] xsm:mt-[3.3vw] sm:mt-[3.2vw] xl:mt-[0.45vw] 2xl:mt-[1.2vw] lg:mt-[1.2vw] md:mt-[0.4vw] ml-[10vw] xsm:ml-[9.8vw] sm:ml-[10vw] md:ml-[6vw] lg:ml-[3.3vw] xl:ml-[2.9vw] 2xl:ml-[1.2vw] gap-[1vw] flex-row">
            <a
              href={event.registerLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg text-[2.1vw] sm:text-[1.65vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1vw] 2xl:text-[1.2vw] text-center bg-[#a7f819] h-[3.5vw] md:h-[3vw] lg:h-[2.8vw] xl:h-[2.4vw] 2xl:h-[2.6vw] lg:pt-[0.3vh] xl:pt-[0.7vh] md:pt-[0.3vh] uxsm:pt-[0.1vh]  xsm:pt-[0.2vh] sm:pt-[0.4vh] pt-[0.5vh] w-[8vw] md:w-[7.5vw] lg:w-[7vw] xl:w-[5.5vw] 2xl:w-[6.5vw]"
            >
              Register
            </a>

            <a
              href={event.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg text-[2.1vw] uxsm:text-[2vw] xsm:text-[1.64vw] sm:text-[1.65vw] md:text-[1.6vw] lg:text-[1.5vw] xl:text-[1vw] 2xl:text-[1.2vw] text-center bg-slate-500 h-[3.5vw] md:h-[3vw] lg:h-[2.8vw] xl:h-[2.4vw] 2xl:h-[2.6vw] lg:pt-[0.3vh] xl:pt-[0.7vh] md:pt-[0.3vh] uxsm:pt-[0.2vh] sm:pt-[0.4vh] xsm:pt-[0.4vh] pt-[0.3vh] w-[8vw] sm:w-[8.4vw] uxsm:w-[9.9vw] xsm:w-[8.4vw] md:w-[8.2vw] lg:w-[7vw] xl:w-[5.5vw] 2xl:w-[6.5vw]"
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
            className="w-[36.5vw] md:w-[28.5vw] lg:w-[23.5vw] xl:w-[18.5vw] 2xl:w-[17.5vw] h-[36.5vw] md:h-[28.5vw] lg:h-[23.5vw] xl:h-[18.5vw] 2xl:h-[17.2vw]"
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
    description: PropTypes.string.isRequired,
    registerLink: PropTypes.string.isRequired,
    readMoreLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default NeonCard;
