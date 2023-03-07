import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function MonitorModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, 'https://cors-anywhere-db4o.onrender.com/https://drive.google.com/uc?id=1jrtSVNkd59X7kSchoOthuu_nlsz_R58O');
  const [position, setPosition] = useState([-0.5, 1.17, 0]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[0.2, 0.2, 0.2]}
        onClick={(e) => isSelected({name: "Monitor", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default MonitorModel;