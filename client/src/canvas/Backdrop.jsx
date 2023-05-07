import { easing } from "maath";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";

const Backdrop = () => {
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      temporal
      frames={30}
      alphaTest={0.9}
      scale={10}
      rotation={[Math.PI / 2, 0.011, 0]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={3}
        radius={12}
        intensity={0.2}
        ambient={0.55}
        position={[-5, 5, -2]}
      />
      <RandomizedLight />
    </AccumulativeShadows>
  );
};

export default Backdrop;
