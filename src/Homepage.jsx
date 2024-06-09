import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Section2 from './Components/Section2/Section2'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
import { assets } from './assets/assets'
import CustomerReviews from './Components/CustomerReviews/CustomerReviews'
import Footer from './Components/Footer/Footer'
import WorkSection from './Components/WorkSection/WorkSection'
import TextReveal from './Components/TextReveal/TextReveal'
import WhySection from './Components/WhySection/WhySection'
import ServiceHome from './Components/ServiceHome/ServiceHome'
import Faq from './Components/Faq/Faq'

const Homepage = () => {
    return (
        <div>
            <Navbar className="fixed w-full z-50" />
            <Hero />
            <Section2 />
            <BenefitsComponent />
            <TextReveal text="Experience seamless property transactions with peace of mind, every step of the way."
            highlight="peace of mind"
            highlightClass="text-[#f0532d] font-bold font-outfit"
            className="my-custom-class" />
            <CustomerReviews/>
            <WorkSection/>
            <WhySection/>
            <ServiceHome/>
            <Faq/>
            <Footer/>
            
        </div>
    )
}

export default Homepage
