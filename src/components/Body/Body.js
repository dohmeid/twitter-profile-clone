import React from "react";
import classes from "./Body.module.css";
import Account from "./Account/Account";
import ProfileNavs from "./ProfileNavs/ProfileNavs";
import WhoToFollow from "./WhoToFollow/WhoToFollow";

const Body = () => {
  return (
    <div className={classes.container}>
      <Account />
      <ProfileNavs />
      <WhoToFollow/>
    </div>
  );
};

export default Body;
