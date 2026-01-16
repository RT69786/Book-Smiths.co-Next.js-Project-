"use client";

import React, { useState } from "react";
import Link from "next/link";
import "./_navbar.scss";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <section className="for-center-nav">
        <Link href="/" className="logo-link" aria-label="Home">
          <img className="logo" src="/pics/logo.png" alt="logo" />
        </Link>

        {/* DESKTOP NAV */}
        <div className="nav-links">
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>

          <div className="services-dropdown">
            <Link href="/services" className="services-link">
              Services
            </Link>

            <div className="dropdown-panel">
              <Link href="/services/author-website-design">
                Author Website Design
              </Link>
              <Link href="/services/audiobook-narration">
                Audiobook Narration
              </Link>
              <Link href="/services/ghostwriting-for-hire">
                Ghostwriting For Hire
              </Link>
              <Link href="/services/comic-book-writing">
                Comic Book Writing
              </Link>
              <Link href="/services/nonfiction-writing">
                Non-Fiction Writing
              </Link>
              <Link href="/services/fiction-writing">Fiction Writing</Link>
              <Link href="/services/ebook-writing">Ebook Writing</Link>
              <Link href="/services/book-publishing">Book Publishing</Link>
              <Link href="/services/book-proofreading">Book Proofreading</Link>
              <Link href="/services/book-marketing">Book Marketing</Link>
              <Link href="/services/book-formatting">Book Formatting</Link>
              <Link href="/services/ghostwriting-services">
                Ghostwriting Services
              </Link>
              <Link href="/services/book-editing">Book Editing</Link>
            </div>
          </div>

          <Link href="/contact">Contact Us</Link>
        </div>

        <div className="nav-icons">
          <i className="ri-shopping-cart-2-line"></i>
          <i className="ri-search-2-line"></i>
        </div>

        {/* BURGER ICON */}
        <div
          className={`burger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      {/* MOBILE SLIDE MENU */}
      <aside className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>
        <Link href="/about" onClick={closeMenu}>
          About Us
        </Link>
        <Link href="/services" onClick={closeMenu}>
          Services
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          Contact Us
        </Link>
      </aside>
    </nav>
  );
}
