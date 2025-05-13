import React, { useEffect, useRef } from 'react';
import NavBar from './NavBar.jsx';
import EV1 from '../assets/EV1.png';
import { motion } from 'framer-motion';


import Page2 from './page2.jsx';


const ServiceOne = () => {
  const blobRef = useRef(null);

  useEffect(() => {
    const blob = blobRef.current;
    if (!blob) return;

    blob.style.left = '50%';
    blob.style.top = '50%';

    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`,
      }, {
        duration: 3000,
        fill: "forwards",
        easing: "ease-out"
      });
    };

    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "backOut"
      }
    }
  };

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen bg-black overflow-hidden text-white">
        {/* Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, 
                rgba(255, 255, 255, 0.1) 0%, 
                transparent 50%
              ),
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.05) 25%,
                transparent 25%,
                transparent 75%,
                rgba(255, 255, 255, 0.05) 75%,
                rgba(255, 255, 255, 0.05)
              ),
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.05) 25%,
                transparent 25%,
                transparent 75%,
                rgba(255, 255, 255, 0.05) 75%,
                rgba(255, 255, 255, 0.05)
              )`,
            backgroundSize: '100px 100px',
            backgroundPosition: '0 0, 0 0, 50px 50px'
          }}
        />

        {/* Animated Blob */}
        <div
          ref={blobRef}
          className="fixed pointer-events-none w-[34vmax] h-[34vmax] rounded-full bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-transparent opacity-70 blur-[40px] z-10"
          style={{ transform: 'translate(-50%, -50%)', transition: 'opacity 0.3s ease' }}
        />

        {/* Content Section */}
        <div className="container mx-auto px-4 py-16 z-20 relative">
          <motion.div 
            className="flex flex-col lg:flex-row items-center gap-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Left Side - Content */}
            <motion.div className="lg:w-1/2" variants={containerVariants}>
              <motion.h1 
                className="text-4xl font-bold mb-6 leading-tight"
                variants={itemVariants}
              >
                "English Vinglish" and the Cultural Clash of Language, Identity, and Empowerment through Cinema
              </motion.h1>
              
              <motion.div 
                className="space-y-4 text-lg leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  <em>English Vinglish</em> (2012) is a film directed by Gauri Shinde that explores the cultural struggle an individual might face between traditional and modern identities. This film focuses particularly on how a language can impact in shaping a culture.
                  By portraying the journey of Shashi Godbole (played by Sridevi) this film critics the cultural importance that is placed on English proficiency in post-colonial India. The film shows that, knowing English is seen as a sign of power and respect. It highlights 
                  how learning the language helps Shashi feel more confident and valued.                  This analysis will look at how the movie talks about things like social differences, stereotypes, and how global culture influences people's lives.
                </motion.p>
                <motion.p variants={itemVariants}>
                  
                </motion.p>
               
                <motion.p variants={itemVariants}>
                  We live in different parts of the world, with different time zones, languages, beliefs, and cultures. Sometimes, we might even meet someone who isn't from the same town as us or who speaks a different language. Yet, we all have some awareness of what other cultures or countries might be like even if we've never been there or met anyone from them.
                </motion.p>
                <motion.p variants={itemVariants}>
                  This awareness comes from the various resources available to us today, such as the internet, social media, and one of the most prominent sources is cinema. Cinema is often seen as a cultural mirror, reflecting societal values, norms and conflicts. According to Stuart Hall's Encoding/Decoding model, media texts including films are encoded with certain messages by creators and then they are decoded by audiences based on their own cultural context.
                </motion.p>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div 
              className="lg:w-1/2 flex justify-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={imageVariants}
            >
              <div className="relative w-full max-w-md">
                <motion.img 
                  src={EV1}
                  alt="English Vinglish Movie Poster"
                  className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <Page2 />
    </>
  );
};

export default ServiceOne;