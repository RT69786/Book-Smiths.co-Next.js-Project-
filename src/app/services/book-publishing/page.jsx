"use client";

import React from "react";
import "./_bookpublishing.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookpublishing-background">
        <div className="for-center-bookpublishing">
          <div className="bookpublishing-heading">
            <h2>Book Publishing Services</h2>
          </div>

          <div class="h6-icon-tag">
            <span class="crumb">
              <h6>Home</h6>
              <i>›</i>
            </span>

            <span class="crumb">
              <h6>services</h6>
              <i>›</i>
            </span>

            <h6 class="title">Book Publishing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Books Publishing Services That Inspire</h2>
            <p>
              Become a successful author by continuing to publish your books
              with Book Writing Genie. We are one of the publishing houses
              assisting writers and authors with their works. We provide a
              smooth platform that makes it easy for anyone to publish their
              books. To make your literary aspirations a reality, our book
              publishers help you at every stage.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Reasonably Priced Services
            </p>

            <p>
              <i class="ri-circle-fill"></i> Quality Work
            </p>

            <p>
              <i class="ri-circle-fill"></i> On-time Delivery
            </p>

            <p>
              <i class="ri-circle-fill"></i> Unlimited Revision
            </p>
          </div>
          <div className="right-part-one">
            <ContactFormTwo />
          </div>
        </div>
      </div>

      <div className="section-two">
        <div className="for-center-section-two">
          <div className="left-part-two">
            <img src="/pics/pic22.1.jpg" alt="pic14" />
          </div>
          <div className="right-part-two">
            <h2>
              Book Publishing Company That Offers Hassle-free Book Publishing
            </h2>

            <p>
              Self-publishing a book is really difficult. A book publishing
              company that is well-versed in the entire process is required for
              your manuscript and rough drafts. Publishing a book using the
              appropriate approach is crucial, regardless of whether it is a
              nonfiction or fiction work or a memoir. We support you at every
              stage with our book publishing services. We make sure your book is
              published to stand out in its genre, from editing, proofreading,
              and formatting to designing the book cover and, most importantly,
              marketing it.
            </p>

            <p>
              Leave the technical details to our top self-publishing company and
              concentrate on writing your book. Collaborate with us to release
              your book at the ideal moment and allow it to be read by the right
              people.
            </p>

            <div className="button-part-one">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>
        </div>
      </div>

      <div className="section-three">
        <section className="for-center-section-three">
          <div className="one-big-section-three">
            <h2>Avail Of Our Book Publishing Services Right Today!</h2>

            <p>
              Our Team keeps up with the most recent publishing trends with plan
              for the digital promotion of book.
            </p>

            <p>
              When you write, we find your own voice and use it to publish your
              book.
            </p>

            <p>
              Additionally, our team generates all of the publicity for your
              story prior to its publication.
            </p>

            <div className="button-part-two">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>
        </section>
      </div>

      <div className="section-four">
        <div className="for-center-section-four">
          <div className="left-part-three">
            <h2>Why We’re Among Best Rated Self Publishing Companies</h2>

            <p>
              A lot of work goes into publishing a book in this digital age,
              including keeping up an active online presence, doing a lot of
              marketing, and working strategically with others. We know how to
              increase your authorship, and here’s how:
            </p>

            <p>
              <i class="ri-circle-fill"></i> We follow publishing trends and
              strive for your strategic digital presence and marketing.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We use your writing to market your
              book because it captures your distinct voice.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We’ll make sure your book gets the
              recognition it merits, whether it’s fiction or nonfiction.
            </p>

            <div className="button-part-three">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>

          <div className="right-part-three">
            <img src="/pics/pic21.jpg" alt="pi21" />
          </div>
        </div>
      </div>

      <div className="section-five">
        <div className="for-center-section-five">
          <div className="left-part-four">
            <img src="/pics/pic22.1.jpg" alt="pic22.1" />
          </div>

          <div className="right-part-four">
            <h2>Avail Of Our Book Publishing Services Right Today!</h2>

            <p>
              <i class="ri-circle-fill"></i> Our staff occasionally keeps up
              with the most recent publishing trends while developing a plan for
              the digital promotion of your book.
            </p>

            <p>
              <i class="ri-circle-fill"></i> When you write, we find your own
              voice and use it to publish your book.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Additionally, our team generates
              all of the publicity for your story prior to its publication.
            </p>

            <div className="button-part-four">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>
        </div>
      </div>

      <div className="footer-part-three">
        <Footer />
      </div>
    </>
  );
};

export default page;
