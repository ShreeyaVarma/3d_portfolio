'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRouterDom = require('react-router-dom');

var _components = require('./components');

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

var App = function App() {
  return React.createElement(
    'div',
    { className: 'relative z-0 bg-primary' },
    React.createElement(
      _reactRouterDom.BrowserRouter,
      null,
      React.createElement(
        'div',
        { className: 'relative z-0' },
        React.createElement(_components.Navbar, null),
        React.createElement(_components.Hero, null),
        React.createElement(_components.About, null),
        React.createElement(_components.Experience, null),
        React.createElement(_components.Tech, null),
        React.createElement(_components.Works, null),
        React.createElement(_components.Feedbacks, null),
        React.createElement(_components.Contact, null),
        React.createElement(_components.StarsCanvas, null)
      )
    )
  );
};

exports.default = App;