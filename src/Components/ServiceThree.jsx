import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar.jsx';
import EV1 from '../assets/EV1.png';
import EV2 from '../assets/EV2.png';
import EV3 from '../assets/EV3.png';
import EV4 from '../assets/EV4.png';
import EV5 from '../assets/EV5.png';
import EV7 from '../assets/EV7.png';
import EV8 from '../assets/EV8.png';

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
        staggerChildren: 0.3,
        delayChildren: 0.4
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.1, 0.8, 0.3, 1]
      }
    }
  };

  const imageVariants = {
    hidden: { x: 80, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  const imageVariantsLeft = {
    hidden: { x: -80, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  const imageVariantsRight = {
    hidden: { x: 80, opacity: 0, scale: 0.9 },
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "backOut"
      }
    }
  };

  // Glowing border component with varied colors
  const GlowingImageContainer = ({ children, glowColor }) => {
    const colors = [
      'rgba(147, 51, 234, 0.8)', // Vibrant Purple
      'rgba(236, 72, 153, 0.8)', // Vivid Pink
      'rgba(99, 102, 241, 0.8)', // Deep Indigo
      'rgba(234, 179, 8, 0.8)',  // Warm Yellow
      'rgba(16, 185, 129, 0.8)', // Emerald Green
    ];
    const selectedColor = glowColor || colors[Math.floor(Math.random() * colors.length)];

    return (
      <div className="relative group max-w-[90%]">
        <div className="absolute -inset-1 rounded-lg blur-lg opacity-70 group-hover:opacity-100 transition-all duration-500"
             style={{
               background: `linear-gradient(45deg, ${selectedColor}, rgba(255, 255, 255, 0.2), ${selectedColor})`,
               boxShadow: `0 0 25px 8px ${selectedColor}`
             }}></div>
        <div className="relative rounded-lg overflow-hidden">
          {children}
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div className="relative min-h-screen bg-black overflow-hidden text-white">
        {/* Pattern Background */}
        <div className="absolute inset-0 z-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, 
                rgba(255, 255, 255, 0.15) 0%, 
                transparent 50%
              ),
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%,
                transparent 75%,
                rgba(255, 255, 255, 0.1) 75%,
                rgba(255, 255, 255, 0.1)
              ),
              linear-gradient(
                45deg,
                rgba(255, 255, 255, 0.1) 25%,
                transparent 25%,
                transparent 75%,
                rgba(255, 255, 255, 0.1) 75%,
                rgba(255, 255, 255, 0.1)
              )`,
            backgroundSize: '120px 120px',
            backgroundPosition: '0 0, 0 0, 60px 60px'
          }}
        />

        {/* Animated Blob */}
        <div
          ref={blobRef}
          className="fixed pointer-events-none w-[40vmax] h-[40vmax] rounded-full bg-gradient-to-r from-purple-600/40 via-pink-500/30 to-transparent opacity-80 blur-[60px] z-10"
          style={{ 
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 0.5s ease, width 0.5s ease, height 0.5s ease',
            boxShadow: '0 0 100px 50px rgba(147, 51, 234, 0.3)'
          }}
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
                className="space-y-6 text-lg leading-relaxed"
                variants={containerVariants}
              >
                <motion.p variants={itemVariants}>
                  <em>English Vinglish</em> (2012) is a film directed by Gauri Shinde that explores the cultural struggle an individual might face between traditional and modern identities. This film focuses particularly on how a language can impact in shaping a culture.
                  By portraying the journey of Shashi Godbole (played by Sridevi) this film critics the cultural importance that is placed on English proficiency in post-colonial India. The film shows that, knowing English is seen as a sign of power and respect. It highlights 
                  how learning the language helps Shashi feel more confident and valued. This analysis will look at how the movie talks about things like social differences, stereotypes, and how global culture influences people's lives.
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
              <GlowingImageContainer>
                <motion.img 
                  src={EV1}
                  alt="English Vinglish Movie Poster"
                  className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                  whileHover={{ scale: 1.03 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
              </GlowingImageContainer>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Page 2 Content */}
      <div className="bg-black text-white py-16 px-4 space-y-28">
        {/* Section 1: Image Left, Text Right */}
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsLeft}>
            <GlowingImageContainer>
              <motion.img
                src={EV2}
                alt="Movie Poster"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>
          </motion.div>

          <motion.div className="lg:w-1/2" variants={containerVariants}>
            <motion.p className="text-lg leading-relaxed mb-6" variants={itemVariants}>
            In the film English Vinglish, it demonstrates that in the modern Indian society English is associated as social superiority. The film encodes a message about the power dynamics of language particularly English. For example, when Shashi fails to speak English fluently, she encounters mockery and ridicule by her husband and daughter. The encoded message here suggests that English fluency as the marker of modernity and status. This representation of Shashi's linguistic struggle is a cultural critique of how language constructs social hierarchies.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Section 2: Text Left, Image Right */}
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 space-y-6" variants={containerVariants}>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            In one opening scene, When Shashi attempts to speak in English, her daughter Sapna mocks her mother's attempts by saying: "My mother was born to make laddoos," a sarcastic comment that clearly diminishes Shashi's intelligence based on her lack of fluency in English.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            The film shows that women, especially those who are in traditional roles are marginalized in societies where English serves as a gateway to social mobility and respectability. Setting up a clear example of cultural encoding. The idea of TODAYlanguage as power is central to this film, as Shashi's journey highlights her attempt to break free from the cultural expectations that limit her.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            In a scene at the wedding of her niece, Shashi despite being nervous she gives an emotional speech in English, saying: "Family is the only place where life begins and love never ends... but sometimes, family members forget to show love, respect." This speech is an important moment in the film because this is where Shashi uses English not just for communicating but to assert her voice in a space where she felt constantly diminished performing cultural act of self-assertion. This moment aligns with Austin's concept of performative language, where Shashi's ability to speak English shifts her social role from a subjugated housewife to an empowered woman with agency and autonomy.
            </motion.p>
          </motion.div>

          <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsRight}>
            <GlowingImageContainer>
              <motion.img
                src={EV3}
                alt="Empowerment Scene"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>
          </motion.div>
        </motion.div>

        {/* Section 3: Image Left, Text Right */}
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 flex flex-col items-center space-y-8" variants={imageVariantsLeft}>
            <GlowingImageContainer>
              <motion.img
                src={EV4}
                alt="Global Identity Top"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>

            <GlowingImageContainer>
              <motion.img
                src={EV7}
                alt="Global Identity Bottom"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>
          </motion.div>

          <motion.div className="lg:w-1/2 space-y-6" variants={containerVariants}>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            Using Speech Act Theory (Austin, 1962) framework we can analyze the film's portrayal of language as both a performative act and a tool for identity formation. According to Austin, speech acts are not only about conveying information, but also about performing actions through language. Shashi's initial inability to speak English restricts her ability to perform certain actions in social situations, particularly in interactions with her husband, children, and society. Her struggle to speak English is not just about the literal communication of ideas, but also about her social positioning and the performative aspect of language in asserting power and dignity.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            The movie also picks up the tension between local traditions and globalization and this was shown through Shashi's decision to attend an English class in New York. Here her interactions with other learners from diverse cultural backgrounds highlights the hybridization of language in a globalized world, in which English serves as a common language of opportunity but also as a symbol of Western hegemony. In the English class, Shashi meets Laurent a French man, who also struggles with English, he represents a globalized subjectivity, like Shashi someone who is navigating through the complexities of learning English in a world where the language has become a marker of global belonging. The relationship between Shashi and Laurent illustrates the globalization of identity because this is where individuals who come together different cultural backgrounds through the shared desire of learning English. This contact zone (Pratt, 1991) offers a space for the reconfiguration of self within the broader framework of a globalized culture. Exploring the theme of globalization and its impact on cultural identity. As (Appadurai, 1996) argues globalization is not a unidirectional force but a multidimensional process that reshapes local cultures while allowing for the reclamation of identity.
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Section 4: Image Left, Text Right */}
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsLeft}>
            <GlowingImageContainer>
              <motion.img
                src={EV8}
                alt="Movie Poster"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>
          </motion.div>

          <motion.div className="lg:w-1/2 space-y-6" variants={containerVariants}>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            The film also critiques how concepts of gender and social roles are created and perpetuated through language. Shashi's failure to speak English corresponds to her role as a woman restricted to the domestics. As (Bourdieu ,1991) suggests, language serves as a type of symbolic capital, and those who do not possess the "right" language is socially demoted. Shashi's deficient command over English positions her as a woman who is expected to be quiet and submissive to the male members of her family and society. When she begins to learn English, she recaptures her symbolic capital and defies the gendered assumptions that surpass her. The film's climax centers on the moment when Shashi's husband, Satish, points out that he used to mock Shashi's English but now proudly boasts for her after she speaks fluently during the wedding. He states, "This is my wife, the one I love. She has made me proud." This becomes a moment of symbolic inversion in which Shashi not only possesses the language but also defeats the cultural construction of the gender hierarchy that bound her as a speaking-servant wife. Thus, Shashi's metamorphosis through language is not simply personal agency, but an act of confronting the prevailing feminine-masculine stereotypes in India.
            </motion.p>
          
          </motion.div>
        </motion.div>

        {/* Section 5: Text Left, Image Right */}
        <motion.div
          className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
        >
          <motion.div className="lg:w-1/2 space-y-6" variants={containerVariants}>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            English Vinglish exhibits the strong impact that cinema has in both reflecting and shaping sociocultural constructs such as language, gender, and the effects of globalization. With language as a social marker, through Speech Act Theory, and globalization, the film critiques cultural biases that equate the ability to speak English with social prestige and social access. Shashi's journey from a subservient housewife to an assertive woman who rediscovers her cultural and linguistic identity demonstrates the power of cinema in cultural reflection and the shifts that take place due to globalization and the politics of language.
            </motion.p>
            <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
            The film seeks to address the unresolved matters of globalization, identity, and empowerment by providing a stage for intercultural engagements, as well as offering a critique of culture while showcasing an optimistic narrative of individual development in a dialectic world. (Hall, 1980) asserts that through contexts of stark social inequality English Vinglish ciphers social conflicts alongside the possibility of reinterpreting these cultural constructs thus enabling the audience to counter these scenarios.
            </motion.p>

            <motion.div
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg font-medium">Word count: <span className="text-purple-300">1327</span></p>
            </motion.div>
          </motion.div>

          <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsRight}>
            <GlowingImageContainer>
              <motion.img
                src={EV5}
                alt="Empowerment Scene"
                className="w-full h-auto rounded-lg transform transition-transform duration-500 hover:scale-105"
                whileHover={{ scale: 1.03 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
            </GlowingImageContainer>
          </motion.div>
        </motion.div>

        {/* References Section */}
        <motion.div
          className="container mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-purple-600/20 blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 rounded-full bg-pink-600/20 blur-3xl"></div>
            
            <motion.h2 
              className="text-3xl font-bold mb-8 text-center text-purple-300 relative z-10"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              References
            </motion.h2>
            
            <motion.ul 
              className="space-y-4 text-lg leading-relaxed font-serif relative z-10"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Appadurai, A. (1996). <em>Modernity at Large: Cultural Dimensions of Globalization.</em> Minneapolis: University of Minnesota Press.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Austin, J.L. (1962). <em>How to Do Things with Words.</em> Oxford: Clarendon Press.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Bourdieu, P. (1991). <em>Language and Symbolic Power.</em> Cambridge: Polity Press.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Hall, S. (1980). 'Encoding/decoding'. In: Hall, S., Hobson, D., Lowe, A. and Willis, P., eds. <em>Culture, Media, Language.</em> London: Routledge, pp. 128–138.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Pennycook, A. (2007). <em>Global Englishes and Transcultural Flows.</em> London: Routledge.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Pratt, M.L. (1991). 'Arts of the contact zone'. <em>Profession</em>, pp. 33–40.</motion.li>
              
              <motion.li 
                className="hover:text-purple-300 transition-colors duration-300"
                variants={{
                  hidden: { x: -20, opacity: 0 },
                  visible: { x: 0, opacity: 1 }
                }}
              >• Shinde, G. (2012). <em>English Vinglish</em> [Film]. Eros International.</motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default ServiceOne;