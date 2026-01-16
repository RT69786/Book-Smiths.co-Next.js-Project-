"use client";

import React from "react";
import Link from "next/link";
import "./_verticalbox.scss";

const VerticalBox = ({ imgSrc, title, description, buttonText, link }) => {
  return (
    <div className="vertical-small-box">
      <img src={imgSrc} alt={title} />

      <div className="headings-paragraph-tags">
        <h3>{title}</h3>

        <p>{description}</p>

        {/* FIXED — no error even if link is missing */}
        {link ? (
          <Link href={link}>
            <h6>{buttonText}</h6>
          </Link>
        ) : (
          <h6>{buttonText}</h6>
        )}
      </div>
    </div>
  );
};

export default VerticalBox;
