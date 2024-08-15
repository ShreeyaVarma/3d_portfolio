// import {useState, useRef, Suspense} from 'react'
// import { Canvas, useFrame } from '@react-three/fiber'
// import { Points, PointMaterial, Preload, Sphere } from '@react-three/drei'
// import * as random from 'maath/random/dist/maath-random.esm'


// const Stars = (props) => {
//   const ref = useRef();

//   const sphere = random.inSphere(new Float32Array(10000), { radius: 1.2})

//   // speed control
//   useFrame((state, delta) => {
//     ref.current.rotation.x -= delta / 40
//     ref.current.rotation.y -= delta / 50
//   })

//   return (
//     <group rotation={[0, 0, Math.PI/4]}>
//       <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
//         <PointMaterial
//           transparent
//           color='#f272c8'
//           size={0.001}
//           sizeAttenuation={true}
//           depthWrite={false}

//         />
//       </Points>
//     </group>
//   )
// }

// const StarsCanvas = () => {
//   return (
//     <div className='w-full h-auto absolute inset-0 z-[-1]'>
//       <Canvas camera={{position: [0, 0, 1]}}>
//         <Suspense fallback={null}>
//           <Stars/>
//         </Suspense>
//         <Preload all/>
//       </Canvas>
//     </div>
    
//   )
// }

// export default StarsCanvas

import React from 'react';
import { Suspense } from 'react';
import { useState, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload, Sphere } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = function(props) {
  const ref = useRef();

  const sphere = random.inSphere(new Float32Array(10000), { radius: 1.2 });

  // speed control
  useFrame(function(state, delta) {
    ref.current.rotation.x -= delta / 40;
    ref.current.rotation.y -= delta / 50;
  });

  return React.createElement(
    'group',
    { rotation: [0, 0, Math.PI / 4] },
    React.createElement(
      Points,
      Object.assign({ ref: ref, positions: sphere, stride: 3, frustumCulled: true }, props),
      React.createElement(PointMaterial, {
        transparent: true,
        color: '#f272c8',
        size: 0.001,
        sizeAttenuation: true,
        depthWrite: false,
      })
    )
  );
};

const StarsCanvas = function() {
  return React.createElement(
    'div',
    { className: 'w-full h-auto absolute inset-0 z-[-1]' },
    React.createElement(
      Canvas,
      { camera: { position: [0, 0, 1] } },
      React.createElement(
        Suspense,
        { fallback: null },
        React.createElement(Stars, null)
      ),
      React.createElement(Preload, { all: true })
    )
  );
};

export default StarsCanvas;
