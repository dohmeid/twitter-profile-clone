import React from "react";
import classes from "./Suggestion.module.css";
import ProfileHeader from "../../../Shared/ProfileHeader/ProfileHeader";
import FollowButton from "../../../Shared/FollowButton/FollowButton";

const Suggestion = (props) => {
  return (
    <div className={classes.container}>
      <ProfileHeader
        photo={props.photo}
        name={props.name}
        userName={props.userName}
      />
      <FollowButton />
    </div>
  );
};

export default Suggestion;
