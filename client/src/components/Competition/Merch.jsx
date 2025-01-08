import MerchText from './MerchText';

const Merch = () => {
  return (
    <>
    <div className="bg-black w-full min-h-screen items-center flex">
      <MerchText 
        title="PLINTH'25 MERCH"
        subtitle="WEAR THE FUTURE, LIVE THE MOMENT!"
        mainDescription="The Plinth 2025 merch is here, and it's more than just clothing – it's a declaration! Crafted for the bold, the innovators, and the dreamers, each piece reflects the tech-driven, creative energy of Plinth. From sleek designs to futuristic vibes, our merch lets you wear your passion and stand out at every step. Whether you're gearing up for the tech events or soaking in the atmosphere, make a statement that's all your own."
        callToAction="This isn't just apparel; it's your chance to carry the Plinth spirit with you. Don't miss out – get your hands on it now!"
        className="max-w-full mx-auto items-center justify-center  "
      />
    </div>
    
    </>
  );
};

export default Merch;

