import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import Promotion from './components/Promotion'
import Footer from './components/Footer'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <div className='font-josefin '>
      <Navbar/>
      <HeroSection/>
      <AboutUs/>
      <Promotion/>
      <ProductCard/>
      <Footer/>
    </div>
  )
}

export default App