import React from "react";
import { NavLink } from "react-router-dom";
import { Icons } from "../components/Icons";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { useState } from "react";

// bg-gradient-to-b from-black via-black to-transparent

const Navbar = ({ burger = 0 }) => {
  const [burgerIcon, setBurgerIcon] = useState(burger);
  const toggleBurger = () => {
    setBurgerIcon(0);
  };
  const toggleCross = () => {
    setBurgerIcon(1);
  };

  return (
    <nav className="font-sixtyfour bg-[#000000]/85 sm:bg-gradient-to-b sm:from-black sm:to-transparent top-0 z-[20] fixed flex md:flex-row flex-col w-full items-center md:justify-between justify-start md:px-28 md:py-5 py-5 md:h-fit md:mb-0 h-fit md:space-y-0">
      <div className="flex items-center space-x-20">
        <NavLink
          to="/"
          onClick={toggleBurger}
          className="flex w-full items-center "
        >
          <Icons.Logo className="w-44 h-20 ml-5" />
        </NavLink>

        {burgerIcon == 0 ? (
          <div className="flex z-50 items-center justify-end mx-auto mr-5 w-min md:hidden">
            <button onClick={toggleCross}>
              <RxHamburgerMenu
                className="relative m-auto text-white"
                size={22}
              />
            </button>
          </div>
        ) : (
          <div className="flex items-center justify-end mx-auto mr-5 w-min md:hidden">
            <button onClick={toggleBurger} className="bg-red ">
              <RxCross1 className="relative m-auto text-white" size={22} />
            </button>
          </div>
        )}
      </div>
      {burgerIcon == 1 ? (
        <div className="flex space-y-10 md:space-y-0 md:flex-row md:space-x-10 lg:space-x-20 md:mx-8 flex-col items-center text-lg md:text-xl pt-3 text-nowrap">
          <NavLink
            to="/team"
            onClick={toggleBurger}
            className={(e) => {
              return e.isActive
                ? " ease-in-out text-red-400 transition-colors drop-show-md"
                : "text-white ease-in-out transition-colors  hover:text-red-400 ";
            }}
          >
            Team
          </NavLink>
          <NavLink
            to="/events"
            onClick={toggleBurger}
            className={(e) => {
              return e.isActive
                ? " text-sky-300 hover:drop-shadow transition-colors drop-show-md"
                : "text-white hover:text-sky-500 hover:drop-shadow transition-colors ease-in-out  ";
            }}
          >
            Events
          </NavLink>
          <NavLink
            to="/contact"
            onClick={toggleBurger}
            className={(e) => {
              return e.isActive
                ? " ease-in-out text-green-300 transition-colors"
                : "text-white ease-in-out hover:text-green-300 transition-colors ";
            }}
          >
            Contact Us
          </NavLink>
        </div>
      ) : (
        <div></div>
      )}
    </nav>
  );
};

export default Navbar;
