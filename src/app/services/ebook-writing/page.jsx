"use client";

import React from "react";
import "./_ebookwriting.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="ebookwriting-background">
        <div className="for-center-ebookwriting">
          <div className="ebookwriting-heading">
            <h2>Ebook Writing Services</h2>
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

            <h6 class="title">Ebook Writing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Ebook Writing Services to Hook Your Digital Readers</h2>
            <p>
              Do you want to write best-selling eBooks that flawlessly capture
              your ideas, visions, and stories? Use our eBook writing services
              right now to attract your online audience. The skilled writing
              staff at Booksmiths is available to assist you in advancing your
              digital literary endeavors. In order to successfully write and
              publish your eBook in any genre, our highly skilled eBook writers
              are familiar with all online platforms and their algorithms.
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
            <h2>
              Professional eBook Writing Your Digital Storytelling Journey
            </h2>

            <p>
              Do you want your e-books to become a digital sensation? Do you
              wish to interact with and captivate your online audience? Allow us
              to assist you with our Canada eBook writing services! For flawless
              eBook content, rely on our team of eBook writers. For captivating
              ideas to produce captivating content, you need an eBook
              specialist. Book Writing Genie offers the best eBook writing
              services by staying up to date with the newest digital trends!
            </p>

            <p>
              By bringing originality and expertise to every project, we have
              always aimed to deliver the greatest eBook writing service. We
              make sure that an eBook reflects the author’s life experience and
              level of expertise. To check all the appropriate boxes, we will
              collaborate closely with you.
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
            <h2>What Makes Us Unique as a Top eBook Writing Company?</h2>

            <h3>Realistic Voice Representation</h3>

            <p>
              We create captivating eBooks that capture the distinct
              personalities, ideals, and ideologies of each author.
            </p>

            <h3>Clear and Open Cooperation</h3>

            <p>
              In order to comprehend the tone, style, and vision of authors, our
              team keeps lines of communication open.
            </p>

            <h3>Structure & Engagement Driven by the Reader</h3>

            <p>
              We create each eBook’s outline to optimize impact and engagement
              because we understand what interests digital readers.
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
            <h2>Why Choose BookSmiths for Your eBook Project?</h2>

            <p>
              <i class="ri-circle-fill"></i> We Turn Doubt Into Confidence
            </p>

            <p>
              <i class="ri-circle-fill"></i> At BookSmiths, we create
              personalized eBooks that capture your unique tone, message, and
              personality.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We design every eBook with the
              digital reader in mind ensuring engaging flow, clarity, and
              connection from start to finish.
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
            <h2>Affordable eBook Writing Services That Won’t Break</h2>

            <p>
              <i class="ri-circle-fill"></i> Get expertly written eBooks with
              the same attention to detail and care, but without the high price
              tag.
            </p>

            <p>
              <i class="ri-circle-fill"></i> We use captivating, coherent, and
              reader-focused storytelling to make your ideas come to life.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Our eBooks are designed to grab
              attention and drive sales on digital platforms.
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
