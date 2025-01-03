import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="clean-footer crev">
      <div className="container pb-40 pt-40 ontop">
        <div className="row justify-content-between">
          <div className="col-lg-2">
            <div className="logo icon-img-100 md-mb80">
              <a href="/" aria-label="Home" className="logo-container">
                <Image
                  src="/assets/imgs/logo-light.svg"
                  alt="Company Logo"
                  width={33}
                  height={25}
                  className="logo-image"
                />
              </a>
            </div>
          </div>

          <div className="col-lg-4">
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
              <h6 className="sub-title mb-30">Odkazy</h6>
              <ul className="rest fz-14 opacity-7">
                <li className="mb-15">
                  <a href="/o-nas">O nás</a>
                </li>
                <li className="mb-15">
                  <a href="/nase-sluzby">Naše služby</a>
                </li>
                <li className="mb-15">
                  <a href="/blog">Blog</a>
                </li>
                <li>
                  <a href="/kontakty">Kontakty</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="column subscribe-minimal">
              <h6 className="sub-title mb-30">Newsletter</h6>
              <div className="form-group mb-40">
                <input type="text" name="subscrib" placeholder="Váš email" />
                <button>
                  <span className="ti-location-arrow"></span>
                </button>
              </div>
              <ul className="rest social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a
                    href="https://facebook.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://x.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="X"
                  >
                    <i className="fab fa-x-twitter"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://linkedin.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a
                    href="https://instagram.com/tdprod.cz/"
                    className="hover-anim"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-30 pb-30 mt-80 bord-thin-top">
          <div className="text-center">
            <p className="fz-14">© 2025 Top Dog Enterprises s.r.o.</p>
          </div>
        </div>
      </div>

      <div className="circle-blur">
        <Image
          src="/assets/imgs/patterns/blur1.png"
          alt=""
          width={692}
          height={537}
          className="blur-image"
        />
      </div>
    </footer>
  );
}

export default Footer;