"use client";

import React from "react";
import "./_footer.scss";
import Button3 from "../Button3/Button3";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="for-center-footer">
        <div className="big-div">
          <h2>Subscribe Ask For Free</h2>

          <p>
            Subscribe today and claim your free expert advice—your publishing
            journey starts here.
          </p>

          <div className="input-button-div">
            <input
              className="enter-email-input"
              type="email"
              placeholder="Enter your email"
            />

            <Button3 />
          </div>
        </div>

        <div className="lower-part">
          <div className="div-part-one">
            <img src="/pics/logo.png" alt="logo" />

            <p>
              At Booksmiths, we feel proud and thankful that we can help authors
              achieve their goals.
            </p>
          </div>

          <div className="div-part-two">
            <h5>Useful Links</h5>

            <a href="# Home">Home</a>

            <a href="# About Us">About Us</a>

            <a href="# Services">Services</a>

            <a href="# Contact Us">Contact Us</a>
          </div>

          <div className="div-part-three">
            <h5>Services</h5>

            <a href="# Book Editing Services">Book Editing Services</a>

            <a href="# GhostWriting Services">GhostWriting Services</a>

            <a href="# Book Formating Services">Book Formating Services</a>

            <a href="# Book Marketing Services">Book Marketing Services</a>

            <a href="# Book Proofreading Services">
              Book Proofreading Services
            </a>
          </div>

          <div className="div-part-four">
            <h5>More Services</h5>

            <a href="# Book Cover Design Services">
              Book Cover Design Services
            </a>

            <a href="# Book Publishing Services">Book Publishing Services</a>

            <a href="# Ebook Writing Services">Ebook Writing Services</a>

            <a href="# Fiction Writing Services">Fiction Writing Services</a>

            <a href="# Non-Fictional Writing Services">
              Non-Fictional Writing Services
            </a>
          </div>
        </div>

        <div className="single-line"></div>

        <div className="copyrights-icons-div">
          <h4>Copyright © 2025 Booksmiths. All Rights Reserved.</h4>

          <div className="icons-div">
            <i class="ri-facebook-line"></i>

            <i class="ri-twitter-line"></i>

            <i class="ri-instagram-line"></i>

            <i class="ri-youtube-line"></i>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
