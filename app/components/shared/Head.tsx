import assets from "@/app/assets";
import Image from "next/image";
import React from "react";
import { LuSearch } from "react-icons/lu";
import { FaHeadphones } from "react-icons/fa6";

const Head = () => {
  return (
    <div className="bg-[#03484D] text-[#FFFFFF]">
      <div className="h-16 mx-16 flex justify-between items-center gap-1">
        <div className="w-2/12">
          <Image
            src={assets?.images?.logo || ""}
            width={132}
            height={48}
            alt=""
          />
        </div>
        <div className="flex justify-start items-center gap-4 bg-white h-10 w-5/12 pl-4 rounded-sm">
          <div className="w-1/3 h-full">
            <select
              name="category"
              id="category"
              className="text-gray-500 w-full h-full focus:outline-0"
            >
              <option value="all-categories">All Categories</option>
              <option value="all-categories">Category A</option>
              <option value="all-categories">Category B</option>
            </select>
          </div>
          <div className="w-0.5 bg-gray-400 h-full"></div>
          <div className="w-2/3 h-full">
            <input
              className="text-gray-400 w-full h-full focus:outline-0"
              type="text"
              placeholder="Search for porducts"
              name="search"
              id="search"
            />
          </div>
          <div className="text-gray-500 h-full text-center">
            <button className="px-3 h-full bg-gray-400 rounded-r-sm hover:text-white duration-500 cursor-pointer">
              <LuSearch className="text-2xl" />
            </button>
          </div>
        </div>
        <div className="w-2/12"></div>
        <div className="w-2/12 text-xs text-gray-200 space-y-0.5">
          <p>Call us now</p>
          <p className="flex gap-2">
            <span className="">
              <FaHeadphones />
            </span>{" "}
            <span className="">+011 5827918</span>
          </p>
          <p>Sign in</p>
        </div>
        <div className="w-2/12 flex justify-between gap-4">
          <div>
            <Image
              src={assets?.svgs?.user || ""}
              width={24}
              height={24}
              alt="user"
            />
          </div>
          <div>
            <div>
              <Image
                src={assets?.svgs?.heart || ""}
                width={24}
                height={24}
                alt="heart"
              />
            </div>
          </div>
          <div className="flex relative">
            <div>
              <Image
                src={assets?.svgs?.cart || ""}
                width={24}
                height={24}
                alt="cart"
              />
            </div>
            <div className="text-white">
              <p className="mr-0.5">Cart</p>
            </div>
            <div className="absolute -top-3.5 left-2.5">
              <p className="text-yellow-400 font-semibold">3</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head;
