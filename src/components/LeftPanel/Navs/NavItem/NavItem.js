import React from "react";
import "./NavItem.module.css";

const NavItem = (props) => {
  return (
    <li>
      <i className={props.icon}></i>
      <a>{props.name}</a>
    </li>
  );
};

export default NavItem;
