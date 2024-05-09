import React from "react";
import classes from "./LeftPanel.module.css";
import NavItem from "./NavItem/NavItem";
import Footer from "./Footer/Footer";

const NAVS = [
  {
    id: 1,
    name: "Home",
    icon: "bi bi-house",
  },
  {
    id: 2,
    name: "Explore",
    icon: "bi bi-search",
  },
  {
    id: 3,
    name: "Notifications",
    icon: "bi bi-bell",
  },
  {
    id: 4,
    name: "Messages",
    icon: "bi bi-envelope",
  },
  {
    id: 5,
    name: "Lists",
    icon: "bi bi-journal-text",
  },
  {
    id: 6,
    name: "Bookmarks",
    icon: "bi bi-bookmark",
  },
  {
    id: 7,
    name: "Communities",
    icon: "bi bi-people",
  },
  {
    id: 8,
    name: "Profile",
    icon: "bi bi-person",
  },
  {
    id: 9,
    name: "More",
    icon: "bi bi-chat-dots",
  },
];

const LeftPanel = () => {
  //rendering the nav list
  const NAVS_LIST = NAVS.map((nav) => (
    <NavItem key={nav.id} name={nav.name} icon={nav.icon} />
  ));

  return (
    <div className={classes.container}>
      <i className={`${classes.twitterIcon}  ${"bi bi-twitter-x"}`}></i>
      <ul>{NAVS_LIST}</ul>
      <button>Post</button>
      <Footer />
    </div>
  );
};

export default LeftPanel;
