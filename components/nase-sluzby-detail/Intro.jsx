import React from "react";

function Intro({ serviceData }) {
  return (
    <section className="intro section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-8">
            <div className="row lg-marg">
              <div className="col-md-6">
                <div>
                  <h6 className="sub-title main-color mb-15">Description</h6>
                  <h3 className="mb-30">
                    We believe in the power of <span className="fw-300">individual</span>{" "}
                    <span className="fw-300">contribution.</span>
                  </h3>
                </div>
              </div>
              <div className="col-md-6">
                <div className="text">
                  <p className="mb-15">{serviceData.desc}</p>
                  <p>
                    Taken possession of my entire soul, like these sweet
                    mornings of spring which i enjoy with my whole.
                  </p>
                  <div className="mt-30">
                    <ul className="rest dot-list">
                      {serviceData.bullets?.map((bullet, idx) => (
                        <li className="mb-10" key={idx}>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="numbers mt-80 md-mb50">
              <div className="row lg-marg">
                {serviceData.stats?.map((item, idx) => (
                  <div className="col-md-6" key={idx}>
                    <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20 sm-mb30">
                      <div>
                        <h3 className="fw-300 mb-10">{item.value}</h3>
                        <h6 className="p-color sub-title">{item.label}</h6>
                      </div>
                      <div className="ml-auto">
                        <div className="icon-img-60">
                          <img src="/assets/imgs/logo-light-stroke.svg" alt="logo" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="img-full fit-img">
              <img src={serviceData.img} alt={serviceData.title} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;