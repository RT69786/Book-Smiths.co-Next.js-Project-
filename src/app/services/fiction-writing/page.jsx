"use client";

import React from "react";
import "./_fictionwriting.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="fictionwriting-background">
        <div className="for-center-fictionwriting">
          <div className="fictionwriting-heading">
            <h2>Fiction Writing Services</h2>
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

            <h6 class="title">Fiction Writing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Fiction Writing Services To Bring A Magical Story To Life</h2>
            <p>
              Let the words of wisdom triumph! Writing fiction, according to
              BookSmiths, is all about creating an illusionary story, plot, and
              characters. It is challenging and time-consuming to write stories
              and fictional characters. Select our fiction writing services,
              which emphasize the use of imagination to draw readers in, keep
              them interested while they’re on the go, and provide them with
              entertainment through your works. Can publish fiction books right
              now with our outstanding staff of writers so that your readers can
              join you in celebrating your accomplishment.
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
            <h2>Fiction Writing Services That Bring Your Story to Life</h2>

            <p>
              Our talented fiction writers are experts at turning your concepts
              into captivating, page-turning books. We create vivid worlds, give
              characters life, and write emotionally stirring stories that
              genuinely engage readers with our premium fiction writing
              services.
            </p>

            <p>
              Booksmiths can assist you in turning your idea into a best-selling
              work of fiction, whether your dream is a thrilling action thriller
              or a touching romance. Discover the potential of expert fiction
              ghostwriting and allow your narrative to make an impression.
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
            <h2>Avail Our Book Publishing Services Today!</h2>

            <p>
              <i class="ri-circle-fill"></i> To develop a unique digital
              marketing plan for your book, we keep abreast of the most recent
              developments in publishing.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Your distinct voice is preserved
              throughout the publishing process by our writers and editors.
            </p>

            <p>
              <i class="ri-circle-fill"></i> With well-planned pre-launch
              marketing, we create excitement and anticipation for your book.
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
            <h2>Hire the Best Company for Your Next Bestseller</h2>

            <p>
              <i class="ri-circle-fill"></i> Step into a world of endless
              storytelling possibilities with Booksmiths. Whether you’re aiming
              to publish a romance novel, an action-packed thriller, or a
              science fiction saga, we’re here to bring your fiction to life.
              Our expert team uses proven writing techniques to craft
              compelling, tightly-knit stories that stay true to your characters
              and ideas.
            </p>

            <p>
              With our affordable and professional fiction writing services,
              your dream of writing a bestselling novel becomes a smooth,
              stress-free journey.
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
            <h2>Top Fiction Writing to Bring Iconic Characters to Life</h2>

            <p>
              At Book Writing Genie, we turn your character ideas into
              unforgettable stories. Our writers dive deep into character
              development and craft engaging plots that resonate with
              readers—whether it’s a suspense novel, romance, or eBook series.
            </p>

            <h3>Expert Fiction Writing for Powerful Storylines</h3>

            <p>
              Our team works with you to shape your ideas into captivating
              fiction. From short stories to full series, we deliver seamless
              storytelling that entertains and inspires.
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
