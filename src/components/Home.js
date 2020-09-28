import React from "react";
import graphics from "./Home.scss";

import SearchBar from "./SearchBar";
import Definition from "./Definition";

function Home() {
  const [state, setState] = React.useState(false);
  const error = state.type === "error";

  return (
    <div className={graphics.root}>
      <SearchBar setState={setState} />
      {state && !error ? (
        state.map((word, key) => <Definition state={word} key={`md-${key}`} />)
      ) : (
        <p className={graphics.emptyState}>
          <i className="bx bx-error"></i>
          {error && <span>ERROR</span>}
        </p>
      )}
    </div>
  );
}

export default Home;
