import React from "react";

const Footer = () => {
  return (
    <div
      className="w-full overflow-hidden bg-gray-800 px-4 md:px-20 lg:px-30 gap-4 "
      id="Footer"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="w-full md:w-1/3 mb-6 md:mb-0">
          <img src="Dlogo.png" className="w-30 h-10" />
          <p className="text-gray-400 mt-4">
            Experience the art of luxury living with our exclusive property
            collections. We connect you with exceptional homes and investment
            opportunities that reflect your lifestyle, aspirations, and vision
            for the future.
          </p>
        </div>
        <div className="w-full md:w-1/5 mb-6 md:mb-0 md:mt-10">
          <h3 className="text-lg text-white font-bold mt-2">Dwellia</h3>
          <ul className="flex flex-col gap-4 text-gray-400 mt-2">
            <a href="#Header" className="hover:text-gray-200">
              Home
            </a>
            <a href="#Properties" className="hover:text-gray-200">
              Properties
            </a>
            <a href="#About" className="hover:text-gray-200">
              About
            </a>
            <a href="#Testimonials" className="hover:text-gray-200">
              Testimonias
            </a>
            <a href="#Contact" className="hover:text-gray-200">
              Contact
            </a>
          </ul>
        </div>
        <div className="w-full md:w-1/3 mb-4">
          <h3 className="text-lg text-white font-bold mt-4">Contact Us</h3>
          <div className="flex flex-col gap-2 text-gray-400 mt-4">
            <div>
              <i className="fa-solid fa-envelope text-green-500 text-2xl mr-2"></i>
              <span>Dwellia1@gmail.com</span>
            </div>
            <div>
              <i className="fa-solid fa-location-dot text-green-500 text-2xl mr-2"></i>
              <span>No 10 Chief Joseph str Mainland, Lagos</span>
            </div>
            <div>
              <i className="fa-solid fa-phone text-green-500 text-2xl mr-2"></i>
              <span>+2348022334455</span>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-600 py-2 mt-10 text-gray-400 text-center">
        Copyright {new Date().getFullYear()}{" "}
        <span>
          <i className="fa-regular fa-copyright"></i>
        </span>{" "}
        Kayode Samuel. All Right Reserved.{" "}
      </div>
    </div>
  );
};

export default Footer;
