import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MicModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, 'https://cors-anywhere-db4o.onrender.com/https://drive.google.com/uc?id=1vvTzPx9S17brLoOhaGPt1abwq4MFeMVW');
  const [position, setPosition] = useState([-1.45, 0.41, 0.7]);
  const [rotation, setRotation] = useState([0, (3 * Math.PI)/4, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[0.01, 0.01, 0.01]}
        onClick={(e) => isSelected({name: "Microphone", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default MicModel;