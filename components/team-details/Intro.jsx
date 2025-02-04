'use client';
import React, { useEffect } from "react";
import isInView from "@/common/isInView";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faXTwitter, faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const SOCIAL_MEDIA = {
  facebook: {
    icon: faFacebookF,
    label: "Facebook"
  },
  twitter: {
    icon: faXTwitter,
    label: "X"
  },
  instagram: {
    icon: faInstagram,
    label: "Instagram"
  },
  linkedin: {
    icon: faLinkedinIn,
    label: "LinkedIn"
  }
};

function Intro({ memberData }) {
  function handleShowProgressValues() {
    isInView({
      selector: ".skill-progress .progres",
      isElements: true,
      callback: (element) => {
        element.style.width = element.getAttribute("data-value");
      }
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
        <div className="row md-marg justify-around bord">
          <div className="col-lg-5">
            <div className="img md-mb50 relative">
              <Image
                src={memberData.image}
                alt={memberData.name}
                fill
                className="object-cover"
                sizes="(max-width: 991px) 100vw, 42vw"
                priority
              />
            </div>
          </div>
          <div className="col-lg-6 flex align-center">
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
                    <a href={`mailto:${memberData.email}`}>{memberData.email}</a>
                  </li>
                  <li className="fz-18">
                    <span className="sub-title mr-15">Telefon:</span>
                    <a href={`tel:${memberData.phone}`}>{memberData.phone}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row md-marg justify-around mt-80">
          <div className="col-lg-6 flex align-center">
            <div className="text md-mb50">
              <h4 className="mb-15">O mně</h4>
              <p>{memberData.about}</p>
              <ul className="rest mt-30 social-icon flex align-center">
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
                        <FontAwesomeIcon icon={icon} aria-hidden="true" />
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
                      <div className="progres" data-value={skill.value}></div>
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