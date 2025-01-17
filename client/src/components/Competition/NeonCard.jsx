import PropTypes from "prop-types";
import ReactFlipCard from 'reactjs-flip-card';

const NeonCard = ({ event }) => {
// Styles for ReactFlipCard
const styles = {
  container: {
    width: '100%',
    height: '100%',
  },
  front: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  },
  back: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
  }
};

const FrontComponent = () => (
  <div className="w-full h-full">
    <div className="bg-black border-[0.45vw] uxsm:border-[0.9vw] md:border-[0.58vw] lg:border-[0.3vw] group-hover:drop-shadow-[0_0_2vw_#22f717] border-[#3F8C0A] md:rounded-[1.45rem] xsm:rounded-3xl sm:md:rounded-3xl lg:rounded-[1.3rem] xl:rounded-[1.478rem] 2xl:rounded-3xl uxsm:rounded-[1.2rem] relative uxsm:shadow-[0_0_1.6vw_0px_#22f717] h-full">
      <div className="w-[36.5vw] uxsm:w-[35.5vw] sm:w-[35vw] md:w-[27.5vw] lg:w-[22.8vw] xl:w-[18.5vw] 2xl:w-[17.3vw] border-[0.28vw] border-[#a7f819] uxsm:ml-[0.6vw] md:ml-[0.32vw] sm:ml-[0.64vw] ml-[0.41vw] md:mt-[0.3vw] uxsm:mt-[0.59vw] lg:mt-[0.3vw] lg:ml-[0.35vw] mt-[0.41vw] rounded-2xl mr-[0.15rem] bg-[#a7f819] h-74[36.5vw] uxsm:h-[35.9vw] sm:h-[35vw] md:h-[28.5vw] lg:h-[23.5vw] xl:h-[18.5vw] 2xl:h-[17.3vw] object-cover relative">
        {/* Event Name */}
        <div className="absolute top-[0.3vh] left-[23vw] md:left-[12vw] muxsm:w-[5.5rem] sm:w-[8.8rem] muxsm:h-[3rem] muxsm:left-[12vw] lg:left-[12.5vw] xl:left-[10vw] 2xl:left-[8.8vw] rounded-lg w-[10vw] md:w-[15vw] lg:w-[9.5vw] xl:w-[8vw] 2xl:w-[8vw] h-[4vh] bg-transparent z-10 text-center font-bold text-[2.1vw] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[1.11vw] 2xl:text-[1.1vw] uxl:h-[4rem] c1:h-[5rem] text-black overflow-hidden">
          {event.name}
        </div>

        {/* Event Image */}
        <div className="uxsm:rounded-2xl object-cover overflow-hidden w-[36.5vw] uxsm:w-[35vw] sm:w-[34.5vw] md:w-[26.95vw] lg:w-[22.2vw] xl:w-[17.9vw] 2xl:w-[16.7vw] h-[36.5vw] xsm:h-[35.4vw] sm:h-[34.5vw] md:h-[28vw] lg:h-[22.9vw] xl:h-[17.95vw] 2xl:h-[16.7vw] uxsm:h-[35.5vw] uxsm:ml-[0.03vw]"
          style={{
            clipPath:
              "polygon(0 0, 45% 0, 57% 15%, 100% 15.5%, 100% 100%, 0 100%)",
          }}>
          <img
            className="w-full h-full"
            src={event.image}
            alt={event.name}
          />
        </div>
      </div>
    </div>
  </div>
);

