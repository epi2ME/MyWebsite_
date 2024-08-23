import aboutImg from "../assets/about.png";
import { ABOUT_TEXT } from "../constants";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl font-bold">About Me</h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about image" />
          </div>
        </div>
        <div className="w-full h-min lg:w-1/2 lg:p-8 lg:mt-12">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-screen-md py-3 font-extralight text-justify tracking-tight">
            {ABOUT_TEXT}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
