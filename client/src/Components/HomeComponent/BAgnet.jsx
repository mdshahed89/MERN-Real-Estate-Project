import React from 'react'
import { FaAnglesRight } from "react-icons/fa6";


function BAgnet() {
  return (
    <div className=' bg-[#7BC9FF] bg-opacity-20 py-[6rem] rounded-md '>
        <div className=' max-w-[1300px] mx-auto flex md:flex-row flex-col px-3 md:gap-0 gap-5 items-center justify-between '>
            <div className=' flex flex-col md:text-left text-center gap-1 '>
                <h3 className=' lg:text-[2.2rem] md:text-[1.8rem] text-[1.5rem] '>Become a Real Estate Agent</h3>
                <p className=' md:text-base text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className=' flex group transition-all cursor-pointer  duration-500 ease-linear  items-center gap-4 bg-[#BDA588] px-10 py-3 rounded-md '>
                <h3 className=' md:text-[1.3rem] text-[1.1rem] '>Register Now</h3>
                <FaAnglesRight className='group-hover:rotate-180 ' />
            </div>
        </div>
    </div>
  )
}

export default BAgnet