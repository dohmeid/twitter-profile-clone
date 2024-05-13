import React from "react";
import "./Navs.module.css";
import NavItem from "./NavItem/NavItem";
import {NAVS} from "../../../data/navsList"

const Navs = () => {
  //rendering the nav list
  const NAVS_LIST = NAVS.map((nav) => (
    <NavItem key={nav.id} name={nav.name} icon={nav.icon} />
  ));

  return (
    <>
      <ul>{NAVS_LIST}</ul>
    </>
  );
};

export default Navs;
