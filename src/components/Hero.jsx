import React from 'react';
import Header from './Header';
import Description from './common/Description';
import CustomButton from './common/CustomButton';
import heroImg from '../assets/images/png/hero-img.png';
import heroLayer from '../assets/images/png/hero-layer.png';
import { CameraIcon, UploadIcon, CloudIcon, StorageCloud, LeftArrow, RightArrow, EncryptionIcon } from '../utils/Icons';
import heroEllipse from '../assets/images/png/header-ellipse.png';

const Hero = () => {
  return (
    <div id='home' className='bg-[url(src/assets/images/png/hero-bg-img.png)] bg-cover bg-center bg-no-repeat overflow-hidden'>
      <div className="mx-auto">
        <Header />
      </div>
      <div className="px-3 relative pb-10 sm:pb-20 md:pb-[112px]">
        <img className='absolute max-w-[435px] max-h-[435px] -right-40 top-43 mix-blend-multiply hidden lg:block pointer-events-none' src={heroEllipse} alt="ellipse" />
        <div className="max-w-[1140px] mx-auto relative">
          <div className="max-w-[239px] absolute top-45 left-9 hidden lg:block">
            <div className="flex  justify-end"><LeftArrow /></div>
            <div className='flex bg-[linear-gradient(180deg,rgba(184,81,224,0.08)_0%,rgba(235,72,155,0.08)_100%)] max-w-[226px] rounded-[95px] items-center gap-2 py-1.5 px-5.5 border border-[#8B858D]'><StorageCloud /><span className='text-[#FCFCFC] font-semibold whitespace-nowrap'>Unlimited Storage</span></div>
          </div>
          <div className="max-w-[264px] absolute max-[1140px]:top-42 top-52 right-6 hidden lg:block">
            <div className="flex  justify-start"><RightArrow /></div>
            <div className='flex max-w-[264px] bg-[linear-gradient(180deg,rgba(184,81,224,0.08)_0%,rgba(235,72,155,0.08)_100%)] rounded-[95px] items-center gap-2 py-[7.5px] px-5.5 border border-[#8B858D]'><EncryptionIcon /> <span className='text-[#FCFCFC] font-semibold whitespace-nowrap'>End-to-End Encryption</span></div>
          </div>
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
          <img className='mx-auto pt-17 pointer-events-none' src={heroImg} alt="hero-img" />
          <div className="flex flex-wrap max-lg:gap-4 lg:justify-between z-1 relative justify-center pt-4">
            <div className='py-[14px] px-[87px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]'><CameraIcon /> <span>461 watching</span></div>
            <div className='p-[14px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]'><UploadIcon /> <span>2,000+ Creators uploading now</span></div>
            <div className='py-[14px] px-[61.5px] relative border-0 border-gradient items-center !rounded-xl text-white !font-medium !text-base flex gap-[10px] !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]'><CloudIcon /> <span> 2069 uploads today</span></div>
          </div>
        </div>
        <img className='absolute bottom-0 max-sm:max-h-[790px] max-md:max-h-[800px] max-[955px]:max-h-[720px] max-[1018px]:max-h-[775px] max-h-[625px] left-0 w-full h-[900px] pointer-events-none' src={heroLayer} alt="hero-layer" />
      </div>
    </div>
  )
}

export default Hero