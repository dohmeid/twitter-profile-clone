import React from "react";
import classes from "./Trends.module.css";
import Trend from "./Trend/Trend";

const t = [
  {
    header: "Gaming.Trending",
    name: "#VALORANTChampions",
    number: "27.9K posts",
  },
  {
    header: "",
    name: "الانستا",
    number: "1,411 posts",
  },
  {
    header: "Gaming.Trending",
    name: "Mako",
    number: "14.1K posts",
  },
  {
    header: "",
    name: "رسالة_اليوم#",
    number: "22.3K posts",
  },
  {
    header: "",
    name: "#Messi",
    number: "77.2K posts",
  },
  {
    header: "",
    name: "جامعة_طبية#",
    number: "",
  },
  {
    header: "",
    name: "ايفون",
    number: "27.6K posts",
  },
  {
    header: "Gaming.Trending",
    name: "fnatic",
    number: "8,748 posts",
  },
  {
    header: "",
    name: "الاعلام العبري",
    number: "",
  },
  {
    header: "Gaming.Trending",
    name: "#InterMiamiCF",
    number: "68.14 posts",
  },
];

const Trends = () => {

  const Trend_LIST = t.map((tt,index) => (
    <Trend
      key={index}
      name={tt.name}
      number={tt.number}
      header={tt.header}
    />
  ));

  return (
    <div className={classes.container}>
      <h3>Trends for you</h3>
      
      <ul>{Trend_LIST}</ul>
      <a>Show more</a>
    </div>
  );
};

export default Trends;
