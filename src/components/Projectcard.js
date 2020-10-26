import React from "react"
import abstract from "../assets/abstract.jpg"

function Card (props) {
    
   

    return (
        <div data-aos="fade-right" className=" md:w-1/3   p-10 ">
            {/* <div className="md:h-48 h-32 bg-cover bg-gray-400 p-4 rounded shadow-lg" style={{ backgroundImage: `url(${abstract})` }}> */}
            <div data-aos="fade-right">
                <img className="md:h-48 h-32 w-full object-cover  rounded shadow-lg" src={props.photo}/>
            </div>
                
                  <div data-aos="fade-up" className="px-4 -mt-4">
            <div className="text-gray-700  text-center bg-gray-400 p-2 shadow-lg rounded shadow-lg">
                          <h4 className="font-semibold">{props.appname}</h4>
                    <p>{props.text}</p>
            </div>
                  </div>            
              </div>
    )
}

export default Card;









