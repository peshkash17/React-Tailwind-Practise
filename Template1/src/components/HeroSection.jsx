import landingPageImage from "../assets/landingpage.png";
import fadribble from "../assets/fa-dribbble.svg"
import behance from "../assets/fa-behance.svg"
import dots from "../assets/Dots.png"
import rightArrow from '../assets/fa-angle-right.svg'
import leftArrow from '../assets/fa-angle-left.svg'

const HeroSection = () => {
  return (
    <>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-purple-400 flex justify-center items-center relative"
        style={{ backgroundImage: `url(${landingPageImage})` }}
      >
        <div className=" text-md font-normal font-sans flex justify-center h-6 text-white absolute left-2/4 transform -translate-x-2/4 top-[100px]">
          <ul className="flex justify-center items-center gap-9">
            <li className="opacity-35">Home</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
            <li><img src={fadribble} alt="" /></li>
            <li><img src={behance} alt="" /></li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <h3 className="text-xl font-medium text-white">Startup 3</h3>
          <div className="flex justify-center items-center gap-64">
            <div>
              <img src={leftArrow} alt="" />
            </div>
          <h2 className="text-white font-semibold text-7xl   text-center ">Forget About Code</h2>
          <img src={rightArrow} alt="" />

          </div>
          <p className="text-white text-lg font-normal  w-[550px] text-center">Startup Framework gives you complete freedom over your creative process — you don’t have to think about any technical aspects. There are no limits and absolutely no coding. </p>
          <div className="py-5">
          <img src={dots} alt="" />
          </div>

          <button className="px-8 py-4 rounded-full bg-[#482BE7] text-white">
            Create an Account
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
