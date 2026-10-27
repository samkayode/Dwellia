import React, { useEffect, useState, useRef } from "react";
import { Projectdata } from "../data/Projectdata";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Properties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);
  const propertiesRef = useRef(null);

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(Projectdata.length);
      } else {
        setCardsToShow(1);
      }
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.addEventListener("resize", updateCardsToShow);
  }, []);

  const nextButton = () => {
    setCurrentIndex((prev) => (prev + 1) % Projectdata.length);
  };
  const prevButton = () => {
    setCurrentIndex((prev) => (prev === 0 ? Projectdata.length - 1 : prev - 1));
  };
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: propertiesRef.current,
          start: "top 80%",
          once: true,
        },
      });
      tl.from(".property-heading", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }).from(
        ".property-card",
        {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "power2.out",
        },
        "-=0.2",
      );
    },
    { scope: propertiesRef },
  );
  return (
    <div
      ref={propertiesRef}
      className="container mx-auto text-center w-full  mt-15 overflow-hidden"
      id="Properties"
    >
      <div className="">
        <h1 className="md:text-3xl text-4xl">Explore Our Properties</h1>
        <p className="property-heading text-gray-400">
          Discover exceptional homes and premium real estate selected for those
          who appreciate quality, comfort, and timeless elegance.
        </p>
        {/*Slider*/}
        <div className="flex justify-end gap-2 mt-4 mr-4">
          <button onClick={prevButton}>
            <i className="fa-solid fa-chevron-left border border-black px-6 py-3 font-bold rounded-lg cursor-pointer text-lg"></i>
          </button>
          <button onClick={nextButton}>
            <i className="fa-solid fa-chevron-right border border-black px-6 py-3 font-bold rounded-lg cursor-pointer text-lg"></i>
          </button>
        </div>
        <div className="overflow-hidden">
          <div
            className="flex gap-8 transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`,
            }}
          >
            {Projectdata.map((project, index) => (
              <div
                key={index}
                className="property-card  relative flex-shrink-0 w-full sm:w-1/4"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-80 mb-15 mt-4 "
                />
                <div className="absolute left-0 right-0 bottom-2 flex justify-center">
                  <div className="inline-block bg-white w-3/4 px-4 py-2 shadow-md">
                    <h2 className="text-xl font-semibold text-gray-800">
                      {project.name}
                    </h2>
                    <p>
                      {project.price} <span>{project.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
