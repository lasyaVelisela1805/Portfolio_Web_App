import React from 'react';
import NavBar from './NavBar';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <NavBar />

      {/* Page Content */}
      <main className="flex-grow">
        <div className="relative overflow-hidden min-h-screen flex items-center">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-gradient-x"></div>
          
          <div className="container mx-auto p-4 relative z-10 py-16">
            <div className="flex flex-col md:flex-row items-center">
              {/* Left Content */}
              <div className="md:w-1/2 p-6 text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Embrace Diversity Through Effective Communication
                </h1>
               
               
              </div>
              
              {/* Right Image */}
              <div className="md:w-1/2 p-6 flex justify-center">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Diverse team communicating"
                    className="rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute -inset-4 border-2 border-white rounded-lg opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;