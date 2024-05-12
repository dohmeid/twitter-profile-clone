import React from "react";
import classes from "./Suggestions.module.css";
import Suggestion from "./Suggestion/Suggestion";
import { ACCOUNT_PROFILES } from "../../../data/profileLists";

const Suggestions = () => {
  //rendering the members list
  const Suggestions_LIST = ACCOUNT_PROFILES.map((suggestion, index) => (
    <Suggestion
      key={index}
      name={suggestion.name}
      userName={suggestion.userName}
      photo={suggestion.photo}
    />
  ));

  return (
    <div className={classes.container}>
      <h3>You might like</h3>
      <ul>{Suggestions_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default Suggestions;
