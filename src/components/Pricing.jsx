import React, { useState } from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import MonthlyPricing from "./MonthlyPricing";
import YearlyPricing from "./YearlyPricing";

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <div className="bg-black text-white pt-16">
      <div className="max-w-[1140px] mx-auto px-3">
        <div className="text-center mb-12">
          <Heading headingText={"Simple, Transparent Pricing"} />
          <Description
            descriptionText={"Choose the plan that works best for you"}
            descriptionClass={"pt-4 text-center text-lg"}
          />
          <div className="max-w-[649px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-8 mx-auto"></div>
        </div>
        <div className="flex justify-center mx-auto items-center">
          <div className="inline-flex items-center mx-auto border border-[#FFFFFF3D] rounded-full p-[8px] mb-8 bg-[#ffffff0d] shadow-[inset_0px_0px_6.5px_0px_#D74CB661]">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-6 py-2 rounded-full transition-all duration-300 text-lg font-bold leading-[160%] border ${
                activeTab === "monthly"
                  ? "text-white bg-[linear-gradient(180deg,_#B851E0_0%,_#EB489B_100%)] border-0"
                  : "text-gray-300 border-0"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setActiveTab("yearly")}
              className={`px-6 py-2 rounded-full flex items-center transition-all duration-300 text-lg font-bold leading-[160%] border ${
                activeTab === "yearly"
                  ? "text-white bg-[linear-gradient(180deg,_#B851E0_0%,_#EB489B_100%)] border-0"
                  : "text-gray-300 border-0"
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
