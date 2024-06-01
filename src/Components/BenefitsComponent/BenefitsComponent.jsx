import React from 'react';
import { assets } from '../../assets/assets';
import './BenefitsComponent.css';
const BenefitsComponent = () => {
  return (
    <div className="bg-[#1b1817] p-8 pt-20 ">
      <div className="max-w-screen-xl mx-auto text-white flex flex-col justify-center items-center">
        <h1 className="text-center text-7xl font-outfit font-bold mb-3 whitespace-nowrap">
          Experience The Benefits Simplified With Our Service
        </h1>
        <p className="text-center mb-36 text-xl font-poppins">
          At love home, we redefine conveyancing by prioritizing simplicity and convenience.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-4/5 mx-auto" id='shadow_box'>
            <img src={assets.Benefit1}alt="Talent Shortage" className="w-full h-40 object-cover mx-auto rounded-t-lg" />
            <h2 className="text-2xl font-semibold mt-4 text-center font-outfit">Talent Shortage</h2>
            <p className="mt-2 text-xl text-center font-poppins leading-normal max-w-prose mx-auto">
              Attracting and retaining top talent in a competitive job market is a constant challenge. HR must develop effective recruitment strategies.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-4/5 mx-auto" id='shadow_box'>
            <img src={assets.Benefit2} alt="Competitive Market" className="w-full h-40 object-cover mx-auto rounded-t-lg" />
            <h2 className="text-2xl font-semibold mt-4 text-center font-outfit">Competitive Market</h2>
            <p className="mt-2 text-xl text-center font-poppins leading-normal max-w-prose mx-auto">
              HR must work to eliminate biases in recruitment and promotion processes and foster a culture of equity and inclusion.
            </p>
          </div>
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-4/5 mx-auto" id='shadow_box'>
            <img src={assets.Benefit3} alt="Skills Mismatch" className="w-full h-40 object-cover mx-auto rounded-t-lg" />
            <h2 className="text-2xl font-semibold mt-4 text-center font-outfit">Skills Mismatch</h2>
            <p className="mt-2 text-xl text-center font-poppins leading-normal max-w-prose mx-auto">
              Candidates often lack the specific skills required for the niche industry, leading to longer onboarding times and decreased productivity.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsComponent;
