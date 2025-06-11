import React from "react";
import { FEATURES, BADGES } from "../utils/helper";
import CustomButton from "./common/CustomButton";

const Ready = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-[#1a1023] to-black">
      <div className="bg-[#1a1023]/80 rounded-2xl shadow-lg border border-[#2d2236] w-full max-w-4xl p-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-6">
              Join thousands of creators who trust StreamBliss
            </p>
            <CustomButton btnText="Start Uploading" btnClass="!py-3 !px-8 !cursor-pointer" />
          </div>
          <div className="flex-1 flex flex-col gap-4">
            {FEATURES.map((feature) => (
              <div
                key={feature.title}
                className="flex items-center gap-4 bg-[#22162b] border border-[#2d2236] rounded-xl p-4"
              >
                <div className="bg-[#2d2236] rounded-lg p-2 flex items-center justify-center">
                  <img src={feature.img} alt={feature.title} className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-white font-semibold">{feature.title}</div>
                  <div className="text-gray-400 text-sm">{feature.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 mt-8">
          {BADGES.map((badge) => (
            <div
              key={badge.title}
              className="flex items-center gap-4 bg-[#22162b] border border-[#2d2236] rounded-xl p-4 flex-1"
            >
              <div className="bg-[#2d2236] rounded-lg p-2 flex items-center justify-center">
                <img src={badge.img} alt={badge.title} className="w-6 h-6" />
              </div>
              <div>
                <div className="text-white font-semibold">{badge.title}</div>
                <div className="text-gray-400 text-sm">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ready;
