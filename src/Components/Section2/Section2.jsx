import React from 'react';
import { assets } from '../../assets/assets';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 bg-transparent p-6 flex flex-col justify-start">
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <div className='flex items-center space-x-2'>
              <h2 className='text-4xl font-extrabold  font-outfit md:pt-8'>
                Legal Pitfalls to Avoid When <span className='text-6xl' id='spancolor-text' >Purchasing Property:</span>
                <p className='text-3xl font-outfit pt-1 font-bold'>Expert Advice for Peace of Mind</p>
              </h2>
            </div>
          </div>
          <div className='md:pt-2 font-poppins text-lg'>
            <p className='pr-36'>Leave the hassle to me, and focus on what really matters to you.
              so you can chat directly with the qualified property lawyer.
            </p>
          </div>

          {/* <div className='md:pt-4'>
            <h2 className='font-outfit text-2xl font-semibold'>Mr Robin Carter-</h2>
            <p className='font-poppins md:pt-3 text-xl pr-10'>Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law and business</p>
          </div> */}
          <div className="pt-24">
            <a href="#" className="button cursor-pointer">Let's Chat</a>
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-1/2 p-6 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={assets.Bars}
            alt="Bars"
            className="w-full h-auto object-cover absolute -z-10"
            id="bars"
          />
          <div className="absolute bg-[#393939] -z-20" id="gray-background"></div>
          <img
            src={assets.RCProfile}
            alt="Profile"
            className="w-1/2 h-auto md:h-1/2 object-cover relative -z-20"
            id="profile"
          />
        <div className="absolute circle bg-[#C04224] " id="circle">
          <div className='absolute text-white text-center flex  flex-col items-center justify-center w-full h-full'>
            <p className='text-5xl font-poppins font-bold'>25</p>
            <p className='text-2xl font-poppins font-bold'>Years</p>
          </div>
        </div>
          <div className="absolute box bg-[#C04224]" id="box">
          <div className='absolute text-white text-center flex items-start pt-2 justify-center w-full h-full'>
            <p className=' absolute text-[1.45rem] right-7 font-outfit font-semibold '>Mr Robin Carter-Principal Solicitor</p>
            
          </div>
            
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Section2;
