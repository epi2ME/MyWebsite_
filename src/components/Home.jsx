import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/myPhotoProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-8 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pl-6 pb-16 text-5xl font-thin tracking-tight lg:mt-32 lg:text-7xl">
              Chris Jerald Maralit
            </h1>
            <h3 className="pl-6 text-3xl tracking-tight font-light lg:text-4xl">
              Aspiring Web Developer
            </h3>
            <p className="pl-6 my-2 max-w-screen-md py-5 font-extralight text-justify tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full h-min lg:w-1/2 lg:p-10 pl-6">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilePic} alt="profile picture" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
