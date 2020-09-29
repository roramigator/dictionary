import React from "react";
import graphics from "./Word.scss";

function Word({ word, audio, phonetics }) {
  return (
    <div className={graphics.word}>
      {audio ? (
        <i className="bx bx-headphone" onClick={() => audio.play()}></i>
      ) : (
        <i
          className="bx bx-headphone"
          style={{ color: "grey", border: "1px dashed grey", padding: "3px" }}
        ></i>
      )}
      <div className={graphics.about}>
        <p className={graphics.it}>{word}</p>
        <p className={graphics.wr}>{phonetics}</p>
      </div>
    </div>
  );
}

export default Word;
