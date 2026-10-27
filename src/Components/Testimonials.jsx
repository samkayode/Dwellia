import React from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { TestimonialData } from "../data/Projectdata";
gsap.registerPlugin(ScrollTrigger);

const Testimonials = () => {
  const testimonialRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          once: true,
          start: "top 80%",
          trigger: testimonialRef.current,
        },
      });
      tl.from(".testimonial-image", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
      });
    },
    { scope: testimonialRef },
  );

  return (
    <div
      ref={testimonialRef}
      className="container mx-auto w-full overflow-hidden py-10 lg:px-30"
      id="Testimonials"
    >
      <h1 className="md:text-3xl text-2xl font-bold mb-6 text-center">
        What Our Clients Say
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {TestimonialData.map((testimonial, index) => (
          <div
            key={index}
            className="testimonial-image max-w-[300px] px-8 py-12 text-center border-white shadow-2xl rounded"
          >
            <img
              src={testimonial.image}
              alt={testimonial.alt}
              className="w-50 h-50 rounded-full mx-auto mx-4"
            />
            <h2 className="text-lg font-medium mb-4 mt-3">
              {testimonial.name}
            </h2>
            <div className="flex justify-center gap-1 mb-2 text-green-500">
              {Array.from({ length: testimonial.rating }, (item, index) => (
                <i key={index} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-gray-500 mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
