"use client";
import React, { useEffect } from "react";
import isInView from "@/common/isInView";
import Image from "next/image";

const SOCIAL_MEDIA = {
  facebook: {
    icon: "fab fa-facebook-f",
    label: "Facebook"
  },
  twitter: {
    icon: "fab fa-x-twitter",
    label: "X"
  },
  instagram: {
    icon: "fab fa-instagram",
    label: "Instagram"
  },
  linkedin: {
    icon: "fab fa-linkedin-in",
    label: "LinkedIn"
  },
};

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
    handleShowProgressValues();
    return () => window.removeEventListener("scroll", handleShowProgressValues);
  }, []);

  return (
    <section className="team-single section-padding pb-0">
      <div className="container">
        <div className="row md-marg justify-content-around bord">
          <div className="col-lg-5">
            <div className="img md-mb50">
              <Image
                src={memberData.image}
                alt={memberData.name}
                width={500}
                height={500}
              />
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
                    <span className="sub-title mr-15">Email:</span>
                    <a href={`mailto:${memberData.email}`}>
                      {memberData.email}
                    </a>
                  </li>
                  <li className="fz-18">
                    <span className="sub-title mr-15">Telefon:</span>
                    <a href={`tel:${memberData.phone}`}>
                      {memberData.phone}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg justify-content-around mt-80">
          <div className="col-lg-6 valign">
            <div className="text md-mb50">
              <h4 className="mb-15">O mně</h4>
              <p>{memberData.about}</p>
              <ul className="rest mt-30 social-icon d-flex align-items-center">
                {Object.entries(SOCIAL_MEDIA).map(([platformKey, { icon, label }]) => {
                  const link = memberData[platformKey];
                  if (!link) return null;

                  return (
                    <li key={platformKey} className="hover-this cursor-pointer ml-10">
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover-anim"
                        aria-label={`Otevřít profil na ${label}`}
                      >
                        <i className={icon} aria-hidden="true"></i>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="skills-box">
              {memberData.skills && memberData.skills.length > 0 ? (
                memberData.skills.map((skill, index) => (
                  <div className="skill-item mb-30" key={index}>
                    <h5 className="sub-title mb-15">
                      {skill.name} {skill.value}
                    </h5>
                    <div className="skill-progress">
                      <div
                        className="progres"
                        data-value={skill.value}
                      ></div>
                    </div>
                  </div>
                ))
              ) : (
                <p>Žádný obsah</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;