import { EDUCATION } from "../constants";

const Education = () => {
  return (
    <div className="border-box border-neutral-800 pb-4">
        <h2 className="my-20 text-center text-4xl font-bold">Education</h2>
            <div>{EDUCATION.map((element, index) => (
                <div key={index}className="mb-8 flex flex-wrap lg:justify-center">
                    <div className="w-full lg:w-1/4">
                        <p className="mb-2 text-md font-bold">
                            {element.year}
                        </p>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h5 className="mb-3 font-normal lg:text-justify">
                            {element.description}<br></br>
                        </h5>
                        <h6 className="mb-2 font-thin lg:text-justify">
                             {element.school}   
                        </h6>
                        <h6 className="mb-2 font-thin lg:text-justify">
                             {element.honors}   
                        </h6>

                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Education;