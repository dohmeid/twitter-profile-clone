import React from "react";
import classes from "./Body.module.css";
import Account from "./Account/Account";

const Body = () => {
  return (
    <div className={classes.container}>
      <Account />
    </div>
  );
};

export default Body;
