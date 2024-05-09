import React from 'react'
import Card from '../../Components/HomeComponent/HomeBlog/Card'
import BlogImg1 from "../../assets/BlogImg1.jpg"
import BlogImg2 from "../../assets/BlogImg2.jpg"
import BlogImg3 from "../../assets/BlogImg3.jpg"
import BlogImg4 from "../../assets/BlogImg4.jpg"
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <div>
      <div className=' bg-[#BDA588] bg-opacity-20 lg:m-4 md:m-2 m-1 rounded-md py-[5rem]  '>
        <div className=' flex flex-col items-center '>
            <h3 className=' lg:text-[2.5rem] md:text-[2rem] text-[1.5rem] font-semibold '>Recent Articles & News</h3>
            <p className=' md:text-base text-sm '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className=' max-w-[1300px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-[4rem] '>
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg1} date="April 22, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg2} date="April 20, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg3} date="April 15, 2024" title="Various versions have evolved over the years, sometimes by" />
        <Card img={BlogImg4} date="April 10, 2024" title="Various versions have evolved over the years, sometimes by" />
        </div>
    </div>
    </div>
  )
}

export default Blogs