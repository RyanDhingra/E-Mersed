import React, { useState } from 'react';
import "./vsd.css"
import ModelViewer from './modelviewer';

function VSD() {
    const [lock, setLock] = useState(true);
    const handleChange = () => {
        setLock(!lock)
        console.log('clicked')
    }

    return (
        <>
            <div className='lock' style={{width: '50px', height: '50px', position: 'absolute', top: '0px', left: '0px', background: 'red', zIndex: '99'}}>
                <button onClick={handleChange}><img style={{width: '50px', height: '50px'}} src={lock ? "https://static.vecteezy.com/system/resources/previews/012/674/663/non_2x/lock-icon-clipart-free-png.png":"https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png"} alt='tmp' /></button>
            </div>
            <div style={{width: '100%', height: '100vh'}}>
            <ModelViewer enableControls={lock}/> 
            </div>
        </>
    );
}

export default VSD;