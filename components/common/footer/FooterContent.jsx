// components/home/FooterContent.jsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faXTwitter, faLinkedinIn, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function FooterContent({
  email,
  agreed,
  msg,
  handleSubscribe,
  setEmail,
  setAgreed,
}) {
  return (
    <footer className="clean-footer crev relative">
      <div className="container pb-40 pt-40 relative z-7">
        <div className="row justify-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <Link href="/" aria-label="Domů">
                <Image
                  src="/assets/imgs/logo-light.svg"
                  alt="Logo TD Productions"
                  width={198}
                  height={150}
                />
              </Link>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Kontakt</h6>
              <h6 className="p-color fw-400">
                <a
                  href="https://maps.app.goo.gl/ZrSaQYLotGqCciX79"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-color underline"
                  aria-label="Zobrazit na Google Maps"
                >
                  28. října 205/45 <br /> 702 00, Ostrava
                </a>
              </h6>
              <h6 className="mt-30 mb-15">
                <a
                  href="mailto:info@tdprod.cz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-color underline"
                  aria-label="Odeslat email na info@tdprod.cz"
                >
                  info@tdprod.cz
                </a>
              </h6>
              <a
                href="tel:+420737065717"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Zavolat +420 737 065 717"
              >
                <span className="fz-22 main-color">+420 737 065 717</span>
              </a>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Naše služby</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/nase-sluzby/webove-stranky">Webové stránky</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nase-sluzby/webove-aplikace">Webové aplikace</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nase-sluzby/digitalni-marketing">Digitální marketing</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nase-sluzby/implementace-ai">Implementace AI</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nase-sluzby/videoprodukce">Videoprodukce</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nase-sluzby/fotoprodukce">Fotoprodukce</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="column md-mb50">
              <h6 className="sub-title mb-30">Odkazy</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <Link href="/nas-tym">Náš tým</Link>
                </li>
                <li className="mb-15">
                  <Link href="/nejcastejsi-dotazy">Nejčastější dotazy</Link>
                </li>
                <li className="mb-15">
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li className="mb-15">
                  <Link href="/blog">Blog</Link>
                </li>
                <li>
                  <Link href="/kontakty">Kontakty</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <form onSubmit={handleSubscribe}>
                <div className="form-group relative mb-40">
                  <input
                    type="text"
                    name="subscribe"
                    placeholder="Váš email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" aria-label="Přihlásit se k odběru">
                    <FontAwesomeIcon icon={faPaperPlane} aria-hidden="true" />
                  </button>
                  <div className="agree-form mt-20">
                    <input
                      type="checkbox"
                      id="agree"
                      className="cursor-pointer"
                      checked={agreed}
                      onChange={() => setAgreed(!agreed)}
                    />
                    <label htmlFor="agree" className="fz-12 p-color underline">
                      Souhlasím se <Link href="/ochrana-osobnich-udaju">zpracováním osobních údajů</Link>.
                    </label>
                  </div>
                  {msg && <p>{msg}</p>}
                </div>
              </form>
              <ul className="rest social-icon flex align-center">
                <li className="hover-this cursor-pointer">
                  <a
                    href="https://facebook.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="Facebook"
                  >
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://x.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="X"
                  >
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://linkedin.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="LinkedIn"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://instagram.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="Instagram"
                  >
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">© 2025 Top Dog Enterprises, s.r.o.</p>
          </div>
        </div>
      </div>
      <div className="circle-blur">
        <Image
          src="/assets/imgs/bg/blur1.png"
          alt=""
          width={692}
          height={537}
          className="blur-image"
        />
      </div>
    </footer>
  );
}
