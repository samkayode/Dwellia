import React, { useState } from "react";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const openMenu = () => {
    setShowMobileMenu(true);
  };
  const closeMenu = () => {
    setShowMobileMenu(false);
  };
  return (
    <div className="absolute  z-10 w-full top-0 right-0">
      <div className="flex container mx-auto justify-between px-6 py-8 md:px-20 bg-transparent items-center">
        <img src="Dlogo.png" alt="logo" className="w-40 md:w-35 " />
        <ul className="hidden text-white md:flex gap-6">
          <a href="#Header" className="text-gray-200 cursor-pointer">
            Home
          </a>
          <a href="#About" className="text-gray-200 cursor-pointer">
            About
          </a>
          <a href="#Properties" className="text-gray-200 cursor-pointer">
            Properties
          </a>
          <a href="#Testimonials" className="text-gray-200 cursor-pointer">
            Testimonials
          </a>
          <a href="#Contact" className="text-gray-200 cursor-pointer">
            Contact
          </a>
        </ul>
        <button className="hidden md:block rounded-lg  bg-gray-100 text-black font-xl px-8 py-2 cursor-pointer">
          Sign Up
        </button>
        <button
          onClick={openMenu}
          className="md:hidden text-xl sm:text-2xl mx-2 px-2"
        >
          <i className="fa-solid fa-bars text-white cursor-pointer"></i>
        </button>
      </div>
      {/*Mobile-menu*/}
      <div
        className={`transition-transform duration-300 ${showMobileMenu ? "translate-x-0" : "translate-x-full"} md:hidden w-full bg-white overflow-hidden min-h-screen fixed top-0 bottom-0 right-0`}
      >
        <div
          onClick={closeMenu}
          className="flex justify-end mt-2 m-3 cursor-pointer"
        >
          <i className="fa-solid fa-xmark text-black text-xl"></i>
        </div>
        <ul className="flex flex-col items-center text-xl px-4 mx-4 gap-4 cursor-pointer">
          <a
            onClick={closeMenu}
            href="#Header"
            className="rounded-full inline-block"
          >
            Home
          </a>
          <a
            onClick={closeMenu}
            href="#About"
            className="rounded-full inline-block"
          >
            About
          </a>
          <a
            onClick={closeMenu}
            href="#Properties"
            className="rounded-full inline-block"
          >
            Properties
          </a>
          <a
            onClick={closeMenu}
            href="#Testimonials"
            className="rounded-full inline-block"
          >
            Testimonials
          </a>
          <a
            onClick={closeMenu}
            href="#Contact"
            className="rounded-full inline-block"
          >
            Contact
          </a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
