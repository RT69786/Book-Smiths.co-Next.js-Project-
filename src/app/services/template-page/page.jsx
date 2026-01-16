"use client";

import React from "react";
import "./_templatepage.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="template-page-background">
        <div className="for-center-template-page">
          <div className="template-page-heading">
            <h2>Template-page</h2>
          </div>
          <div className="h6-icon-tag">
            <h6>Home</h6>
            <i className="ri-arrow-right-s-line"></i>
            <h6>services</h6>
            <i className="ri-arrow-right-s-line"></i>
            <h6>template-page service</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Author Website Design Services for Engaging Websites</h2>
            <p>
              Expand your reach beyond your books by launching a professional
              digital presence with our author website design services. In
              today’s tech-driven world, having an impeccable online
              presence—whether through social media or your own website—is
              essential.
            </p>

            <p>
              At BookSmiths, we specialize in creating sleek, professional
              author websites that boost your visibility and engage your readers
              effectively.
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
            <h2>Get Pro-Level Author Website Design Services</h2>

            <p>
              Hire our expert website design and development team to elevate
              your career as an author online. At BookSmiths, we are dedicated
              to empowering authors by creating impressive digital presences
              that attract, engage, and delight readers.
            </p>

            <p>
              Our professional author website designs help self-published
              authors launch their digital platforms with style and impact.
            </p>

            <p>
              With the best author website designers on board, BookSmiths
              ensures every element of your site reflects your unique identity.
              Showcase your personality, promote your literary works, and
              connect meaningfully with your audience—partner with us to make
              your online presence truly stand out.
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
            <h2>How Our Expert Author Website Designers Help You</h2>

            <p>
              Through our collaborative process, we create visually stunning and
              intuitive websites that truly reflect your unique style, voice,
              and vision. Our team designs SEO-optimized websites to boost your
              visibility and drive more traffic, while our talented book cover
              designers elevate your book’s visual impact. At the same time, our
              web designers craft seamless UI/UX experiences that authentically
              convey your authorial voice, helping you connect with your
              audience and achieve success.
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
            <h2>Why Choose Our Author Website Design Services?</h2>

            <p>
              <i class="ri-circle-fill"></i> At BookSmiths, we create author
              websites that are both aesthetically pleasing and intuitive by
              understanding your unique writing style and vision. Here’s why
              authors trust our website design team:
            </p>

            <p>
              <i class="ri-circle-fill"></i> Affordable rates combined with
              high-quality services make us the complete package.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We offer professional consultancy
              with transparent and open communication.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Unlimited revisions ensure your
              complete satisfaction with the final design.
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
            <h2>Author Website Design Company for Click-Worthy Websites</h2>

            <p>
              Authors excel at writing books, but creating compelling websites
              with engaging homepages and effective CTAs can be a challenge. At
              BookSmiths, we combine expert website design with content that
              converts visitors into fans.
            </p>

            <p>
              Our creative team crafts customized, professional websites that go
              beyond aesthetics by integrating design, content, and your unique
              personality. Get a website that truly reflects the real YOU,
              optimized strategically to set you apart from other authors and
              boost your digital presence.
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
