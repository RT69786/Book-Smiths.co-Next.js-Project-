"use client";

import React from "react";
import "./_bookformating.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookformating-background">
        <div className="for-center-bookformating">
          <div className="bookformating-heading">
            <h2>Book Formatting Services</h2>
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

            <h6 class="title">Book Formatting Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Book Formatting Services</h2>
            <p>
              We offer professional book formatting services at BookSmith to
              make sure your manuscript meets industry standards. Our
              professionals format your book with care, changing margins, fonts,
              and layouts to give it a polished look, whether you’re getting
              ready for print or digital publishing. We take care of the chapter
              styling, headers and footers, and page numbers so your book looks
              perfect. You can count on us to send you files that are ready to
              print for Amazon KDP, IngramSpark, and more. Let’s make the
              pictures in your book as interesting as the words!
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
            <h2>Professional Book Formatting Service</h2>

            <p>
              A book that is well-formatted is easier to read and more
              trustworthy. BookSmith’s professional book formatting service
              makes sure that your manuscript goes smoothly from draft to
              finished product. We follow publisher guidelines to make sure that
              the typography, spacing, and alignment are perfect for both print
              and eBooks. We promise a clean, professional layout that will
              impress both readers and stores, no matter what type of book it
              is: a novel, memoir, or non-fiction.
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
            <h2>eBook Formatting Services</h2>

            <p>
              It’s very important to format eBooks correctly in the digital age.
              With BookSmith’s eBook formatting services, your book will look
              great on Kindle, Kobo, Apple Books, and other platforms. We fix
              problems with hyperlinks, reflow, and responsive design so that
              your eBook works perfectly. Don’t let bad reviews and rejected
              files get in the way of your reading. Let us optimize your EPUB
              and MOBI files for a smooth reading experience.
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
            <h2>Book Editing And Formatting Services</h2>

            <p>
              Why settle for just one when you can have both editing and
              formatting? BookSmith’s services for editing and formatting books
              include careful proofreading and perfect layout design. We edit
              your writing for grammar, consistency, and flow, and then we
              format it so that it can be printed or read on a computer. Great
              for writers who want a simple, all-in-one solution before they
              publish.
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
            <h2>Book Formatting Services Near Me</h2>

            <p>
              Are you looking for book formatting services near me in Canada?
              BookSmith has local knowledge and follows global standards. We
              help authors all over the country with fast, reliable formatting
              that fits their needs, no matter where they are in Canada. Get
              help that’s tailored to you, fast turnarounds, and files that are
              ready for both Canadian and international markets. Let’s make your
              book come to life in a professional way!
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
