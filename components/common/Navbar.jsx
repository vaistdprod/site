'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

function Navbar() {
  function handleScroll() {
    const bodyScroll = window.scrollY;
    const navbar = document.querySelector('.navbar');

    if (bodyScroll > 300) navbar.classList.add('nav-scroll');
    else navbar.classList.remove('nav-scroll');
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleDropdownMouseMove(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    event.currentTarget.querySelector('.dropdown-menu').classList.remove('show');
  }

  function handleToggleNav() {
    const navbarCollapse = document.querySelector('.navbar .navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    } else {
      navbarCollapse.classList.add('show');
    }
  }

  return (
    <nav className="navbar navbar-expand-lg bord blur">
      <div className="container o-hidden">
        <a className="logo icon-img-100" href="/">
          <Image
            src="/assets/imgs/logo-light.svg"
            alt="logo"
            width={33}
            height={25}
            className="logo-image"
          />
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Přepnout menu"
          onClick={handleToggleNav}
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">Naše služby</span>
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/nase-sluzby">
                    Vše
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/webove-stranky">
                    Webové stránky
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/webove-aplikace">
                    Webové aplikace
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/digitalni-marketing">
                    Digitální marketing
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/implementace-ai">
                    Implementace AI
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/videoprodukce">
                    Videoprodukce
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/nase-sluzby/fotoprodukce">
                    Fotoprodukce
                  </a>
                </li>
              </ul>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown"
            >
              <a
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <span className="rolling-text">O nás</span>
              </a>
              <div className="dropdown-menu">
                <a className="dropdown-item" href="/pribeh">
                  Příběh
                </a>
                <a className="dropdown-item" href="/nas-tym">
                  Náš tým
                </a>
                <a className="dropdown-item" href="/faq">
                  FAQ
                </a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <span className="rolling-text">Portfolio</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/blog">
                <span className="rolling-text">Blog</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/kontakty">
                <span className="rolling-text">Kontakty</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="contact-button">
          <a
            href="/kontakty"
            className="butn butn-sm butn-bg main-colorbg radius-5"
          >
            <span className="text">Kontaktujte nás</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;