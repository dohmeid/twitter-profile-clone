import React from "react";
import classes from "./Account.module.css";
import userImage from "../../../assets/user.jpg";
import ProfileHeader from "../../Shared/ProfileHeader/ProfileHeader";

const Account = () => {
  return (
    <div className={classes.container}>
      <header>
        <i className="bi bi-arrow-left"></i>
        <div className={classes.profileName}>
          <h3>React</h3>
          <p>2,611 posts</p>
        </div>
      </header>

      <section className={classes.profileCover}>
        <div className={classes.coverPhoto}></div>
        <div className={classes.profilePhoto}></div>
      </section>

      <section className={classes.profileButtons}>
        <button>
          <i class="bi bi-three-dots"></i>
        </button>
        <button>
          <i class="bi bi-bell"></i>
        </button>
        <button>Following</button>
      </section>

      <section className={classes.profileInformation}>
        <h3>React</h3>
        <h4>@reactjs</h4>
        <p>The library for web and native user interfaces</p>

        <div className={classes.profileSection}>
          <a>
            <i class="bi bi-link-45deg"></i>
            react.dev
          </a>
          <p>
            <i class="bi bi-calendar-event"></i>Joined July 2013
          </p>
        </div>

        <div className={classes.profileFollow}>
          <p>
            {" "}
            <span>267</span> Following
          </p>
          <p>
            <span>708.1K</span> Followers
          </p>
        </div>

        <div className={classes.profileMutualFollow}>
          <img src={userImage} />
          <img src={userImage} />
          <p>
            Followed by Mohamad Kukun, Yazan Alsade, and 14 others you follow
          </p>
        </div>
      </section>

      <section className={classes.profileNavs}>
        <ul className={classes.navs}>
          <li>Posts</li>
          <li>Replies</li>
          <li>Media</li>
          <li>Likes</li>
        </ul>

        <div className={classes.reposts}>
          <p>
            <i class="bi bi-arrow-repeat"></i>React reposted
          </p>

          <div className={classes.repostProfile}>
            <img src={userImage} alt="page profile picture" />
            <div className={classes.repostDetails}>
              <p className={classes.name}>danabramov.bsky.social</p>
              <p className={classes.userName}>@dan_abramov . May 29</p>
              <i class="bi bi-three-dots"></i>
            </div>
            
          </div>
          <p>
            happy 10th birthday to <span>@reactjs</span>!
          </p>

          

          <ul>
            <li>
              {" "}
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
      </section>
    </div>
  );
};

export default Account;
