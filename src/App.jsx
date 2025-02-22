import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Promotion from './components/Promotion'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'
import MobileMenu from './components/MobileMenu'


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className='font-josefin  '>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <HeroSection/>
      <AboutUs/>
      <Promotion/>
      <ProductCard/>
      <Footer/>
    </div>
  )
}

export default App