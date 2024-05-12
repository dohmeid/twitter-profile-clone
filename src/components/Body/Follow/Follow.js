import React from "react";
import classes from "./Follow.module.css";
import FollowAccount from "./FollowAccount/FollowAccount";

const suggestions = [
  {
    name: "freeCodeCamp.org",
    userName: "@freeCodeCamp",
    photo: require("../../../assets/freeCodeCamp.png"),
    text: "We're a community of millions of people who are building new skills and getting new jobs toghether. A 501(c)(3) public charity. Tweets by @abbeyrenn",
    followers: "Node.js and 9 others follow",
  },
  {
    name: "TypeScript",
    userName: "@typescript",
    photo: require("../../../assets/typeScript.png"),
    text: "TypeScript is a language for application-scale JavaScript development. It's a typed superset of JavaScript that compiles to plain JavaScript",
    followers: "Node.js and 5 others follow",
  },
  {
    name: "Tailwind CSS",
    userName: "@tailwindcss",
    photo: require("../../../assets/tailwind.png"),
    text: "The utility-first CSS framework. Rapidly build modern websites, without ever leaving your HTML.",
    followers: "Yazeed Obaid and 3 others follow",
  },
];

const Follow = () => {
  //rendering the members list
  const Suggestions_LIST = suggestions.map((suggestion, index) => (
    <FollowAccount
      key={index}
      name={suggestion.name}
      userName={suggestion.userName}
      photo={suggestion.photo}
      text={suggestion.text}
      followers={suggestion.followers}
    />
  ));

  return (
    <div className={classes.container}>
      <h2>Who to follow</h2>
      <ul>{Suggestions_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default Follow;
