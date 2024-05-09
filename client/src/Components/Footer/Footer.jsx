import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";


function Footer() {
  return (
    <div className=" bg-[#303441] md:mx-2 mx-1 lg:mx-4 rounded-t-md text-[#fff] py-[5rem] ">
      <div className="max-w-[1300px] mx-auto ">
        <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-5 px-3 ">
          <div className=" flex flex-col gap-4  lg:text-left text-center">
            <h3 className=" text-[1.3rem] md:text-[1.5rem] font-semibold ">SHD Estate</h3>
            <div>
            <p className=" text-[#d7d7d7] md:text-base text-sm ">
              A contemporary theme we designed specifically for real estate and
              property showcase websites, equipped with every option, element
              and feature your site may need.
            </p>
            <button className="text-[#7BC9FF] mt-3 " >Read More</button>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-4 lg:text-left text-center md:mt-0 mt-5">
            <h3 className=" text-[1.3rem] md:text-[1.5rem] font-semibold  ">Quick Links</h3>
            <div className="text-[#d7d7d7] flex flex-col gap-2 md:text-base text-sm ">
              <h4>About Us</h4>
              <h4>Contacts Us</h4>
              <h4>Blogs</h4>
              <h4>Privacy Policy</h4>
              <h4>Terms & Conditions</h4>
            </div>
          </div>
          <div className="mx-auto flex flex-col gap-4 lg:text-left text-center  ">
            <h3 className=" text-[1.3rem] md:text-[1.5rem] font-semibold ">Our Address</h3>
            <div className="text-[#d7d7d7] flex flex-col gap-2 md:text-base text-sm ">
              <h4>Akbarshah, Chittagong, BD</h4>
              <h4>Mirsarai, Chittagong, BD</h4>
            </div>
          </div>
          <div className=" flex gap-4 lg:justify-end justify-center w-full lg:text-left text-center  ">
            <div className=" flex flex-col gap-4 ">
            <h3 className=" text-[1.3rem] md:text-[1.5rem] font-semibold  ">Contact Us</h3>
            <div className="text-[#d7d7d7] flex flex-col gap-2 md:text-base text-sm ">
              <h4>+8801789548766</h4>
              <h4>mdshahedpersona@gmail.com</h4>
            </div>
            </div>
          </div>
        </div>
        <div className="flex items-center sm:flex-row flex-col sm:gap-0 gap-5 justify-center sm:justify-between px-3 mt-14">
          <p>Copyright © 2024. SHD Estate</p>
          <div className=" flex items-center gap-5 ">
            <FaFacebookF className=" bg-[#595D67] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full text-[2.5rem] " />
            <FaInstagram className=" bg-[#595D67] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full text-[2.5rem] " />
            <FaLinkedinIn className=" bg-[#595D67] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 rounded-full text-[2.7rem] " />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
