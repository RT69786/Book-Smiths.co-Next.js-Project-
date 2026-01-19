"use client";

import React from "react";
import Link from "next/link";
import "./_button1.scss";

const Button1 = () => {
  return (
    <Link href="/contact" className="button1">
      <div className="div-button">
        <h2>GET STARTED</h2>
        <i className="ri-arrow-right-line"></i>
      </div>

      <div className="line-div"></div>
    </Link>
  );
};

export default Button1;
