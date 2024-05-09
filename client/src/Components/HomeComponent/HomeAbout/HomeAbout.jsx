import React from 'react'
import HomeAbout1 from '../../../assets/HomeAbout1.png'
import HomeAbout2 from '../../../assets/HomeAbout2.png'
import HomeAbout3 from '../../../assets/HomeAbout3.png'
import HomeAbout4 from '../../../assets/HomeAbout4.png'
import Part from './Part.jsx'

function HomeAbout() {
  return (
    <div className='bg-[#BDA588] rounded-md py-[7rem] '>
        <div className=' flex flex-col justify-center items-center mb-[4rem] '>
            <h2 className=' lg:text-[2.5rem] md:text-[2rem] text-[1.8rem] font-semibold '>Why Choose Us</h2>
            <p className=' md:text-base text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        </div>
        <div className=' max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-5 place-items-center '>
           <Part img={HomeAbout1} title="Find your future home" desc="We help you find a new home by offering a smart real estate experience" />
           <Part img={HomeAbout2} title="Find your future home" desc="We help you find a new home by offering a smart real estate experience" />
           <Part img={HomeAbout3} title="Find your future home" desc="We help you find a new home by offering a smart real estate experience" />
        </div>
    </div>
  )
}

export default HomeAbout