import React from "react";
import classes from "./Trend.module.css";

const Trend = (props) => {
  return (
    <div className={classes.container}>
      {props.header !== "" && (
        <div className={classes.header}>
          <p>Gaming.Trending</p>
          <i className="bi bi-three-dots"></i>
        </div>
      )}

      <h4>{props.name}</h4>
      <p>{props.number}</p>
    </div>
  );
};

export default Trend;
