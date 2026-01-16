"use client";

import React from "react";
import "./_header.scss";
import Button1 from "../Button1/Button1";
// import Navbar from "../Navbar/Navbar";

const Header = () => {
  return (
    <header className="header">
      <section className="for-center-header">
        <div className="div-one">
          <h1>
            Professional <span>Book Writing</span> Services Canada
          </h1>

          <p>
            Are you looking for a reliable
            <span className="little-bold">
              professional book writing service
            </span>
            provider in Canada? At Booksmiths, we help you turn your ideas into
            a polished manuscript—whether you’re a beginner or a seasoned
            author. Our affordable, professional services support every writing
            project, helping you share your vision, connect with readers, and
            achieve your publishing goals.
          </p>

          <div className="handling-button1">
            <Button1 />
          </div>
        </div>

        <div className="div-two">
          <img src="/pics/book1.png" alt="book1" />
        </div>
      </section>
    </header>
  );
};

export default Header;
