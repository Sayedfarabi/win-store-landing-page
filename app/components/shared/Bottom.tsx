import assets from "@/app/assets";
import Image from "next/image";

const Bottom = () => {
  return (
    <nav className="bg-[#0E3B3E] text-gray-300">
      <div className="h-12 mx-16 flex justify-between items-center gap-1">
        {/* Left side  */}
        <div className="w-8/12 flex gap-8">
          <div className="flex gap-2">
            <div>
              <Image
                src={assets?.svgs?.humberg || ""}
                width={20}
                height={20}
                alt="menu"
              />
            </div>
            <div>
              <p>Brouse By Category</p>
            </div>
          </div>
          <div>
            <p className="text-sm">Home</p>
          </div>
          <div>
            <p className="text-sm">Easy Monthly Installment</p>
          </div>
          <div>
            <p className="text-sm">Shop by Brands</p>
          </div>
          <div>
            <p className="text-sm">Become a Vendor</p>
          </div>
        </div>

        {/* Right Side  */}
        <div className="w-4/12 flex justify-end gap-8">
          <div>
            <Image
              className="w-5 h-5"
              src={assets?.icons?.facebook || ""}
              width={24}
              height={24}
              alt="facebook"
            />
          </div>
          <div>
            <Image
              className="w-5 h-5"
              src={assets?.icons?.twitter || ""}
              width={24}
              height={24}
              alt="twitter"
            />
          </div>
          <div>
            <Image
              className="w-5 h-5"
              src={assets?.icons?.linkedIn || ""}
              width={24}
              height={24}
              alt="linkedIn"
            />
          </div>
          <div>
            <Image
              className="w-5 h-5"
              src={assets?.icons?.instagram || ""}
              width={24}
              height={24}
              alt="instagram"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Bottom;
