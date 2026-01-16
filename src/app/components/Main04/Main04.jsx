"use client";

import React from "react";
import "./_main04.scss";
import Button2 from "../Button2/Button2";

const Main04 = () => {
  return (
    <main className="main04">
      <section className="for-center-main04">
        <div className="heading-para-tags">
          <h2>Your Ideas and Our Book Writing Experts A Perfect Match</h2>
          <p>
            Every writer has a unique voice, and the reader relies on Booksmiths
            to translate that voice into action. Our group of book writing
            professionals will work closely with you to make sure that your
            story is told to the highest quality possible. At Booksmiths, we
            understand that writing a book isn’t just about writing, it’s about
            writing a bestseller. Let us leverage your message for you to share
            with the world.
          </p>

          <div className="small-box-one">
            <h3>How Do Book Writing Companies Help Authors Professionally?</h3>
            <div className="small-div-one">
              <strong className="bold-letters">
                Full-Manuscript Creation:
              </strong>
              <p>
                We can cover the entire book writing process – from your idea to
                a finished, expertly-written book.
              </p>
            </div>

            <div className="small-div-two">
              <strong className="bold-letters">
                Focus on the Other Pieces of the Process:
              </strong>
              <p>
                Allow us to write your book, while you concentrate on other
                aspects of the book publishing process you find most important,
                such as marketing, distribution or connecting with your
                audience.
              </p>
            </div>

            <div className="small-div-three">
              <strong className="bold-letters">
                The possibility of your book:
              </strong>
              <p>
                Our professional consultancy services can maximize your book
                potential, starting from concept, and executed in a published
                product.
              </p>
            </div>
          </div>

          <div className="single-button-two">
            <Button2 topText="LET'S GET STARTED" />
          </div>
        </div>

        <div className="pic-three">
          <img src="/pics/pic3.jpg" alt="pic 3" />
        </div>
      </section>
    </main>
  );
};

export default Main04;
