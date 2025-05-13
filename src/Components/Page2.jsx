import React from 'react';
import { motion } from 'framer-motion';
import EV2 from '../assets/EV2.png';
import EV3 from '../assets/EV3.png';
import EV4 from '../assets/EV4.png'; // New image for third section
import EV7 from '../assets/EV7.png';
import EV5 from '../assets/EV5.png';
import EV8 from '../assets/EV8.png';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const imageVariantsLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'backOut',
    },
  },
};

const imageVariantsRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'backOut',
    },
  },
};

const Page2 = () => {
  return (
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
          <div className="relative w-full max-w-md">
            <motion.img
              src={EV2}
              alt="Movie Poster"
              className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.03 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}></motion.h2>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          In the film English Vinglish,  it demonstrates that in the modern Indian society English is associated as social superiority. The film encodes a message about the power dynamics of language particularly English. For example, when Shashi fails to speak English fluently, she encounters mockery and ridicule by her husband and daughter. The encoded message here suggests that English fluency as the marker of modernity and status. This representation of Shashi’s linguistic struggle is a cultural critique of how language constructs social hierarchies.          </motion.p>
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
          <motion.h2 className="text-3xl font-bold mb-2" variants={itemVariants}>
          </motion.h2>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          In one opening scene, When Shashi attempts to speak in English, her daughter Sapna mocks her mother’s attempts by saying: “My mother was born to make laddoos,” a sarcastic comment that clearly diminishes Shashi’s intelligence based on her lack of fluency in English.           </motion.p>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          The film shows that women, especially those who are in traditional roles are marginalized in societies where English serves as a gateway to social mobility and respectability. Setting up a clear example of cultural encoding. The idea of language as power is central to this film, as Shashi’s journey highlights her attempt to break free from the cultural expectations that limit her.          </motion.p>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          In a scene at the wedding of her niece, Shashi despite being nervous she gives an emotional speech in English, saying: “Family is the only place where life begins and love never ends... but sometimes, family members forget to show love, respect.” This speech is an important moment in the film because this is where Shashi uses English not just for communicating but to assert her voice in a space where she felt constantly diminished performing cultural act of self-assertion. This moment aligns with Austin’s concept of performative language, where Shashi’s ability to speak English shifts her social role from a subjugated housewife to an empowered woman with agency and autonomy.          </motion.p>
        </motion.div>

        <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsRight}>
          <div className="relative w-full max-w-md">
            <motion.img
              src={EV3}
              alt="Empowerment Scene"
              className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.03 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
          </div>
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
  <motion.div className="lg:w-1/2 flex flex-col items-center space-y-4" variants={imageVariantsLeft}>
  {/* Image 1 */}
  <div className="relative w-full max-w-md">
    <motion.img
      src={EV4}
      alt="Global Identity Top"
      className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
      whileHover={{ scale: 1.03 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
  </div>

  {/* Image 2 */}
  <div className="relative w-full max-w-md">
    <motion.img
      src={EV7}
      alt="Global Identity Bottom"
      className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
      whileHover={{ scale: 1.03 }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
  </div>
</motion.div>


        <motion.div className="lg:w-1/2 space-y-6" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold mb-2" variants={itemVariants}>
           
          </motion.h2>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          Using Speech Act Theory (Austin, 1962) framework we can analyze the film’s portrayal of language as both a performative act and a tool for identity formation. According to Austin, speech acts are not only about conveying information, but also about performing actions through language. Shashi’s initial inability to speak English restricts her ability to perform certain actions in social situations, particularly in interactions with her husband, children, and society. Her struggle to speak English is not just about the literal communication of ideas, but also about her social positioning and the performative aspect of language in asserting power and dignity.          </motion.p>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          The movie also picks up the tension between local traditions and globalization and this was shown through Shashi’s decision to attend an English class in New York. Here her interactions with other learners from diverse cultural backgrounds highlights the hybridization of language in a globalized world, in which English serves as a common language of opportunity but also as a symbol of Western hegemony. In the English class, Shashi meets Laurent a French man, who also struggles with English, he represents a globalized subjectivity, like Shashi  someone who is navigating through  the complexities of learning English in a world where the language has become a marker of global belonging. The relationship between Shashi and Laurent illustrates the globalization of identity because this is where individuals who come together different cultural backgrounds through the shared desire of learning English. This contact zone (Pratt, 1991) offers a space for the reconfiguration of self within the broader framework of a globalized culture. Exploring the theme of globalization and its impact on cultural identity. As ( Appadurai, 1996) argues globalization is not a unidirectional force but a multidimensional process that reshapes local cultures while allowing for the reclamation of identity.          </motion.p>
        </motion.div>
      </motion.div>

       {/* Section 1: Image Left, Text Right */}
       <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsLeft}>
          <div className="relative w-full max-w-md">
            <motion.img
              src={EV8}
              alt="Movie Poster"
              className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.03 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </motion.div>

        <motion.div className="lg:w-1/2" variants={containerVariants}>
          <motion.h2 className="text-3xl font-bold mb-6" variants={itemVariants}></motion.h2>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          The film also critiques how concepts of gender and social roles are created and perpetuated through language. Shashi’s failure to speak English corresponds to her role as a woman restricted to the domestics. As (Bourdieu ,1991) suggests, language serves as a type of symbolic capital, and those who do not possess the “right” language is socially demoted. Shashi’s deficient command over English positions her as a woman who is expected to be quiet and submissive to the male members of her family and society. When she begins to learn English, she recaptures her symbolic capital and defies the gendered assumptions that surpass her. The film's climax centers on the moment when Shashi’s husband, Satish, points out that he used to mock Shashi’s English but now proudly boasts for her after she speaks fluently during the wedding. He states, “This is my wife, the one I love. She has made me proud.” This becomes a moment of symbolic inversion in which Shashi not only possesses the language but also defeats the cultural construction of the gender hierarchy that bound her as a speaking-servant wife. Thus, Shashi's metamorphosis through language is not simply personal agency, but an act of confronting the prevailing feminine-masculine stereotypes in India.     </motion.p>

          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          In the film English Vinglish,  it demonstrates that in the modern Indian society English is associated as social superiority. The film encodes a message about the power dynamics of language particularly English. For example, when Shashi fails to speak English fluently, she encounters mockery and ridicule by her husband and daughter. The encoded message here suggests that English fluency as the marker of modernity and status. This representation of Shashi’s linguistic struggle is a cultural critique of how language constructs social hierarchies.          </motion.p>


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
          <motion.h2 className="text-3xl font-bold mb-2" variants={itemVariants}>
          </motion.h2>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          English Vinglish exhibits the strong impact that cinema has in both reflecting and shaping sociocultural constructs such as language, gender, and the effects of globalization. With language as a social marker, through Speech Act Theory, and globalization, the film critiques cultural biases that equate the ability to speak English with social prestige and social access. Shashi’s journey from a subservient housewife to an assertive woman who rediscovers her cultural and linguistic identity demonstrates the power of cinema in cultural reflection and the shifts that take place due to globalization and the politics of language.          </motion.p>
          <motion.p className="text-lg leading-relaxed" variants={itemVariants}>
          The film seeks to address the unresolved matters of globalization, identity, and empowerment by providing a stage for intercultural engagements, as well as offering a critique of culture while showcasing an optimistic narrative of individual development in a dialectic world. (Hall, 1980) asserts that through contexts of stark social inequality English Vinglish ciphers social conflicts alongside the possibility of reinterpreting these cultural constructs thus enabling the audience to counter these scenarios.             </motion.p>


          <motion.div
  className="container mx-auto mt-6 text-left text-sm text-gray-400 px-4"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5 }}
