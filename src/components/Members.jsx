import React from "react";
import Heading from "./common/Heading";
import Description from './common/Description';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { MEMBERS_DATA } from "../utils/helper";
import { MEMBER_ICON } from "../utils/Icons";

const Members = () => {
  return (
    <>
      <div className="p-4" id="members">
        <div className="bg-[#000000]">
          <div className="max-w-[1920px] mx-auto lg:pb-[140px] md:pb-[100px] sm:pb-[50px] pb-[30px] ">
            <Heading headingClass="text-[#FFFFFF] mb-4" headingText="What Members Are Saying" />
            <Description descriptionClass="text-center text-[#FFFFFF] mb-5" descriptionText="We’ve compiled some helpful reviews for you here." />
            <div className="custom-border max-w-[694px] mx-auto "></div>
            <Swiper
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              breakpoints={{
                320: { slidesPerView: 1, spaceBetween: 20 },
                640: { slidesPerView: 1, spaceBetween: 30 },
                768: { slidesPerView: 2, spaceBetween: 40 },
                1024: { slidesPerView: 3, spaceBetween: 60 },
              }}
              className="mx-auto mt-[50px] h-full">
              {MEMBERS_DATA.map((Obj, index) => (
                <SwiperSlide key={index} className="transition-all duration-500">
                  <div className="flex flex-col justify-between min-h-[270px] w-full max-w-[437px] mx-auto ">
                  <div><div className="mb-6"><MEMBER_ICON /></div>
                      <p className="text-[#FFFFFF] mb-6 text-base leading-[160%]">{Obj.text}</p></div>
                    <div className="flex items-center gap-[11px]">
                      <img src={Obj.image} alt={Obj.name} className="w-14 h-14 rounded-full" />
                      <div className="text-left">
                        <div className="font-medium text-[#FFFFFF] text-base leading-[160%]">{Obj.name}</div>
                        <div className="text-sm text-[#FFFFFF] opacity-70 leading-[160%]">{Obj.role}</div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Members;
