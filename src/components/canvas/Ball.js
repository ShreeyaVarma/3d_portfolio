// import React, {Suspense} from 'react'
// import {Canvas} from '@react-three/fiber'

// import { Decal, Float, OrbitControls, Preload, useTexture} from '@react-three/drei'
// import CanvasLoader from '../Loader'

// const Ball = (props) => {
//   const [decal] = useTexture([props.imgUrl])
//   return (
//     <Float speed ={1.75} rotationIntensity={1} floatIntensity={2}>
//       <ambientLight intensity={0.5}/>
//       <directionalLight position={[0, 0, 0.05]}/>
//       <mesh castShadow receiveShadow scale={2.75}>
//         <icosahedronGeometry args={[1,1]}/>
//         <meshStandardMaterial
//           color='#fff8eb'
//           polygonOffset
//           polygonOffsetFactor={-5}
//           flatShading  
//         />
//         <Decal
//           position={[0, 0, 1]}
//           rotation={[2*Math.PI, 0, 6.25]}
//           flatShading
//           map={decal}
//         />

//       </mesh>
//     </Float>
//   )
// }

// const BallCanvas = ({icon}) => {
//   return (
//     <Canvas
       // requestAnimationFrame
//       gl={{ preserveDrawingBuffer: true }}
//     >
//       {/* to have a loader while model is loading*/}
//       <Suspense fallback={<CanvasLoader />}>

//         {/* to move the camera */}
//         <OrbitControls
//           enableZoom={false}
//         />
//         <Ball imgUrl={icon} />
//       </Suspense>

//       <Preload all />
//     </Canvas>
//   )
// }

// export default BallCanvas

import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  return React.createElement(
    Float,
    { speed: 1.75, rotationIntensity: 1, floatIntensity: 2 },
    React.createElement('ambientLight', { intensity: 0.5 }),
    React.createElement('directionalLight', { position: [0, 0, 0.05] }),
    React.createElement(
      'mesh',
      { castShadow: true, receiveShadow: true, scale: 2.75 },
      React.createElement('icosahedronGeometry', { args: [1, 1] }),
      React.createElement('meshStandardMaterial', {
        color: '#fff8eb',
        polygonOffset: true,
        polygonOffsetFactor: -5,
        flatShading: true,
      }),
      React.createElement(Decal, {
        position: [0, 0, 1],
        rotation: [2 * Math.PI, 0, 6.25],
        flatShading: true,
        map: decal,
      })
    )
  );
};

const BallCanvas = ({ icon }) => {
  return React.createElement(
    Canvas,
    { gl: { preserveDrawingBuffer: true } },
    React.createElement(
      Suspense,
      { fallback: React.createElement(CanvasLoader, null) },
      React.createElement(OrbitControls, { enableZoom: false }),
      React.createElement(Ball, { imgUrl: icon })
    ),
    React.createElement(Preload, { all: true })
  );
};

export default BallCanvas;

