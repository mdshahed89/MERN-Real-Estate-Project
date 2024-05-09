import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";


function Card({img, title, date}) {
  return (
    <div className=' rounded-lg bg-[#fff] '>
        <div>
            <img src={img} alt="" className=' w-full md:h-[17rem] lg:h-[13rem] object-fill rounded-t-lg ' />
        </div>
        <div className=' pt-[.5rem] pb-[1rem] px-3 flex flex-col items-center text-center gap-2 text-[#444] '>
            <h4 className=' text-[#868686] '>{date}</h4>
            <h3 className=' text-[1.1rem] font-semibold '>{title}</h3>
            <div className=' flex items-center gap-2 '>
                <h4>Read More</h4>
                <FaAnglesRight className=' text-xs ' />
            </div>
        </div>
    </div>
  )
}

export default Card