import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import table from "../../assets/gaming_table.glb"

function Table() {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, table);

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