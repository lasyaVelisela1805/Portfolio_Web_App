import React, { useState } from 'react';
import NavBar from './NavBar';
import { motion, AnimatePresence } from 'framer-motion';
import i2 from '../assets/i2.png';

const slides = [
  {
    id: 1,
    title: 'Tondano Lake',
    description: 'A quiet day. Just the wind, the water, and thoughts I finally had time to hear.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
  },
  {
    id: 2,
    title: 'Misty Mountains',
    description: 'Woke up early, poured coffee, and let the silence of the mist speak for me.',
    image: i2,
  },
  {
    id: 3,
    title: 'Deep Forest Trail',
    description: 'Wandering helped me get lost in the best way — in trees and in thought.',
    image: 'https://images.unsplash.com/photo-1602504208293-e324a33b0bc4',
  },
];

const ServiceTwo = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      <NavBar />
      <main className="bg-black text-white min-h-screen">
        {/* Hero Section */}
        <section className="text-center pt-24 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight"
          >
            Writing to Remember
            <br />
            <span className="text-gray-300">Stories of places that changed me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 mt-4 max-w-xl mx-auto"
          >
            This blog is where I keep pieces of my soul — short stories, moments I never want to forget, and lessons I've learned one sunset at a time.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-6 px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition-all"
          >
            Read My Journal →
          </motion.button>
        </section>

        {/* Carousel Section */}
        <section className="mt-20 px-6">
          <div className="relative rounded-2xl overflow-hidden max-w-5xl mx-auto h-[400px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={slides[current].id}
                src={slides[current].image}
                alt={slides[current].title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover absolute inset-0"
              />
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 z-10">
              <h2 className="text-xl font-semibold">{slides[current].title}</h2>
              <p className="text-sm text-gray-300">{slides[current].description}</p>
              <div className="mt-2 flex justify-between items-center text-sm text-gray-400">
                <span>{String(current + 1).padStart(2, '0')}</span>
                <div className="flex gap-2 items-center">
                  {slides.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-1 w-6 rounded-full transition-all ${
                        idx === current ? 'bg-white' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
                <span>{String(slides.length).padStart(2, '0')}</span>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-20"
            >
              ‹
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 p-2 rounded-full text-white z-20"
            >
              ›
            </button>
          </div>
        </section>

        {/* Quote Section */}
        <section className="bg-black text-gray-400 px-6 py-16 text-center">
          <blockquote className="text-xl italic max-w-3xl mx-auto">
            “Some days are meant for stories. Others are made of them.”
          </blockquote>
          <p className="mt-4 text-sm text-gray-500">— From my travel notebook, 2023</p>
        </section>

        {/* About Section */}
        <section className="mt-24 bg-gray-100 text-black py-16 px-6 rounded-t-3xl">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase text-gray-500">About This Blog</p>
              <h3 className="text-2xl md:text-3xl font-semibold">
                Moments Captured, Words Penned, Lessons Lived
              </h3>
              <p className="mt-4 text-gray-600">
                Every photo, every word here is a piece of my world. From spontaneous travels to quiet reflections, I write to connect and remember. Thanks for being here — and for seeing the world through my words.
              </p>
            </div>
            <img
              src="https://images.unsplash.com/photo-1602504208293-e324a33b0bc4"
              alt="Forest Explorer"
              className="rounded-xl w-full h-[300px] object-cover"
            />
          </div>
        </section>
      </main>
    </>
  );
};

export default ServiceTwo;
