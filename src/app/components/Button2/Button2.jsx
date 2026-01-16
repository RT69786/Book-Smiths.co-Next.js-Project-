"use client";

import React from "react";
import "./_button2.scss";

const Button2 = ({ topText }) => {
  return (
    <div class="btn-wrap">
      <div class="btn-shadow"></div>
      <button class="start-btn">{topText}</button>
    </div>
  );
};

export default Button2;
