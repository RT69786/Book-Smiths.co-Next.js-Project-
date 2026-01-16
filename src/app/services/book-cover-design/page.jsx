"use client";

import React from "react";
import "./_bookcoverdesign.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookcoverdesign-background">
        <div className="for-center-bookcoverdesign">
          <div className="bookcoverdesign-heading">
            <h2>Book Cover Design Services</h2>
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

            <h6 class="title">Book Cover Design Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Books That Are Eye-Catching With Book Cover Design Services</h2>
            <p>
              Books That Are Eye-Catching With Book Cover Design Services Get
              your book design noticed by creating a stunning book cover! Use
              BookSmiths book cover design services to make your book stand out
              among the best-selling ones. Readers are drawn to books with
              appealing covers, and our designers and creative thinkers are
              well-versed in all the tricks. The messages of your book are
              reflected in the captivating book covers created by our book cover
              designers for hire.
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
            <h2>We Use Book Cover Design Services to Tell a Book's Story</h2>

            <p>
              Our book cover designers for hire are trustworthy in turning your
              book into a work of art on the shelf because they understand the
              importance of visual communication. With an eye-catching book
              cover design, we visually represent the content of your book. The
              layout of a book’s cover guarantees that readers will find it
              appealing. Our group designs book covers that convey the lessons
              and creativity. Our staff has decades of experience and has
              produced powerful designs especially for unsuspecting authors if
              you require book cover design services that adhere to
              international standards.
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
            <h2>Hire Book Cover Designers to Create Stunning Illustrations</h2>

            <p>
              How Can We Assist With Expert Book Cover Design? Allow our skilled
              team of designers to reinvent your book with a well-crafted book
              cover. Considering the genre and subject matter of the book, we
              will assist you in designing a unique book cover that will wow
              your readers. Here’s how we do it:
            </p>

            <p>
              We design unique, genre-specific book covers to draw in readers.
              Our top-notch book cover design team is skilled at improving the
              appearance and allure of your book.
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
            <h2>Join Forces With Top Book Cover Designers Now!</h2>

            <p>
              <i class="ri-circle-fill"></i>The top book cover design firms
              distinguish their covers from the competition. After reading your
              book synopsis, our expert team creates an eye-catching, beautiful,
              and superior design to captivate your readers. When creating a
              book cover, our professionals adhere to the most recent trends in
              graphic design.
            </p>

            <p>
              Obtain Professionally Crafted Designer Book Covers Do you want
              your book to stand out from the crowd on bookstore shelves or
              online? Hire us to create designer book covers to enhance your
              book’s aesthetic appeal. BookSmiths offers expertly created books
              with stunning cover designs.
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
            <h2>
              Your Books Should Have a Gorgeous, Eye-Catching Cover Design
            </h2>

            <p>
              Even a manuscript that has the potential to become the next
              bestseller may suffer if its book cover fails to capture the
              reader’s attention. After all, the first impression is the last. A
              book that is arranged alongside other titles on a bookshelf needs
              an eye-catching cover to draw in readers. The design of your book
              cover has a big impact on whether it succeeds or fails. The
              greatest book cover designs can have a significant impact as our
              team uses their creative abilities to combine and improve design
              elements. We create the faces of your book to attract readers with
              our extensive understanding of all book genres and industry
              standards.
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
