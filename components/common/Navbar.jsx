"use client";

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import RollingText from '@/components/common/RollingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navRef = useRef(null);
  const collapseRef = useRef(null);

  function handleScroll() {
    const bodyScroll = window.scrollY;
    if (navRef.current) {
      if (bodyScroll > 300) navRef.current.classList.add('nav-scroll');
      else navRef.current.classList.remove('nav-scroll');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleDropdownMouseMove(event) {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.add('show');
  }

  function handleDropdownMouseLeave(event) {
    const dropdownMenu = event.currentTarget.querySelector('.dropdown-menu');
    if (dropdownMenu) dropdownMenu.classList.remove('show');
  }

  function handleToggleNav() {
    if (collapseRef.current) {
      if (collapseRef.current.classList.contains('show')) {
        collapseRef.current.classList.remove('show');
      } else {
        collapseRef.current.classList.add('show');
      }
    }
  }

  return (
    <nav ref={navRef} className="navbar navbar-expand-lg">
      <div className="container o-hidden">
        <Link className="logo relative icon-img-100" href="/">
          <Image
            src="/assets/imgs/logo-light.svg"
            alt="Logo TD Productions"
            width={50}
            height={38}
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
          ref={collapseRef}
          className="collapse navbar-collapse justify-center"
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
              <ul className="dropdown-menu sub-bg m-0 z-1000 radius-5">
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
              <div className="dropdown-menu sub-bg m-0 z-1000 radius-5">
                <Link className="dropdown-item" href="/nas-tym">
                  Náš tým
                </Link>
                <Link className="dropdown-item" href="/nejcastejsi-dotazy">
                  Nejčastější dotazy
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/portfolio">
                <RollingText text="Portfolio" />
              </Link>
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
