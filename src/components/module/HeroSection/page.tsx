import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="flex justify-around items-center">
      <div className="">
        <h1 className="text-3xl font-extrabold text-orange-400">
          We are expert <br />{" "}
          <span className="text-blue-500">Digital Marketing</span>
        </h1>
      </div>
      <div>
        <Image src="" width={40} height={20} alt="hero Image" />
      </div>
    </div>
  );
};

export default HeroSection;
