import React from 'react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/image_1.png';

const services = [
  {
    title: 'Diary and Encounter',
    description: 'Building responsive and scalable web applications.',
    link: '/service-one',
    image: image1,
  },
  {
    title: 'Personal Blog',
    description: 'Creating beautiful and user-friendly designs.',
    link: '/service-two',
    image: image1, // placeholder
  },
  {
    title: 'Cultural Representation',
    description: 'Improving website rankings on search engines.',
    link: '/service-three',
    image: image1, // placeholder
  },
];

const Main = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-indigo-800 mb-16 animate-fade-in">
          Our Services
        </h1>

        <div className="grid md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => navigate(service.link)}
              className="relative group rounded-2xl overflow-hidden cursor-pointer shadow-xl transition-transform transform hover:scale-[1.03] animate-fade-in-up duration-500"
            >
              {/* Glowing border using pseudo-element */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-30 group-hover:opacity-70 blur-md z-0 transition-all duration-500 animate-pulse" />

              {/* Image Layer */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-2xl"
              />

              {/* Gradient Overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-2xl z-10" />

              {/* Text Layer at Bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                <h2 className="text-2xl font-bold mb-2">{service.title}</h2>
                <p className="text-sm opacity-90">{service.description}</p>
                <div className="mt-4 text-indigo-200 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
