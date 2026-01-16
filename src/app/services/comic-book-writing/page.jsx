"use client";

import React from "react";
import "./_comicbook.scss";
import ContactFormTwo from "@/app/components/ContactFormTwo/ContactFormTwo";
import Button2 from "@/app/components/Button2/Button2";
import Footer from "@/app/components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="comicbook-background">
        <div className="for-center-comicbook">
          <div className="comicbook-heading">
            <h2>Comic Book Writing Services</h2>
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

            <h6 class="title">Comic Book Writing Services</h6>
          </div>
        </div>
      </div>

      <div className="section-one">
        <div className="for-center-section-one">
          <div className="left-part-one">
            <h2>Create a Magical Experience with Comic Book Script Writing</h2>
            <p>
              Got a great idea for your next comic book? Captivate and entertain
              your readers with professional comic book writing services from
              BookSmiths. Hire our expert comic book script writers to bring
              your vision to life and publish engaging, memorable comics.
            </p>

            <p>
              Our team—comprising talented writers, artists, designers, and
              editors—collaborates seamlessly to transform raw concepts into
              compelling stories with believable, dynamic characters. Let us
              help you craft a comic book that leaves a lasting impression.
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
              Comic Book Scripts Packed with Entertainment, Action, and
              Adventure
            </h2>

            <p>
              Ready to ignite your readers’ imagination with your next comic
              book? At BookSmiths, we transform raw ideas, draft stories, and
              rough notes into powerful comic book scripts. Whether you’re
              aiming for a standalone issue or an ongoing series, we’ve got you
              covered—writing everything from US-sized comics to Japanese manga.
            </p>

            <p>
              Experience engaging, thrilling, and fun-filled comic books crafted
              by our professional writing and design team. Connect with our
              expert comic writers for hire today and bring your action-packed
              stories to life!
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
            <h2>Let Our Comic Book Writers Craft Brilliance</h2>

            <p>
              Ever wondered how your favorite childhood comic might have changed
              if certain scenes were different? If you have fresh ideas for your
              comic book, our top comic book writers at BookSmiths will refine
              and elevate them to Marvel-level brilliance.
            </p>

            <p>
              We believe your imagination knows no limits. Our writers ensure
              every line is perfectly crafted to complement both your story and
              artwork, bringing your vision to life with precision and
              creativity.
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
            <h2>How Our Top Comic Book Writers Help You Uplift Your Ideas</h2>

            <p>
              Creating a comic book script requires balancing many elements—art,
              story alignment, and overall coherence. To ensure your comic
              stands out and generates revenue, hire our skilled comic book
              writers at BookSmiths, who offer:
            </p>

            <p>
              <i class="ri-circle-fill"></i> Comprehensive services covering
              every stage from concept to completion.
            </p>

            <p>
              <i class="ri-circle-fill"></i> Rigorous quality assurance to
              deliver error-free, polished scripts.
            </p>

            <p>
              <i class="ri-circle-fill"></i> A streamlined process that includes
              ideation, artwork collaboration, cover design, layout, and
              publication support.
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
            <h2>Collaborate with the Best Comic Book Writers</h2>

            <p>
              Our expert team at BookSmiths manages the entire comic script
              writing and publishing process—from single issues and monthly
              episodes to special editions and reprints. Unlock the secret to
              making your comic book the next big hit with our creative
              storytelling approach.
            </p>

            <p>
              We craft unique, imaginative stories that elevate your vision and
              help your comic reach new heights in the world of graphic
              storytelling.
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
