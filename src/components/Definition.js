import React from "react";
import graphics from "./Definition.scss";

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
      <div className={graphics.meanings}>
        {state.meanings.map((meaning, index) => {
          return (
            <div className={graphics.partOfSpeech} key={`mea-${index}`}>
              <p>
                <b>{meaning.partOfSpeech}</b>
              </p>
              {meaning.definitions.map((definition, idx) => {
                return (
                  <React.Fragment key={`def-${idx}`}>
                    <p>
                      <span className={graphics.defNumber}>{idx + 1}</span>.{" "}
                      {definition.definition}
                    </p>
                    {definition.example && (
                      <p className={graphics.example}>
                        <i>example</i>: {definition.example}
                      </p>
                    )}
                    <div className={graphics.synonyms}>
                      {definition.synonyms && (
                        <p className={graphics.example}>
                          <i>synonyms</i>:
                        </p>
                      )}
                      {definition.synonyms &&
                        definition.synonyms.map((syn, key) => {
                          return (
                            <span
                              className={graphics.synonym}
                              key={`syn-${key}`}
                            >
                              {syn}
                            </span>
                          );
                        })}
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Definition;
