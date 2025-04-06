import React, { useState } from "react";
import "../css/homepage.css";
import map8 from "/map/8.png";
import map18 from "/map/18.png";
import map7 from "/map/7.png";
import map10 from "/map/10.png";
import map6 from "/map/6.png";
import map11 from "/map/11.png";

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
            style={{ "--image": `url(${map8})` }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-2">
          <div
            className="front"
            style={{ "--image": `url(${map18})` }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-3">
          <div
            className="front"
            style={{ "--image": `url(${map7})` }}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-4">
          <div
            className="front"
            style={{ "--image": `url(${map10})` }}
          ></div>
        </div>

        <div className="map-side side-5">
          <div
            className="front"
            style={{ "--image": `url(${map6})`}}
          ></div>
          <div className="back"></div>
        </div>

        <div className="map-side side-6">
          <div
            className="front"
            style={{ "--image": `url(${map11})` }}
          ></div>
          <div className="back"></div>
        </div>
      </div>
    </div>
  );
};

export default MaraudersMap;