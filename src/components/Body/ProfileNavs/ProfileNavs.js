import React from "react";
import classes from "./ProfileNavs.module.css";
import userImage from "../../../assets/profilePicture/user.jpg";

const ProfileNavs = () => {
  return (
    <div className={classes.container}>

      <ul className={classes.navs}>
        <li>Posts</li>
        <li>Replies</li>
        <li>Media</li>
        <li>Likes</li>
      </ul>

      <div className={classes.reposts}>

        <p className={classes.headline}>
          <i class="bi bi-arrow-repeat"></i>React reposted
        </p>

        <div className={classes.repostProfile}>
          <img src={userImage} alt="page profile picture" />
          <div>
            <div className={classes.profileNames}>
              <p className={classes.name}>danabramov.bsky.social</p>
              <p className={classes.userName}>@dan_abramov.May29</p>
              <i class="bi bi-three-dots"></i>
            </div>

            <p className={classes.profileMessage}>
              happy 10th birthday to <span>@reactjs</span>!
            </p>
          </div>
        </div>
        
        <ul className={classes.navIcons}>
          <li>
            <i class="bi bi-chat"></i>46
          </li>
          <li>
            <i class="bi bi-arrow-repeat"></i>675
          </li>
          <li>
            <i class="bi bi-suit-heart"></i>3701
          </li>
          <li>
            <i class="bi bi-bar-chart-fill"></i>1.1M
          </li>
          <li>
            <i class="bi bi-arrow-bar-up"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProfileNavs;
