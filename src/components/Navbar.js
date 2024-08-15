// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

// import {styles} from '../styles';
// import { navLinks } from '../constants';
// import {menu, close} from '../assets';

// import '../styless.css';
// import { motion } from 'framer-motion';

// import logo from '../assets/s-high-resolution-logo.png';

// const Navbar = () => {
//   const [active, setActive] = useState("");
//   const [toggle, setToggle] = useState(false);


//   return (
//     <nav
//       className={`${styles.paddingX} w-full flex  items-center py-5 fixed top-0 z-20 bg-primary`}
//     >
//       <div className='w-full flex justify-between items-center max-w-7x1 mx-auto'>
//         <Link
//         to='/' //top of page
//         className='flex items-center gap-2'
//         onClick={() => {
//           setActive(""); // track of where we are
//           window.scrollTo(0, 0); // scroll to top of page
//         }}
          
//         >
//           <img src={logo} alt='my logo' className='w-9 h-9 object-contain'/>
//           <p className='gradient-hoverr text-[18px] font-bold cursor-pointer flex'>
//             Shreeya &nbsp;
//             <span className='sm:block hidden'> | &nbsp;Portfolio</span></p>
//         </Link>
//         <ul className='list-none hidden sm:flex flex-row gap-10'>
//           {navLinks.map((link) => (
      
//             <motion.li
//               key={link.id}
//               whileHover={{ translateX: 10, translateY: -10 }}
//               transition={{ type: "spring", stiffness: 300 }}
//               className={`${
//                 active === link.title ? "gradient-hover:hover" : "gradient-hover"
//               } hover:gradient-hover text-[18px] font-medium cursor-pointer`}
//               onClick={() => setActive(link.title)}
//             >
//               <a href={`#${link.id}`}>{link.title}</a>
//             </motion.li>


//           ))}
//         </ul>
//         {/* mobile navigation bar */}
//         <div className='sm:hidden flex flex-1 justify-end items-center'>
//            <img 
//               src={toggle ? close : menu}
//               alt='menu'
//               className='w-[28px] h-[28px] object-contain cursor-pointer'
//               onClick={() => setToggle(!toggle)}
//           />

//           <div className={`${!toggle ? 'hidden' : 'flex' } p-6 bg-gradient-to-r from-blue-800 via-indigo-950 to-blue-700 absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-3xl`}>
//               <ul className='list-none flex justify-end items-start flex-col gap-4'>
//               {navLinks.map((link) => (

//                 <motion.li
//                   key={link.id}
//                   whileHover={{ translateX: 10, translateY: -10 }}
//                   transition={{ type: "spring", stiffness: 300 }}
//                   className={`${
//                     active === link.title ? "text-white" : "text-secondary"
//                   } font-poppins font-medium cursor-pointer text-[16px]`}
//                   onClick={() => {
//                     setToggle(!toggle);  // automatically closes it after clicks
//                     setActive(link.title);
//                   }}
//                 >
//                   <a href={`#${link.id}`}>{link.title}</a>
//                 </motion.li>

//                 ))}
//               </ul>
//           </div>
//         </div>
//       </div>
//     </nav>
//   )
// }

// export default Navbar




import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { menu, close } from '../assets';
import '../styless.css';
import { motion } from 'framer-motion';
import logo from '../assets/s-high-resolution-logo.png';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return React.createElement(
    'nav',
    { className: `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary` },
    React.createElement(
      'div',
      { className: 'w-full flex justify-between items-center max-w-7x1 mx-auto' },
      React.createElement(
        Link,
        {
          to: '/',
          className: 'flex items-center gap-2',
          onClick: () => {
            setActive("");
            window.scrollTo(0, 0);
          }
        },
        React.createElement('img', { src: logo, alt: 'my logo', className: 'w-9 h-9 object-contain' }),
        React.createElement(
          'p',
          { className: 'gradient-hoverr text-[18px] font-bold cursor-pointer flex' },
          'Shreeya ',
          React.createElement('span', { className: 'sm:block hidden' }, ' | Portfolio')
        )
      ),
      React.createElement(
        'ul',
        { className: 'list-none hidden sm:flex flex-row gap-10' },
        navLinks.map((link) =>
          React.createElement(
            motion.li,
            {
              key: link.id,
              whileHover: { translateX: 10, translateY: -10 },
              transition: { type: "spring", stiffness: 300 },
              className: `${active === link.title ? "gradient-hover:hover" : "gradient-hover"} hover:gradient-hover text-[18px] font-medium cursor-pointer`,
              onClick: () => setActive(link.title)
            },
            React.createElement('a', { href: `#${link.id}` }, link.title)
          )
        )
      ),
      React.createElement(
        'div',
        { className: 'sm:hidden flex flex-1 justify-end items-center' },
        React.createElement('img', {
          src: toggle ? close : menu,
          alt: 'menu',
          className: 'w-[28px] h-[28px] object-contain cursor-pointer',
          onClick: () => setToggle(!toggle)
        }),
        React.createElement(
          'div',
          { className: `${!toggle ? 'hidden' : 'flex'} p-6 bg-gradient-to-r from-blue-800 via-indigo-950 to-blue-700 absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-3xl` },
          React.createElement(
            'ul',
            { className: 'list-none flex justify-end items-start flex-col gap-4' },
            navLinks.map((link) =>
              React.createElement(
                motion.li,
                {
                  key: link.id,
                  whileHover: { translateX: 10, translateY: -10 },
                  transition: { type: "spring", stiffness: 300 },
                  className: `${active === link.title ? "text-white" : "text-secondary"} font-poppins font-medium cursor-pointer text-[16px]`,
                  onClick: () => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }
                },
                React.createElement('a', { href: `#${link.id}` }, link.title)
              )
            )
          )
        )
      )
    )
  );
};

export default Navbar;
