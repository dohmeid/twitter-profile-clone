import React from "react";
import classes from "./Trends.module.css";
import Trend from "./Trend/Trend";
import { TRENDS } from "../../../data/trendsList";

const Trends = () => {
  const TREND_LIST = TRENDS.map((trend, index) => (
    <Trend
      key={index}
      name={trend.name}
      number={trend.number}
      header={trend.header}
    />
  ));

  return (
    <div className={classes.container}>
      <h3>Trends for you</h3>
      <ul>{TREND_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default Trends;
