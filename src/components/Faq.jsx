import React, { useState } from "react";
import { FAQS } from "../utils/helper";
import Heading from "./common/Heading";
import Description from "./common/Description";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black via-[#1a1023] to-black">
      <div className="w-full max-w-[816px] mx-auto px-4">
        <Heading headingText="Frequently Asked Questions" headingClass="!mb-4 !text-white max-md:text-3xl"/>
        <Description descriptionText="Choose the plan that works best for you" descriptionClass="!text-center !mb-5"/>
        <div className="footer-border mb-6"></div>
        <div className="bg-transparent">
          {FAQS.map((faq, idx) => (
            <div key={faq.question} className="border-b border-white/20">
              <button
                className={`w-full flex justify-between items-center py-6 focus:outline-none cursor-pointer ${openIndex === idx ? "pb-4" : ""
                  }`}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="text-left text-2xl font-semibold text-white">
                  {faq.question}
                </span>
                <span className="text-2xl text-white font-bold select-none">
                  {openIndex === idx ? "−" : "+"}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === idx ? "max-h-40 pb-6" : "max-h-0"
                  } text-white/70`}>
                <div className="pb-4">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
