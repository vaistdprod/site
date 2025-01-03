"use client";
import React, { useEffect } from "react";
import isInView from "@/common/isInView";

function Intro({ memberData }) {
  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute("data-value");
      },
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", handleShowProgressValues);
    return () => window.removeEventListener("scroll", handleShowProgressValues);
  }, []);

  return (
    <section className="team-single section-padding pb-0">
      <div className="container">
        <div className="row md-marg justify-content-around bord">
          <div className="col-lg-5">
            <div className="img md-mb50">
              <img src={memberData.image} alt={memberData.name} />
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="cont">
              <h2>{memberData.name}</h2>
              <h6 className="sub-title main-color mt-10">{memberData.role}</h6>
              <div className="text mt-15">
                <p>{memberData.about}</p>
              </div>
              <div className="info mt-30">
                <ul className="rest">
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">RESPONSIBILITY :</span>
                    {memberData.role}
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Experiences :</span>
                    {memberData.experience}
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Date Of Birth :</span>
                    {memberData.dob}
                  </li>
                  <li className="mb-25 fz-18">
                    <span className="sub-title mr-15">Email :</span>
                    {memberData.email}
                  </li>
                  <li className="fz-18">
                    <span className="sub-title mr-15">Phone :</span>
                    {memberData.phone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg justify-content-around mt-80">
          <div className="col-lg-6 valign">
            <div className="text md-mb50">
              <h4 className="mb-15">About Me</h4>
              <p>{memberData.about}</p>
              <ul className="rest mt-30 social-icon d-flex align-items-center">
                <li className="hover-this cursor-pointer">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="hover-this cursor-pointer ml-10">
                  <a href="#0" className="hover-anim">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="skills-box">
              <div className="skill-item mb-30">
                <h5 className="sub-title mb-15">UI / UX Design 90%</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="90%"></div>
                </div>
              </div>
              <div className="skill-item mb-30">
                <h5 className="sub-title mb-15">Digital Marketing 80%</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h5 className="sub-title mb-15">Development 85%</h5>
                <div className="skill-progress">
                  <div className="progres" data-value="85%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
