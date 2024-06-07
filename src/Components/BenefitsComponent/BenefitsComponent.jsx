import React from 'react';
import { assets } from '../../assets/assets';
import './BenefitsComponent.css';
const BenefitsComponent = () => {
  return (
    <div className="bg-[#fff] p-8 pt-20 ">
      <div className="max-w-screen-3xl mx-auto text-black flex flex-col justify-center items-center">
        <h1 className="text-center text-5xl font-outfit font-bold mb-3 whitespace-nowrap">
          Experience The Benefits Simplified With Our Service
        </h1>
        <p className=" text-black text-center mb-24 text-xl font-poppins">
          At love home, we redefine conveyancing by prioritizing simplicity and convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div className="bg-[#f0532d] text-white p-6 rounded-lg shadow-lg max-w-[25rem] mx-auto" id='shadow_box'>
            <img src={assets.Benefit1}alt="Talent Shortage" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-semibold mt-10 text-center font-outfit">Seamless Digital Experience</h2>
            <p className="mt-2 text-lg text-center font-poppins leading-normal max-w-prose mx-auto">
            Experience the ease of digital convenience with transparent, 24/7 access to documents, updates, and messages. Whether you're at home or on the move, all content is seamlessly delivered to any mobile device, keeping you informed every step of the way.

            </p>
          </div>
          <div className="bg-[#f0532d] text-white p-6 rounded-lg shadow-lg max-w-[25rem] mx-auto" id='shadow_box'>
            <img src={assets.Benefit2} alt="Competitive Market" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-semibold mt-10 text-center font-outfit">Stress-Free Communication</h2>
            <p className="mt-2 text-lg text-center font-poppins leading-normal max-w-prose mx-auto">
            Say goodbye to stress with our streamlined communication process. All correspondence is securely delivered to you, your agent, and your broker in one online space hosted by your dedicated solicitor. This means you can communicate directly with your qualified property lawyer, ensuring clarity and efficiency throughout the transaction.
            </p>
          </div>
          <div className="bg-[#f0532d] text-white p-6 rounded-lg shadow-lg max-w-[25rem] mx-auto" id='shadow_box'>
            <img src={assets.Benefit3} alt="Skills Mismatch" className="w-full h-50 object-cover mx-auto rounded-lg" />
            <h2 className="text-2xl font-semibold mt-10 text-center font-outfit">Trusted and Proven</h2>
            <p className="mt-2 text-lg text-center font-poppins leading-normal max-w-prose mx-auto">
            At the core of our service is trust and reliability. We prioritize our customers and handle property deals with ease, speed, and confidence, ensuring a smooth and successful experience every time.
Discover the difference with love home, where conveyancing is made simple.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
