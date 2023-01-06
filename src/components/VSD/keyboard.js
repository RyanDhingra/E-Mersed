import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import keyboard from "../../assets/vsd_keyboard.glb"


function KeyboardModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, keyboard);
  const [position, setPosition] = useState([0, 0.458, 0.75]);
  const [rotation, setRotation] = useState([0, 0, 0]);

  return (
        <primitive 
        position={position}
        ref={ref}
        object={gltf.scene}
        rotation={rotation}
        scale={[0.08, 0.08, 0.08]}
        onClick={(e) => isSelected({name: "Keyboard", pos: position, rot: rotation, updatePos: setPosition, updateRot: setRotation})}
        />
  );
}

export default KeyboardModel;