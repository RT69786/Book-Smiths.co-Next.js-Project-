"use client";

import React from "react";
import "./_bookmarketing.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="bookmarketing-background">
        <div className="for-center-bookmarketing">
          <div className="bookmarketing-heading">
            <h2>Book Marketing Services</h2>
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

            <h6 class="title">Book Marketing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Book Marketing Services</h2>
            <p>
              At BookSmith, we provide strategic book marketing services to help
              Canadian authors get their books noticed. We develop tailored
              strategies to increase visibility and sales, ranging from social
              media campaigns to focused reader outreach. Our team makes sure
              your book reaches the right audience both locally and
              internationally, regardless of whether you’re self-published or
              traditionally published. Together, we can make your book a
              bestseller!
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
            <h2>Book Promotion Services</h2>

            <p>
              Do you need to create buzz about your book? Press releases,
              influencer partnerships, and engagement-boosting book launch
              tactics are all part of BookSmith’s book promotion services. We
              specialize in Canadian markets while expanding your reach
              internationally. From online media coverage to local bookstore
              features, we make sure your book receives the recognition it
              merits.
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
            <h2>Book Marketing Service For Digital Promotion</h2>

            <p>
              In the modern digital world, having an online presence is
              essential. BookSmith’s digital book marketing service uses email
              marketing, Facebook/Instagram campaigns, and Amazon ads to draw in
              readers. To increase discoverability, we optimize book
              descriptions, keywords, and metadata. We optimize your book’s
              online presence, whether you’re aiming for Kindle readers or a
              worldwide readership.
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
            <h2>Professional Book Marketing Company!</h2>

            <p>
              BookSmith is a top professional book marketing firm that blends
              innovative tactics with industry knowledge. We create author
              brands in addition to selling books. We offer data-driven
              advertising campaigns, SEO-driven content, and author websites
              designed for both Canadian and foreign markets. Put your trust in
              us to make your book a bestseller!
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
            <h2>Amazon Book Marketing Services</h2>

            <p>
              Dominate the world’s largest book marketplace with BookSmith’s
              Amazon book marketing services. To improve rankings, we run
              high-converting ads, optimize your KDP listings, and take
              advantage of Kindle Unlimited promotions. We make sure your book
              stands out in a crowded market with everything from A+ content to
              review campaigns. Together, we can turn your book into an Amazon
              best-seller!
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
