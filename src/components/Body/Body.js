import React from "react";
import classes from "./Body.module.css";
import Account from "./Account/Account";
import Follow from "./Follow/Follow";

const Body = () => {
  return (
    <div className={classes.container}>
      <Account />
      <Follow/>
    </div>
  );
};

export default Body;
