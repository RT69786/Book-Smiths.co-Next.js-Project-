"use client";

import React from "react";
import "./_ghostwritingforhire.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="ghostwritingforhire-background">
        <div className="for-center-ghostwritingforhire">
          <div className="ghostwritingforhire-heading">
            <h2>Ghostwriting For Hire</h2>
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

            <h6 class="title">Ghostwriting For Hire</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Ghostwriting Services Canada</h2>
            <p>
              Do you want your idea to amaze the world, but you’re running short
              of time? Then, choosing reliable services of ghostwriting from
              BookSmiths will be the best decision. Our talented ghostwriting
              team provides services across the Canada to pen down your ideas
              into memorable stories and compelling books. Our ghost book
              writers make your vision a successful book that resonates with
              your readers.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Affordable Services
            </p>

            <p>
              <i class="ri-circle-fill"></i> High-quality
            </p>

            <p>
              <i class="ri-circle-fill"></i> Work Timely Delivery
            </p>

            <p>
              <i class="ri-circle-fill"></i> Unlimited Revisions
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
            <h2>Professional Ghostwriters Pick Your Voice</h2>

            <p>
              Writing is a brain-consuming task, and writers and aspiring
              authors deserve a break from it. In case you are seeking
              professional yet affordable ghostwriting services for your next
              literary venture, Booksmiths has the best ghost book writers at
              your service. Although it is a hassle to find the best
              ghostwriting agencies, look no further and hire us for our
              talented pool of professional ghostwriters who are passionate
              about writing.
            </p>

            <p>
              Whether you need assistance with your book or novel manuscript,
              our creative ghostwriting team extends its support straightaway to
              whatever your vision is.
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
            <h2>Book Ghostwriting Services</h2>

            <p>
              At Booksmiths, we deliver professional ghostwriting services that
              transform your vision into a polished literary work—without the
              premium price tag. Our team crafts compelling, publication-ready
              manuscripts through.
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
              Affordable Ghostwriting Services – Premium Quality,
              Budget-Friendly Rates
            </h2>

            <p>
              We don’t compromise on quality. Whether you’re a first-time
              author, a busy executive, or an entrepreneur looking to share your
              expertise, our team of skilled ghostwriters crafts compelling,
              publication-ready manuscripts at budget-friendly rates.
            </p>

            <h3>Why choose our affordable service?</h3>
            <p>
              <i class="ri-circle-fill"></i> <span>Experienced writers</span>
              Booksmiths published professionals
            </p>

            <p>
              <i class="ri-circle-fill"></i> <span>No hidden costs</span>
              Transparent flat-rate pricing
            </p>

            <p>
              <i class="ri-circle-fill"></i> <span>Satisfaction guarantee</span>
              Revisions included
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
            <h2>Premier Ghostwriting Agency</h2>

            <p>
              <i class="ri-circle-fill"></i> <span>Experienced writers</span>-
              Our team of bestselling authors and industry professionals crafts
              high-quality, tailored manuscripts that capture your unique voice
              and vision.
            </p>

            <p>
              <i class="ri-circle-fill"></i> <span>End-to-End Service </span>-
              From concept to publication, we handle research, writing, editing,
              and publishing guidance for a seamless experience.
            </p>

            <p>
              <i class="ri-circle-fill"></i>
              <span>Confidential & Results-Driven</span>- Discretion guaranteed,
              with a track record of helping clients land book deals, grow their
              brand, and engage readers.
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