>
  Word count: 1206
</motion.div>


        </motion.div>


        <motion.div className="lg:w-1/2 flex justify-center" variants={imageVariantsRight}>
          <div className="relative w-full max-w-md">
            <motion.img
              src={EV5}
              alt="Empowerment Scene"
              className="w-full h-auto rounded-lg shadow-2xl transform transition-transform duration-500 hover:scale-105"
              whileHover={{ scale: 1.03 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg pointer-events-none"></div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        className="container mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl font-bold mb-6 text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            References
          </motion.h2>
          
          <motion.ul 
            className="space-y-4 text-lg leading-relaxed font-serif"
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
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Appadurai, A. (1996). <em>Modernity at Large: Cultural Dimensions of Globalization.</em> Minneapolis: University of Minnesota Press.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Austin, J.L. (1962). <em>How to Do Things with Words.</em> Oxford: Clarendon Press.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Bourdieu, P. (1991). <em>Language and Symbolic Power.</em> Cambridge: Polity Press.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Hall, S. (1980). 'Encoding/decoding'. In: Hall, S., Hobson, D., Lowe, A. and Willis, P., eds. <em>Culture, Media, Language.</em> London: Routledge, pp. 128–138.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Pennycook, A. (2007). <em>Global Englishes and Transcultural Flows.</em> London: Routledge.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Pratt, M.L. (1991). 'Arts of the contact zone'. <em>Profession</em>, pp. 33–40.</motion.li>
            
            <motion.li 
              variants={{
                hidden: { x: -20, opacity: 0 },
                visible: { x: 0, opacity: 1 }
              }}
            >• Shinde, G. (2012). <em>English Vinglish</em> [Film]. Eros International.</motion.li>
          </motion.ul>
        </div>
      </motion.div>




    </div>
  );
};

export default Page2;
