import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useDrag } from 'react-use-gesture';

const GltfModel = ({ modelPath, scale }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);
  const [position, setPosition] = useState([0, 0, 0]);
  const { size, viewport } = useThree();
  const aspect = size.width / viewport.width;

  const bind = useDrag(
    ({ offset: [x, y] }) => {
      const [, , z] = position;
      setPosition([x/aspect, -y/aspect, z]);
    },
    { pointerEvents: true }
  );

  useFrame(() => {

  });

  return (
    <>
      <primitive
        ref={ref}
        object={gltf.scene}
        {...bind()}
        position={position}
        scale={scale}
        onPointerOver={(e) => console.log('hover:' + position.toString())}
        onPointerOut={(e) => console.log('unhover' + position.toString())}
      />
    </>
  );
};

export default GltfModel;