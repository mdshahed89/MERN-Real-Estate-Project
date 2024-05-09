import React from 'react'
import AboutBanner from "../../assets/AboutBanner.jpg";
import { BsFillBuildingsFill } from "react-icons/bs";
import { LiaGgCircle } from "react-icons/lia";

const About = () => {
  return (
    <div className=' min-h-[100vh] '>
      <div className=" h-[35vh] mx-4 rounded-md relative before:absolute before:w-full before:h-full  before:top-0 before:left-0 before:bg-black/30 ">
        <img
          src={AboutBanner}
          alt=""
          className=" w-full h-full object-cover rounded-b-md  "
        />
        <div className=" absolute w-full h-full left-0 top-0 flex items-center z-50 justify-center flex-col clear-start text-[#fff]  ">
          <h4 className=" text-[1.1rem]  ">Home / About</h4>
          <h3 className=" text-[2rem] font-semibold ">About Us</h3>
        </div>
      </div>
      <div className=' grid grid-cols-1 place-items-center px-3 md:grid-cols-2 gap-5 max-w-[1300px]  mx-auto mt-[5rem] '>
        <div className='  w-full md:text-left text-center flex flex-col gap-8 '>
          <h3 className=' md:text-[2.1rem] text-[1.6rem] lg:text-[2.5rem] font-semibold text-[#484848] '>Your dream our commitment</h3>
          <div className=' flex flex-col gap-5 md:max-w-[30rem] text-[#5c5b5b] '>
            <p>The Group successfully ventured into Real Estate by creating a series of residential spaces at strategic locations in Kolkata, Siliguri and Durgapur under the aegis of Dream Homes.</p>
            <p>Our mission is to engage in issues that are of concern to individuals, families and communities through an uncompromising commitment to create outstanding living, work and leisure environments.</p>
          </div>
        </div>
        <div className=' h-[25rem] w-full '>
          <img src={AboutBanner} alt="" className=' w-full h-full object-cover rounded-md ' />
        </div>
      </div>

      <div className=" h-[60vh] my-[10rem] mx-4 rounded-md relative before:absolute before:w-full before:h-full  before:top-0 before:left-0 before:bg-black/40 ">
        <img
          src={AboutBanner}
          alt=""
          className=" w-full h-full object-cover rounded-b-md  "
        />
        <div className=" absolute px-3 md:flex-row flex-col w-full h-full left-0 top-0 flex gap-5 items-center z-50 justify-center text-[#fff]  ">
          <div className=' bg-[#fff] md:p-[3%] p-[4%] lg::p-[2%] text-[#484848] flex gap-6 rounded-md  '>
            <div>
              <BsFillBuildingsFill className=' text-[#BDA588] md:text-[3.5rem text-[3rem] lg:text-[4rem] ' />
            </div>
            <div className=' flex flex-col gap-6 '>
              <div className=' flex flex-col gap-3 '>
              <h3 className=' lg:text-[1.5rem] text-[1.3rem] font-semibold '>Invest in our project</h3>
              <p className=' text-base max-w-[25rem] text-[#707070] '>Investing in our projects can give you satisfying returns and can stregthen our relationship.</p>
              </div>
              <div>
                <button className=' text-base border-b border-[#BDA588] text-[#BDA588] font-bold pb-2 '>Explore More</button>
              </div>
            </div>
          </div>
          <div className='bg-[#BDA588] md:p-[3%] p-[4%] lg::p-[2%] text-[#fff] flex gap-6 rounded-md'>
            <div>
              <LiaGgCircle  className=' text-[#fff] md:text-[3.5rem text-[3rem] lg:text-[4rem] ' />
            </div>
            <div className=' flex flex-col gap-6 '>
              <div className=' flex flex-col gap-3 '>
              <h3 className=' lg:text-[1.5rem] text-[1.3rem] font-semibold '>Invest in our project</h3>
              <p className=' text-base max-w-[25rem] text-[#e6e6e6] '>Investing in our projects can give you satisfying returns and can stregthen our relationship.</p>
              </div>
              <div>
                <button className=' text-base border-b border-[#fff] text-[#fff] font-bold pb-2 '>Explore More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About