import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../components/Icons";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useMediaQuery } from '@mantine/hooks';

const Navbar = ({ burger = 0 }) => {
  const [burgerIcon, setBurgerIcon] = useState(burger);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    if (isDesktop) {
      setIsMenuOpen(true);
    } else {
      setIsMenuOpen(false);
    }
  }, [isDesktop]);

  const toggleMenu = () => {
    setBurgerIcon(prevState => prevState === 0 ? 1 : 0);
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="font-sixtyfour bg-[#000000]/85 sm:bg-gradient-to-b sm:from-black sm:to-transparent top-0 z-[20] fixed flex md:flex-row flex-col w-full items-center md:justify-between justify-start md:px-28 md:py-5 py-5 md:h-fit md:mb-0 h-fit md:space-y-0">
      <div className="flex items-center space-x-20">
        <NavLink
          to="/"
          onClick={() => !isDesktop && toggleMenu()}
          className="flex w-full items-center "
        >
          <Icons.Logo className="w-44 h-20 ml-5" />
        </NavLink>

        <div className="flex z-50 items-center justify-end mx-auto mr-5 w-min md:hidden">
          <button onClick={toggleMenu}>
            {burgerIcon === 0 ? (
              <RxHamburgerMenu className="relative m-auto text-white" size={22} />
            ) : (
              <RxCross1 className="relative m-auto text-white" size={22} />
            )}
          </button>
        </div>
      </div>
      
      <div 
        className={` -z-40 gap-y-4
          md:flex md:flex-row md:space-x-10 lg:space-x-20 md:mx-8 md:items-center md:text-xl md:pt-3
          flex flex-col items-center text-lg  text-nowrap
          transition-all duration-500 ease-in-out
          ${isDesktop ? 'opacity-100 translate-y-0' : (isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full')}
          ${!isDesktop && 'absolute top-full left-0 w-full bg-[#000000]/85 pb-5'}
        `}
      >
        <NavLink
          to="/team"
          onClick={() => !isDesktop && toggleMenu()}
          className={(e) => {
            return e.isActive
              ? "ease-in-out text-red-400 transition-colors drop-show-md"
              : "text-white ease-in-out transition-colors hover:text-red-400";
          }}
        >
          Team
        </NavLink>
        <NavLink
          to="/events"
          onClick={() => !isDesktop && toggleMenu()}
          className={(e) => {
            return e.isActive
              ? "text-sky-300 hover:drop-shadow transition-colors drop-show-md"
              : "text-white hover:text-sky-500 hover:drop-shadow transition-colors ease-in-out";
          }}
        >
          Events
        </NavLink>
        {/* <NavLink
          to="/contact"
          onClick={() => !isDesktop && toggleMenu()}
          className={(e) => {
            return e.isActive
              ? "ease-in-out text-green-300 transition-colors"
              : "text-white ease-in-out hover:text-green-300 transition-colors";
          }}
        >
          Contact Us
        </NavLink> */}
      </div>
    </nav>
  );
};

export default Navbar;