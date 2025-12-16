import React from "react";

const Banner = () => {
  return (
    <section className="h-80 w-full bg-[url('/banner_bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="px-12 py-8 flex justify-between items-start">
        {/* Left Side  */}
        <div className="w-4/12 px-8">
          <div>
            <h1 className="text-5xl">
              Shop <span className="text-[#0AAEB9]">Computer & Experience</span>
            </h1>
            <p>
              You can not Inspect Quality Into The Product; It Is Already There.
            </p>
            <p>
              I am not a product of my Circumstances. I am a product of my
              decisions.
            </p>
          </div>
          <div className="mt-2">
            <button className="px-8 py-3 bg-[#14B1F0] rounded-md text-white cursor-pointer">
              View More
            </button>
          </div>
        </div>
        {/* Right Side  */}
        <div className="w-4/12 flex justify-center items-start">
          <div className="w-41.25 h-41.25 bg-amber-500 rounded-full flex justify-center items-center bg-linear-to-l from-[#F37335] to-[#FDC830]">
            <h1 className="text-center text-5xl text-white">40% Off</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
