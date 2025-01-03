import React from "react";

const servicesData = [
  {
    id: 1,
    number: "01",
    category: "Web Design",
    title: "UI / UX Design",
    details: ["Modern Strategy", "UX & Design", "Content Writing"],
    icon: "/assets/imgs/serv-icons/5.png"
  },
  {
    id: 2,
    number: "02",
    category: "Web Design",
    title: "Brand Strategy",
    details: ["Modern Strategy", "UX & Design", "Content Writing"],
    icon: "/assets/imgs/serv-icons/4.png"
  },
  {
    id: 3,
    number: "03",
    category: "Web Design",
    title: "SEO / Marketing",
    details: ["Modern Strategy", "UX & Design", "Content Writing"],
    icon: "/assets/imgs/serv-icons/3.png"
  }
];

function Services() {
  return (
    <section className="services-inline2 section-padding">
      <div className="container ontop">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center">
            <div>
              <span className="sub-title main-color mb-5">Our Specialize</span>
              <h3 className="fw-600 fz-50 text-u d-rotate wow">
                <span className="rotate-text">
                  Featured <span className="fw-200">Services.</span>
                </span>
              </h3>
            </div>
            <div className="ml-auto vi-more">
              <a
                href="/page-services"
                className="butn butn-sm butn-bord radius-30"
              >
                <span>View All</span>
              </a>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
        </div>

        {servicesData.map((service, idx) => (
          <div
            className={`item ${idx === servicesData.length - 1 ? "bord-thin-bottom" : ""}`}
            key={service.id}
          >
            <div className="row md-marg align-items-end">
              <div className="col-lg-2">
                <span className="num md-mb10">{service.number}</span>
              </div>
              <div className="col-lg-4">
                <div className="md-mb30">
                  <span className="sub-title main-color mb-10">{service.category}</span>
                  <h2>
                    {service.title.split(" ")[0]}
                    <span className="fw-200">
                      {" " + service.title.split(" ").slice(1).join(" ")}
                    </span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-4 md-mb30">
                <ul className="rest dot-list">
                  {service.details.map((detail) => (
                    <li className="fz-20 p-color mb-5" key={detail}>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="col-lg-2 d-flex justify-content-center">
                <div className="icon-img-80 opacity-7">
                  <img src={service.icon} alt={service.title} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;