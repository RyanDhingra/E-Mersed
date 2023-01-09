import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import pc from "../../assets/vsd_pc.glb"


function PCModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, pc);
  const [position, setPosition] = useState([1.2, 1.09, 0.3]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[2, 2, 2]}
        onClick={(e) => isSelected({name: "PC", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default PCModel;