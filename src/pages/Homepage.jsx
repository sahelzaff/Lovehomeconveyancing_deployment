import React from 'react'
import Navbar from './Components/Navbar/Navbar.jsx'
import Hero from './Components/Hero/Hero'
import Section2 from './Components/Section2/Section2'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
import { assets } from './assets/assets'

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <Hero />
            <Section2 />
            <BenefitsComponent />
        </div>
    )
}

export default Homepage
