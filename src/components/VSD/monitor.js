import React, { useEffect, useRef, useState } from 'react';
import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import monitor from "../../assets/vsd_monitor.glb"


function MonitorModel({ isSelected }) {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, monitor);
  const [position, setPosition] = useState([0, 1.17, 0]);
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