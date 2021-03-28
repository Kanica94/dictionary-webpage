import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Audio
        </a>
        <span className="audio">{props.phonetics.text}</span>
      </div>
    );
  }
}
