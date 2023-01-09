import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import headphone from "../../assets/vsd_headphone.glb"


function HeadphoneModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, headphone);
  const [position, setPosition] = useState([0.3, 1.345, 0]);
  const [rotation, setRotation] = useState([0, Math.PI/2, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[0.1, 0.1, 0.1]}
        onClick={(e) => isSelected({name: "Headset", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default HeadphoneModel;