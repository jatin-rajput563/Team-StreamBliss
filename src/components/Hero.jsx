import React from 'react'
import Header from './Header'
import Description from './common/Description'
import CustomButton from './common/CustomButton'
import heroImg from '../assets/images/png/hero-img.png'
import heroLayer from '../assets/images/png/hero-layer.png'
import { CameraIcon, UploadIcon,CloudIcon } from '../utils/Icons'

const Hero = () => {
  return (
    <>
      <div className="mx-auto">
        <Header />
      </div>
      <div className="px-3 relative pb-[112px]">
        <div className="max-w-[1140px] mx-auto">
          <div className="justify-center flex pt-17">
            <h1 className='font-bold text-[35px] sm:text-[52px] md:text-[58px] leading-[130%] text-center max-w-[576px] text-white'>The Creative Cloud for Everyone</h1>
          </div>
          <div className="flex justify-center">
            <Description descriptionClass={"text-center max-w-[554px] pt-4"} descriptionText={"Store, share, and collaborate on videos, images, docs, and more — all in one secure, lightning-fast platform."} />
          </div>
          <div className="flex flex-wrap items-center gap-6 justify-center pt-10">
            <CustomButton btnClass={"py-[13.5px] px-[54.5px]"} btnText={"Start For Free"} />
            <CustomButton btnClass={"py-[13.5px] px-[23.5px]"} btnText={"See Platform in Action"} />
          </div>
        </div>
        <div className="max-w-[994px] mx-auto">
          <img className='mx-auto pt-17 pointer-events-none' src={heroImg} alt="" />
          <div className="flex flex-wrap max-lg:gap-4 lg:justify-between z-1 relative justify-center pt-4">
            <CustomButton btnClass={"py-[14px] px-[87px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]"} btnIcon={<CameraIcon />} btnText={"461 watching"} />
            <CustomButton btnClass={"p-[14px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]"} btnIcon={<UploadIcon/>} btnText={"2,000+ Creators uploading now "} />
            <CustomButton btnClass={"py-[14px] px-[61.5px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]"} btnIcon={<CloudIcon/>} btnText={"2069 uploads today"} />
          </div>
        </div>
        <img className='absolute max-[681px]:bottom-80 max-[1016px]:bottom-60 max-[1250px]:bottom-40 max-[1440px]:bottom-30 bottom-25 left-0 w-full max-h-[425px] pointer-events-none' src={heroLayer} alt="" />
      </div>
    </>
  )
}

export default Hero