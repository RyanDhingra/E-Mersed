import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MicModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, 'https://cors-anywhere-db4o.onrender.com/https://e-mersed-models.onrender.com/vsd_mic.glb');
  const [position, setPosition] = useState([-1.45, 0.41, 0.7]);
  const [rotation, setRotation] = useState([0, Math.PI/4, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[2.5 ,2.5, 2.5]}
        onClick={(e) => isSelected({name: "Microphone", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default MicModel;