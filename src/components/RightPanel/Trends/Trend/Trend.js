import React from "react";
import classes from "./Trend.module.css";

const Trend = ({trend}) => {
  const { header,name, number } = trend;

  const RTL = ['ا','ء','ب','ت','ث','ج','ح','خ','د','ذ','ر','ز','س','ش','ص','ض','ط','ظ','ع','غ','ف','ق','ک','ل','م','ن','و','ه','ی'];
  
  // Check if the text contains Arabic characters
  const isArabic = name.split('').some(char => RTL.includes(char));

  return (
    <div className={classes.container}>

      {/*not all the trends have a header - conditionally render it*/}
      {header !== "" && (
        <div className={classes.header}>
          <p>Gaming.Trending</p>
          <i className="bi bi-three-dots"></i>
        </div>
      )}

      <h4 className={isArabic ? classes.arabicText : classes.normalText}>{name}</h4>
      <p>{number}</p>
    </div>
  );
};

export default Trend;
