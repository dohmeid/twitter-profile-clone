import React from "react";
import classes from "./WhoToFollow.module.css";
import FollowRow from "./FollowRow/FollowRow";
import { ACCOUNT_PROFILES } from "../../../data/profileLists";

const WhoToFollow = () => {
  //rendering the members list
  const Suggestions_LIST = ACCOUNT_PROFILES.map((suggestion, index) => (
    <FollowRow
      key={index}
      suggestion={suggestion}
    />
  ));

  return (
    <div className={classes.container}>
      <h3>Who to follow</h3>
      <ul>{Suggestions_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default WhoToFollow;
