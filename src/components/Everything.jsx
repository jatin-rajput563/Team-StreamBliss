import React from "react";
import Heading from "./common/Heading";
import Description from "./common/Description";
import Marquee from "react-fast-marquee";
import { EveryThing_Data } from "../utils/helper";

const Everything = () => {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <div className="max-w-[1140px] mx-auto px-3">
          <div>
            <Heading headingText={"Everything You Need"} />
            <Description
              descriptionText={
                "Simple yet powerful features for all your video and image needs"
              }
              descriptionClass={"text-center pt-[16px]"}
            />
            <div className="max-w-[649px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-5 mx-auto"></div>
          </div>
        </div>
        <div className="py-20">
          <Marquee speed={200}>
            <div className="flex gap-8 my-[50px]">
              {EveryThing_Data.map((item, index) => {
                const rotation =
                  index % 2 === 0 ? "rotate-[8deg] lg:rotate-[15deg]" : "rotate-[-15deg] lg:rotate-[-8deg]";
                const backgroundColor = index % 2 === 0 ? "#1F0C1D" : "#110018";
                return (
                  <div
                    key={index}
                    className={`w-[300px] lg:w-[364px] lg:min-h-[374px] transition-transform duration-300 hover:scale-105 hover:rotate-0 rounded-[16px] border border-[#322438] p-[28px] flex-shrink-0 ${rotation}`}
                    style={{ backgroundColor }}
                  >
                    <item.icon />
                    <p className="font-semibold text-2xl lg:text-3xl xl:text-[32px] leading-tight max-w-[280px] lg:max-w-[317px] pt-[21px]">
                      {item.Heading}
                    </p>
                    <p className="leading-[160%] max-w-[260px] lg:max-w-[308px] pt-[50px] lg:pt-[100px]">
                      {item.para}
                    </p>
                  </div>
                );
              })}
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};

export default Everything;
