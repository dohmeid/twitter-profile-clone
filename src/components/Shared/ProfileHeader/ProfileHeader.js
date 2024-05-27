import React from "react";
import classes from "./ProfileHeader.module.css";

const ProfileHeader = (props) => {
  return (
    <div className={classes.container}>
      <img src={props.photo} alt="page profile picture" />
      <div className={classes.profileDetails}>
        <p className={classes.name}>{props.name}</p>
        <p className={classes.userName}>{props.userName}</p>
      </div>
    </div>
  );
};

export default ProfileHeader;
