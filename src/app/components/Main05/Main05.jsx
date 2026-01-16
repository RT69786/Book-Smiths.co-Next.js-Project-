"use client";

import React from "react";
import Button2 from "../Button2/Button2";
import "./_main05.scss";

const Main05 = () => {
  return (
    <main className="main05">
      <section className="for-center-main05">
        <div className="pic-four">
          <img src="/pics/pic4.jpg" alt="pic 4" />
        </div>

        <div className="small-div-box">
          <h2>Why Trust Our Professional Book Editing Services?</h2>

          <div className="div-circle-text">
            <p>
              <i class="ri-circle-fill"></i> Customized edits tailored to your
              audience’s preferences
            </p>

            <p>
              <i class="ri-circle-fill"></i> we Follow deadlines, and ensure to
              published
            </p>

            <p>
              <i class="ri-circle-fill"></i>Flexible services designed to fit
              your project and budget
            </p>
          </div>

          <div className="button-two-div">
            <Button2 topText="LET'S GET STARTED" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main05;
