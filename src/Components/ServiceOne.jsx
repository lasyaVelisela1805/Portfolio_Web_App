import React, { useEffect, useRef, useState } from 'react';
import NavBar from './NavBar.jsx';
import laas from "../assets/laas.png";

import { DotLottieReact } from '@lottiefiles/dotlottie-react';


const ServiceOne = () => {
    const blobRef = useRef(null);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 20;

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

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const renderPageContent = (pageNumber) => {
        switch (pageNumber) {
            case 1:
                return (
                    <div className="page__content text-center">
  <div className="h-full flex flex-col items-center justify-center p-4">
    {/* Peacock Animation */}
    <div className="relative">
      <DotLottieReact
        src="https://lottie.host/4bc366f2-4de0-470e-bd2a-9d2661459f90/2eMpCJj2BX.lottie"
        loop
        autoplay
        style={{ width: '400px', height: '400px' }}  // Slightly reduced size
      />
    </div>
    
    {/* Speech Bubble */}
    <div className="relative bg-white rounded-3xl p-6 w-[400px] mt-2 shadow-lg">
      {/* Speech bubble tail pointing upwards */}
      <div className="absolute -top-3 left-20 w-0 h-0 
                      border-l-[12px] border-l-transparent
                      border-b-[20px] border-b-white
                      border-r-[12px] border-r-transparent">
      </div>
      
      <p className="text-gray-800 text-lg italic leading-relaxed">
        "Hi there! I'm Peeku the Culture Quill – your fabulously feathered friend, 
        here to strut you through my colorful journey of culture, communication, 
        and curious reflections! So, fluff up those feathers, scroll on, and let's 
        explore what culture really means—one peacock step at a time!"
      </p>
    </div>
  </div>
</div>
                );
            case 2:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">I</h1>
                        <p className="mb-4 arial">This is a personal reflection from me — Moru — an international student who had to find her way through a completely new language and culture. In this diary and encounter, I talk about something that I've experienced during my initial days at university that shaped how I saw myself and how I communicated with others.
                            Back then, these experiences made me feel uncomfortable and confused. But learning about intercultural communications helped me reflect back on those incidents, and applying the theories gave me a deeper understanding of what I went through and how it is shaping and influencing who I am becoming.
                        </p>

                        <br />
                        <p className="mb-4 arial">Migration is not merely just a physical relocation; it is also a linguistic migration. When I moved to the University of Southampton from Kothagudem, India, at the age of 17, I brought with me more than just luggage. I carried Telugu, my mother tongue, a culturally embedded form of Indian English, and a mental habit of constantly translating my thoughts. Although I did study English throughout my schooling, it was formal, exam-oriented, and was rarely spoken in daily life. But, upon arrival in the UK, English transformed from a subject to a survival skill, filling every aspect of my personal and academic life. In my early weeks here, the process of communicating, especially in academic seminars, became a minefield of uncertainty and identity tension. In one of my first seminars, I was part of a group discussion on entrepreneurship. While I understood the material, articulating my thoughts fluently was difficult. I paused often, mentally translating from Telugu, and the way I was pronounced “entrepreneur” was completely different to my classmates who were native English speakers, and my peers gave a look to understand what I said. Though likely unintentional, it felt invalidating. That incident changed me, I started constantly altering my speech, training myself to think in English first instead of my mother tongue and mimicking native pronunciation. I spent hours analyzing and practicing British accents online, adjusting not just my fluency but my entire communicative identity. </p>


                        <div className="page__number">2</div>
                    </div>
                );
            case 3:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">II</h1>
                        <p className="mb-4 arial">This experience of mine reflects deeper issues tied to language ideology, sociolinguistic power and identity negotiation. I will use some key theories and academic frameworks that will help me deconstruct my experience: This can be tied directly to Bourdieu’s concept of linguistic capital, which refers that certain ways of speaking will hold more value than others, depending on the context or market they’re used in. In my case, speaking with an Indian accent and using expressions shaped by Telugu-English put me at a disadvantage in the British academic environment, where Standard British English seemed to be the unspoken norm. In Bourdieu’s framework, language is more than just communication, it’s a form of social power, where people who speak in the legitimate way are often seen as more competent, credible, or educated. </p>

                        <p className="mb-4 arial">As Bourdieu famously said, “In a market where the legitimate language is imposed, all linguistic production is evaluated in relation to the norm of the legitimate language” (Bourdieu, 1991p: 55). I really connected with this quote because I started to notice how I was subconsciously measuring my own speech against that norm and falling short. Over time, I found myself trying to fix the way I speak, not just to be understood, but to be taken seriously and to leave an impression on my peers in the place of work. I carried an unseen pressure to sound more correct, didn’t just change how I talked, it began to affect how I saw myself in relation to my classmates, making me question and prove that I belong in the same space as them. (Bourdieu, 1991) </p>

                        <p className="mb-4 arial">Sometimes when people talk to each other, they sometimes can change how they speak to match the traits of others, for example talking faster, using the same words pr even acting more formally or they might even talk differently on purpose if they don’t want to fit in. According to the Communication Accommodation Theory (CAT), by (Giles and Coupland,1991). </p>
                        <div className="page__number">3</div>
                    </div>
                ); 
            case 4:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">III</h1>
                        <p className="mb-4 arial">It’s all about adjusting how you communicate depending on who you’re talking to. Similarly, my adoption of a British accent and training myself to think in English was a convergent strategy driven by a desire for social integration and legitimacy. However, CAT also highlights, convergence can involve a cost to authenticity, leading to over-accommodation, which is often negatively perceived (Gallois et al., 2005). </p>

                        <p className="mb-4 arial">This shows my own experience while I gained fluency and confidence, I sometimes felt distanced from my cultural self. This tension reflects what (Kramsch,2009) refers to as the “third place” of intercultural communication: a symbolic space where speakers negotiate between their native and adopted communicative norms. </p>

                        <p className="mb-4 arial">As (Whorf,1956) famously argued, “language shapes the way we think, and determines what we can think about.” During those early weeks of my university life, I would mentally translate almost every sentence before I spoke, which slowed down my speech and made me second-guess even simple words. I realized that this wasn’t just a language delay, it was a deeper reflection on how my thoughts were still rooted in Telugu, and how much effort it took me to function in a world that expected me to think in English. Using the concept of linguistic relativity, the struggle of constantly translating my thoughts from Telugu into English can be best explained, which suggests that the language we speak shapes the way we think and understand the world. </p>


                        <p className="mb-4 arial">Over time, I started training myself to think in English instead, and I started feeling a genuine shift in how I formed my ideas, responding to people, and expressed emotion. This aligns with Lucy’s idea that habitual thought patterns, especially in multilingual people, are deeply shaped by the language systems they use most. (Lucy, 1997) </p>
                        <div className="page__number">4</div>
                    </div>
                );
            case 5:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">IV</h1>

                        <p className="mb-4 arial">But thinking in English didn’t erase how I was heard by others. Even as my fluency improved, my accent remained, and it continued to shape how I was perceived. When someone hesitated after I mispronounced a word, or corrected me, it wasn’t just about clarity it felt like I was being quietly marked as not quite belonging. This idea reflects the indexicality as described by (Bucholtz and Hall ,2005) as the way certain linguistic features like accent or phrasing act as social cues that point to our identities. In my case, my Indian English accent often positioned me as an outsider, even in a classroom where no one said that out loud. As (Anderson, 2006) describes in his work on imagined communities, languages and accents can become powerful markers of who is seen as “inside” or “outside” of a particular social group. I realized I had started monitoring my own speech adjusting pronunciation, avoiding certain words, even copying others just to sound more normal. Looking back, it was a form of self-policing, done in the hope of reducing the social distance I felt between me and everyone else.</p>


                        <p className="mb-4 arial">(Lippi-Green ,2012) argues that accent discrimination is one of the most socially accepted forms of prejudice, often disguised as concern for “correctness” or “intelligibility.” I saw this happening in subtle ways at university in group work or seminars, classmates with British accents were often given more space to speak or their points were taken more seriously, regardless of content. My own speech shaped by my Indian accent felt like a disadvantage I had to overcome constantly. It wasn’t always direct or deliberate, but it was clear that certain voices carried more weight than others. My speech, shaped by my Indian accent, felt like a disadvantage I had to constantly overcome. </p>
                        <p className="mb-4 arial">The emotional weight of navigating these expectations can be explained through (Norton,2013) work on language and identity. </p>


                        <div className="page__number">5</div>
                    </div>
                );
            case 6:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">V</h1>

                        <p className="mb-4 arial">She described that language learning not just as acquiring new words or grammar, but as a social investment in an attempt to gain acceptance and legitimacy in a specific cultural space. That’s exactly how it felt for me. I wasn’t just learning how to speak more fluently, I was shaping an identity that I hoped would be seen as good enough in British academic life and as time passed I succeeded in building that, in no time I was giving talks alongside my module leader, featuring on university socials . But this did come at a cost. When we continuously manage our behavior to meet social expectations, especially when it goes against our natural self, it leads to emotional labor. In my case, this meant hiding a few parts of my identity, watching every word I say, and constantly second-guessing my natural way of speaking, just to feel the sense of belonging. (Hochschild ,1983) </p>

                        <p className="mb-4 arial">The following visual framework helped me understand how these layers of language, power, and identity are all connected</p>


                        <div className="flex justify-center">
                            <img
                                src={laas}
                                alt="Paper Texture"
                                className="w-48 h-auto rounded-md"
                            />
                        </div>

