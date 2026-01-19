"use client";

import React from "react";
import Link from "next/link";
import "./_button2.scss";

const Button2 = ({ topText }) => {
  return (
    <Link href="/contact" className="btn-wrap">
      <div className="btn-shadow"></div>
      <span className="start-btn">{topText}</span>
    </Link>
  );
};

export default Button2;
