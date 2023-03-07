import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function ChairModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, 'https://cors-anywhere-db4o.onrender.com/https://drive.google.com/uc?id=1T3zs7kjgb6UDW47_tTbjPcuTCtJSGCob');
  const [position, setPosition] = useState([-0.5, -1.13, 2]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[2, 2, 2]}
        onClick={(e) => isSelected({name: "Chair", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default ChairModel;