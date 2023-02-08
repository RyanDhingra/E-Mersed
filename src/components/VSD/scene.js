import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Table from "./table.js";
import { PerspectiveCamera } from "@react-three/drei";
import MouseModel from "./mouse.js";
import KeyboardModel from "./keyboard.js";
import MonitorModel from "./monitor.js";
import MicModel from "./mic.js";
import HeadphoneModel from "./headphone.js";
import PCModel from "./pc.js";
import ChairModel from "./chair.js";

const Scene = ({ setSelected, enableControls }) => {
  return (
    <Canvas>
      <group dispose={null}>
        <ambientLight intensity={2} />
        <spotLight intensity={1} position={[0, 50, 0]} angle={1} penumbra={0.1} />
        <pointLight intensity={1} position={[0, -10, 0]} />
        <Table />

        <MouseModel isSelected={setSelected}/>
        <MonitorModel isSelected={setSelected}/>
        <KeyboardModel isSelected={setSelected}/>
        <MicModel isSelected={setSelected}/>
        <HeadphoneModel isSelected={setSelected}/>
        <PCModel isSelected={setSelected}/>
        <ChairModel isSelected={setSelected}/>
        <PerspectiveCamera makeDefault position={[-4.5, 2.3, 4]} rotation={[0, Math.PI/4, 0]} fov={50} />
        <OrbitControls enabled={enableControls}/>
      </group>
    </Canvas>
  );
};

export default Scene;

//<primitive object={new THREE.AxesHelper(10)} />