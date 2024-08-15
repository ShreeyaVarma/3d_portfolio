// import { motion } from 'framer-motion';

// import { styles } from '../styles';
// import { ComputersCanvas } from './canvas';
// import '../styless.css';
// // import MagicButton from './ui/MagicButton';



// // FOR THE TITLE WITH MY NAME

// const createParticles = (text) => {  //FUNCTION/component CREATION
//   const words = text.split(' '); // Split the text into words

//   return words.map((word, wordIndex) => {
//     // Check if the word is "Shreeya", TO APPLY SPECIAL COLOR
//     const isShreeya = word === "Shreeya";

//     return (
//       <span key={wordIndex} className="particle-wrapper">
//         {word.split('').map((char, charIndex) => {
//           // Only apply the special color to the word "Shreeya"
//           const isShreeyaChar = isShreeya;   // FUNCTION FOR JUST MY NAME COLOUR
//           return (
//             <motion.span
//               key={charIndex}
//               className={`particle ${isShreeyaChar ? 'shreeya-color' : ''}`}
//               initial={{
//                 opacity: 0,
//                 x: (Math.random() - 0.5) * 200,
//                 y: (Math.random() - 0.5) * 200,
//               }}
//               animate={{
//                 opacity: 1,
//                 x: 0,
//                 y: 0,
//               }}
//               transition={{
//                 duration: 3.5,
//                 ease: 'easeOut',
//                 delay: charIndex * 0.05,  // KINDA SEPARATION TIME B/W EACH LETTER
//               }}
//             >
//               {char}
//             </motion.span>
//           );
//         })}
//         {/* Add a space after each word except the last one */}
//         {wordIndex < words.length - 1 && ' '}
//       </span>
//     );
//   });
// };


// const Hero = () => {
//   return (
//     <section className='relative w-full h-screen mx-auto'>
    
//       <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
//         <div className='flex flex-col justify-center items-center mt-5'>
//           <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
//           <div className='w-1 sm:h-80 h-40 animated-gradient'/>
//         </div>
//         <div>
//           <h1 className={`${styles.heroHeadText} text-white`}>
//             {createParticles("Hey,   I'm      Shreeya")}
//           </h1>

//           <p className={`${styles.heroSubText} mt-2 text-white-100 text-pendulum`}>
//             I am a passionate <span className='text-[#5eead4]'>CS</span> and <span className='text-[#5eead4]'>AI</span> student. I love to explore and expand my knowledge in fields like <span className='text-[#5eead4]'>LLMs</span>, <span className='text-[#67e8f9]'>NLP</span>, <span className='text-[#7dd3fc]'>Reinforcement Learning</span>, <span className='text-[#c4b5fd]'>Computer Vision</span>, <span className='text-[#f0abfc]'>Machine and Deep Learning</span>.
            
//           </p>

//         </div>
//       </div>

//       <ComputersCanvas />
      
//       {/* to create the scroller at the bottom */}
//       <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center itmes-center'>
//         <a href='#about'>
//           <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
//             <motion.div
//               animate={{
//                 y: [0,24,0]
//               }}
//               transition={{
//                 duration: 1.5,
//                 repeat: Infinity,
//                 repeatType: 'loop'
//               }}
//               className='w-3 h-3 bg-secondary rounded-full mb-1'
//             />

//           </div>
//         </a>

//       </div>

      
//     </section>
//   );
// };

// export default Hero;


import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import '../styless.css';

// FOR THE TITLE WITH MY NAME

const createParticles = (text) => {
  const words = text.split(' ');

  return words.map((word, wordIndex) => {
    const isShreeya = word === "Shreeya";

    return React.createElement(
      'span',
      { key: wordIndex, className: 'particle-wrapper' },
      word.split('').map((char, charIndex) => {
        const isShreeyaChar = isShreeya;
        return React.createElement(
          motion.span,
          {
            key: charIndex,
            className: `particle ${isShreeyaChar ? 'shreeya-color' : ''}`,
            initial: {
              opacity: 0,
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
            },
            animate: {
              opacity: 1,
              x: 0,
              y: 0,
            },
            transition: {
              duration: 3.5,
              ease: 'easeOut',
              delay: charIndex * 0.05,
            }
          },
          char
        );
      }),
      wordIndex < words.length - 1 && ' '
    );
  });
};

const Hero = () => {
  return React.createElement(
    'section',
    { className: 'relative w-full h-screen mx-auto' },
    React.createElement(
      'div',
      { className: `${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5` },
      React.createElement(
        'div',
        { className: 'flex flex-col justify-center items-center mt-5' },
        React.createElement('div', { className: 'w-5 h-5 rounded-full bg-[#915eff]' }),
        React.createElement('div', { className: 'w-1 sm:h-80 h-40 animated-gradient' })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          { className: `${styles.heroHeadText} text-white` },
          createParticles("Hey,   I'm      Shreeya")
        ),
        React.createElement(
          'p',
          { className: `${styles.heroSubText} mt-2 text-white-100 text-pendulum` },
          'I am a passionate ',
          React.createElement('span', { className: 'text-[#5eead4]' }, 'CS'),
          ' and ',
          React.createElement('span', { className: 'text-[#5eead4]' }, 'AI'),
          ' student. I love to explore and expand my knowledge in fields like ',
          React.createElement('span', { className: 'text-[#5eead4]' }, 'LLMs'),
          ', ',
          React.createElement('span', { className: 'text-[#67e8f9]' }, 'NLP'),
          ', ',
          React.createElement('span', { className: 'text-[#7dd3fc]' }, 'Reinforcement Learning'),
          ', ',
          React.createElement('span', { className: 'text-[#c4b5fd]' }, 'Computer Vision'),
          ', ',
          React.createElement('span', { className: 'text-[#f0abfc]' }, 'Machine and Deep Learning'),
          '.'
        )
      )
    ),
    React.createElement(ComputersCanvas, null),
    React.createElement(
      'div',
      { className: 'absolute xs:bottom-10 bottom-32 w-full flex justify-center itmes-center' },
      React.createElement(
        'a',
        { href: '#about' },
        React.createElement(
          'div',
          { className: 'w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2' },
          React.createElement(
            motion.div,
            {
              animate: {
                y: [0, 24, 0]
              },
              transition: {
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              },
              className: 'w-3 h-3 bg-secondary rounded-full mb-1'
            }
          )
        )
      )
    )
  );
};

export default Hero;
