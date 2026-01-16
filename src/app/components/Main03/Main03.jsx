"use client";

import React from "react";
import "./_main03.scss";

const Main03 = () => {
  return (
    <main className="main03">
      <section className="for-center-main03">
        <div className="one-big-div">
          <h2>Affordable Book Writing Services</h2>

          <p>
            At Booksmiths, we feel proud and thankful that we can help authors
            achieve their goals.
          </p>

          <p>
            We have a creative group of writers who will write well-written,
            compelling books. Whether we brainstorm the idea, prepare the first
            draft, make the final edits, and/or market the book — we are there
            to do it all with you. Contact us to begin changing your ideas into
            reality today.
          </p>

          <div className="contact-form">
            <div className="input-row">
              <input type="text" placeholder="Name" />
            </div>

            <div className="input-row double">
              <input type="text" placeholder="Email" />
              <input type="text" placeholder="Phone no" />
            </div>

            <div className="input-row">
              <input type="text" placeholder="Message" />
            </div>

            <button type="submit">Send Message</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main03;
