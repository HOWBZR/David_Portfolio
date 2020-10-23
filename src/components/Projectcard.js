import React from "react"
import abstract from "../assets/abstract.jpg"

function Card (props) {
    


    return (
        <div data-aos="fade-right" className=" md:w-1/3   p-10 ">
        <div  className=" md:h-48 h-32 bg-cover bg-gray-400 p-4 rounded shadow-lg" style={{ backgroundImage: `url(${abstract})` }}>
            </div>
                
                  <div data-aos="fade-up" className="px-4 -mt-4">
            <div className="text-gray-700  text-center bg-gray-400 p-2 shadow-lg rounded shadow-lg">
                          <h4 className="font-semibold">Let's Connect</h4>
                          <p>An app that lets you record your speech and we will analyze it for you!</p>
            </div>
                  </div>            
              </div>
    )
}

export default Card;









