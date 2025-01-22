'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';

function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [formData, setFormData] = useState({
    jmeno: '',
    email: '',
    potrebuji: [],
    zprava: '',
  });
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      let updatedPotrebuji = [...formData.potrebuji];
      if (checked) {
        updatedPotrebuji.push(value);
      } else {
        updatedPotrebuji = updatedPotrebuji.filter((item) => item !== value);
      }
      setFormData({ ...formData, potrebuji: updatedPotrebuji });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.jmeno || formData.jmeno.length < 2) {
      newErrors.jmeno = 'Jméno musí mít alespoň 2 znaky.';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailRegex.test(formData.email)) {
      newErrors.email = 'Zadejte platnou emailovou adresu.';
    }
    if (formData.zprava.length < 10) {
      newErrors.zprava = 'Zpráva musí mít alespoň 10 znaků.';
    }
    if (!captchaToken) {
      newErrors.captcha = 'Ověřte, že nejste robot.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    if (!validateForm()) {
      return;
    }

    setStatus('Odesílání...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, captchaToken }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('Zpráva úspěšně odeslána!');
        setFormData({
          jmeno: '',
          email: '',
          potrebuji: [],
          zprava: '',
        });
        setCaptchaToken(null);
      } else {
        setStatus(data.message || 'Nepodařilo se odeslat zprávu.');
      }
    } catch (error) {
      console.error('Chyba:', error);
      setStatus('Došlo k chybě při odesílání zprávy.');
    }
  };

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available');
      return;
    }

    try {
      const token = await executeRecaptcha('contact_form_submission');
      setCaptchaToken(token);
      setErrors((prev) => ({ ...prev, captcha: null }));
    } catch (error) {
      console.error('ReCAPTCHA error:', error);
      setErrors((prev) => ({ ...prev, captcha: 'ReCAPTCHA verification failed.' }));
    }
  }, [executeRecaptcha]);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="sec-head info-box full-width md-mb80">
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
                <a href="https://facebook.com/tdprod.cz/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://x.com/tdprodcz/">
                  <i className="fab fa-x-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/tdprod.cz/">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://instagram.com/tdprod.cz/">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-7 offset-lg-1 valign">
            <div className="full-width">
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Kontaktní formulář</h6>
                <h3 className="text-u ls1">
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
                      {errors.jmeno && (
                        <p className="error-text">{errors.jmeno}</p>
                      )}
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
                      {errors.email && (
                        <p className="error-text">{errors.email}</p>
                      )}
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
                              className="form-check-label"
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
                      {errors.zprava && (
                        <p className="error-text">{errors.zprava}</p>
                      )}
                    </div>
                    {errors.captcha && (
                      <p className="error-text">{errors.captcha}</p>
                    )}
                    <div className="mt-30">
                      <button
                        type="submit"
                        className="btn btn-full btn-bord radius-30"
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
      <style jsx>{`
        .error-text {
          color: red;
          font-size: 0.875rem;
          margin-top: 5px;
        }
      `}</style>
    </section>
  );
}

function Contact() {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
      scriptProps={{ async: true, defer: true, appendTo: 'head' }}
    >
      <ContactForm />
    </GoogleReCaptchaProvider>
  );
}

export default Contact;