"use client";

import React from "react";
import "./_bookediting.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookediting-background">
        <div className="for-center-bookediting">
          <div className="bookediting-heading">
            <h2>Book Editing Services</h2>
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

            <h6 class="title">Book Editing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Professional Book Editing Services</h2>
            <p>
              Many newbie writers and aspiring authors face difficulty finding
              reliable and up-to-the-mark book editing services. At Booksmiths,
              our team fills this void by getting reliable book editors on board
              and helping you skip that daunting process. Our editing services
              for writers and authors improve a book’s manuscript to publish an
              error-free book with tightly knitted content.
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
            <h2>Perfecting Books Through Fast-tracked Book Editing Service</h2>

            <p>
              Do you dream of emerging from your room with a polished book in
              hand that you have just written? Writing may be a solo activity,
              but the best books are often the result of team collaboration.
              Team up with Book Writing Genie’s team to create error-free,
              flawless books that ensure your book’s content shines brighter
              than ever. Our fast-track edit-book process is equally affordable
              for students and teachers, business people and working
              professionals, and authors from other walks of life. Choose a book
              edit service that does not break the bank, is reliable enough, and
              is from industry professionals.
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
            <h2>Professional Editing Services From Industry-leading Editors</h2>

            <p>
              Have you written your book’s manuscript and want it to be edited
              to perfection? Let our best team for book editing and proofreading
              services work with you to edit and proofread your manuscript. Book
              Writing Genie provides fast, affordable, and professional book
              editing anytime. Our book edits are worth signing up for. We
              ensure your manuscripts get the scrupulous attention they deserve.
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
            <h2>Why Our Professional Book Editing Service For Your Books?</h2>

            <p>
              <i class="ri-circle-fill"></i> To customize the book’s content to
              the expectations of our target audience, we first conduct research
              on them.
            </p>

            <p>
              <i class="ri-circle-fill"></i> To ensure on-time delivery, we
              adhere to the project’s timeline from beginning to end.
            </p>

            <p>
              <i class="ri-circle-fill"></i> To ensure that your book is
              published with style, our packages are customized to your project
              and budget.
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
            <h2>Why Our Professional Book Editing Service For Your Books?</h2>

            <p>
              <i class="ri-circle-fill"></i> To adjust the book’s content to
              their expectations, we first conduct research on the intended
              audience.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We adhere to the project’s timeline
              from beginning to end in order to deliver it on schedule.
            </p>

            <p>
              <i class="ri-circle-fill"></i> To ensure your book is published
              with style, our packages are customized to your project and
              budget.
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
