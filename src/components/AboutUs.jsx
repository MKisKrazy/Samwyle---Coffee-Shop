import React from "react";
import cup from "../assets/cup.svg";
export default function AboutUs() {
  return (
    <div className="flex mt-25 justify-between">
      <div className="bg-[#FAE9E0] w-95 h-80 mr-30 flex flex-col  justify-center items-center">
        <h4 className="font-cedarville text-2xl md:text-3xl absolute 
        left-20 bottom-6 rotate-[-90deg]">about us</h4>
        <img src={`${cup}?v=${Date.now()}`} alt="cup" className="  md:w-75 md:h-75 relative
        md:top-18 md:left-8  " />
      </div>

      <div className=" flex-wrap w-full  md:w-4xl">
        <h2 className="font-bold text-3xl md:text-4xl mb-4 ">Coffee Shop Samwayle</h2>
        <h5 className="text-[#444A4A] mb-4 leading-loose md:tracking-widest">
          Only one moment - when the barista reaches out over the bar to
          transfer the cup to the outstretched hand of the buyer. But this is
          exactly the moment when a connection arises between us and our guests.
        </h5>
        <h5 className="text-[#444A4A] leading-loose md:tracking-widest">
          And we strive to do our best to maintain this connection - starting
          with our commitment to selecting the highest quality coffee in the
          world and ending with how we interact with guests and organizations to
          fulfill our obligations.
        </h5>
      </div>
    </div>
  );
}
