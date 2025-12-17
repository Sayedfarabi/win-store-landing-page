"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import banner_slides from "@/app/data/bannerData";
import Slide from "./Slide";
import { useMotionCarousel } from "@/app/hooks/useMotionCarousel";

const Banner = () => {
  const { current, next, prev, goTo, setIsHovered } = useMotionCarousel({
    total: banner_slides.length,
    interval: 3000,
  });

  const slide = banner_slides[current];

  return (
    <section
      className="relative h-80 w-full bg-[url('/banner_bg.png')] bg-cover bg-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Slide data={slide} />
        </motion.div>
      </AnimatePresence>

      {/* Arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded"
      >
        ‹
      </button>

      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded"
      >
        ›
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {banner_slides.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => goTo(index)}
            className={`h-2 rounded-full transition-all duration-300
              ${current === index ? "w-8 bg-[#034E53]" : "w-3 bg-[#9fbec1]"}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Banner;
