// src/Components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex flex-col">
          <span className="text-xl font-bold leading-none">Intercultural</span>
          <span className="text-xl font-bold">communications</span>
        </div>
        
        <ul className="hidden md:flex space-x-6">
          <li><a href="/" className="hover:text-gray-300 transition">Home</a></li>
          <li><a href="/about" className="hover:text-gray-300 transition">About</a></li>
          <li><a href="/portfolio" className="hover:text-gray-300 transition">Portfolio</a></li>
          <li><a href="/contact" className="hover:text-gray-300 transition">Contact</a></li>
        </ul>

        <button className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
