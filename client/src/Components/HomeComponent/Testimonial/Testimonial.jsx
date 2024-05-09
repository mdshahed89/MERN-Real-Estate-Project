import React from "react";
import TestimonialImg1 from "../../../assets/TestimonialImg1.jpg";
import TestimonialImg2 from "../../../assets/TestimonialImg2.jpg";
import TestimonialImg3 from "../../../assets/TestimonialImg3.jpg";
import TestimonialImg4 from "../../../assets/TestimonialImg4.jpg";
import TestimonialImg5 from "../../../assets/TestimonialImg5.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdArrowBackIosNew } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";


function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=" custom-next-arrow absolute bottom-[-4rem] left-[54%] px-5 py-2 rounded-md bg-[#F9F9F9] cursor-pointer ">
        <MdArrowForwardIos className=" text-[#000] text-xl " />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div onClick={onClick} className=" custom-next-arrow absolute bottom-[-4rem] left-[46%] px-5 py-2 rounded-md bg-[#F9F9F9] cursor-pointer ">
        <MdArrowBackIosNew className=" text-[#000] text-xl " />
    </div>
  );
}

function Testimonial() {
  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const reviewData = [
    {
      img: `${TestimonialImg1}`,
      comment:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
      name: "Md Shahed",
      deg: "Developer",
    },
    {
      img: `${TestimonialImg2}`,
      comment:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
      name: "Md Shahed",
      deg: "Developer",
    },
    {
      img: `${TestimonialImg3}`,
      comment:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
      name: "Md Shahed",
      deg: "Developer",
    },
    {
      img: `${TestimonialImg4}`,
      comment:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
      name: "Md Shahed",
      deg: "Developer",
    },
    {
      img: `${TestimonialImg5}`,
      comment:
        "Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.",
      name: "Md Shahed",
      deg: "Developer",
    },
  ];

  return (
    <div className=" bg-[#EEF7FF] rounded-md py-[6rem] my-[3rem] ">
      <div className=" max-w-[1300px] mx-auto ">
        <div className=" max-w-[35rem] mx-auto text-center flex flex-col gap-1 mb-[3rem] ">
            <h2 className=" md:text-[1.7rem] text-[1.3rem] lg:text-[2rem] font-semibold uppercase ">Testimonials</h2>
            <p className=" text-[1.1rem]  ">Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like.</p>
        </div>
      <div>
      <Slider {...settings}>
        {reviewData.map((data, idx) => (
          <div key={idx} className=" flex flex-col justify-center items-center text-center gap-5  ">
            <div className=" flex justify-center flex-col items-center gap-3 pb-6 ">
              <div className=" w-[8rem] h-[6rem] ">
                <img
                  src={data.img}
                  alt=""
                  className=" w-full h-full rounded-lg object-cover "
                />
              </div>
              <div>
                <h3 className=" text-[1.3rem] font-semibold ">{data.name}</h3>
                <p>{data.deg}</p>
              </div>
            </div>
            <div className=" text-[#484848] max-w-[30rem] mx-auto ">
                <h4>{data.comment}</h4>
            </div>
          </div>
        ))}
        
      </Slider>
      </div>
    </div>
    </div>
  );
}

export default Testimonial;
