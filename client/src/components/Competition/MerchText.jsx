import PropTypes from "prop-types";
import MerchGrid from "./MerchGrid";
const MerchText = ({
  title = "",
  subtitle = "",
  mainDescription = "",
  callToAction = "",
  className = "",
}) => {
  return (
    <div className={`flex flex-col space-y-4 p-4 md:p-6 lg:p-8 xl:pt-[4vw] items-center muxsm:mt-[0rem]  ${className}`}>
      <h1 className="font-Cynatar muxsm:text-3xl bg-clip-text bg-gradient-green text-transparent text-2xl uxsm:text-3xl xsm:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-widest ">
        {title}
      </h1>
      
      <h2 className="text-white uxsm:ml-[0.1rem] text-sm uxsm:text-xs xsm:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl tracking-widest">
        {subtitle}
      </h2>
      
      <div className="space-y-6 mt-8 xl:w-[85.5vw] xl:pt-[2.5rem] muxsm:ml-[1rem]">
        <p className="text-white text-xs uxsm:text-sm xsm:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
          {mainDescription}
        </p>
        
        <p className="text-white text-xs uxsm:text-sm xsm:text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl leading-relaxed">
          {callToAction}
        </p>
      </div>

      <MerchGrid />

    </div>
  );
};

MerchText.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  mainDescription: PropTypes.string,
  callToAction: PropTypes.string,
  className: PropTypes.string,
};

export default MerchText;

