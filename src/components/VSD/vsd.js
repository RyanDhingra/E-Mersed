import React from 'react';
import "./vsd.css"
import ModelViewer from './modelviewer';

function VSD() {
    return (
        <div style={{width: '100%', height: '100vh'}}>
           <ModelViewer scale="40" modelPath={"emersedMouse.glb"} /> 
        </div>
    );
}

export default VSD;