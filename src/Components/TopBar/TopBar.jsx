import React from 'react';
import { assets } from '../../assets/assets';
import './TopBar.css'; 

const TopBar = () => {
  return (
    <div className="bg-white text-black py-2">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <img src={assets.phone_call} alt="Phone Call" className="h-6 w-6" />
            <span className="text-sm font-bold">+61 468 908 807</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={assets.email} alt="Mail" className="h-6 w-6" />
            <span className="text-sm font-bold">hello@love-homes.com.au</span>
          </div>
        </div>
        <div className="sm:flex sm:items-center sm:space-x-2 hidden">
          <img
            src={assets.facebook}
            alt="Facebook"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.facebook.com', '_blank')}
          />
          <img
            src={assets.twitter}
            alt="Twitter"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.twitter.com', '_blank')}
          />
          <img
            src={assets.insta}
            alt="Instagram"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.instagram.com', '_blank')}
          />
          <img
            src={assets.linkedin}
            alt="LinkedIn"
            className="h-6 w-6 cursor-pointer social-icon"
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
