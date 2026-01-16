"use client";

import React from "react";
import "./_booksection.scss";

const BookSection = () => {
  return (
    <section className="books-showcase">
      <div className="for-center-books">
        {/* LEFT: single large book */}
        <div className="left-side">
          <div className="book-card large-left">
            <img src="/pics/pic7.jpg" alt="pic7" />
            <div className="overlay">
              <h3>Book Story</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        {/* RIGHT: three books (2 top small, 1 bottom wide) */}
        <div className="right-side">
          <div className="book-card small top-left">
            <img src="/pics/pic5.jpg" alt="pic 5" />
            <div className="overlay">
              <h3>Book Story</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="book-card small top-right">
            <img src="/pics/pic6.jpg" alt="pic 6" />
            <div className="overlay">
              <h3>Book Story</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>

          <div className="book-card big bottom">
            <img src="/pics/pic8.jpg" alt="pic 8" />
            <div className="overlay">
              <h3>Book Story</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
