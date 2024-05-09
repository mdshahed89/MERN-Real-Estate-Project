import React from 'react'
import { Banner } from '../../Components/HomeComponent/Banner'
import HomeProperty from '../../Components/HomeComponent/HomeProperty'
import HomeAbout from '../../Components/HomeComponent/HomeAbout/HomeAbout'
import BAgnet from '../../Components/HomeComponent/BAgnet'
import HomeBlog from '../../Components/HomeComponent/HomeBlog/HomeBlog'
import Testimonial from '../../Components/HomeComponent/Testimonial/Testimonial'
import { useSelector } from 'react-redux'

const Home = () => {

  const currentUser = useSelector((state) => state.user)

  console.log(currentUser);

  return (
    <div className='-z-50'>
      {/* <Banner /> */}
      <div className='lg:px-4 md:px-2 px-1 rounded-b-md'>
      <Banner />
      </div>
      <div className='xl:px-4 px-0 py-4 rounded-md'>
        <HomeProperty />
      </div>
      <div className=' lg:px-4 md:px-2 px-1 '>
        <HomeAbout />
      </div>
      <div className=' lg:px-4 md:px-2 px-1 '>
        <Testimonial />
      </div>
      <div className='lg:px-4 md:px-2 px-1 lg:pt-4 md:pt-2 pt-1'>
        <HomeBlog />
      </div>
      <div className=' lg:p-4 md:p-2 p-1 rounded-md'>
        <BAgnet />
      </div>
    </div>
  )
}

export default Home