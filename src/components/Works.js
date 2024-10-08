// import {Tilt} from 'react-tilt'
// import { motion } from 'framer-motion'

// import { styles } from '../styles'
// import { github } from '../assets'
// import { SectionWrapper } from '../hoc'
// import { projects } from '../constants'
// import { fadeIn, textVariant } from '../utils/motion'
// // import { max } from 'three/webgpu'

// const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
//   return (
//     <motion.div variants={fadeIn("up", "spring", index *0.5, 0.5)}>
//       <Tilt
//         options={{
//           max: 45,
//           scale: 1,
//           speed: 450
//         }}
//         className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
//       >
//         <div className='relative w-full h-[230px]'>
//           <img
//             src={image}
//             alt={name}
//             className='w-full h-full object-cover rounded-2xl'
//           />

//           <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
//             <div
//               onClick={() => window.open(source_code_link, "_blank")}
//               className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
//             >
//               <img
//                 src={github}
//                 alt='github'
//                 className='w-1/2 h-1/2 object-contain'
//               />

//             </div>

//           </div>

//         </div>

//         <div className='mt-5'>
//           <h3 className='text-white font-bold text-[24px]'>{name}</h3>
//           <p className='text-sm mt-2 '>{description}</p>

//         </div>

//         <div className='mt-4 flex flex-wrap gap-2'>
//           {tags.map((tag) => (
//             <p key={tag.name} className={`text-[14px] ${tag.color}`}>
//               #{tag.name}

//             </p>
//           ))}

//         </div>

//       </Tilt>
//     </motion.div>
//   )

// }


// const Works = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>

//         <p className={`${styles.sectionSubText} mb-4`}>
//           My Work
//         </p>
//         <h3 className='text-white font-extrabold text-[45px]'>
//           Projects.
//         </h3>

//       </motion.div>

//       <div className='w-full flex'>
//         <motion.p 
//           variants={fadeIn("", "", 0.1, 1)}
//           className='mt-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500 bg-clip-text text-transparent text-[17px] max-w-3xl leading-[30px]'
//         >
//           Following projects showcases my skills and experience through
//           real-world examples of my work. Each project is briefly described with
//           links to code repositories and live demos in it. It reflects my
//           ability to solve complex problems, work with different technologies,
//           and manage projects effectively.

//         </motion.p>

//       </div>

//       {/* wrap: adjusts as screen size changes */}
//       <div className='mt-20 flex flex-wrap gap-7'>
//         {projects.map((project, index) => (
//           <ProjectCard
//             key={`project-${index}`}
//             index={index}
//             {...project}
//           />
//         ))}
//       </div>

//     </>
//   )
// }

// export default SectionWrapper(Works, "")


import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return React.createElement(
    motion.div,
    { variants: fadeIn("up", "spring", index * 0.5, 0.5) },
    React.createElement(
      Tilt,
      {
        options: { max: 45, scale: 1, speed: 450 },
        className: 'bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      },
      React.createElement(
        'div',
        { className: 'relative w-full h-[230px]' },
        React.createElement('img', {
          src: image,
          alt: name,
          className: 'w-full h-full object-cover rounded-2xl'
        }),
        React.createElement(
          'div',
          { className: 'absolute inset-0 flex justify-end m-3 card-img_hover' },
          React.createElement(
            'div',
            {
              onClick: () => window.open(source_code_link, "_blank"),
              className: 'black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            },
            React.createElement('img', {
              src: github,
              alt: 'github',
              className: 'w-1/2 h-1/2 object-contain'
            })
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'mt-5' },
        React.createElement('h3', { className: 'text-white font-bold text-[24px]' }, name),
        React.createElement('p', { className: 'text-sm mt-2' }, description)
      ),
      React.createElement(
        'div',
        { className: 'mt-4 flex flex-wrap gap-2' },
        tags.map(tag =>
          React.createElement(
            'p',
            { key: tag.name, className: `text-[14px] ${tag.color}` },
            `#${tag.name}`
          )
        )
      )
    )
  );
};

const Works = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      motion.div,
      { variants: textVariant() },
      React.createElement('p', { className: `${styles.sectionSubText} mb-4` }, 'My Work'),
      React.createElement('h3', { className: 'text-white font-extrabold text-[45px]' }, 'Projects.')
    ),
    React.createElement(
      'div',
      { className: 'w-full flex' },
      React.createElement(
        motion.p,
        {
          variants: fadeIn("", "", 0.1, 1),
          className: 'mt-3 bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500 bg-clip-text text-transparent text-[17px] max-w-3xl leading-[30px]'
        },
        'Following projects showcases my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.'
      )
    ),
    React.createElement(
      'div',
      { className: 'mt-20 flex flex-wrap gap-7' },
      projects.map((project, index) =>
        React.createElement(ProjectCard, {
          key: `project-${index}`,
          index: index,
          ...project
        })
      )
    )
  );
};

export default SectionWrapper(Works, "");
