import React from "react";

import classes from "./Card.module.css";

import {Link} from "@carbon/react";
const Card = (props) => {
  return (
    <div className="card">
      <div className="card-header">
        <h6>{props.title}</h6>
        {props.action}
      </div>
      <div className="card-body">{props.children}</div>
    </div>
  );
};

export default Card;