<br />
                        <h1 class="font-bold text-2xl border-4 border-gray-500 rounded-xl p-4 text-center bg-gray-100 shadow-md w-fit mx-auto">
  Word Count = 1571
</h1>



                        <div className="page__number">6</div>
                    </div>
                );

            case 7:
                return (
                    <div className="page__content">
                        <h1 className="page__content-title">VI</h1>

                        <div className="references-section mt-8">
    <h2 className="text-xl font-bold mb-4">References (Harvard Style)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li className= "font-['Times_New_Roman']">Anderson, B. (2006). <span className="italic">Imagined Communities.</span> London: Verso.</li>
      <li className="font-['Times_New_Roman']">Bourdieu, P. (1991). <span className="italic">Language and Symbolic Power.</span> Cambridge: Polity Press.</li>
      <li className="font-['Times_New_Roman']">Bucholtz, M. and Hall, K. (2005). 'Identity and interaction: A sociocultural linguistic approach'. <span className="italic">Discourse Studies,</span> 7(4–5), pp. 585–614.</li>
      <li className="font-['Times_New_Roman']">Gallois, C., Ogay, T. and Giles, H. (2005). 'Communication accommodation theory: A look back and a look ahead'. In: Gudykunst, W.B., ed. <span className="not-italic">Theorizing about Intercultural Communication.</span> Thousand Oaks, CA: Sage, pp. 121–148.</li>
      <li className="font-['Times_New_Roman']">Giles, H. and Coupland, N. (1991). <span className="italic">Language: Contexts and Consequences.</span> Milton Keynes: Open University Press.</li>
      <li className="font-['Times_New_Roman']">Harris, R. (1996). <span className="italic">Signs, Language and Communication: Integrational and Segregational Approaches.</span> London: Routledge.</li>
      <li className="font-['Times_New_Roman']">Hochschild, A.R. (1983). <span className="italic">The Managed Heart: Commercialization of Human Feeling.</span> Berkeley: University of California Press.</li>
      <li className="font-['Times_New_Roman']">Kramsch, C. (2009). <span className="italic">The Multilingual Subject.</span> Oxford: Oxford University Press.</li>
      <li className="font-['Times_New_Roman']">Lippi-Green, R. (2012). <span className="italic">English with an Accent: Language Ideology and Discrimination in the United States.</span> 2nd ed. London: Routledge.</li>
      <li className="font-['Times_New_Roman']">Lucy, J. (1997). 'Linguistic relativity'. <span className="italic">Annual Review of Anthropology,</span> 26, pp. 291–312.</li>
      <li className="font-['Times_New_Roman']">Norton, B. (2013). <span className="italic">Identity and Language Learning: Extending the Conversation.</span> 2nd ed. Bristol: Multilingual Matters.</li>    
    </ul>
  </div>

                        <div className="page__number">7</div>
                    </div>
                );

                case 8:
                    return (
                        <div className="page__content">
                            <h1 className="page__content-title">VII</h1>
    
                            <div className="references-section mt-8">
       
        <ul className="list-disc pl-6 space-y-2">
        <li className="font-['Times_New_Roman']">Pennycook, A. (2010). <span className="italic">Language as a Local Practice.</span> London: Routledge.</li>

          <li className="font-['Times_New_Roman']">Sapir, E. (1949). <span className="italic">Selected Writings of Edward Sapir in Language, Culture and Personality.</span> Berkeley: University of California Press.</li>
          <li className="font-['Times_New_Roman']">Whorf, B.L. (1956). <span className="italic">Language, Thought, and Reality: Selected Writings of Benjamin Lee Whorf.</span> Cambridge, MA: MIT Press.</li>
          <li className="font-['Times_New_Roman']">Woolard, K.A. (1998). 'Language ideology as a field of inquiry'. In: Schieffelin, B.B., Woolard, K.A. and Kroskrity, P.V., eds.<span className="italic"> Language Ideologies: Practice and Theory.</span> Oxford: Oxford University Press, pp. 3–47.</li>
        </ul>
      </div>
    
                            <div className="page__number">8</div>
                        </div>
                    );
    


            default:
                return <div className="page__content">Page {pageNumber}</div>;
        }
    };



    return (
        <>
            <NavBar />
            <div className="relative min-h-screen bg-black overflow-hidden text-white flex flex-col items-center justify-start py-8">
                {/* Animated Blob */}
                <div
                    ref={blobRef}
                    className="fixed pointer-events-none w-[34vmax] h-[34vmax] rounded-full bg-gradient-to-r from-purple-600/30 via-pink-500/20 to-transparent opacity-70 blur-[40px] z-10"
                    style={{ transform: 'translate(-50%, -50%)', transition: 'opacity 0.3s ease' }}
                />

                {/* Custom Embedded CSS */}
                <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600&family=Tulpen+One&display=swap');

          :root {
            --baseline: 16px; /* Increased baseline for larger book */
            --page-bg: #F5F5F5;
            --dark-text: #2A2935;
            --book-title: 'Tulpen One', sans-serif;
            --title: 'Cormorant Garamond', serif;
            --body: 'Cormorant Garamond', serif;
          }

          .cover {
            width: calc(var(--baseline) * 80);
            height: 90vh; /* Use viewport height instead of fixed baseline */
            max-height: 90vh; /* Ensure it doesn't exceed 90% of viewport */
            box-shadow: 0 0 100px rgba(0, 0, 0, .3);
            margin-top: 2rem;
            position: relative;
            }
          .book {
            width: 100%;
            height: 100%;
            display: flex;
            perspective: 1200px;
            position: relative;
          }

          .book__page {
            position: absolute;
            width: 50%;
            height: 100%;
            display: grid;
            background-color: var(--page-bg);
            transform-origin: 0% 0%;
            background-image: linear-gradient(90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 18%);
            transition: transform 0.9s cubic-bezier(0.645, 0.045, 0.355, 1);
            overflow: hidden; /* Prevent content from overflowing */
            }

          .book__page--left {
            left: 0;
            z-index: ${currentPage === 1 ? 10 : 5};
          }

          .book__page--right {
            right: 0;
            z-index: 5;
          }

          .book__page--cover {
            cursor: pointer;
            overflow: hidden;
            background-image: linear-gradient(-90deg, rgba(227,227,227,1) 0%, rgba(247,247,247,0) 18%);
          }

          .book__page--cover img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        .page__content {
        font-family: var(--title);
        font-size: 1rem;
        color: var(--dark-text);
        height: 100%;
        padding: 2rem;
        overflow-y: auto; /* Add scroll if content is too long */
        box-sizing: border-box; /* Include padding in height calculation */
        }

          .page__content-book-title {
            font-family: var(--book-title);
            font-size: 4rem; /* Increased title size */
            text-transform: uppercase;
            margin: 3rem 0 1.5rem 0; /* Adjusted margins */
          }

          .page__content-author {
            border-top: 1px solid var(--dark-text);
            border-bottom: 1px solid var(--dark-text);
            display: inline-block;
            margin-bottom: 3rem; /* Increased margin */
            font-size: 1.25rem; /* Increased font size */
          }

          .page__number {
            position: absolute;
            bottom: 1.5rem; /* Adjusted position */
            width: calc(100% - 4rem); /* Adjusted width */
            text-align: center;
            font-size: 1rem; /* Increased font size */
          }

          .book__controls {
  position: absolute;
  bottom: 1rem; /* Adjusted to be closer to book */
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2rem;
  z-index: 100;
}

          .book__control-btn {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            color: white;
            padding: 0.75rem 1.5rem; /* Increased padding */
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s ease;
            font-size: 1rem; /* Increased font size */
          }

          .book__control-btn:hover {
            background: rgba(255, 255, 255, 0.3);
          }

          .book__control-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          /* Responsive adjustments */
          @media (max-width: 1200px) {
            .cover {
              width: calc(var(--baseline) * 60);
              height: calc(var(--baseline) * 42);
              margin-top: 3rem;
            }
          }

          @media (max-width: 768px) {
            .cover {
              width: calc(var(--baseline) * 50);
              height: calc(var(--baseline) * 35);
              margin-top: 2rem;
            }
            
            .page__content-book-title {
              font-size: 3rem;
            }
          }
        `}</style>

                {/* Diary/Book Component */}
                <div className="cover mx-auto z-20 relative">
                    <div className="book">
                        {/* Cover Page */}
                        {currentPage === 1 && (
                            <div
                            className="book__page book__page--left book__page--cover"
                            onClick={handleNextPage}
                          >
                            <div className="w-full h-full flex flex-col items-center justify-center bg-[#F5F5F5] p-8">
                              <h1 className="text-4xl md:text-5xl font-bold text-center text-[#2A2935] font-['Tulpen_One']">
                                Lost in Translation:
                              </h1>
                              <h2 className="text-2xl md:text-3xl text-center text-[#2A2935] mt-4 font-['Cormorant_Garamond']">
                                Language Ideology, Accent Anxiety, and Identity Shifts in an Intercultural Space
                              </h2>
                            </div>
                          </div>
                        )}

                        {/* Left Page */}
                        {currentPage > 1 && (
                            <div
                                className="book__page book__page--left"
                                onClick={handlePrevPage}
                            >
                                {renderPageContent(currentPage - 1)}
                            </div>
                        )}

                        {/* Right Page */}
                        <div
                            className="book__page book__page--right"
                            onClick={currentPage < totalPages ? handleNextPage : null}
                            style={{ cursor: currentPage < totalPages ? 'pointer' : 'default' }}
                        >
                            {renderPageContent(currentPage)}
                        </div>

                        {/* Navigation Controls */}
                        <div className="book__controls">
                            <button
                                className="book__control-btn"
                                onClick={handlePrevPage}
                                disabled={currentPage <= 1}
                            >
                                Previous
                            </button>
                            <span className="text-white text-lg">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                className="book__control-btn"
                                onClick={handleNextPage}
                                disabled={currentPage >= totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceOne;