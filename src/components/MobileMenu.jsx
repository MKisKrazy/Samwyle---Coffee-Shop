import React from "react";
import shopLogo from "../assets/shop-logo.svg";
function MobileMenu(props) {
    const{menuOpen,setMenuOpen} = props
  return (
    <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(255,255,255,0.9)] list-none gap-12 text-base  flex flex-col items-center justify-center transition-all duration-300 ease-in-out ${menuOpen?' h-screen opacity-100 pointer-events-auto':'h-0 opacity-0 pointer-events-none'}`}>
        

        <button onClick={()=>{
            setMenuOpen(false)
        }} className="absolute top-3 right-[56px] text-4xl"> &times; </button>
      
        <li onClick={()=>{
            setMenuOpen(false)
        }}>About Us</li>
        <li onClick={()=>{
            setMenuOpen(false)
        }}>Promotion</li>
        <li onClick={()=>{
            setMenuOpen(false)
        }}>Shop</li>
        <li onClick={()=>{
            setMenuOpen(false)
        }}>Contact</li>
        <button onClick={()=>{
            setMenuOpen(false)
        }} className="bg-[#2D635E] rounded w-30 h-10 text-white text-base">
          Contact Us
        </button>
    </div>

  );
}

export default MobileMenu;
