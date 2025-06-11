import React from "react";
import Heading from "./common/Heading";
import CustomButton from "./common/CustomButton";
import Description from "./common/Description";
import { Pricing_Data } from "../utils/helper";

const Pricing = () => {
  return (
    <>
      <div className="min-h-screen text-white">
        <div className="max-w-[1140px] mx-auto px-3">
          <div>
            <Heading headingText={"Simple, Transparent Pricing"} />
            <Description
              descriptionText={"Choose the plan that works best for you"}
              descriptionClass={"pt-4 text-center"}
            />
            <div className="max-w-[649px] border mt-[20px] [border-image:linear-gradient(90deg,_#000000_0%,_#FFFFFF_54.03%,_#000000_100%)_1] mx-auto"></div>
          </div>
          <div className="flex flex-row flex-wrap -mx-3">
            {Pricing_Data.map((item, index) => (
              <div className="w-1/3 mt-[50px]" key={index}>
                <div className="p-6 border border-[#FFFFFF1A] rounded-[20px]">
                  <p className="text-white font-semibold m-0 leading-[100%] text-2xl">
                    {item.text}
                  </p>
                  <div className="flex items-center">
                    <p className="text-white m-0 pt-[10px] text-[40px] font-semibold">
                      {item.amount}
                    </p>
                    <p className="text-white m-0 text-[32px] pt-4">
                      {item.month}
                    </p>
                  </div>
                  <p className="text-white font-bold text-lg leading-[100%] m-0 pt-[35px]">
                    {item.para}
                  </p>
                  <div className="flex items-center pt-[22px] gap-[10px]">
                    <item.icon />
                    <p className="">{item.para1}</p>
                  </div>
                  <div className="flex items-center pt-[22px] gap-[10px]">
                    <item.icon />
                    <p className="">{item.para2}</p>
                  </div>
                  <div className="flex items-center pt-[22px] gap-[10px]">
                    <item.icon />
                    <p className="">{item.para3}</p>
                  </div>
                  <div className="flex items-center pt-[22px] gap-[10px]">
                    <item.icon />
                    <p className="">{item.para4}</p>
                  </div>
                  <div className="flex items-center pt-[22px] gap-[10px]">
                    <item.icon />
                    <p className="">{item.para5}</p>
                  </div>
                  <CustomButton btnText={"Get Started"} btnClass={"py-[14px] px-[104px] mt-[97px]"} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pricing;
