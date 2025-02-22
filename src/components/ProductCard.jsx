import React from "react";
import Button from "./Button";

function ProductCard() {
  return (
    <div className="w-full h-130 mt-15 flex justify-center items-center  bg-[rgba(45,99,94,0.05)] flex-col gap-3 md:gap-0.5 md:flex-row">
      <div className="w-80 h-110 flex flex-col justify-around text-center items-center p-8 rounded-3xl shadow-xl bg-white mr-8">
        <div className="text-3xl">Americano</div>
        <p className="leading-8 tracking-wide text-[#444A4A]">
          The name Latte (from Italian “milk”) speaks about the main ingredient
          of the drink. It is recommended to take fat milk - at least 3.2%. In
          addition to it, milk foam.
        </p>
        <Button/>
      </div>
      <div className="w-80 h-110 flex flex-col justify-around text-center items-center p-8 rounded-3xl shadow-2xl bg-white mr-8">
        <div className="text-3xl">Latte</div>
        <p className="leading-8 tracking-wide text-[#444A4A]">
          TThe name Latte (from Italian “milk”) speaks about the main ingredient
          of the drink. It is recommended to take fat milk - at least 3.2%. In
          addition to it, milk foam.
        </p>
        <Button/>
      </div>
      <div className="w-80 h-110 flex flex-col justify-around text-center items-center p-8 rounded-3xl shadow-2xl bg-white mr-8">
        <div className="text-3xl">Espresso</div>
        <p className="leading-8 tracking-wide text-[#444A4A]">
          Espresso - black coffee made in a coffee machine or a special coffee
          machine, where hot water is passed through pressed ground beans at a
          pressure.
        </p>
        <Button/>
      </div>
    </div>
  );
}

export default ProductCard;
