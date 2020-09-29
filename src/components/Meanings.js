import React from "react";
import graphics from "./Meanings.scss";

function Meanings({ state }) {
  return (
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
                      <b>example</b>: {definition.example}
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
                          <span className={graphics.synonym} key={`syn-${key}`}>
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
  );
}

export default Meanings;
