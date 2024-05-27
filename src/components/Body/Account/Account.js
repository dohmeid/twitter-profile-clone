import React from "react";
import classes from "./Account.module.css";
import userImage from "../../../assets/profilePicture/user.jpg";

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
    </div>
  );
};

export default Account;
