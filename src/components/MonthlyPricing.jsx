import React from "react";
import { Pricing_Data } from "../utils/helper";
import CustomButton from "./common/CustomButton";

const MonthlyPricing = () => {
  return (
    <>
      <div className="bg-black mt-[66.63px]">
        <div className="max-w-[1140px] mx-auto px-3">
          <div className="flex flex-row flex-wrap -mx-3 justify-center">
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
                        <div className="most-popular-badge">{item.popular}</div>
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
    </>
  );
};

export default MonthlyPricing;
