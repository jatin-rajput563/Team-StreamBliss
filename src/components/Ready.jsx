import React from "react";
import { FEATURES, BADGES } from "../utils/helper";
import CustomButton from "./common/CustomButton";
import Heading from "./common/Heading";
import Description from "./common/Description";

const Ready = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-[#1a1023] to-black px-4">
      <div className="bg-[#1a1023]/30 rounded-2xl shadow-lg border border-[#2d2236] w-full max-w-[1238px] lg:py-[50px] lg:px-11 py-8 md:px-5 px-3">
        <div className="max-w-[1150px]">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 flex flex-col justify-center">
              <Heading
                headingText="Ready to Get Started?"
                headingClass="!mb-4 !text-left"
              />
              <Description
                descriptionText="Join thousands of creators who trust StreamBliss"
                descriptionClass="mb-10"
              />
              <CustomButton
                btnText="Start Uploading"
                btnClass="!px-[45px] !py-[12px] w-fit"
              />
            </div>
            <div className="flex-1 flex flex-col gap-4">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center gap-4 bg-[#22162b] border max-w-[558px] border-[#2d2236] rounded-xl p-4"
                >
                  <div className=" flex items-center justify-center size-13 box-border-gradient relative rounded-xl !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)]">
                    <feature.img />
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {feature.title}
                    </div>
                    <div className="text-[#B6B2B7] max-md:text-sm">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-[#28202C99] border border-[#2d2236] rounded-xl mt-14">
            <div className="flex flex-wrap gap-4 md:p-6 p-3">
              {BADGES.map((badge, index) => (
                <div
                  key={badge.title}
                  className="flex items-center gap-4 flex-1 lg:basis-[32%] border-b border-[#2d2236] pb-4 lg:pb-2 lg:border-b-0 last:border-none"
                >
                  <div className="flex items-center justify-center size-13 box-border-gradient relative !bg-[linear-gradient(321.29deg,_rgba(255,_255,_255,_0.2)_22.72%,_rgba(255,_255,_255,_0)_74.04%)] rounded-xl">
                    <badge.img />
                  </div>
                  <div>
                    <div className="text-white text-xl pb-[6px] font-semibold">
                      {badge.title}
                    </div>
                    <div className="text-[#B6B2B7] lg:whitespace-nowrap max-md:text-sm">
                      {badge.description}
                    </div>
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
