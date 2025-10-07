import React from 'react';
import Logo from '../assets/logo.png'
import { Github, LineChart } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Facebook } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#0D2343] text-white py-5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Logo and brand */}
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <img
            src={Logo}
            alt=""
            className="h-8 w-8"
          />
          <span className="font-bold text-lg">HERO.IO</span>
        </div>
        
        <hr className='' />

        {/* Right side: Social links */}
        <div className="flex items-center flex-col space-x-6">
          <div>
            <h1>Shosal linkg</h1>
            <div className='flex gap-5 mt-4'>
                <Github />
                <Linkedin />
                <Facebook />
            </div>
          </div>
        </div>
      </div>

      
      <div className="text-center text-xs opacity-70 mt-4">
        © 2025  
      </div>
    </footer>
    );
};

export default Footer;