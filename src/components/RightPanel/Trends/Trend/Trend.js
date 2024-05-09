import React from "react";
import classes from "./Trend.module.css";

const Trend = (props) => {
  const RTL = ['ا','ء','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','ل','م','ن','و','ه','ی'];

  // Check if the text contains Arabic characters
  const isArabic = props.name.split('').some(char => RTL.includes(char));


  return (
    <div className={classes.container}>
      {props.header !== "" && (
        <div className={classes.header}>
          <p>Gaming.Trending</p>
          <i className="bi bi-three-dots"></i>
        </div>
      )}

      <h4 className={isArabic ? classes.arabicText : classes.normalText}>{props.name}</h4>
      <p>{props.number}</p>
    </div>
  );
};

export default Trend;
