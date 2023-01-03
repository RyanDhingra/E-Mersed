import React, { useState } from 'react';
import "./vsd.css"
import Scene from './scene';

function VSD() {
    const [lock, setLock] = useState(true);
    const [currObj, setCurrObj] = useState({});

    const handleObjectClick = (newObj) => {
        setCurrObj(newObj)
    }

    const handleChange = () => {
        setLock(!lock)
    }

    const handleKeys = (event) => {
        if (currObj) {
            const currPos = currObj.pos
            const currRot = currObj.rot
            const updatePosition = currObj.updatePos
            const updateRotation = currObj.updateRot
            //const angles = [0, 45, 90, 135, 180, 225, 270, 315, 360]
            const angles = [0, Math.PI/4, Math.PI/2, (3 * Math.PI)/4, Math.PI, (3 * Math.PI)/-4, Math.PI/-2, Math.PI/-4, 0]

            if (event.key === "ArrowLeft") {
                currPos[0] = currPos[0] - 0.05
            } else if (event.key === "ArrowRight") {
                currPos[0] = currPos[0] + 0.05
            } else if (event.key === "ArrowDown") {
                currPos[2] = currPos[2] + 0.05
            } else if (event.key === "ArrowUp") {
                currPos[2] = currPos[2] - 0.05
            } else if (event.key === "Shift") {
                currPos[1] = currPos[1] + 0.05
            } else if (event.key === "Control") {
                currPos[1] = currPos[1] - 0.05
            } else if (event.key === "r") {
                if (currRot[1] === 360) {
                    currRot[1] = 0
                } else {
                    currRot[1] = angles[(angles.indexOf(currRot[1])) + 1] 
                }
            }
            updateRotation([currRot[0], currRot[1], currRot[2]])
            updatePosition([currPos[0], currPos[1], currPos[2]])
        }
    }

    return (
        <>
            <div className='lock' style={{width: '50px', height: '50px', position: 'absolute', top: '0px', left: '0px', background: 'red', zIndex: '99'}}>
                <button onClick={handleChange}><img style={{width: '50px', height: '50px'}} src={lock ? "https://static.vecteezy.com/system/resources/previews/012/674/663/non_2x/lock-icon-clipart-free-png.png":"https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png"} alt='tmp' /></button>
            </div>
            <div style={{width: '100%', height: '100vh'}} tabIndex='0' onKeyDown={(e) => handleKeys(e)}>
            <Scene setSelected={handleObjectClick} enableControls={lock}/> 
            </div>
        </>
    );
}

export default VSD;