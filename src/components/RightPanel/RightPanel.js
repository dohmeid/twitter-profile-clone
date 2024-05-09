import React from "react";
import classes from "./RightPanel.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Suggestions from "./Suggestions/Suggestions";

const RightPanel = () => {
  return (
    <div className={classes.container}>
      <SearchBar />
      <Suggestions />
    </div>
  );
};

export default RightPanel;
