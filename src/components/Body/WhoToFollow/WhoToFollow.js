import React from "react";
import classes from "./WhoToFollow.module.css";
import FollowRow from "./FollowRow/FollowRow";
import { WHO_TO_FOLLOW } from "../../../data/profileLists";

const WhoToFollow = () => {
  //rendering the members list
  const Suggestions_LIST = WHO_TO_FOLLOW.map((suggestion, index) => (
    <FollowRow
      key={index}
      name={suggestion.name}
      userName={suggestion.userName}
      photo={suggestion.photo}
      text={suggestion.text}
      followers={suggestion.followers}
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
