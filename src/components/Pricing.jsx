import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";
import leftEllipse from '../assets/images/png/action-ellipse.png';
import rightEllipse from '../assets/images/png/action-ellipse.png';
import CustomBorder from "./common/CustomBorder";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div id="pricing" className="relative text-white pt-10 sm:pt-16">
      <img className="max-w-[379px] max-h-[379px] w-full absolute -bottom-25 left-0 pointer-events-none" src={leftEllipse} alt="ellipse" />
      <img className="max-w-[379px] max-h-[379px] w-full absolute top-0 right-0 hidden xl:block mix-blend-multiply pointer-events-none" src={rightEllipse} alt="ellipse" />
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="text-center mb-12">
          <Heading headingText={"Simple, Transparent Pricing"} />
          <Description
            descriptionText={"Choose the plan that works best for you"}
            descriptionClass={"pt-4 text-center text-lg"}
          />
          <CustomBorder />
        </div>
        <div className="flex justify-center mx-auto items-center">
          <div className="inline-flex items-center mx-auto border border-[#FFFFFF3D] rounded-full p-[8px] bg-[#ffffff0d] shadow-[inset_0px_0px_6.5px_0px_#D74CB661]">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-lg font-bold leading-[160%] border ${activeTab === "monthly"
                ? "text-white bg-[linear-gradient(180deg,_#B851E0_0%,_#EB489B_100%)] border-0"
                : "text-gray-300 border-0 cursor-pointer"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setActiveTab("yearly")}
              className={`px-6 py-2 rounded-full flex items-center transition-all duration-300 text-lg font-bold leading-[160%] border ${activeTab === "yearly"
                ? "text-white bg-[linear-gradient(180deg,_#B851E0_0%,_#EB489B_100%)] border-0"
                : "text-gray-300 border-0 cursor-pointer"
                }`}
            >
              Yearly
              <span className="ml-2 text-xs flex items-center justify-center w-[83px] h-[24px] gap-[5px] rounded-[34px] border border-white pt-[1px] pr-[8px] pb-[1px] pl-[8px] bg-[#D04DBF1F]">
                SAVE 20%
              </span>
            </button>
          </div>
        </div>
        {activeTab === "monthly" ? <MonthlyPricing /> : <YearlyPricing />}
      </div>
    </div>
  );
};

export default Pricing;
