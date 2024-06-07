import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import './App.css'
import Section2 from './Components/Section2/Section2'
import CustomerReviews from './Components/CustomerReviews/CustomerReviews'
import { assets } from './assets/assets'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
import Footer from './Components/Footer/Footer'
import WorkSection from './Components/WorkSection/WorkSection'


const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Section2/> 
      <BenefitsComponent/>
      <CustomerReviews/>
      <WorkSection/>
      <Footer/>
    
      
    </div>
  )
}

export default App