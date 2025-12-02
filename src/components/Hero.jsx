import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const Hero = () => {
  return (
    <div>
      <div className="">
        <div className="hero-text md:flex-row md:items-end md:justify-between flex flex-col items-start justify-center font-montserrat gap-4 pl-4">
          <h1 className="md:text-[260px] lg:text-[340px] text-[130px] font-bold text-[#29343D] tracking-tighter text-base/[0.8]">arcé</h1>
          <h3 className="md:p-4 md:text-[14px] lg:text-[16px] text-[12px] ml-2 font-bold text-[#29343D]">Crafted with Purpose.</h3>
        </div>
      </div>
    </div>
  );
};

export default Hero;
