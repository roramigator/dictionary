import React from "react";
import graphics from "./Definition.scss";

import Word from "./Word";
import Meanings from "./Meanings";

function Definition({ state }) {
  const [audio, setAudio] = React.useState(false);
  const [phonetics, setPhonetics] = React.useState(false);

  const word = state.word;

  React.useEffect(() => {
    if (state.phonetics.length > 0) {
      setAudio(new Audio(state.phonetics[0].audio));
      setPhonetics(state.phonetics[0].text);
    } else {
      setAudio(false);
      setPhonetics(false);
    }
  }, [state]);

  return (
    <div className={graphics.definition}>
      <Word word={word} audio={audio} phonetics={phonetics} />
      <Meanings state={state} />
    </div>
  );
}

export default Definition;
