
// import { BrowserRouter} from 'react-router-dom';

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <div className='relative z-0 bg-primary'>
//           <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
//             <Navbar />
//             <Hero />
//           </div>
//           <About/>
//           <Experience/>
//           <Tech/>
//           <Works/>
//           <Feedbacks/>
//           <div className='relative z-0'>
//             <Contact/>
//             <StarsCanvas />
//           </div>
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App

// import { BrowserRouter } from 'react-router-dom';

// import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

// const App = () => {
//   return (
//     <div className='relative z-0 bg-primary'>
//       <BrowserRouter>
//         {/* Wrap each section with StarsCanvas */}
//         <div className='relative z-0'>
//             <Navbar />
//             <Hero />
//           <About />
//           <Experience />
//           <Tech />
//           <Works />
//           <Feedbacks />
//           <Contact />
//           <StarsCanvas />
//         </div>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App;


import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import About from './components/About';
// import Contact from './components/Contact';
// import Experience from './components/Experience';
// import Feedbacks from './components/Feedbacks';
// import Hero from './components/Hero';
// import Navbar from './components/Navbar';
// import Tech from './components/Tech';
// import Works from './components/Works';
// import StarsCanvas from './components/StarsCanvas';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';

class App extends React.Component {
  render() {
    return React.createElement(
      'div',
      { className: 'relative z-0 bg-primary' },
      React.createElement(BrowserRouter, null,
        React.createElement(
          'div',
          { className: 'relative z-0' },
          React.createElement(Navbar, null),
          React.createElement(Hero, null),
          React.createElement(About, null),
          React.createElement(Experience, null),
          React.createElement(Tech, null),
          React.createElement(Works, null),
          React.createElement(Feedbacks, null),
          React.createElement(Contact, null),
          React.createElement(StarsCanvas, null)
        )
      )
    );
  }
}

export default App;


