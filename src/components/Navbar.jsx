import React from "react";
import shopLogo from "../assets/shop-logo.svg";
function Navbar(props) {
  const{menuOpen,setMenuOpen} = props
  return (
    <div className="flex justify-normal gap-56 items-center">

      <div className="flex justify-center items-center -ml-24 md:ml-0">
        <img src={shopLogo} alt="Shop-Logo" className="w-10 h-10"/>
        <h1 className="font-cedarville md:ml-2 text-xl md:text-2xl">Samwayle</h1>
      </div>

      <div onClick={()=>{
            setMenuOpen(prev => !prev)
        }} className=" md:hidden w-7 h-7 cursor-pointer flex items-center justify-center ">
        &#9776;
      </div>

      <div className="hidden md:flex w-full  items-center justify-end list-none gap-20 text-base">
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
