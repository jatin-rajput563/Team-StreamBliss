import React from "react";
import { FEATURES, BADGES } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import Heading from "./common/Heading";
import Description from "./common/Description";

const Ready = () => {
  return (
    <div className="flex justify-center items-center px-4 ">
      <div className="bg-[#E649A208] rounded-2xl shadow-lg gradient-border w-full max-w-[1238px] lg:py-[50px] lg:px-16 py-8 md:px-5 px-3">
        <div className="max-w-[1110px] ">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <Heading headingText="Ready to Get Started?" headingClass="!mb-4 !text-left !text-white" />
              <Description descriptionText="Join thousands of creators who trust StreamBliss" descriptionClass="mb-10" />
              <CustomButton btnText="Start Uploading" btnClass="!px-[45px] !py-[12px] w-fit" />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-[#110018]/50 border max-w-[558px] border-[#2d2236] rounded-xl p-4"
                >
                  <div className="flex items-center justify-center cursor-pointer">
                    {feature.icon && <feature.icon className="size-12" />}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{feature.title}</div>
                    <div className="text-[#B6B2B7] max-md:text-sm">{feature.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#28202C99] border border-[#2d2236] rounded-xl mt-14">
            <div className="flex flex-wrap gap-4 md:p-6 p-3 lg:gap-[50px] lg:p-4">
              {BADGES.map((badge, index) => (
                <div
                  key={badge.title}
                  className={`
          flex items-center gap-4
          border-b border-[#2d2236] pb-4
          last:border-none
          w-full
          sm:w-[48%] 
          md:w-[48%] 
          lg:border-b-0 lg:pb-2
          ${index === 0 ? "lg:w-[375px]" : ""}
          ${index === 1 ? "lg:w-[247px]" : ""}
          ${index === 2 ? "lg:w-[325px]" : ""}
        `}>
                  <div className="flex items-center justify-center cursor-pointer">
                    {badge.icon && <badge.icon className="size-12 cursor-pointer" />}
                  </div>
                  <div>
                    <div className="text-white text-xl pb-[6px] font-semibold">{badge.title}</div>
                    <div className="text-[#B6B2B7] lg:whitespace-nowrap max-sm:text-sm">{badge.description}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Ready;
