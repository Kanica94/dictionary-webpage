import React from "react";

export default function Phonetics(props) {
  if (props.phonetics) {
    return (
      <div className="Phonetics">
        <a href={props.phonetics.audio} target="_blank" rel="noreferrer">
          Audio
        </a>
        <br />
        {props.phonetics.text}
      </div>
    );
  }
}
