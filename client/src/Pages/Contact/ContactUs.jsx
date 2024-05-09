import React from "react";
import AboutBanner from "../../assets/AboutBanner.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

function ContactUs() {
  return (
    <div className=" min-h-[100vh] ">
      <div className=" h-[35vh] mx-4 rounded-md relative before:absolute before:w-full before:h-full before:-z-20 before:top-0 before:left-0 before:bg-black/30 ">
        <img
          src={AboutBanner}
          alt=""
          className=" w-full h-full object-cover rounded-b-md  "
        />
        <div className=" absolute w-full h-full left-0 top-0 flex items-center z-50 justify-center flex-col clear-start text-[#fff]  ">
          <h4 className=" text-[1.1rem]  ">Home / Contact</h4>
          <h3 className=" text-[2rem] font-semibold ">Contact Us</h3>
        </div>
      </div>
      <div className=" bg-[#E6EAEE] lg:mx-4 md:mx-2 mx-1 rounded-md ">
        <div className=" max-w-[1300px] mx-auto flex md:flex-row flex-col gap-5 py-[4rem] px-2 md:px-3 ">
        <div className=" w-full md:w-[70%] bg-[#fff] p-[2%] border border-[#d0d0d0] rounded-md text-[#484848] flex flex-col gap-4 ">
          <h3 className=" text-[1.2rem] font-semibold ">Send Us An Email</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida
            quis libero eleifend ornare. Maecenas mattis enim at arcu feugiat,
            sit amet blandit nisl iaculis. Donec lacus odio, malesuada eu libero
            sit amet, congue aliquam leo. In hac habitasse platea dictumst.
          </p>
          <div>
            <div className=" grid grid-cols-2 gap-5 ">
              <input type="text" placeholder="Name" className=" border outline-none p-2 rounded-md " />
              <input type="text" placeholder="Email" className=" border outline-none p-2 rounded-md " />
              <input type="text" placeholder="Phone" className=" border outline-none p-2 rounded-md " />
              <input type="text" placeholder="Subject" className=" border outline-none p-2 rounded-md " />
            </div>
            <textarea name="" id="" cols="30" rows="6" placeholder="Message" className=" w-full p-2 outline-none border rounded-md mt-[20px] "></textarea>
          </div>
          <div>
            <button className=" px-8 py-3 hover:text-[#000] bg-[#595D67] hover:bg-[#7BC9FF] text-[#fff] transition-all duration-300 ease-in-out rounded-md font-semibold ">Send Messagge</button>
          </div>
        </div>
        <div className="w-full md:w-[30%] bg-[#fff] p-[2%] border border-[#d0d0d0] rounded-md text-[#484848] flex flex-col justify-between gap-4 ">
          <div className=" flex flex-col gap-2 ">
            <h3 className=" text-[1.2rem] font-semibold ">Contact us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              gravida quis libero eleifend ornare. habitasse platea dictumst.
            </p>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className=" text-[1.2rem] font-semibold ">Address</h3>
            <p>2301 Ravenswood Rd Madison, WI 53711</p>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className=" text-[1.2rem] font-semibold ">Phone</h3>
            <p>(315) 905-2321</p>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className=" text-[1.2rem] font-semibold ">Mail</h3>
            <p>(315) 905-2321</p>
          </div>
          <div className=" flex flex-col gap-2 ">
            <h3 className=" text-[1.2rem] font-semibold ">Follow Us</h3>
            <div className=" flex items-center gap-4 ">
              <FaFacebookF className=" rounded-md bg-[#F7F7F7] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 text-[2.5rem] " />
              <FaInstagram className=" rounded-md bg-[#F7F7F7] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 text-[2.5rem] " />
              <FaLinkedinIn className=" rounded-md bg-[#F7F7F7] hover:bg-[#7BC9FF] hover:text-[#000] cursor-pointer transition-all duration-300 ease-in-out p-3 text-[2.7rem] " />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
