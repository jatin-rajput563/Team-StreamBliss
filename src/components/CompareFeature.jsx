import React from "react";
import { FEATURE_DATA } from "../utils/helper";

const CompareFeature = () => {
  return (
    <div className="bg-[#000000] px-4" id="features">
      <div className="max-w-[1140px] mx-auto lg:pt-[80px] lg:pb-[140px] md:pt-[50px] sm:pt-[30px] pt-[20px] md:pb-[100px] sm:pb-[60px] pb-[30px]">
        <h4 className="font-semibold text-xl sm:text-2xl leading-[160%] text-[#FFFFFF] mb-6">Compare Features</h4>
        <div className="overflow-x-auto rounded-lg border border-[#261C27] ">
          <table className="min-w-[700px] w-full border-collapse ">
            <thead className="bg-[#140016] text-[#FFFFFF] ">
              <tr>
                <th className="py-4 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl leading-[130%] font-semibold text-left mr-[103px] ">Features</th>
                <th className="py-4 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl leading-[130%] font-semibold text-center mr-[79px] ">Free</th>
                <th className="py-4 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl leading-[130%] font-semibold text-center">Pro</th>
                <th className="py-4 px-4 sm:px-6 md:px-8 text-base sm:text-lg md:text-xl leading-[130%] font-semibold text-center">Creator</th>
              </tr>
            </thead>
            <tbody>
              {FEATURE_DATA.map((obj, index) => (
                <tr key={index} className="border-b border-[#261C27] bg-[#070108BD] ">
                  <td className="py-3 px-4 sm:px-6 md:px-8 text-sm sm:text-base leading-[160%] bg-[#0E030F] !text-[#FFFFFF] opacity-70 lg:w-[258px] max-w-[258px]">{obj.feature}</td>
                  <td className="py-3 px-4 sm:px-6 md:px-8 text-sm sm:text-base leading-[160%] text-center text-[#FFFFFF] opacity-70 lg:w-[362px]">{obj.Free}</td>
                  <td className="py-3 px-4 sm:px-6 md:px-8 text-sm sm:text-base leading-[160%] text-center text-[#FFFFFF] opacity-70">{obj.Pro}</td>
                  <td className="py-3 px-4 sm:px-6 md:px-8 text-sm sm:text-base leading-[160%] text-center text-[#FFFFFF] opacity-70">{obj.Creator}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default CompareFeature;
