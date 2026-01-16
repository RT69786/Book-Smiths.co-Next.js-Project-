"use client";

import React from "react";
import "./_ghostwritingservices.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="ghostwritingservices-background">
        <div className="for-center-ghostwritingservices">
          <div className="ghostwritingservices-heading">
            <h2>Ghostwriting Services</h2>
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

            <h6 class="title">Ghostwriting Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Affordable Ghostwriting Services to Bring Your Book to Life</h2>
            <p>
              Writing can be a time-consuming challenge—especially when your
              schedule is packed. If you need a ghostwriter, BookSmiths offers
              affordable ghostwriting services designed to lighten your load.
            </p>

            <p>
              Connect with us to transform your revolutionary ideas into
              captivating, well-crafted content. Hire our expert ghostwriters
              for efficient, flawless service that elevates your writing and
              publishing journey.
            </p>

            <p>
              With our skill and creativity, your book will stand out through
              quality storytelling and engaging wordplay.
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
            <h2>Book Ghostwriters for Hire for Impactful Wordplay</h2>

            <p>
              Great stories shouldn’t stay trapped in your mind—bringing them to
              life with compelling content is an art. If you’re in the USA and
              searching for ghostwriters for hire nearby, connect with
              BookSmiths to transform your innovative ideas into powerful
              narratives.
            </p>

            <p>
              Our skilled writers bring your vision to life with creativity and
              wordcraft that truly resonates, leaving a lasting impression on
              your readers.
            </p>

            <p>
              We offer affordable ghostwriting services tailored to your book
              project’s needs. Our talented professionals create captivating
              content that sparks imagination and keeps readers engaged from
              start to finish.
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
            <h2>Hire A Ghostwriter From Our Team Behind Several Bestsellers</h2>

            <p>
              BookSmiths is proud to have a team of unsung heroes behind some of
              the world’s bestselling books. Our professional ghostwriting
              services have helped authors across the globe publish incredible
              works—from autobiographies and memoirs to novels and business
              titles.
            </p>

            <p>
              With hundreds of successful books to our credit, we carefully
              select our ghostwriters through rigorous interviews and testing to
              ensure award-winning quality.
            </p>

            <p>
              Hire ghostwriters online today and let us help you bring your
              story to the world.
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
            <h2>
              Hire a Professional Ghostwriter to Stay Ahead in the Industry
            </h2>

            <p>
              Hiring a professional ghostwriter is one of the smartest moves you
              can make to stay ahead in today’s competitive publishing industry.
              At BookSmiths, our experienced ghostwriters help you craft
              high-quality, engaging content that sets your work apart. Whether
              you’re launching a new book or revitalizing your brand, partnering
              with expert writers ensures your message is clear, compelling, and
              timely—giving you the competitive edge to lead the market and
              captivate your audience.
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
            <h2>Best Ghostwriters for Hire Team for Your Book Projects</h2>

            <p>
              When it comes to bringing your book ideas to life, having the
              right team matters. At BookSmiths, our best-in-class ghostwriters
              combine creativity, expertise, and dedication to deliver
              compelling manuscripts tailored to your vision. Whether you’re
              working on memoirs, business books, or fiction, our team is
              equipped to handle your project with professionalism and
              care—helping you create a book that truly stands out.
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
