import React from 'react';

export default function ContactFormContent({
  formData,
  status,
  errors,
  handleChange,
  handleSubmit,
}) {
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 flex align-center">
            <div className="sec-head info-box w-full md-mb80">
              <div className="phone fz-30 fw-600 underline main-color">
                <a href="tel:+420737065717">+420 737 065 717</a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Pobočka Ostrava</h6>
                <a href="https://maps.app.goo.gl/PNtdRwVEs8Q1e7gu7">
                  28. října 205/45, 702 00 Ostrava
                </a>
              </div>
              <div className="morinfo mt-50 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Fakturační adresa</h6>
                <a href="https://maps.app.goo.gl/oqKgVMZXAZaKrVV29">
                  Příčná 1892/4, Nové Město, 110 00 Praha 1
                </a>
              </div>
              <div className="morinfo mt-30 pb-30 bord-thin-bottom">
                <h6 className="mb-15">Email</h6>
                <a href="mailto:info@tdprod.cz">info@tdprod.cz</a>
              </div>
              <div className="social-icon mt-50">
                <a href="https://facebook.com/tdprod.cz/" aria-label="Navštivte náš Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/tdprodcz/" aria-label="Navštivte naše X">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/tdprod.cz/" aria-label="Navštivte náš LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/tdprod.cz/" aria-label="Navštivte náš Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1 flex align-center">
            <div className="w-full">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Kontaktní formulář</h6>
                <h3 className="uppercase ls1">
                  Zanechte nám <span className="fw-200">zprávu</span>
                </h3>
              </div>
              <form id="main-form" className="form2" onSubmit={handleSubmit}>
                <div className="messages">{status}</div>
                <div className="controls row">
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="formular_jmeno"
                        type="text"
                        name="jmeno"
                        placeholder="Jméno"
                        value={formData.jmeno}
                        onChange={handleChange}
                        required
                      />
                      {errors.jmeno && <p className="error-text">{errors.jmeno}</p>}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-30">
                      <input
                        id="formular_email"
                        type="email"
                        name="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      {errors.email && <p className="error-text">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group mb-30">
                      <label>Potřebuji pomoct s...</label>
                      <div className="checkbox-group">
                        {[
                          'Webovými stránkami',
                          'Aplikací na míru',
                          'Marketingem',
                          'Umělou inteligencí',
                          'Fotoprodukcí / videoprodukcí',
                        ].map((item, index) => (
                          <div className="form-check" key={index}>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id={`formular_potrebuji${index + 1}`}
                              name="potrebuji"
                              value={item}
                              checked={formData.potrebuji.includes(item)}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label cursor-pointer"
                              htmlFor={`formular_potrebuji${index + 1}`}
                            >
                              {item}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-group">
                      <textarea
                        id="formular_zprava"
                        name="zprava"
                        placeholder="Zpráva"
                        rows="4"
                        value={formData.zprava}
                        onChange={handleChange}
                        required
                      ></textarea>
                      {errors.zprava && <p className="error-text">{errors.zprava}</p>}
                    </div>
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="btn btn-full w-full btn-bord radius-30"
                        id="odeslat-kontaktni-formular"
                      >
                        <span className="text">Odeslat</span>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
              {status && <p>{status}</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}