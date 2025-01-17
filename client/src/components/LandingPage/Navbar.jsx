import logo from "../../assets/landingpage/NEW LOGO  1.svg";

const Navbar = () => {
  return (
<div className="text-white bg-black/5 md:backdrop-blur-none backdrop-blur-sm w-full h-[6rem] 
flex justify-between items-center fixed overflow-hidden rounded-lg shadow-lg md:shadow-none md:bg-transparent z-50">
<div className="">
        <img src={logo} alt="Plinth Logo" className="sm:h-[5rem] xsm:h-[4rem] uxsm:h-[4rem]" />
      </div>

    </div>
  );
};

export default Navbar;