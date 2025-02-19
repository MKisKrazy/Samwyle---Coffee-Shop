import React from "react";
import coffeeSteamer from "../assets/coffee-steamer.svg";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="flex justify-center items-center mt-10 ">
      <div className="flex-1 flex flex-col gap-5">
        <h4 className="font-cedarville text-3xl mb-2 text-[#444A4A]">
          Drink coffee, enjoy with Samwyle
        </h4>
        <h1 className="text-6xl font-bold">Coffee Shop</h1>
        <Button/>
      </div>
      <div className="flex h-120 w-115 justify-center items-center bg-[#E3EBE7]">
        <img
          src={coffeeSteamer}
          alt="coffee-steamer"
          className="absolute bottom-28 object-contain w-90 h-90"
        />
      </div>
    </div>
  );
}

export default HeroSection;
