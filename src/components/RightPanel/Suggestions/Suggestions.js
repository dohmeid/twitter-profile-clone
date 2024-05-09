import React from "react";
import classes from "./Suggestions.module.css";
import Suggestion from "./Suggestion/Suggestion";

const suggestions = [
  {
    name: "Tailwind CSS",
    userName: "tailwindcss",
    photo: require("./pictures/tailwind.png"),
  },
  {
    name: "TypeScript",
    userName: "typescript",
    photo: require("./pictures/typeScript.png"),
  },
  {
    name: "freeCodeCamp.org",
    userName: "freeCodeCamp",
    photo: require("./pictures/freeCodeCamp.png"),
  },
];

const Suggestions = () => {
  //rendering the members list
  const Suggestions_LIST = suggestions.map((suggestion,index) => (
    <Suggestion
      key={index}
      name={suggestion.name}
      userName={suggestion.userName}
      photo={suggestion.photo}
    />
  ));

  return (
    <div className={classes.container}>
      <h3>You might like</h3>
      <ul>{Suggestions_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default Suggestions;
