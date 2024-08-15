// import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
// import {color, motion} from 'framer-motion';
// import 'react-vertical-timeline-component/style.min.css';
// import {styles} from '../styles';
// import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc';
// import { textVariant } from '../utils/motion';

// const ExperienceCard = ({experience}) => (
//   <VerticalTimelineElement
//     contentStyle={{background: "#1d1836", color: "#fff"}}
//     contentArrowStyle={{borderRight: '7px solid #23631'}}
//     date={experience.date}
//     iconStyle={{background: experience.iconBg}}
//     icon={
//       <div className='flex justify-center items-center w-full h-full'>
//         <img 
//           src={experience.icon}
//           alt={experience.company_name}
//           className='w-[60%] h-[60%] object-contain'
//         />
//       </div>
//     }
//   >
//     <div>
//       <h3 className='text-white text-[24px] font-bold'>
//         {experience.title}
//       </h3>
//       <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>
//         {experience.company_name}
//       </p>
//     </div>

//     <ul className='mt-5 list-disc ml-5 space-y-2'>
//       {experience.points.map((point, index) => (
//         <li
//           key={`expereince-point-${index}`}
//           className='text-white-100 text-[14px] pl-1 tracking-wider'
//         >
//           {point}
//         </li>
//       ))}
//     </ul>

//   </VerticalTimelineElement>
// )

// const Experience = () => {
//   return (
//     <>
//       <motion.div variants={textVariant()}>

//         <p className={`${styles.sectionSubText} mb-4`}>
//         What I have done so far
//         </p>
//         <h3 className='text-white font-extrabold text-[50px]'>
//         Work Experience.
//         </h3>

//       </motion.div>

//       <div className='mt-20 flex flex-col'>
//         <VerticalTimeline>
//           {experiences.map((experience, index) => (
//             <ExperienceCard key={index} experience={experience}/>
//           ))}
//         </VerticalTimeline>

//       </div>
//     </>
//   )
// }

// export default SectionWrapper(Experience, "work")


import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { color, motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => {
  return React.createElement(
    VerticalTimelineElement,
    {
      contentStyle: { background: "#1d1836", color: "#fff" },
      contentArrowStyle: { borderRight: '7px solid #23631' },
      date: experience.date,
      iconStyle: { background: experience.iconBg },
      icon: React.createElement(
        'div',
        { className: 'flex justify-center items-center w-full h-full' },
        React.createElement('img', {
          src: experience.icon,
          alt: experience.company_name,
          className: 'w-[60%] h-[60%] object-contain'
        })
      )
    },
    React.createElement(
      'div',
      null,
      React.createElement('h3', { className: 'text-white text-[24px] font-bold' }, experience.title),
      React.createElement('p', {
        className: 'text-secondary text-[16px] font-semibold',
        style: { margin: 0 }
      }, experience.company_name)
    ),
    React.createElement(
      'ul',
      { className: 'mt-5 list-disc ml-5 space-y-2' },
      experience.points.map((point, index) => 
        React.createElement(
          'li',
          {
            key: `expereince-point-${index}`,
            className: 'text-white-100 text-[14px] pl-1 tracking-wider'
          },
          point
        )
      )
    )
  );
};

const Experience = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(
      motion.div,
      { variants: textVariant() },
      React.createElement('p', { className: `${styles.sectionSubText} mb-4` }, 'What I have done so far'),
      React.createElement('h3', { className: 'text-white font-extrabold text-[50px]' }, 'Work Experience.')
    ),
    React.createElement(
      'div',
      { className: 'mt-20 flex flex-col' },
      React.createElement(
        VerticalTimeline,
        null,
        experiences.map((experience, index) =>
          React.createElement(ExperienceCard, { key: index, experience })
        )
      )
    )
  );
};

export default SectionWrapper(Experience, "work");
