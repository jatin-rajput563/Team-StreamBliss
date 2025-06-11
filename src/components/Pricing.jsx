import React from "react";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton";
import Description from "./common/Description";
import { Pricing_Data } from "../utils/helper";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="text-center mb-12">
          <Heading headingText={"Simple, Transparent Pricing"} />
          <Description
            descriptionText={"Choose the plan that works best for you"}
            descriptionClass={"pt-4 text-center text-lg"}
          />
          <div className="max-w-[649px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-8 mx-auto"></div>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center border border-[#FFFFFF3D] rounded-full p-1 mb-8">
            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 rounded-full text-gray-300 hover:text-white transition-all duration-300"
            >
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full bg-purple-600 text-white transition-all duration-300">
              Yearly
              <span className="ml-2 text-xs bg-purple-500 px-2 py-1 rounded-full">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-row flex-wrap -mx-3 justify-center mt-[100px]">
          {Pricing_Data.map((item, index) => (
            <div className="w-full lg:w-1/3 max-w-sm" key={index}>
              <div
                className={
                  "flex flex-col p-6 rounded-[20px] backdrop-blur-[16px] transition-all duration-300 h-full border border-[#1F1D1F] hover:border-[rgba(184,81,224,0.5)] hover:scale-105 "
                }
              >
                <div className="flex-grow flex flex-col">
                  <div className="flex items-center gap-[10px] mb-4">
                    <p className="text-white font-semibold text-2xl">
                      {item.text}
                    </p>
                    {index === 1 && item.popular && (
                      <div className="text-white most_popular [background:linear-gradient(180deg,_rgba(184,_81,_224,_0.12)_0%,_rgba(235,_72,_155,_0.12)_100%)] text-xs font-semibold py-2 px-6">
                        {item.popular}
                      </div>
                    )}
                  </div>
                  <div className="flex items-baseline mb-6">
                    <p className="text-white text-[40px] font-semibold">
                      {item.amount}
                    </p>
                    <p className="text-white/70 text-[20px] ml-1">
                      {item.month}
                    </p>
                  </div>
                  <p className="text-white font-bold text-lg mb-8">
                    {item.para}
                  </p>
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3">
                      <item.icon />
                      <p className="text-white/90">{item.para1}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon />
                      <p className="text-white/90">{item.para2}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon />
                      <p className="text-white/90">{item.para3}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon />
                      <p className="text-white/90">{item.para4}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <item.icon />
                      <p className="text-white/90">{item.para5}</p>
                    </div>
                  </div>
                  <div className="mt-[97px]">
                    <CustomButton
                      btnText={"Get Started"}
                      btnClass={"py-[14px] px-[104px]"}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
