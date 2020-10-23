import React, {useEffect} from "react";
import Navbar from "./Navbar"
import main from "../../assets/main.jpg"
import abstract from "../../assets/abstract.jpg"
import AOS from "aos";
import 'aos/dist/aos.css';








const Projects = () => {

useEffect(() => {
  AOS.init({
    duration : 2000
  });
  }, []);
  
  return (
      
<div className="sm:bg-white md:bg-gray-800  xl:max-h-screen ">
    <div className="flex flex-wrap bg-white h-screen justify-between mx-16">
              
        <div data-aos="fade-right" className="w-1/2 p-10 mt-20">
        <div  className="text-gray-700 text-center sm:object-fit md:h-48 bg-cover bg-gray-400 p-4 rounded shadow-lg" style={{ backgroundImage: `url(${main})` }}>
            </div>
                
                  <div data-aos="fade-up" className="px-4 -mt-4">
            <div className="text-gray-700  text-center bg-gray-400 p-2 shadow-lg rounded shadow-lg">
                          <h4 className="font-semibold">Let's Connect</h4>
                          <p>An app that lets you record your speech and we will analyze it for you!</p>
            </div>
                  </div>            
              </div>
              

              <div data-aos="fade-left" className="w-1/2 p-10 mt-20">
        <div className="text-gray-700 text-center h-48 bg-cover bg-gray-400 p-4 rounded shadow-lg" style={{ backgroundImage: `url(${abstract})` }}>
               
            </div>
                
                  <div data-aos="fade-up" className="px-4 -mt-4">
            <div className="text-gray-700  text-center bg-gray-400 p-2 shadow-lg rounded">
                          <h4 className="font-semibold">Let's Connect</h4>
                          <p>An app that lets you record your speech and we will analyze it for you!</p>
            </div>
                  </div>            
</div>
              
              

            
              



    </div>    
</div>

  );
};

export default Projects;