const BackComponent = () => (
  <div className="w-full h-full">
    <div className="bg-black border-[0.45vw] uxsm:border-[0.9vw] md:border-[0.58vw] lg:border-[0.3vw] border-[#3F8C0A] md:rounded-[1.45rem] xsm:rounded-3xl sm:md:rounded-3xl lg:rounded-[1.3rem] xl:rounded-[1.478rem] 2xl:rounded-3xl uxsm:rounded-[1.2rem] uxsm:shadow-[0_0_1.6vw_0px_#22f717] h-full">
      {/* Content Container */}
      <div className="w-[36.5vw] uxsm:w-[35.5vw] sm:w-[35vw] md:w-[27.5vw] lg:w-[22.8vw] xl:w-[18.5vw] 2xl:w-[17.3vw] border-[0.28vw] border-[#a7f819] uxsm:ml-[0.6vw] md:ml-[0.32vw] sm:ml-[0.64vw] ml-[0.41vw] md:mt-[0.3vw] uxsm:mt-[0.59vw] lg:mt-[0.3vw] lg:ml-[0.35vw] mt-[0.41vw] rounded-2xl mr-[0.15rem] bg-black h-74[36.5vw] uxsm:h-[35.9vw] sm:h-[35vw] md:h-[28.5vw] lg:h-[23.5vw] xl:h-[18.5vw] 2xl:h-[17.3vw] relative">
        <div className="text-white text-center sm:ml-[0vw] uxsm:ml-[0vw] xsm:ml-[0vw] ml-[14vw] md:ml-[0vw] lg:ml-[0vw] xl:ml-[0vw] 2xl:ml-[1vw] mt-[0.8vw] uxsm:mt-[0.38vh] text-[2.1vw] md:text-[1.8vw] lg:text-[1.5vw] xl:text-[1.4vw] 2xl:text-[1.3vw] font-bold">
          {event.name}
        </div>

        <div className="text-white mx-auto h-[25vw] md:h-[20vw] lg:h-[15vw] xl:h-[12vw] 2xl:h-[10vw] w-[30vw] md:w-[25vw] lg:w-[20vw] xl:w-[16vw] 2xl:w-[14vw] text-[2.2vw] uxsm:text-[2.1vw] xsm:text-[2.1vw] sm:text-[2.1vw] md:text-[1.62vw] lg:text-[1.29vw] xl:text-[1vw] 2xl:text-[0.9vw]">
          {event.description}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center mt-[0.3vw] uxsm:mt-[1.5vw] xsm:mt-[2.4vw] sm:mt-[1vw] xl:mt-[0.65vw] 2xl:mt-[1.2vw] lg:mt-[1.2vw] md:mt-[0.9vw] muxsm:pl-[12vw] md:pl-[10vw] lg:pl-[8vw] xl:pl-[6.5vw] 2xl:pl-[5.5vw] gap-[1vw] flex-row ">
          <a
            href={event.readMoreLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg text-white uxsm:rounded-sm xsm:rounded-md text-[2.1vw] xsm:text-[1.8vw] sm:text-[1.76vw] md:text-[1.6vw] lg:text-[1.45vw] xl:text-[1vw] 2xl:text-[1.2vw] text-center bg-[#a7f819] h-[3.5vw] sm:h-[3.8vw] md:h-[3vw] lg:h-[2.8vw] xl:h-[2.2vw] 2xl:h-[2.4vw] lg:pt-[0.3vh] xl:pt-[0.3vh] md:pt-[0.1vh] uxsm:pt-[0.1vh] xsm:pt-[0.2vh] sm:pt-[0.1vh] pt-[0.5vh] w-[8vw] muxsm:w-[10.2vw] xsm:w-[9vw] sm:w-[9vw] items-center md:w-[7.8vw] lg:w-[7.5vw] xl:w-[5.5vw] 2xl:w-[6.5vw]"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
);

return (
  <div className="perspective-[1000px] uxsm:w-[38.2vw] xsm:w-[38.5vw] sm:w-[37.9vw] md:w-[29.2vw] lg:w-[24vw] xl:w-[19.7vw] 2xl:w-[18.55vw] h-[38vw] uxsm:h-[38.4vw] muxsm:h-[38.8vw] sm:h-[37.9vw] xsm:h-[38.vw] md:h-[30.3vw] lg:h-[24.65vw] xl:h-[19.7vw] muxsm:w-[38.35vw] 2xl:h-[18.5vw]">
    <ReactFlipCard
      containerStyle={styles.container}
      frontStyle={styles.front}
      backStyle={styles.back}
      frontComponent={<FrontComponent />}
      backComponent={<BackComponent />}
      direction="horizontal"
    />
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