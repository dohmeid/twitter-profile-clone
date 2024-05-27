import React from "react";
import classes from "./LeftPanel.module.css";
import Navs from "./Navs/Navs";
import Footer from "./Footer/Footer";

const LeftPanel = () => {
  return (
    <div className={classes.leftPanel}>
      <i className={`${classes.twitterIcon}  ${"bi bi-twitter-x"}`}></i>
      <Navs />
      <button>Post</button>
      <Footer />
    </div>
  );
};

export default LeftPanel;
