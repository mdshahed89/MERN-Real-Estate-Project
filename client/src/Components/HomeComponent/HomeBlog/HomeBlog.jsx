import React from 'react'
import Card from './Card'
import BlogImg1 from "../../../assets/BlogImg1.jpg"
import BlogImg2 from "../../../assets/BlogImg2.jpg"
import BlogImg3 from "../../../assets/BlogImg3.jpg"
import BlogImg4 from "../../../assets/BlogImg4.jpg"
import { Link } from 'react-router-dom'

function HomeBlog() {
  return (
    <div className=' bg-[#BDA588] bg-opacity-20 rounded-md py-[5rem]  '>
        <div className=' flex flex-col items-center '>
            <h3 className=' lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-semibold '>Recent Articles & News</h3>
            <p className=' md:text-base text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className=' max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-[4rem] '>
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        </div>
        <Link to={"/blogs"} className=" flex items-center justify-center mt-8 ">
          <button className=" bg-[#595D67] hover:bg-[#7BC9FF] hover:text-[#000] transition-all duration-300 ease-in-out text-[#fff] text-[1rem] font-semibold px-8 py-2 rounded-md ">View More</button>
        </Link>
    </div>
  )
}

export default HomeBlog