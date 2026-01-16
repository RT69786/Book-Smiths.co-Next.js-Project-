"use client";

import React from "react";
import "./_contactformtwo.scss";

const ContactFormTwo = () => {
  return (
    <div className="black-background-div">
      <h2>Get Connected</h2>

      <form className="inner-form-two">
        <input type="text" placeholder="Name" />

        <div className="row-two">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Phone" />
        </div>

        <textarea placeholder="Message"></textarea>

        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactFormTwo;
