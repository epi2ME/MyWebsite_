import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import About from "./components/About";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div
      className="overflow-x-hidden text-neutral-300 antialiased 
                 selection:bg-white-300 selection:text-white-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 -z-10 h-full w-full bg-black">
          <div
            className="absolute bottom-auto left-auto right-auto top-0 h-[500px] w-[500px] 
                      -translate-x-[60%] translate-y-[20%] rounded-full bg-[rgba(255,255,255,0.2)] opacity-50 blur-[80px]"
          ></div>
        </div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
      </div>
    </div>
  );
};

export default App;
