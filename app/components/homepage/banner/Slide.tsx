import { TBannerSlide } from "@/app/data/bannerData";
import React from "react";
type Props = {
  data: TBannerSlide;
};

const Slide = ({ data }: Props) => {
  return (
    <div>
      <div className="px-12 py-8 flex justify-between items-start">
        {/* Left Side  */}
        <div className="w-4/12 px-8">
          <div>
            {data?.title}
            {data.contents.map((item) => (
              <p key={item?.id}>{item?.paragraph}</p>
            ))}
          </div>
          <div className="mt-2">
            <button className="px-8 py-3 bg-[#14B1F0] rounded-md text-white cursor-pointer">
              {data?.btn_text}
            </button>
          </div>
        </div>
        {/* Right Side  */}
        <div className="w-4/12 flex justify-center items-start">
          <div className="w-41.25 h-41.25 bg-amber-500 rounded-full flex justify-center items-center bg-linear-to-l from-[#F37335] to-[#FDC830]">
            <h1 className="text-center text-5xl text-white">
              {data?.discount_rate} Off
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
