import React, { useState } from "react";
import { GiBeastEye } from "react-icons/gi";
export default function DisplayingPictures(props) {
  const [show, setShow] = useState(false);
  return (
    <div className="image-container">
      <h2 onClick={() => setShow(!show)}>
        {show ? (
          <img
            className="monster-picture"
            alt="monsterImage"
            src={props.monster.portrait}
          />
        ) : (
          <GiBeastEye />
        )}
      </h2>
    </div>
  );
}
