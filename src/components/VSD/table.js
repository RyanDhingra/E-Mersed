import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

function Table() {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, "https://cors-anywhere-db4o.onrender.com/https://drive.google.com/uc?id=1D4gbm_yRkfiRzLVATomy1ozvOMmtMpVD");

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