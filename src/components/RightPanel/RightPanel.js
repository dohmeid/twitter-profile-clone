import React from "react";
import classes from "./RightPanel.module.css";
import SearchBar from "./SearchBar/SearchBar";
import Suggestions from "./Suggestions/Suggestions";
import Trends from "./Trends/Trends";
import Footer from "./Footer/Footer";

const RightPanel = () => {
  return (
    <div className={classes.rightPanel}>
      <SearchBar />
      <Suggestions />
      <Trends />
      <Footer />
    </div>
  );
};

export default RightPanel;
