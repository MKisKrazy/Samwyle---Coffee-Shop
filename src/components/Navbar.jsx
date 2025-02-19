import React from "react";
import shopLogo from "../assets/shop-logo.svg";
function Navbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex justify-center items-center">
        <img src={shopLogo} alt="Shop-Logo" />
        <h1 className="font-cedarville ml-2 text-2xl">Samwayle</h1>
      </div>
      <div className="flex w-full items-center justify-end list-none gap-20 text-base">
        <li>About Us</li>
        <li>Promotion</li>
        <li>Shop</li>
        <li>Contact</li>
        <button className="bg-[#2D635E] rounded w-30 h-10 text-white text-base">
          Contact Us
        </button>
      </div>
    </div>
  );
}

export default Navbar;
