import React from "react";
import classes from "./RightPanel.module.css";
import SearchBar from "./SearchBar/SearchBar";

const RightPanel = () => {
  return (
    <div className={classes.container}>
      <SearchBar />
    </div>
  );
};

export default RightPanel;
