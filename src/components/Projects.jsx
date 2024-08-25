import { PROJECTS } from "../constants";

const Projects = () => {
  return (
    <div className="border-box border-neutral-300 pb-4">
        <h2 className="my-20 text-center text-4xl font-bold">Projects</h2>
            <div>{PROJECTS.map((element, index) => (
                <div key={index} className="mb-12 flex flex-wrap lg:justify-center">
                    <div className="w-full flex items-center justify-center lg:w-1/2">
                     <img src={element.image} width={500} height={500} alt={element.title} className="mb-6 rounded" />
                    </div>
                    <div className="w-full max-w-screen lg:w-1/2 p-4 text-center">
                        <h5 className="mb-2 font-semibold text-justify">
                            {element.title}
                        </h5>
                        <h6 className="mb-4 text-neutral-400 font-thin text-justify">
                             {element.description}   
                        </h6>
                        <p className="mb-4 text-neutral-400 flex flex-wrap">
                             {element.technologies.map((element, index) => (
                                 <span key={index} className="mr-2 mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-light">{element}</span> 
                            ))}   
                        </p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;