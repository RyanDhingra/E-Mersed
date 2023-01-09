import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import chair from "../../assets/vsd_chair.glb"


function ChairModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, chair);
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