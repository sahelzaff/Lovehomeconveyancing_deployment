import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Section2 from './Components/Section2/Section2'
import './App.css'
import Parallax from './Components/Parallax/Parallax'
import { assets } from './assets/assets'
import BenefitsComponent from './Components/BenefitsComponent/BenefitsComponent'
assets

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="">
      <Section2/>
      </div>
      {/* <Parallax/> */}
      <div className='h-screen -mt-3 bg-[#1b1817] -z-50'>
        <div className='flex justify-center items-center h-full'>
      <BenefitsComponent/>
        </div>
      </div>
      <div className='px-5 py-10 bg-white '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, aut est. Obcaecati officiis quas tempora cumque laborum placeat, sint ea sapiente, atque, quasi magni iusto quaerat distinctio. Recusandae magnam tempore voluptatum iusto temporibus odio quod quos ea voluptatibus dolorum! Minus, magni? Ab delectus, quidem impedit tempore aliquam iste soluta necessitatibus praesentium ut similique rem reprehenderit magnam consequuntur quo fuga assumenda nostrum tenetur ullam libero sunt minus ratione vel. Nobis soluta voluptas dignissimos odit! Nesciunt explicabo repudiandae commodi rem est aliquid deleniti sed facere illum quia doloremque hic ducimus excepturi, eveniet ab aperiam accusantium natus sapiente quas et sequi amet modi ea vitae? Sequi aspernatur aliquam dolore, quasi ut sed quam facere ratione adipisci? Quae saepe labore magni delectus aspernatur voluptatum inventore exercitationem voluptate provident quibusdam nobis, illum dolores error, eligendi iure non officia est consectetur cum possimus architecto a distinctio? Repellat earum voluptas accusamus velit. </div>
      
    </div>
  )
}

export default App