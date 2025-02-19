import React from "react";
import paperCup from "../assets/paper-cup.svg";
import Button from "./Button";

function Promotion() {
  return (
    <div className="flex mt-25 justify-between items-center ">
      <div className="max-w-3xl mr-30 ">
        <h2 className="font-bold text-4xl mb-5">Coffee of the day</h2>
        <h5 className="text-[#444A4A] mb-5 leading-loose tracking-widest">
          Americano coffee (Italian: Caffè Americano) is an espresso diluted 
          with hot water. The presence of foam (cream) depends on how coffee 
          and water are mixed. Attention! The concepts of “American” and 
          “American coffee” should not be confused. In the second case, this 
          refers not to diluted espresso, but to a drink prepared through a 
          filter system.
        </h5>
      <Button/>
      </div>

      <div className="bg-[#E3EBE7] w-100 h-62 flex justify-center items-center relative ">
        <img src={paperCup} alt="cup" className="w-72 h-72" />
        <h4 className="font-cedarville text-3xl absolute -right-13 top-5 -rotate-90">
          Promotion
        </h4>
      </div>
    </div>
  );
}

export default Promotion;
