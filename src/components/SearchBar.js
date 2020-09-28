import React from "react";
import graphics from "./SearchBar.scss";

import search_word from "../api/rc";

function SearchBar({ setState }) {
  const search = (e) => {
    e.preventDefault();
    const query = e.target[0].value;
    search_word(query).then((r) => {
      return setState(r);
    });
  };
  return (
    <div className={graphics.search_bar}>
      <form onSubmit={(e) => search(e)}>
        <input type="text" name="search" placeholder="search here" />

        <button className={graphics.search_btn} onSubmit={search}>
          <i className="bx bx-search"></i>
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
