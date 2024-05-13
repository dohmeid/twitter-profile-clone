import React from "react";
import classes from "./Suggestion.module.css";
import ProfileHeader from "../../../Shared/ProfileHeader/ProfileHeader";
import FollowButton from "../../../Shared/FollowButton/FollowButton";

const Suggestion = ({suggestion}) => {

  const { name, userName, photo } = suggestion;

  return (
    <div className={classes.container}>
      <ProfileHeader
        photo={photo}
        name={name}
        userName={userName}
      />
      <FollowButton />
    </div>
  );
};

export default Suggestion;
