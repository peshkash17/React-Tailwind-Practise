import landingPageImage from "../assets/landingpage.png";


const HeroSection = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-purple-400 relative"
        style={{ backgroundImage: `url(${landingPageImage})` }}
      >
        <div className=" text-md font-normal font-sans flex justify-center h-6 text-white absolute left-2/4 transform -translate-x-2/4 top-[100px]">
          <ul className="flex justify-center items-center gap-9">
            <li className="opacity-35">Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li>Features</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
