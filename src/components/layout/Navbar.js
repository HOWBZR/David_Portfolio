import React, { useState, Fragment, useEffect } from "react";
import menu from "../../assets/whitemenu.png";
import logo from "../../assets/logo.png";
import AOS from "aos";
import 'aos/dist/aos.css';

const Navbar = () => {

  const [open, setOpen] = useState(false);
  
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
  }, []);



  return (

    
    <div  className=" w-full shadow-lg bg-gray-800 ">
      <nav>
        <div className="flex items-center justify-between px-6 py-2">
          <div> <a href="/">
            <img className="h-16" alt="Organic Designs" src={logo} />
           </a>
          </div>
     

          <div >
            <button
              type="button"
              className="h-6 rounded focus:text-white"
              onClick={() => setOpen(!open)}
            >
              <img className="h-6 w-6 fill-current" src={menu} />
            </button>
          </div>
        </div>
      {open ? (
          
          <div data-aos="fade-left"  className="w-48 my-2 mr-2 z-10 absolute right-0 rounded bg-gray-300 border-solid px-2 py-4 shadow-xl transition  ">
            <a
              href="projects"
              className="block px-2 py-1 text-black font-semibold rounded hover:bg-gray-400"
              >
              Projects
            </a>
            <a
              href="about"
              className="block mt-1 px-2 py-1 text-black font-semibold rounded hover:bg-gray-400"
              >
              About
            </a>
          </div>
      
      ) : (
          <Fragment />
          )}
          </nav>
    </div>


    
  );
};

export default Navbar;
