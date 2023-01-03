import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import vsdTable from "../../assets/vsd_table.glb"

function Table() {
    const ref = useRef();
    const gltf = useLoader(GLTFLoader, vsdTable);

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