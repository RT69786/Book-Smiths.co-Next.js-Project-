"use client";

import React from "react";
import "./_about.scss";
import Button2 from "../components/Button2/Button2";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="about-background">
        <div className="for-center-about">
          <div className="about-heading">
            <h2>About</h2>
          </div>
          <div className="h6-icon-tag">
            <h6>Home</h6>
            <i className="ri-arrow-right-s-line"></i>
            <h6>About</h6>
          </div>
        </div>
      </div>

      <div className="about-part-one">
        <div className="for-center-about-part-one">
          <div className="left-side-one">
            <h2>Booksmiths Book Writing Company For All Your Needs</h2>
            <p>
              At <span>Booksmiths</span> we transform your ideas into
              professionally crafted books. Whether you’re a first-time author
              or an experienced writer, our expert team provides end-to-end book
              writing, editing, and publishing services to bring your vision to
              life—efficiently and affordably.
            </p>

            <div className="button-div">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>

          <div className="right-side-one">
            <div className="two-pics">
              <img className="img-one" src="/pics/pic9.jpg" alt="pic9" />
              <img className="img-two" src="/pics/pic10.jpg" alt="pic10" />
            </div>
            <div className="one-pic">
              <img className="img-three" src="/pics/pic11.jpg" alt="pic11" />
            </div>
          </div>
        </div>
      </div>

      <div className="about-part-two">
        <div className="for-center-about-part-two">
          <div className="left-side-three">
            <img src="/pics/pic12.jpg" alt="pic12" />
          </div>

          <div className="right-side-four">
            <h2>Why Booksmiths For Book Writing Services?</h2>

            <p>
              So why is Booksmiths your best option? It’s simple. We guarantee
              it will be a perfect match when your ideas into the hands of our
              book writing professionals. An author usually has a lot of ideas
              swimming around in their creative mind, and Book Writing Genie is
              here to work with the author to write their ideas down using our
              book writing professionals. We are among the book writing service
              providers helping authors professionally, whether it is their
              first book or an author wants to get away from unprofessional
              freelancers. Here is how we believe authors can use our book
              writing services to reduce the author’s burden:
            </p>

            <div className="icon-paragh-tag">
              <h6>
                <i class="ri-circle-fill"></i>We help you write down your great
                ideas and thoughts in a well-writing book.
              </h6>

              <h6>
                <i class="ri-circle-fill"></i>We help you save your time and
                money, which, allows you to spend more time on other aspects of
                book publishing.
              </h6>

              <h6>
                <i class="ri-circle-fill"></i>We help authors market their books
                and generate proceeds through professional consulting.
              </h6>
            </div>
          </div>
        </div>
      </div>

      <div className="about-part-three">
        <section className="for-center-about-part-three">
          <div className="one-box">
            <h2>Hire Affordable Yet Professional Book Writing Company</h2>

            <p>
              Our team of hardworking individuals has always strived for
              perfection. We have helped many writers and authors to date to
              publish their masterpieces, edit their manusciripts for
              perfection, and market their books. Get in touch with us right
              today to discuss your project.
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
      </div>

      <div className="footer-one">
        <Footer />
      </div>
    </>
  );
};

export default page;

{
  /* <img src="/pics/pic9.jpg" alt="pic9" />
            <img src="/pics/pic10.jpg" alt="pic10" />
            <img src="/pics/pic11.jpg" alt="pic11" /> */
}
