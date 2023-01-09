import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import mouse from "../../assets/vsd_mouse.glb"


function MouseModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, mouse);
  const [position, setPosition] = useState([0.5, 0.475, 0.75]);
  const [rotation, setRotation] = useState([0, Math.PI/-2, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[0.4, 0.4, 0.4]}
        onClick={(e) => isSelected({name: "Mouse", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default MouseModel;