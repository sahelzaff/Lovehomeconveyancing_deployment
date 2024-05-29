import React from 'react';
import { assets } from '../../assets/assets';
import './Section2.css';  

const Section2 = () => {
  return (
    <div className="relative bg-[#393939] p-6 h-screen">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-yellow-500"
              >
                <path
                  fillRule="evenodd"
                  d="M5 3a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1V3zm0 10a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H6a1 1 0 01-1-1v-6z"
                  clipRule="evenodd"
                />
              </svg> */}
              {/* <h1 className="text-2xl font-bold text-gray-800">
                Enterprise Risk Management
              </h1> */}
            </div>
            {/* <p className="text-yellow-500">Presentation - 2023</p> */}
            <p className="text-gray-600">
              {/* Visit Our Website <span className="text-yellow-500">reallygreatsite.com</span> */}
            </p>
          </div>
        </div>
        <div className="relative w-full md:w-1/2 mt-6 md:mt-0">
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={assets.Bars}
              alt="Bars"
              className="w-full h-auto object-cover absolute z-10"
              id='bars'
            />
            <img
              src={assets.RCProfile}
              alt="Profile"
              className="w-1/2 h-auto md:h-1/2 object-cover relative z-9"
              id='profile'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
