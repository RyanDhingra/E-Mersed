import React, { useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function KeyboardModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "https://e-mersed--vsd-3d-objects.s3.us-east-2.amazonaws.com/vsd_keyboard.glb");
  const [position, setPosition] = useState([-0.5, 0.458, 0.75]);
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