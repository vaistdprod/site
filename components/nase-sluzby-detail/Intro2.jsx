"use client";
import React from "react";

function Intro2({ serviceData }) {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }

  return (
    <section className="intro-accord">
      <div className="container ontop">
        <div className="row xlg-marg">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="/assets/imgs/arw2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div>
              <div className="sec-head mb-50">
                <h6 className="sub-title main-color mb-15">
                  {serviceData.intro2?.whyTitle || "Why choose us?"}
                </h6>
                <h3>
                  The creative process behind <br /> our digital marketing.
                </h3>
              </div>

              <div className="accordion bord">
                {serviceData.intro2?.accordion?.map((item, idx) => (
                  <div
                    className={`item ${idx === 0 ? "active" : ""} wow fadeInUp`}
                    data-wow-delay={`.${idx + 1}s`}
                    key={idx}
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>{item.title}</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div
                      className={`accordion-info ${
                        idx === 0 ? "active" : ""
                      }`}
                      style={{ maxHeight: idx === 0 ? "300px" : 0 }}
                    >
                      <p>{item.desc}</p>
                    </div>
                  </div>
                )) || (
                  <div className="item active wow fadeInUp">
                    <div className="title" onClick={openAccordion}>
                      <h6>Default Title</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info active" style={{ maxHeight: "300px" }}>
                      <p>No accordion data found.</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro2;