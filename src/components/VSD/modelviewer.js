import React from "react";
import { Canvas } from "@react-three/fiber";
import GltfModel from "./gltfmodel.js";
import { OrbitControls } from "@react-three/drei";
import DraggableDodecahedron from "./test.js";

const ModelViewer = ({ modelPath, scale = 40 }) => {
  return (
    <Canvas>
      <ambientLight intensity={2} />
      <spotLight intensity={2} position={[0, 10, 0]} angle={1} penumbra={1} />
      <pointLight intensity={1} position={[0, -10, 0]} />
      <DraggableDodecahedron />
      <OrbitControls/>
    </Canvas>
  );
};

export default ModelViewer;

//<GltfModel modelPath={modelPath} scale={scale}/>