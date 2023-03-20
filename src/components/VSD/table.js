import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Table() {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "https://cors-anywhere-db4o.onrender.com/https://e-mersed-models.onrender.com/vsd_table.glb");

    return (
        <primitive
        ref={ref}
        position={[0,-1,0]}
        rotation={[0,0,0]}
        object={gltf.scene} 
        />
    );
  }

export default Table;