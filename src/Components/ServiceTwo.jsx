import React from 'react';
import { motion } from 'framer-motion';
import NavBar from './NavBar';

const ServiceTwo = () => {
  // Content sections with animation variants
  const sections = [
    {
      content: (
        <>
          <p className="mb-4">This blog will examine how English Vinglish tackles language, gender, and identity through the lens of cultural theories.</p>
        </>
      ),
      variant: {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }
    },
    {
        title: "Language and Symbolic Capital: Who Gets to Be Heard?",
        content: (
          <>
            <p className="mb-4">A language transcends the instrument of communication. Instead, it is a framework blended with power, identity, and even societal structure. It can uphold one form of stereotype mostly concerning gender or amplify the one associated with gender. Under Gauri Shinde's 2012 film English Vinglish, this deep intersection is examined rather effortlessly through Shashi Godbole's (a housewife who is looked down upon and sidelined for her ineptitude in English) journey. Throughout the arc, the audience is exposed to Shashi's life which pretty much illustrates how dominant and patriarchal cultures employ globalized worlds as backdrops to control women's education and language skills as tools for empowerment.</p>
            
            <p className="mb-4">Understanding something Bourdieu describes as a notion of linguistic capital assists in unveiling why Shashi's non-English speaking ability results in a diminished value English in comparison to his family. As English is a pointer of education, class or modernization within postcolonial societies, such as India, it serves as symbolic capital serving to shape power relations. Those who master English enjoy social mobility and respect; the likes of Shashi, however, fall to the mockery or invisibility. (Bourdieu, 2019)</p>
            
            <p className="mb-4">Captured in one of the many striking scenes in a New York café: while trying to place her order, Shashi is ridiculed for her inability to speak English. This incident abstracts wider forms of discrimination based on language, (Lippi-Green, 1997) what is called Standard Language Ideology, where one "standard" form of a language is expected, typically associated with a native speaker, is deemed superior and other varieties and accents are marginalized. Shashi's experience serves as an example for how emotionally violent and psychologically damaging this ideology is, where her version of English is dismissed as somehow less meaningful.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }
      },
      {
        title: "The Gendered Politics of Language and Domesticity",
        content: (
          <>
            <p className="mb-4">Shashi's journey removes the understanding of the intertwined gendered layer surrounding it. According to the (Butler,1990) Theory of Gender Performativity posits that gender is not something innate but rather something performed through speech and repetition of actions. Shashi, an individual whose identity is reduced to that of a traditional housewife, performs her gender: cooking, cleaning, child-rearing, and supporting her husband's career.</p>
            
            <p className="mb-4">For her, that English language gap places her at the lowest rung of the domestic power ladder. Both Satish and Sapna, her husband and daughter, speak English and use it to Shashi's opinions undermine Shashi's perceived authority and legitimize her dismissal. This linguistic domination serves to entrench patriarchal norms where the husband, and even the Westernized daughter, have control over the non-English speaking mother. The way Shashi faces humiliation from a family member during a discussion about school's admission reflects how English is a mode of communication that illustrates both erasure and gendered marginalization. But when Shashi starts learning English, her gendered performance changes. She begins to leave the home, claim spaces for herself, make independent decisions, and form new connections. Language, in this case, becomes a form of agency, of enacting a new self that defies identity boundaries ascribed by one's gender.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, scale: 0.95 },
          visible: { opacity: 1, scale: 1 }
        }
      },
      {
        title: "Deconstructing Stereotypes: From Marginalization to Empowerment",
        content: (
          <>
            <p className="mb-4">English Vinglish deals with numerous socio-cultural and gender-based assumptions. Shashi starts out as a textbook example of a "docile Indian housewife" whose life centers exclusively around the kitchen. Her world is bound to the kitchen, where she is anchored and entangled in her subordinate role to men. She is not regarded as intelligent or capable simply because she does not speak English, a stereotype for women who are deemed less valuable. As per the (Beauvoir, 1949) idea of "the Other" is particularly relevant here. De Beauvoir posited that women have been situated in a subjugated fashion as 'the Other,' with respect to the male norm. In Shashi's case, this 'othering' is intensified by the absence of English, rendering her invisible not just in the public space, but within her own domestic life.</p>
            
            <p className="mb-4">Nevertheless, the personal story revolves around transforming her from the "Other" into an independently choosing individual. The New York classroom sociocultural interactions represent a fleeting 'utopia' or 'third space' (Bhabha, 1994) where silence of some forms of language and cultural domination is possible. In this instance, she is no longer simply a mother and a wife; she is a student, a participant, and an interlocutor. Her speech at the climax of the film where she grabs a toast in English opens an episode of reclaiming voice and identity an act of resistive essence both literally and metaphorically.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, rotateX: 90 },
          visible: { opacity: 1, rotateX: 0 }
        }
      },
      {
        title: "Globalization, Hybrid Identities, and Language as a Contact Zone",
        content: (
          <>
            <p className="mb-4">In English Vinglish, language clearly operates within and along the lines of globalization. Shashi is, after all, part of her English class, which is a multicultural conglomeration of her society, quite literally what (Pratt,1991) refers to as a contact zone one social space where diverse cultures co-exist, collide, and negotiate. Within this contact zone, Shashi is enabled to step momentarily outside the rigid cultural straitjacket of Indian patriarchy. (Kramsch, 1993) Third Place concept comes into play. It means in this case, according to Kramsch, that language learners have to be in a situation where they cannot be plunged fully into the culture of their country. Shashi's change does not involve Westernization; instead, it entails reconceptualizing her identity on her own terms. Her newly acquired self-assurance does not remove her Indian-ness but both blurs and enhances it with her global experience, and serving as a transcultural subject (Pennycook, 2007).</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 }
        }
      },
      {
        title: "Dialogism and Voice: The Polyphonic Text",
        content: (
          <>
            <p className="mb-4">As cited from above, (Bakhtin, 1981) theory of dialogism saw language as social and multi-voiced. Just like any literary piece of art, films are polyphonic: they have multiple voices that both embody and challenge the mainstream ideologies. In English Vinglish, the English teacher represents liberalism while Shashi's classmates provide alternative narratives. Each of them represents a different ideological position: the dismissive husband embodies patriarchal elitism and liberal encouragement.</p>
            
            <p className="mb-4">Most significantly, the film includes Shashi's struggle to reclaim her own voice. Her climactic speech given in unsteady, yet intrepid English contrasts the polished eloquence that is expected in movies. Such defiance of a "native speaker" norm strengthens the argument in favor of English as a Lingua Franca (ELF), where what matters more is communication in English, not the accent nor grammatical precision. Shifting from (Canagarajah, 2007) then, the perspective of regard proposes that multilingual speakers adapt and transform the language, which enables it to become a 'living' resource.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }
      },
      {
        title: "Reception and Interpretation: The Role of the Viewer",
        content: (
          <>
            <p className="mb-4">In (Hall, 1973) Encoding/Decoding framework, it enables us to observe that in English Vinglish messages regarding empowerment, identity and the resistance of mainstream narratives are encoded.</p>
            
            <p className="mb-4">There also arises the possibility of having different interpretations of the messages. Some may consider Shashi's change to be individualistic, meaning that the transformation is so personal that it rests singularly on her as the bearer of responsibility. Other interpretation could be taking it as a commentary on the society's disregard for non-English speakers and for homemakers.</p>
            
            <p className="mb-4">Through the lens of postcolonial feminism, the film also stands as a gentle yet pointed indictment of the self-imposed colonial framework that elevates English and Western standards to supreme status. It also depicts the rampant devaluation of indigenous languages and culturally significant roles that women, often, occupy in postcolonial societies.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        }
      },
      {
        title: "Conclusion: Language as Liberation",
        content: (
          <>
            <p className="mb-4">English Vinglish delivers a powerful statement using Shashi's character. Her journey underscores that language acquisition transcends mere vocabulary and rules; it embodies the attainment of agency, the subversion of stereotypes, the ability to articulate one's identity in a world that often seeks to render such voices inaudible. Both in relation to themselves and others, viewers are urged to consider the biases they hold in regard to the languages people speak. There is just one society, and language is its reflection. Thus, shifting perceptions of language may transform societal views towards people like Shashi, moving from a perspective of "Othering" to embracing individuality with stories, strengths, and voices worth hearing.</p>
          </>
        ),
        variant: {
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }
      }
      
    // ... (other sections remain the same)
  ];

  const references = [
    "Bakhtin, M.M. (1981). The Dialogic Imagination. Austin, TX: University of Texas Press.",
    "Bhabha, H.K. (1994). The Location of Culture. London: Routledge.",
    "Bourdieu, P. (1991). Language and Symbolic Power. Cambridge, MA: Harvard University Press.",
    "Butler, J. (1990). Gender Trouble. London: Routledge.",
    "Canagarajah, A.S. (2007). 'Lingua Franca English, multilingual communities, and language acquisition', The Modern Language Journal, 91(S1), pp. 923–939.",
    "De Beauvoir, S. (1949). The Second Sex. London: Vintage.",
    "Hall, S. (1973). Encoding and Decoding in the Television Discourse. Birmingham: Centre for Contemporary Cultural Studies.",
    "Kramsch, C. (1993). Context and Culture in Language Teaching. Oxford: Oxford University Press.",
    "Lippi-Green, R. (1997). English with an Accent. London: Routledge.",
    "Pennycook, A. (2007). Global Englishes and Transcultural Flows. London: Routledge.",
    "Pratt, M.L. (1991). 'Arts of the contact zone', Profession, pp. 33–40.",
    "Sapir, E. and Whorf, B.L. (1956). Language, Thought, and Reality: Selected Writings of Benjamin Lee Whorf. Cambridge, MA: MIT Press."
    // ... (other references remain the same)
  ];

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
        {/* Hero Section */}
        <motion.section 
          className="pt-32 pb-20 px-6 max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            Breaking Stereotypes
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Language, Gender, and Identity in <span className="italic">English Vinglish</span>
          </motion.p>
        </motion.section>

        {/* Content Sections */}
        <div className="max-w-4xl mx-auto px-6 pb-20 space-y-16">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={section.variant}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {section.title && (
                <motion.h2 
                  className="text-2xl md:text-3xl font-bold mb-6 text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  {section.title}
                </motion.h2>
              )}
              <div className="text-lg leading-relaxed">
                {section.content}
              </div>
            </motion.div>
          ))}

          {/* Word Count Box */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg font-medium">Word count: <span className="text-blue-300">1327</span></p>
          </motion.div>

          {/* References Section */}
          <motion.div
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-blue-300">References</h2>
            <ul className="space-y-3 font-serif">
              {references.map((ref, index) => (
                <motion.li
                  key={index}
                  className="text-sm md:text-base"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gray-400">•</span>{" "}
                  <span className="text-gray-200">{ref.split('(')[0]}</span>
                  <span className="text-gray-400">{ref.substring(ref.indexOf('('))}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ServiceTwo;