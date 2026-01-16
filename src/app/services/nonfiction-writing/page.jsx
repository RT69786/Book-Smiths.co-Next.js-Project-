"use client";

import React from "react";
import "./_nonfiction.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="nonfiction-background">
        <div className="for-center-nonfiction">
          <div className="nonfiction-heading">
            <h2>Non-Fictional Writing Services</h2>
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

            <h6 class="title">Non-Fictional Writing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Nonfiction Writing Services for Thought Leaders</h2>
            <p>
              For new and aspiring nonfiction authors, finding reliable
              nonfiction book writing services in the USA can be
              challenging—especially ones that handle research, writing,
              formatting, and fact-checking with precision.
            </p>

            <p>
              At BookSmiths, our expert nonfiction writers take care of it all.
              We ensure your book is accurate, well-researched, and
              professionally formatted, so you can focus on sharing your story
              without the hassle.
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
            <h2>Nonfiction Writing Services to Craft Your Next Bestseller</h2>

            <p>
              Publish high-quality, thoroughly researched, and engaging
              nonfiction books with our affordable writing services. Connect
              with our expert nonfiction writers to craft and publish your book
              no professional experience required.
            </p>

            <p>
              BookSmiths has helped many writers make their memoirs,
              biographies, historical works, scientific research, and political
              stories come to life. Let our talented nonfiction writers make
              your next book better and add to your legacy as an author.
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
            <h2>How Our Nonfiction Writing Services Help Authors</h2>

            <p>
              Turn reality and facts into a captivating tapestry of words with
              our nonfiction writing services. A great nonfiction book is rooted
              in reality, and our skilled nonfiction writers Our nonfiction
              writers ensure every word in your manuscript counts, maintaining
              the highest quality throughout.
            </p>

            <p>
              We offer comprehensive services—from writing and editing to
              formatting—paying close attention to detail for accuracy and
              precision.
            </p>

            <p>
              Our expert nonfiction ghostwriters blend factual content with
              compelling storytelling that truly resonates with readers.
            </p>

            <p>
              Timely delivery is guaranteed because writing nonfiction
              efficiently is our specialty.
            </p>

            <p>
              We provide affordable nonfiction writing services so authors can
              get professional help without breaking the bank.
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
              Publish Books with the Best Nonfiction Writing Services Company
            </h2>

            <p>
              <i class="ri-circle-fill"></i>Authors face many challenges—from
              maintaining writing quality and authentic style to ensuring
              factual accuracy. Thorough research, credible sources, and expert
              citations are essential to craft a compelling nonfiction book.
            </p>

            <p>
              <i class="ri-circle-fill"></i> That’s why BookSmiths specializes
              in nonfiction writing services tailored to these needs. Our team
              of expert nonfiction writers carefully considers every detail to
              deliver polished, well-researched, and authentic content.
            </p>

            <p>
              <i class="ri-circle-fill"></i> As a leading nonfiction writing
              services company, we cover all aspects authors require to bring
              their nonfiction books to life with confidence.
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
              Best Nonfiction Writing Service to Overcome Your Writing
              Challenges
            </h2>

            <p>
              Writing a nonfiction book comes with many challenges — from
              maintaining accuracy and authenticity to conducting thorough
              research and organizing your ideas effectively. At BookSmiths, we
              understand these hurdles and provide expert nonfiction writing
              services designed to help you overcome them all. Our skilled
              writers ensure your facts are precise, your voice remains
              authentic, and your story is engaging and well-structured. Partner
              with us to turn your vision into a polished, compelling nonfiction
              book without the usual stress.
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
