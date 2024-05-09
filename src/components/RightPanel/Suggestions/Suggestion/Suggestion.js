import React from "react";
import classes from "./Suggestion.module.css";

const Suggestion = (props) => {

  return (
    <div className={classes.container}>
      <img src={props.photo} alt="page profile picture" />
      <div className={classes.profileDetails}>
        <p className={classes.name}>{props.name}</p>
        <p>{props.userName}</p>
      </div>
      <button>Follow</button>
    </div>
  );
};

export default Suggestion;
