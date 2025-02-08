// components/home/NavbarContent.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import RollingText from '@/components/common/rolling-text/RollingText';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function NavbarContent({
  onToggleNav,
  onDropdownMouseMove,
  onDropdownMouseLeave,
  collapseRef,
}) {
  return (
    <nav className="navbar navbar-expand-lg">
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
          onClick={onToggleNav}
        >
          <span className="icon-bar">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div
          ref={collapseRef}
          id="navbarSupportedContent"
          className="collapse navbar-collapse justify-center"
        >
          <ul className="navbar-nav">
            <li
              onMouseMove={onDropdownMouseMove}
              onMouseLeave={onDropdownMouseLeave}
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
              onMouseMove={onDropdownMouseMove}
              onMouseLeave={onDropdownMouseLeave}
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
