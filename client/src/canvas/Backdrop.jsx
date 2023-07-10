import React, { useRef } from 'react'
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';
import state from '../store'
import { useSnapshot } from 'valtio';

const Backdrop = () => {
  const shadows = useRef();

  const snap = useSnapshot(state)




  return (
    <AccumulativeShadows
      ref={shadows}
      temporal
      frames={60}
      alphaTest={0.85}
      scae={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
      intensity={1}
      color = {snap.color}
    >
      <RandomizedLight 
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
        color={snap.color}
      />
      <RandomizedLight 
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
        color={snap.color}

      />
    </AccumulativeShadows>
  )
}

export default Backdrop