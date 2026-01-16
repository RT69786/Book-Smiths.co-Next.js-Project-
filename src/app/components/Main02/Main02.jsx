"use client";

import React from "react";
import "./_main02.scss";
import SmallBox from "../SmallBox/SmallBox";

const Main02 = () => {
  return (
    <div className="main02">
      <div className="for-center-main02">
        <div className="div-one">
          <SmallBox
            iconClass="ri-rocket-line"
            title="Fast Delivery"
            description="Need to finished book quickly, without compromising quality."
          />
        </div>

        <div className="div-two">
          <SmallBox
            iconClass="ri-time-line"
            title="24/7 Availability"
            description="Need us to help you throughout your writing process day or night."
          />
        </div>

        <div className="div-three">
          <SmallBox
            iconClass="ri-bank-card-line"
            title="Online Payment"
            description="Pay securely online, quickly Process with out hassles."
          />
        </div>

        <div className="div-four">
          <SmallBox
            iconClass="ri-book-open-line"
            title="Online Order"
            description="Start your project today, book our service online fast and easy."
          />
        </div>
      </div>
    </div>
  );
};

export default Main02;
