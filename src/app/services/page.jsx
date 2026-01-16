"use client";

import React from "react";
import "./_services.scss";
import VerticalBox from "../components/VerticalBox/VerticalBox";
import Footer from "../components/Footer/Footer";

const page = () => {
  return (
    <>
      <div className="service-background">
        <div className="for-center-service">
          <div className="service-heading">
            <h2>Service</h2>
          </div>
          <div className="h6-icon-tag">
            <h6>Home</h6>
            <i className="ri-arrow-right-s-line"></i>
            <h6>Service</h6>
          </div>
        </div>
      </div>

      <div className="for-center-service-cards">
        <div className="service-part-one">
          <div className="one">
            <VerticalBox
              imgSrc="/pics/pic13.jpg"
              title="Author Website Design"
              description="Author Website Design Services for Engaging Websites Expand your reach beyond your books by launching a professional digital presence with"
              buttonText="READ MORE"
              link="/services/author-website-design"
            />
          </div>

          <div className="two">
            <VerticalBox
              imgSrc="/pics/pic14.jpg"
              title="Audiobook Narration Services"
              description="Recording and Narrating Stories — Audiobook Narration Services Want to turn your books into captivating listening experiences? Let us transform"
              buttonText="READ MORE"
              link="/services/audiobook-narration"
            />
          </div>

          <div className="three">
            <VerticalBox
              imgSrc="/pics/pic21.jpg"
              title="Ghostwriting For Hire"
              description="Do you want your idea to amaze the world but don’t have the time to write it yourself?Choose our team and bring your story to life with clarity."
              buttonText="READ MORE"
              link="/services/ghostwriting-for-hire"
            />
          </div>
        </div>

        <div className="service-part-two">
          <div className="four">
            <VerticalBox
              imgSrc="/pics/pic17.jpg"
              title="Comic Book Writing Services"
              description="Create a Magical Experience with Comic Book Script Writing Got a great idea for your next comic book? Captivate and"
              buttonText="READ MORE"
              link="/services/comic-book-writing"
            />
          </div>

          <div className="five">
            <VerticalBox
              imgSrc="/pics/pic16.jpg"
              title="Non-Fictional Writing Services"
              description="Nonfiction Writing Services for Thought Leaders For new and aspiring nonfiction authors, finding reliable nonfiction book writing services in the"
              buttonText="READ MORE"
              link="/services/nonfiction-writing"
            />
          </div>

          <div className="six">
            <VerticalBox
              imgSrc="/pics/pic15.jpg"
              title="Fiction Writing Services"
              description="Fiction Writing Services To Bring A Magical Story To Life Let the words of wisdom triumph! Writing fiction, according to"
              buttonText="READ MORE"
              link="/services/fiction-writing"
            />
          </div>
        </div>

        <div className="service-part-three">
          <div className="seven">
            <VerticalBox
              imgSrc="/pics/pic18.jpg"
              title="Ebook Writing Services"
              description="Ebook Writing Services to Hook Your Digital Readers Do you want to write best-selling eBooks that flawlessly capture your ideas,"
              buttonText="READ MORE"
              link="/services/ebook-writing"
            />
          </div>

          <div className="eight">
            <VerticalBox
              imgSrc="/pics/pic11.jpg"
              title="Book Publishing Services"
              description="Books Publishing Services That Inspire Become a successful author by continuing to publish your books with Book Writing Genie. We"
              buttonText="READ MORE"
              link="/services/book-publishing"
            />
          </div>

          <div className="nine">
            <VerticalBox
              imgSrc="/pics/pic12.jpg"
              title="Book Cover Design Services"
              description="Books That Are Eye-Catching With Book Cover Design Services Books That Are Eye-Catching With Book Cover Design ServicesGet your book"
              buttonText="READ MORE"
              link="/services/book-cover-design"
            />
          </div>
        </div>

        <div className="service-part-four">
          <div className="ten">
            <VerticalBox
              imgSrc="/pics/pic17.jpg"
              title="Book Proofreading Services"
              description="Professional Proofreading Services For Perfect Manuscripts Allow us to revitalize your manuscript and enhance its content. At BookSmiths, we have"
              buttonText="READ MORE"
              link="/services/book-proofreading"
            />
          </div>

          <div className="eleven">
            <VerticalBox
              imgSrc="/pics/pic21.jpg"
              title="Book Marketing Services"
              description="Book Marketing Services At BookSmith, we provide strategic book marketing services to help Canadian authors get their books noticed. We"
              buttonText="READ MORE"
              link="/services/book-marketing"
            />
          </div>

          <div className="twelve">
            <VerticalBox
              imgSrc="/pics/pic14.jpg"
              title="Book Formatting Services"
              description="Book Formatting Services We offer professional book formatting services at BookSmith to make sure your manuscript meets industry standards. Our"
              buttonText="READ MORE"
              link="/services/book-formatting"
            />
          </div>
        </div>

        <div className="service-part-five">
          <div className="thirteen">
            <VerticalBox
              imgSrc="/pics/pic13.jpg"
              title="Ghostwriting Services"
              description="Affordable Ghostwriting Services to Bring Your Book to Life Writing can be a time-consuming challenge—especially when your schedule is packed."
              buttonText="READ MORE"
              link="/services/ghostwriting-services"
            />
          </div>

          <div className="fourteen">
            <VerticalBox
              imgSrc="/pics/pic19.jpg"
              title="Book Editing Services"
              description="Professional Book Editing Services Many newbie writers and aspiring authors face difficulty finding reliable and up-to-the-mark book editing services. At"
              buttonText="READ MORE"
              link="/services/book-editing"
            />
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
