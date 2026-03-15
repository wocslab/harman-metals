import React from 'react'
import ConstructionHero from '../components/HeroComponents/Hero'
import RealEstateAbout from '../components/HeroComponents/Aboutsection'
import BrandSection from '../components/HeroComponents/Client'
import Features from '../components/HeroComponents/Feature'
import ProductsSection from '../components/HeroComponents/Products'
import FAQSection from '../components/HeroComponents/FAQ'
import ConnectTeam from '../components/HeroComponents/Connect'

function Home() {
  return (
    <div>
      <ConstructionHero/>
      <RealEstateAbout/>
      <BrandSection/>
      <Features/>
      <ProductsSection/>
      <FAQSection/>
      <ConnectTeam/>
      
    </div>
  )
}

export default Home
