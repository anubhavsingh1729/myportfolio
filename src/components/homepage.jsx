import React, { useState } from "react";
import "../css/homepage.css";

const MaraudersMap = () => {
    const [isActive, setIsActive] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const toggleMap = () => {
      setIsActive(!isActive);
    };

  return (
    <div className="main-content"
        onClick={toggleMap}
    >
        {/* <button className="toggle-button" onClick={toggleMap}>
        {isActive ? 'Mischief Managed' : 'I solemnly swear I am up to no good'}
      </button> */}
      <div className={`map-base ${isActive ? 'active' : ''}`}>

        <div className="map-flap flap--1">
          <div className="map-flap__front"></div>
          <div className="map-flap__back"></div>
        </div>

        <div className="map-flap flap--2">
          <div className="map-flap__front"></div>
          <div className="map-flap__back"></div>
        </div>

        <div className="map-side side-1">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/8.png')" }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-2">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/18.png')" }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-3">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/7.png')" }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-4">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/10.png')" }}
          ></div>
        </div>

        <div className="map-side side-5">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/6.png')" }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-6">
          <div
            className="front"
            style={{ "--image": "url('https://meowlivia.s3.us-east-2.amazonaws.com/codepen/map/11.png')" }}
          ></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default MaraudersMap;