import React from "react";
import classes from "./Footer.module.css";
import avatar from "./user.jpg";

const Footer = () => {
  return (
    <div className={classes.footerContainer}>
      <img src={avatar} alt="user profile picture" />
      <div className={classes.profileDetails}>
        <p className={classes.name}>Doha Hmeid</p>
        <p>@doha.hmeid@gmail.com</p>
      </div>
      <i className="bi bi-three-dots"></i>
    </div>
  );
};

export default Footer;
