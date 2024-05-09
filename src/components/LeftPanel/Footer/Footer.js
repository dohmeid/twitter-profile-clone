import React from "react";
import classes from "./Footer.module.css";
import avatar from "./user.jpg";
import ProfileHeader from "../../Shared/ProfileHeader/ProfileHeader";

const Footer = () => {
  const name = "Doha Hmeid";
  const userName = "@doha.hmeid@gmail.com";

  return (
    <div className={classes.footerContainer}>
      <ProfileHeader photo={avatar} name={name} userName={userName} />
      <i className="bi bi-three-dots"></i>
    </div>
  );
};

export default Footer;
