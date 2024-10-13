import React from 'react';

const Footer = () => {
  return (
    <footer className="h-20 bg-black flex items-center justify-between px-4 text-xs sm:text-sm md:text-base whitespace-nowrap overflow-hidden">
      <div className="flex-1 flex justify-start">
        <img src="bvest-logo.png" alt="Logo" className="md:h-10 h-4" />
      <div className="flex-1 flex justify-center text-gray-300 truncate">
      </div>
        <span className="truncate">
          Developed by{' '}
          <a 
            href="https://linktr.ee/yom4n" 
            className="text-white hover:underline"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Sparsh
          </a>
        </span>
      </div>
      <div className="flex-1 flex justify-end text-gray-300 truncate">
        <span className="truncate">
          <span className="sm:hidden">BVEST</span>
          <span className="hidden sm:inline">Connect with us on</span>
          {' '}
          <a 
            href="https://www.instagram.com/bvest.bvcoe/" 
            className="underline hover:text-white"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;