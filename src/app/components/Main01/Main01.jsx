"use client";

import React from "react";
import "./_main01.scss";
import Button2 from "../Button2/Button2";

const Main01 = () => {
  return (
    <main className="main01">
      <section className="for-center-main01">
        <div className="part-one">
          <h2>Experienced Book Writing Company For Your First Bestseller</h2>

          <p>
            Writing a book is an enormous task. If you are feeling daunted by
            the process, or just are not able to find the time to take your
            ideas and organize them into a manuscript, Booksmiths can help you.
            Our skilled book writers, alongside you, can bring your story to
            life – it does not matter if you are writing a business, novel,
            self-help book, or memoir.
          </p>

          <p>
            Do you feel fatigued with searching for “book writing services near
            me”? We are one of the foremost book writing companies, for any kind
            of writing genre, throughout Canada, and we can provide all of the
            resources you need to become a successful author.
          </p>

          <div className="button2">
            <Button2 topText="LET'S GET STARTED" />
          </div>
        </div>

        <div className="photo-grid">
          <div className="two-pics">
            <img className="img-one" src="/pics/pic1.jpg" alt="pic1" />
            <img className="img-two" src="/pics/pic2.jpg" alt="pic2" />
          </div>
          <div className="one-pic">
            <img className="img-three" src="/pics/pic8.jpg" alt="pic8" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main01;
