import React from "react";

function Feat({ serviceData }) {
  return (
    <section className="feat">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Proces <span className="fw-200">spolupráce</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <a href="/kontakty" className="btn btn-sm btn-bord radius-30">
                <span>Kontaktujte nás</span>
              </a>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Akční kroky</span>
            <span className="thin"></span>
          </h6>
        </div>

        <div className="row">
          {serviceData.feat?.map((item, idx) => (
            <div className="col-lg-3 col-md-6" key={idx}>
              <div className="item-box radius-15 md-mb50">
                <h3 className="mb-30 p-color stroke-30">{item.step}.</h3>
                <h6 className="mb-20">{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Feat;