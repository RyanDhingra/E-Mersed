import React, { useRef, useState } from "react";
import { useLoader, useFrame, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useDrag } from 'react-use-gesture';
import table from "../../assets/gaming_table.glb"

function DraggableDodecahedron() {
    const colors = ['hotpink', 'red', 'blue', 'green', 'yellow'];
    const ref = useRef();
    const [colorIdx, setColorIdx] = useState(0);
    const [position, setPosition] = useState([0, -1, 1]);
    const gltf = useLoader(GLTFLoader, table);
    const { size, viewport } = useThree();
    const aspect = size.width / viewport.width;

    useFrame(() => {
      //ref.current.rotation.z += 0.01;
      //ref.current.rotation.x += 0.01;
    });
    /*const bind = useDrag(
      ({ offset: [x, y] }) => {
        const [, , z] = position;
        setPosition([(x + position[0]) / aspect, (-y + position[0]) / aspect, z]);
      },
      { pointerEvents: true }
    );*/
  
    return (
      <mesh
        position={position}
        ref={ref}
        onPointerOver={(e) => console.log('hover')}
        onPointerOut={(e) => console.log('unhover')}
      >
        <primitive
        position={position}
        object={gltf.scene} 
        />
        <meshLambertMaterial attach="material" color={colors[colorIdx]} />
      </mesh>
    );
  }

export default DraggableDodecahedron;