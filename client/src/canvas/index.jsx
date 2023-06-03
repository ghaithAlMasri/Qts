// import { Canvas } from "@react-three/fiber";
// import { Environment, Center } from "@react-three/drei";

// import Shirt from "./Shirt";
// import Backdrop from "./Backdrop";
// import CameraRig from "./CameraRig";

// const CanvasModel = () => {
//   return (
//     <Canvas
//       shadows
//       camera={{ position: [0, 0, 0], fov: 25 }}
//       gl={{ preserveDrawingBuffer: true }}
//       className="w-full max-w-full h-full transition-all ease-in"
//     >
//       <ambientLight intensity={0.3} />
//       <ambientLight intensity={0.3} position={[0,0,15]}/>
//       <directionalLight position={[0, 0, 5]} color="orange" />
//       <directionalLight position={[5, 5, 5]} color="yellow" />
//       {/* <Environment preset="sunset" /> */}
//       <CameraRig>
//         <Backdrop />
//         <Center>
//           <Shirt />
//         </Center>
//       </CameraRig>
//     </Canvas>
//   );
// };

// export default CanvasModel;


import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center } from "@react-three/drei";

import Shirt from "./Shirt";
import Backdrop from "./Backdrop";
import CameraRig from "./CameraRig";

const CanvasModel = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 0], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-full transition-all ease-in"
    >
      <ambientLight intensity={0.5} color={new THREE.Color(0xffffff)} />
      <directionalLight
        position={[-1, 0, 1]}
        color={new THREE.Color(0xffeedd)}
        intensity={0.8}
      />
      <directionalLight
        position={[1, 0, -1]}
        color={new THREE.Color(0xffccaa)}
        intensity={0.8}
      />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default CanvasModel;
