// import { Suspense } from "react"
// import { Canvas } from "@react-three/fiber"

// // drei is helper lib
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

// import CanvasLoader from "../Loader"


// const Earth = () => {
//   const earth = useGLTF("./planet/scene.gltf")

//   return (
//     <primitive
//       object={earth.scene}
//       scale={2}
//       position-y={0}
//       rotation-y={0}
//     />
//   )
// }

// const EarthCanvas = () =>{
//   return(
//     <Canvas
//       shadows
//       gl={{preserveDrawingBuffer: true}}
//       camera={{
//         fov: 40,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6]
//       }}
//     >
//       {/* if image not loaded yet, this */}
//       <Suspense fallback={<CanvasLoader/>}>

//       {/* if loaded then, this, modify and move the earth */}
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth/>
      

//       </Suspense>
//     </Canvas>

//   )
// }

// export default EarthCanvas

import React from "react";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";

// drei is a helper library
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return React.createElement('primitive', {
    object: earth.scene,
    scale: 2,
    position: [0, 0, 0], // since `position-y` is 0, this is equivalent to position: [0, 0, 0]
    rotation: [0, 0, 0], // since `rotation-y` is 0, this is equivalent to rotation: [0, 0, 0]
  });
};

const EarthCanvas = () => {
  return React.createElement(Canvas, {
    shadows: true,
    gl: { preserveDrawingBuffer: true },
    camera: {
      fov: 40,
      near: 0.1,
      far: 200,
      position: [-4, 3, 6],
    },
  },
    React.createElement(Suspense, { fallback: React.createElement(CanvasLoader) },
      React.createElement(OrbitControls, {
        autoRotate: true,
        enableZoom: false,
        maxPolarAngle: Math.PI / 2,
        minPolarAngle: Math.PI / 2,
      }),
      React.createElement(Earth)
    )
  );
};

export default EarthCanvas;
