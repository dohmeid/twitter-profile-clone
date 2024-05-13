import React from "react";
import classes from "./FollowRow.module.css";
import ProfileHeader from "../../../Shared/ProfileHeader/ProfileHeader";
import FollowButton from "../../../Shared/FollowButton/FollowButton";

const FollowRow = ({ suggestion }) => {
  const { name, userName, photo, text, followers } = suggestion;

  return (
    <div className={classes.container}>
      <p className={classes.followers}>
        <i class="bi bi-person-fill"></i>
        {followers}
      </p>

      <div className={classes.accountHeader}>
        <ProfileHeader
          photo={photo}
          name={name}
          userName={userName}
        />
        <FollowButton />
      </div>

      <p className={classes.headline}>{text}</p>
    </div>
  );
};

export default FollowRow;
