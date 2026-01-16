"use client";

import React from "react";
import "./_bookproofreading.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookproofreading-background">
        <div className="for-center-bookproofreading">
          <div className="bookproofreading-heading">
            <h2>Book Proofreading Services</h2>
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

            <h6 class="title">Book Proofreading Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Professional Proofreading Services For Perfect Manuscripts</h2>
            <p>
              Allow us to revitalize your manuscript and enhance its content. At
              BookSmiths, we have a team of devoted book lovers and watchful
              proofreaders who provide expert proofreading services. We are here
              to support authors who want the best content for their books at a
              reasonable cost. Our proofreaders are dedicated to helping writers
              like you submit their work to publishing houses in an impeccable
              manner.
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
            <h2>experienced proofreaders On-board qualified</h2>

            <p>
              Locating qualified proofreaders in your area to go over your work
              word for word? Employ the professional proofreaders at BookSmiths
              who don’t leave anything to chance. We have a productive staff of
              qualified proofreaders who are members of American proofreading
              associations. Our qualified proofreaders work hard to make sure
              the content of your book is as good as it can be.
            </p>

            <p>
              BookSmiths goes above and beyond to edit your written work because
              we recognize how important it is to present a polished and
              error-free manuscript. Leave the difficult, time-consuming, and
              stressful proofreading process behind and rely on our staff to
              make your manuscripts flawless.
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
            <h2>We Provide Proofreading Services to Make Your Books Perfect</h2>

            <p>
              Take your book to the next level with the help of our expert
              proofreading services. Since proofreading takes time, and as an
              author, you have limited time, you can concentrate on your
              creative process and reader engagement. While you focus on
              creating compelling stories, let us take care of the little
              things. Numerous authors have benefited from the assistance of
              BookSmiths’s team of certified proofreaders in improving their
              writing. We use tried-and-true proofreading methods and have
              extensive knowledge of linguistic subtleties to ensure your
              manuscript is flawless.
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
            <h2>How Can Our Top Book Proofreading Service Assist You?</h2>

            <p>
              Are you prepared to take your readers by surprise? Learn how the
              expert proofreading provided by BookSmiths preserves the caliber
              of your work and can help it realize its greatest potential.
              Enhance your manuscripts and drafts, and use excellent content to
              draw readers in and move closer to your literary goal!
            </p>

            <p>
              Our proofreaders always go over each line to remove any mistakes
              you might have made while writing.
            </p>

            <p>
              We work exclusively on your project to make sure we adhere to the
              predetermined timeline.
            </p>

            <p>
              You can make your book error-free by having the proofreader adjust
              the price to fit your budget.
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
            <h2>Expert Proofreading and Manuscript Evaluation Services</h2>

            <p>
              For a comprehensive assessment, pick a trustworthy book
              proofreading service. Our skilled staff fixes insightful errors,
              guarantees smooth flow, and enhances sentence structures. Use our
              professional advice to polish the content of your book and make it
              completely error-free.
            </p>

            <p>Proofreading Books With Professionalism and Dedication</p>

            <p>
              When it comes to books, BookSmiths has taught its proofreaders to
              be truthful, devoted, and watchful. The team makes sure that every
              aspect of your book, including grammar, punctuation, and
              consistency, is thoroughly reviewed. You can depend on their
              expertise to deliver a polished final product that meets the
              strictest quality standards. By guaranteeing consistency and
              readability throughout the book’s content, our skilled
              proofreaders bring your work into compliance with industry
              standards. Their insightful criticism aids in your own writing
              development. You can rely on our dedication to excellence to
              improve your work.
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
