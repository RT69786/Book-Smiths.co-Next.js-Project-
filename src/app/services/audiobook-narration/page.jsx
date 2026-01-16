"use client";

import React from "react";
import "./_audiobook.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="audiobook-page-background">
        <div className="for-center-audiobook">
          <div className="audiobook-heading">
            <h2>Audiobook Narration Services</h2>
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

            <h6 class="title">Audiobook Narration Services</h6>
          </div>
        </div>
      </div>


      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>
              Recording and Narrating Stories — Audiobook Narration Services
            </h2>
            <p>
              Want to turn your books into captivating listening experiences?
              Let us transform your stories, messages, and tales into
              high-quality audio with our expert audiobook narration services.
            </p>

            <p>
              Our talented team of professional voice artists specializes in
              delivering flawless recordings and consistent narration throughout
              your audiobook. Hire our top narrators to bring your story to life
              and captivate listeners with immersive storytelling.
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
            <h2>Hand Over Your Book to the Best Audiobook Narrators</h2>

            <p>
              Give your book the voice it deserves by partnering with the best
              audiobook narrators at BookSmiths. Our professional voice artists
              bring your stories to life with clear, engaging narration that
              captures the tone and emotion of your work. Whether it’s fiction,
              nonfiction, or memoir, our narrators ensure every word resonates
              with your audience, creating an immersive listening experience.
              Trust us to deliver flawless recordings that elevate your book and
              expand its reach.
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
            <h2>Hire Audiobook Narrators to Bring Your Books to Life!​</h2>

            <p>
              Let your impressive book collection reach a wider audience through
              audio. Our experienced team of the best audiobook narrators at
              BookSmiths connects your stories with avid listeners. We expertly
              capture the tone, emotion, and context of your book to deliver
              narration that truly resonates.
            </p>

            <h3>Why Choose Our Audiobook Services?</h3>

            <p>
              When you hire narrators with us, you get enchanting sound and
              expressive storytelling that brings your book to life. Our
              narrators create high-quality audiobooks by offering:
            </p>

            <p>
              No use of AI tools—only human voice artistry to ensure genuine
              emotion and impact.
            </p>

            <p>
              A professional review team including voice actors, writers, and
              authors to guarantee top-quality narration.
            </p>

            <p>
              Services to narrate unfinished audiobooks or to edit, format, and
              mix your existing recordings.
            </p>

            <p>
              Partner with BookSmiths to create immersive audiobooks that
              captivate your audience from start to finish.
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
            <h2>Why Choose BookSmiths for Audiobook Narration?</h2>

            <p>
              <i class="ri-circle-fill"></i> Strict No AI policy for authentic,
              human narration.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Professional team of voice artists,
              writers, and authors.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Services include narrating
              unfinished audiobooks and editing existing recordings.
            </p>

            <div className="button-part-three">
              <Button2 topText="LET'S GET STARTED" />
            </div>
          </div>

          <div className="right-part-three">
            <img src="/pics/pic3.jpg" alt="pi3" />
          </div>
        </div>
      </div>

      <div className="section-five">
        <div className="for-center-section-five">
          <div className="left-part-four">
            <img src="/pics/pic22.1.jpg" alt="pic22.1" />
          </div>

          <div className="right-part-four">
            <h2>Team Up with a Professional Audiobook Narration Team</h2>

            <p>
              Bring your book to life by partnering with a skilled audiobook
              narration team at BookSmiths. Our professionals deliver engaging,
              expressive narrations that capture the essence of your story and
              connect deeply with listeners. Whether you’re launching a new
              audiobook or enhancing an existing one, our team ensures a
              seamless, high-quality production that resonates with your
              audience and expands your book’s reach.
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
