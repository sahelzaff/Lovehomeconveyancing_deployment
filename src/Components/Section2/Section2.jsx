import React from 'react';
import { assets } from '../../assets/assets';
import './Section2.css';

const Section2 = () => {
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 bg-transparent p-6 flex flex-col justify-start 2xl:p-12">
        <div className="flex flex-col space-y-4">
          <div className=" items-center space-x-2" id='text-div'>
            <div className=' flex flex-col items-start .space-x-2'>
              <p className='text-4xl font-bold  font-outfit md:pt-8' id='legal'>
                Legal Pitfalls to Avoid When </p>
                <h2 className='text-7xl font-extrabold font-outfit py-2' id='spancolor-text' >Purchasing Property:</h2>
                <p className='text-4xl font-outfit  font-bold' id='expert'>Expert Advice for Peace of Mind</p>
             
            </div>
          </div>
          <div className='md:pt-2 font-poppins text-lg '>
            <p className='pr-36' id='p-text'>Leave the hassle to me, and focus on what really matters to you.
              so you can chat directly with the qualified property lawyer.
            </p>
          </div>

          {/* <div className='md:pt-4'>
            <h2 className='font-outfit text-2xl font-semibold'>Mr Robin Carter-</h2>
            <p className='font-poppins md:pt-3 text-xl pr-10'>Principal Solicitor at Love Homes Conveyancing | 25 years of combined experience in accounting, law and business</p>
          </div> */}
          <div className="pt-24">
            <a href="#" className="button cursor-pointer" id='buttonsec'>Let's Chat</a>
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
            <p className='text-5xl font-poppins font-bold 2xl:text-7xl'>25</p>
            <p className='text-2xl font-poppins font-bold 2xl:text-3xl'>Years</p>
          </div>
        </div>
          <div className="absolute box bg-[#C04224]" id="box">
          <div className='absolute text-white text-center flex items-start pt-2 justify-center w-full h-full'>
            <p className=' absolute text-[1.45rem] right-7 font-outfit font-semibold 2xl:text-[1.8rem] text-center' id='name'>Mr Robin Carter-Principal Solicitor</p>
            
          </div>
            
          </div>
       
        </div>
      </div>
    </div>
  );
};

export default Section2;
