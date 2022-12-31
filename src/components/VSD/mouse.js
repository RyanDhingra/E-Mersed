import React, { useEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { useDrag } from 'react-use-gesture';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";


function MouseModel() {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "emersedMouse.glb");
  const [position, setPosition] = useState([-2.5, 0.489, -1.5]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  useFrame(() => {
    
  });
  const bind = useDrag(
    ({ offset: [x, y, z] }) => {
      setPosition([(x + position[0]) / aspect, (-y + position[1]) / aspect, (z + position[2])]);
    },
    { pointerEvents: true }
  );

  return (
        <primitive 
        position={position}
        {...bind()}
        ref={ref}
        object={gltf.scene}
        rotation={[0, Math.PI/-2,0]}
        scale={[0.5, 0.5, 0.5]}
        />
  );
}

export default MouseModel;