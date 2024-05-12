import React from "react";
import classes from "./FollowRow.module.css";
import ProfileHeader from "../../../Shared/ProfileHeader/ProfileHeader";
import FollowButton from "../../../Shared/FollowButton/FollowButton";

const FollowRow = (props) => {
  return (
    <div className={classes.container}>
      <p className={classes.followers}>
        <i class="bi bi-person-fill"></i>
        {props.followers}
      </p>

      <div className={classes.accountHeader}>
        <ProfileHeader
          photo={props.photo}
          name={props.name}
          userName={props.userName}
        />
        <FollowButton />
      </div>

      <p className={classes.headline}>{props.text}</p>
    </div>
  );
};

export default FollowRow;
