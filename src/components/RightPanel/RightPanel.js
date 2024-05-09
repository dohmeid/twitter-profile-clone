import React from "react";
import classes from "./RightPanel.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Suggestions from "./Suggestions/Suggestions";
import Trends from "./Trends/Trends";

const RightPanel = () => {
  return (
    <div className={classes.container}>
      <SearchBar />
      <Suggestions />
      <Trends />
    </div>
  );
};

export default RightPanel;
