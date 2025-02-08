// components/home/FAQSContent.jsx
import React from 'react';
import faqData from '@/data/faqData';

export default function FAQSContent({ onAccordionClick }) {
  return (
    <section className="page-faqs section-padding pb-0 relative">
      <div className="container">
        <div className="row justify-center">
          <div className="col-lg-10">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">Nejčastější dotazy</h6>
                <h3>
                  Zajímá vás víc? Projděte si naši sekci často kladených otázek.
                </h3>
              </div>
              <div className="accordion bord">
                {faqData.map((item, idx) => (
                  <div
                    key={idx}
                    className={`item ${idx === 0 ? 'active' : ''} fadeInUp`}
                  >
                    <div onClick={onAccordionClick} className="title">
                      <h6>{item.question}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div
                      className={`accordion-info ${idx === 0 ? 'active' : ''}`}
                      style={{ maxHeight: idx === 0 ? '300px' : '0px' }}
                    >
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
