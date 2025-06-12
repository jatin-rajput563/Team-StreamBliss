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
            <div className="max-w-[649px] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent mt-8 mx-auto"></div>
          </div>
        </div>
        <Marquee>
          {EveryThing_Data.map((item, index) => (
            <div className="">
               {/* <img src=<item.> alt="" /> */}
            </div>
          ))}
        </Marquee> 
      </div>
    </>
  );
};

export default Everything;
