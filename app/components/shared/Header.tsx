import assets from "@/app/assets";
import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <section className="h-16 bg-[#03484D] text-[#FFFFFF]">
      <nav className="mx-16 flex justify-between items-center">
        <div className="">
          <Image
            src={assets?.images?.logo || ""}
            width={132}
            height={48}
            alt=""
          />
        </div>
        <div className="">1</div>
        <div className="">2</div>
        <div className="">3</div>
      </nav>
    </section>
  );
};

export default Header;
