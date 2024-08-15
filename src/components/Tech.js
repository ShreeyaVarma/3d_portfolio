// import { BallCanvas } from './canvas'
// import { SectionWrapper } from '../hoc'
// import { technologies } from '../constants'

// const Tech = () => {
//   return (
//     <div className='flex flex-row flex-wrap justify-center gap-10'>
//       {/* loop over technologies */}
//       {technologies.map((technology) => (
//         <div className='w-28 h-28' key={technology.name}>
//           <BallCanvas icon={technology.icon}/>
//         </div>
//       ))}

//     </div>
//   )
// }

// export default SectionWrapper(Tech, "")


import React from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  return React.createElement(
    'div',
    { className: 'flex flex-row flex-wrap justify-center gap-10' },
    technologies.map((technology) => 
      React.createElement(
        'div',
        { className: 'w-28 h-28', key: technology.name },
        React.createElement(BallCanvas, { icon: technology.icon })
      )
    )
  );
};

export default SectionWrapper(Tech, "");
