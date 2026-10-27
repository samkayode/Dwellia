import React, { useRef } from "react";
import Navbar from "./Navbar";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Header = () => {
  const headerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
      }).from(
        ".hero-button",
        {
          y: 25,
          duration: 0.8,
          opacity: 0,
          stagger: 0.2,
        },
        "-=0.4",
      );
    },
    { scope: headerRef },
  );

  return (
    <div
      ref={headerRef}
      className="w-full min-h-screen top-0 left-0 mb-4 bg-center bg-cover flex items-center overflow-hidden"
      style={{ backgroundImage: "url(Header.jpg)" }}
    >
      <Navbar />

      <div className="container text-center mx-auto px-8 py-10 md:px-20 lg:px-32 text-white">
        <h2 className="hero-title text-white text-5xl sm:text-6xl md:text-[52px]">
          Discover a Place You'll Love to Call Home.
        </h2>

        <div className="hero-button mt-8 space-x-6">
          <a
            href="#Properties"
            className="border border-white px-8 py-3 rounded"
          >
            Explore
          </a>
          <a href="#Contact" className="bg-blue-700 px-8 py-3 rounded">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
