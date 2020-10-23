import React, {useEffect} from "react";
import Navbar from "../components/layout/Navbar"
import abstract from "../assets/abstract.jpg"
import downarrow from "../assets/down-arrow.png"
import Card from "../components/Projectcard"

import AOS from "aos";
import 'aos/dist/aos.css';




function Landing  () {
  
  useEffect(() => {
  AOS.init({
    duration : 2000
  });
  }, []);



  return (
    <div className="container bg-fixed bg-cover" >

      <div  className="flex grid rounded container justify-center  mx-auto w-1/2 xl:h-48 ">
        <div className="mt-10">

          <img data-aos-delay="1000" data-aos="zoom-out-left" src={abstract} className="rounded-full w-20 h-20  lg:h-40 lg:w-40"/>
        </div>
      </div>

      {/* <hr data-aos="fade-left" className=" rounded border-solid w-1/3 justify-center my-5 mx-auto border-2 border-gray-800 " /> */}
      
      <div data-aos="fade-left" className="flex lg:px-40 lg:mx-20  justify-center h-48  ">
        <div>
        </div>
        <h1 className="flex items-center text-center sm:text-lg md:text-4xl">David Coons | Developer</h1>
      </div>

      <hr data-aos="fade-right" className="rounded border-solid w-1/2 justify-center my-5 mx-auto border-2 border-gray-800 "/>

       <div data-aos="zoom-in-up" className="flex items-center justify-center h-48 ">
        <h1  className="text-4xl">Projects</h1>
      </div>
      <div className="flex justify-center">

        <img data-aos-delay="1000" data-aos="zoom-in-up" className="animate-bounce h-10" src={downarrow}></img>

      </div>

     
 <div  className="h-32 bg-gray-800 bg-fixed shadow-xl"></div>
      
      
      <div className="flex flex-wrap container mt-10">
        <Card />
        <Card />
        <Card />
        
      </div>
      
      <div className="h-32 bg-gray-600"></div>
      
       

      
       


    </div>

   

  );
};

export default Landing;
