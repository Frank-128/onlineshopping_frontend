import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function DashboardSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  return (
    <div className="slider-container w-[200px] md:w-[350px]  ">
      <Slider {...settings}>
        <div className=" flex w-full h-full items-center">
          <Image src={"/iphone.png"} width={400} height={400} className="w-full h-full object-contain" alt="slider1" />
        </div>
        <div className=" flex items-center">
          <Image src={"/shoes.png"} width={400} height={400} className="w-full h-full object-contain" alt="slider2" />
        </div>
        <div className=" flex items-center">
          <Image src={"/watch.png"} width={400} height={400} className="w-full h-full object-contain" alt="slider3" />
        </div>
        <div className=" flex items-center">
          <Image src={"/ps5.webp"} width={400} height={400} className="w-full h-full  object-contain" alt="slider4" />
        </div>
      </Slider>
    </div>
  );
}

export default DashboardSlider;
