import React, { useEffect } from 'react';
import NavBar from './NavBar';

const Home = () => {
  useEffect(() => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    document.querySelectorAll("[data-animated-text]").forEach((element) => {
      let interval = null;

      const originalText = element.dataset.value;

      element.onmouseover = (event) => {
        let iteration = 0;
        clearInterval(interval);

        interval = setInterval(() => {
          event.target.innerText = originalText
            .split("")
            .map((letter, index) => {
              if (index < iteration) {
                return originalText[index];
              }

              return letters[Math.floor(Math.random() * 26)];
            })
            .join("");

          if (iteration >= originalText.length) {
            clearInterval(interval);
          }

          iteration += 1 / 3;
        }, 30);
      };
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Navbar */}
      <NavBar />

      {/* Animated Portfolio Heading */}
      <div className="relative">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 z-50">
        <h2
  className="text-5xl font-extrabold text-transparent bg-clip-text bg-white tracking-wider cursor-pointer macondo-regular glow-text {
  color: white;
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 20px #f0f,
    0 0 30px #f0f,
    0 0 40px #0ff,
    0 0 50px #0ff,
    0 0 60px #0ff;
} "
  data-value="Portfolio"
  data-animated-text
>
  Portfolio
</h2>

        </div>
      </div>

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
