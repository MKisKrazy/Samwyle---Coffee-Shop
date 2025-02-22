import React from "react";
import coffeeSteamer from "../assets/coffee-steamer.svg";
import Button from "./Button";

function HeroSection() {
  return (
    <div className="flex flex-col  md:flex-row justify-center items-center mt-10 ">
      <div className="flex-1 flex flex-col gap-5  justify-center items-center md:items-start">
        <h4 className="font-cedarville text-2xl  mb-2 text-[#444A4A] text-center text-nowrap md:text-3xl md:text-wrap md:text-left ">
          Drink coffee, enjoy with Samwyle
        </h4>
        <h1 className=" text-4xl md:text-5xl lg:text-6xl font-bold">Coffee Shop</h1>
        <Button/>
      </div>
      <div className="flex mt-8 pr-8 md:p-0 h-75 md:h-120 w-screen md:w-115 justify-center items-center bg-[#E3EBE7]">
        <img
          src={coffeeSteamer}
          alt="coffee-steamer"
          className="absolute bottom-17 md:bottom-28 object-contain w-70 h-70 md:w-90 md:h-90"
        />
      </div>
    </div>
  );
}

export default HeroSection;
