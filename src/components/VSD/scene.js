import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Table from "./table.js";
import * as THREE from "three";
import { PerspectiveCamera } from "@react-three/drei";
import MouseModel from "./mouse.js";
import KeyboardModel from "./keyboard.js";

const Scene = ({ setSelected, enableControls }) => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <spotLight intensity={2} position={[0, 10, 0]} angle={1} penumbra={1} />
      <pointLight intensity={1} position={[0, -10, 0]} />
      <Table />
      <primitive object={new THREE.AxesHelper(10)} />
      <MouseModel isSelected={setSelected} />
      <KeyboardModel isSelected={setSelected} />
      <PerspectiveCamera makeDefault position={[0, 2, 3]} fov={50} />
      <OrbitControls enabled={enableControls}/>
    </Canvas>
  );
};

export default Scene;