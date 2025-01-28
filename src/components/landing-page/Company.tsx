import React from "react";
import Image from "next/image";
import bigfish from "../../../public/bigfish.svg";
import shopify from "../../../public/shopify.svg";
import monday from "../../../public/monday.svg";
import aliexpress from "../../../public/aliexpress.svg";
import { FiArrowUpRight } from "react-icons/fi";

const Company = () => {
  return (
    <section className="bg-[#8039DF] -mt-[76px] py-20 flex flex-col items-center gap-7">
      <h2 className="text-[40px] max-lg:text-[30px] w-full max-lg:px-6 text-center font-semibold text-white uppercase">
        Company that trust us
      </h2>
      <p className="w-[60%] max-lg:w-full px-5 text-center text-white/[.9] text-base font-medium max-lg:text-white/[.7]">
        We are already used by more than 8,000 companies. We help businesses,
        influencers and creative individuals create a professional presence on
        the web without the need for technical skills
      </p>
      <div className="flex flex-row max-lg:flex-col w-[85%] max-lg:w-full max-lg:px-3 mx-auto justify-between h-[150px] max-lg:h-[120px] items-center max-lg:gap-1 max-lg:flex-wrap">
        <div className="w-48 h-20 max-lg:w-36 max-lg:h-12">
          <Image
            src={bigfish}
            loading="eager"
            alt="This should be images or logo of random brands"
          />
        </div>
        <div className="w-48 h-20 max-lg:w-36 max-lg:h-12">
          <Image
            src={shopify}
            loading="eager"
            alt="This should be images or logo of random brands"
          />
        </div>
        <div className="w-48 h-20 max-lg:w-36 max-lg:h-12">
          <Image
            src={monday}
            loading="eager"
            alt="This should be images or logo of random brands"
          />
        </div>
        <div className="w-48 h-20 max-lg:w-36 max-lg:h-12">
          <Image
            src={aliexpress}
            loading="eager"
            alt="This should be images or logo of random brands"
          />
        </div>
      </div>
      <button className="capitalize bg-white h-[55px] w-[200px] rounded-lg text-center text-[#8039DF] text-base font-semibold flex flex-row gap-2 items-center justify-center">
        See more company
        <FiArrowUpRight />
      </button>
    </section>
  );
};

export default Company;
