"use client";

import React from "react";
import "./_main06.scss";
import Button2 from "../Button2/Button2";

const Main06 = () => {
  return (
    <main className="main06">
      <section className="for-center-main06">
        <div className="heading-paragraphs">
          <h2>Book Writing Agency With End-To-End Solutions For Authors</h2>
          <p>
            Booksmiths provides one-stop-shop solutions for every author, from
            concept to published book. We ensure that each step is executed to
            the highest quality from writing to editing to publishing so that
            you can get your manuscript out into the world! We believe every
            author should have the opportunity to publish their work; therefore,
            we provide economical packages and free consultations to get you
            started!
          </p>

          <h3>Looking For Professional Book Editing Companies?</h3>

          <p>
            We have talented writers, editors, and publishing professionals to
            help refine your manuscript. We will edit your writing, correct
            typographical errors, and ensure your book meets necessary global
            publishing standards. From draft to final draft, we’ll help you make
            your book a reality. We provide free consultations. Contact us
            today.
          </p>

          <div className="button-2">
            <Button2 topText="LET'S GET STARTED" />
          </div>
        </div>

        <div className="one-last-img">
          <img src="/pics/pic23.jpg" alt="pic 23" />
        </div>
      </section>
    </main>
  );
};

export default Main06;
