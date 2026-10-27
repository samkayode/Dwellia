import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.from(
        ".about-image",
        {
          y: 30,
          opacity: 0,
          duration: 2,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.2",
      ).from(".about-text", {
        x: 50,
        duration: 1,
        opacity: 0,
      });
    },
    { scope: aboutRef },
  );
  return (
    <div
      ref={aboutRef}
      className="container mx-auto text-center flex flex-col justify-center  p-14 md:px-20 w-full overflow-hidden"
      id="About"
    >
      <h1 className="text-4xl md:text-3xl font-semibold">About Our Company</h1>
      <div className="about-image flex flex-col md:flex-row  items-center md:items-start gap-10">
        <img
          src="about.jpg"
          className="w-100 h-[450px] rounded sm:w-1/2 max-w-lg mt-10"
        />

        <div className="about-text flex flex-col items-center  md:items-start mt-4 md:mt-15 gap-8">
          <h2 className="text-2xl">Redefining Luxury Living</h2>
          <p className="text-gray-500 md:max-w-100">
            Discover exceptional properties with a team committed to quality,
            comfort and your property goals.
          </p>
          <h3>
            <i className="fa-solid fa-check font-bold  text-xl"></i>
            <span className="text-xl">Trusted guidance</span>
          </h3>
          <h3>
            <i className="fa-solid fa-check font-bold text-xl"></i>
            <span className="text-xl">Exceptional properties</span>
          </h3>
          <h3>
            <i className="fa-solid fa-check font-bold text-xl"></i>
            <span className="text-xl">Client-focues service</span>
          </h3>
          <a
            href="#Properties"
            className="text-xl bg-green-800 text-white m-4 px-6 py-3 cursor-pointer hover:bg-green-900"
          >
            Explore
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
