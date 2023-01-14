import './browse.css'
import Mouse from "../../assets/mouse.webm"
import Headphones from "../../assets/headphones.webm"
import Keyboard from "../../assets/keyboard.webm"
import Mic from "../../assets/mic.webm"
import Cam from "../../assets/cam.webm"
import VerticalCarousel from "./carousel.js";
import { config } from "react-spring";
import { useState } from 'react';

let slides = [
    {
      key: 1,
      content: "Keyboards",
      model: Keyboard
    },
    {
      key: 2,
      content: "Headsets",
      model: Headphones
    },
    {
      key: 3,
      content: "Mouses",
      model: Mouse
    },
    {
      key: 4,
      content: "Microphones",
      model: Mic
    },
    {
      key: 5,
      content: "Cameras",
      model: Cam
    }
  ];

export default function Browse() {
    const [option, setOption] = useState({curr: 1});

    const handleCallback = (currOption) => {
        if (option.curr !== currOption) {
            setOption({curr: currOption});
        }
    }

    return (
        <div className='browsePage'>
            <div className='ls'>
                <div className={option.curr === 1 ? "container-active" : "container-inactive"}>
                  <video className="initial-model" src={slides[0].model} autoPlay loop muted />
                </div>
                <div className={option.curr === 2 ? "container-active" : "container-inactive"}>
                  <video className="model" src={slides[1].model} autoPlay loop muted />
                </div>
                <div className={option.curr === 3 ? "container-active" : "container-inactive"}>
                  <video className="model" src={slides[2].model} autoPlay loop muted />
                </div>
                <div className={option.curr === 4 ? "container-active" : "container-inactive"}>
                  <video className="model" src={slides[3].model} autoPlay loop muted />
                </div>
                <div className={option.curr === 5 ? "container-active" : "container-inactive"}>
                  <video className="model" src={slides[4].model} autoPlay loop muted />
                </div>
            </div>
            <div className='rs'>
                <VerticalCarousel
                    slides={slides}
                    offsetRadius={2}
                    showNavigation={option.showNavigation}
                    animationConfig={config.gentle}
                    parentCallback={handleCallback}
                  />
            </div>
        </div>
    );
}