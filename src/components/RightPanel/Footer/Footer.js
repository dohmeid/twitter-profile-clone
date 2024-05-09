import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <ul className={classes.container}>
      <li>
        <a>Terms of Services</a>
      </li>
      <li>
        <a>Privacy Policy</a>
      </li>
      <li>
        <a>Cookie Policy</a>
      </li>
      <li>
        <a>Accessibility</a>
      </li>
      <li>
        <a>Ads info</a>
      </li>
      <li>
        <a>More...</a>
      </li>
      <li>
        <a>@2023 X Corp.</a>
      </li>
    </ul>
  );
};

export default Footer;
