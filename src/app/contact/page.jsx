"use client";

import React from "react";
import "./_contact.scss";
import IconBox from "../components/IconBox/IconBox";
import ContactFormBox from "../components/ContactFormBox/ContactFormBox";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="contact-background">
        <div className="for-center-contact">
          <div className="contact-heading">
            <h2>Contact</h2>
          </div>
          <div className="h6-icon-tag">
            <h6>Home</h6>
            <i className="ri-arrow-right-s-line"></i>
            <h6>Contact</h6>
          </div>
        </div>
      </div>

      <div className="contact-part-one">
        <div className="for-center-contact-part-one">
          <div className="left-side-five">
            <h2>Get Started With Us</h2>

            <p>
              Connect with BookSmiths today and take the first step toward
              publishing your masterpiece. Our expert team is here to guide you
              through every stage—from concept to final draft.
            </p>

            <div className="small-box-parts">
              <div className="part-one">
                <IconBox iconClass="ri-mail-open-line" />
                <h5>Email</h5>
                <h6>info@booksmiths</h6>
              </div>

              <div className="part-two">
                <IconBox iconClass="ri-phone-line" />
                <h5>Phone</h5>
                <h6>647 952 3105</h6>
              </div>
            </div>
          </div>

          <div className="right-side-six">
            <ContactFormBox />
          </div>
        </div>
      </div>

      <div className="footer-part-two">
        <Footer />
      </div>
    </>
  );
};

export default page;
