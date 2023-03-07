import React, { useState, useEffect } from 'react';
import "./vsd.css"
import Scene from './scene';
import toolbarIcon from "../../assets/toolbar_icon.png"
import camlockIcon from "../../assets/camlock_icon.png"
import saveIcon from "../../assets/save_icon.png"
import helpIcon from "../../assets/help_icon.png"
import keys from "../../assets/arrowKeys.png"
import r from "../../assets/rKey.png"
import updownKeys from "../../assets/shiftctrlKeys.png"

function VSD() {
    const [lock, setLock] = useState(true);
    const [currObj, setCurrObj] = useState({});
    const [toolbar, setToolbar] = useState(true);
    const [help, setHelp] = useState(0);

    const handleObjectClick = (newObj) => {
        setCurrObj(newObj)
        console.log("newobj is: " + newObj)
    }

    const handleLock = () => {
        setLock(!lock)
    }

    const handleToolbar = () => {
        setToolbar(!toolbar)
        console.log(toolbar)
    }

    const handleKeys = (event) => {
        if (currObj.name) {
            const currPos = currObj.pos
            const currRot = currObj.rot
            const updatePosition = currObj.updatePos
            const updateRotation = currObj.updateRot
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

    const handleHelp = () => {
        if (help < 2) {
            setHelp(help + 1);
            setLock(false);
            setToolbar(false)
        } else if (help === 2) {
            setHelp(0);
            setLock(true);
        }
    }

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
        setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
    }

    const { height, width } = useWindowDimensions();
 
    return (
        <>
            <div className='main-cont'>
                <div className='toolbar-cont' style={{width: '100%', height: '60px', top: '0px', left: '0px', position: 'absolute'}}>
                    <div className='tools-cont' style={{position: 'absolute', zIndex: 10, height: '70px', width: '70px', backgroundColor: '#62CAEE', borderRadius: '0px 50px 50px 0px'}}>
                        <img style={{zIndex: 10}} title={toolbar ? "Close Toolbar":"Open Toolbar"} className={toolbar ? "toolbar-active":"toolbar"} onClick={handleToolbar} src={toolbarIcon} alt='Open Toolbar'/>
                    </div>
                    <div style={{position: 'absolute', zIndex: 5, padding: '10px', alignItems: 'center'}} className={toolbar === null ? "tools-load": toolbar ? "tools-active":"tools"}>
                        <img onClick={help === 0 ? handleLock:null} title={!lock ? "Unlock Camera":"Lock Camera"} className='camlock-tool' src={camlockIcon} alt='Lock Camera'/>
                        <img onClick={null} title="Save Configuration" className='save-tool' src={saveIcon} alt='Save Configuration'/>
                        <img onClick={handleHelp} title={"Help"} className='help-tool' src={helpIcon} alt='Help'/>
                    </div>
                </div>
                <div className='sel-cont'>
                    <h1 className='sel-text'>{"Selected: " + (currObj.name ? currObj.name: "None")}</h1>
                </div>
                <div className='scene-cont' style={{width: '100%', height: '100vh', zIndex: 1}} tabIndex='0' onKeyDown={(e) => handleKeys(e)}>
                    <Scene setSelected={handleObjectClick} enableControls={lock}/> 
                </div>
            </div>
            <div className={help === 1 ? 'help-cont1':'invisible'}>
                <svg style={{width: '100%', height: '100vh'}}>
                    <clipPath id='highlight-path'>
                        <path d={'M 110 0 Q 110 110 0 110 L 0 '  + height + ' L ' + width + ' '  + height + ' L ' + width + ' 0'}/>
                    </clipPath>
                    <polygon className='help-arrow' points='175 175 300 250 240 240 250 300' fill='#62CAEE' >
                    <animateTransform
                            attributeName="transform"
                            attributeType="XML"
                            begin="0s"
                            type="translate"
                            values="0 0;-50 -50;0 0"
                            dur="1s"
                            repeatCount="indefinite" />
                    </polygon>
                    <polygon onClick={handleHelp} className='next-arrow' points={(width - 115) + ' ' + (height - 40) + ' ' + (width - 40) + ' ' + (height - 90) + ' ' + (width - 115) + ' ' + (height - 140)} />
                </svg>
                <h1 className='slide1-txt'>Use the tools icon to toggle the tools menu</h1>
            </div>
            <div className={help === 2 ? 'help-cont2':'exit-help'}>
                <div className={help === 2 ? 'slide-comp':'slide-comp-inactive'}>
                    <img className='key-img' src={keys} alt='Arrow Keys'/>
                    <h1 className='help-txt'>Use the arrow keys to position the selected object horizontally.</h1>
                </div>
                <div className={help === 2 ? 'slide-comp':'slide-comp-inactive'}>
                    <img className='key-img' src={r} alt='R'/>
                    <h1 className='help-txt'>Use the 'r' key to rotate the object</h1>
                </div>
                <div className={help === 2 ? 'slide-comp':'slide-comp-inactive'}>
                    <img className='key-img' src={updownKeys} alt='Up/Down'/>
                    <h1 className='help-txt'>Use the 'shift' and 'control' keys to raise and lower the object</h1>
                </div>
                <svg style={{width: '100%', height: '100vh', position: 'absolute', top: 0, left: 0}}>
                    <polygon onClick={handleHelp} className='next-arrow' points={(width - 115) + ' ' + (height - 40) + ' ' + (width - 40) + ' ' + (height - 90) + ' ' + (width - 115) + ' ' + (height - 140)} />
                </svg>
            </div>
        </>
    );
}

export default VSD;