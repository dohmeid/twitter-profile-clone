import React from "react";
import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={classes.searchContainer}>
      <i class="bi bi-search" aria-hidden="true"></i>
      <input
        type="search"
        name="search"
        aria-label="search inside twitter"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;