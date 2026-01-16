"use client";

import React from "react";
import "./_smallbox.scss";

const SmallBox = ({ iconClass, title, description }) => {
  return (
    <div className="small-div">
      <i className={iconClass}></i>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default SmallBox;
