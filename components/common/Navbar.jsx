'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RollingText from '@/common/rolling';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
        <Link className="logo relative icon-img-100" href="/">
          <Image
            src="/assets/imgs/logo-light.svg"
            alt="Logo TD Productions"
            width={33}
            height={25}
            className="logo-image"
          />
        </Link>
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
            <FontAwesomeIcon icon={faBars} />
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
              className="nav-item dropdown relative"
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <RollingText text="Naše služby" />
              </Link>
              <ul className="dropdown-menu radius-5">
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby">
                    Vše
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/webove-stranky">
                    Webové stránky
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/webove-aplikace">
                    Webové aplikace
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/digitalni-marketing">
                    Digitální marketing
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/implementace-ai">
                    Implementace AI
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/videoprodukce">
                    Videoprodukce
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" href="/nase-sluzby/fotoprodukce">
                    Fotoprodukce
                  </Link>
                </li>
              </ul>
            </li>
            <li
              onMouseLeave={handleDropdownMouseLeave}
              onMouseMove={handleDropdownMouseMove}
              className="nav-item dropdown relative"
            >
              <Link
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                href="#"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <RollingText text="O nás" />
              </Link>
              <div className="dropdown-menu radius-5">
                <Link className="dropdown-item" href="/nas-tym">
                  Náš tým
                </Link>
                <Link className="dropdown-item" href="/nejcastejsi-dotazy">
                  Nejčastější dotazy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/portfolio">
                <RollingText text="Portfolio" />
              </a>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/blog">
                <RollingText text="Blog" />
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/kontakty">
                <RollingText text="Kontakty" />
              </Link>
            </li>
          </ul>
        </div>
        <div className="contact-button relative">
          <Link
            href="/kontakty"
            className="btn btn-sm btn-bg main-colorbg radius-5"
          >
            Kontaktujte nás
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;