'use client';
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faFacebookF } from "@fortawesome/free-brands-svg-icons";

function Team({ members = [] }) {
  if (!Array.isArray(members)) {
    console.error("Byly očekávaní 'members' v řadě, namísto toho jsou zde:", members);
    return null;
  }

  return (
    <section className="team-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="flex align-center mb-30">
            <h2 className="fw-600 fz-70 text-u">
              <span className="">
                Pracujeme pro vás <span className="fw-200">nonstop</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/nas-tym" className="btn btn-sm btn-bord radius-30">
                <span>O nás</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
          <h6 className="sub-title main-color flex align-center">
            <span>Náš tým</span>
            <span className="thin"></span>
          </h6>
        </div>

        <div className="row">
          {members.slice(0, 5).map((member) => (
            <div key={member.slug} className="col-lg-3 col-md-6">
              <div className="item relative o-hidden md-mb50">
                <div className="cont text-center pt-30 pb-30">
                  <Link href={`/nas-tym/${member.slug}`}>
                    <div className="info">
                      <h6>{member.name}</h6>
                      <span className="fz-14 p-color mt-10">{member.role}</span>
                    </div>
                  </Link>

                  <div className="social sub-bg absolute mt-20">
                    <div className="links">
                      {member.instagram && (
                        <Link
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                        >
                          <FontAwesomeIcon icon={faInstagram} />
                        </Link>
                      )}
                      {member.facebook && (
                        <Link
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Facebook`}
                        >
                          <FontAwesomeIcon icon={faFacebookF} />
                        </Link>
                      )}
                      {member.phone && (
                        <Link
                          href={`tel:${member.phone.replace(/\s+/g, "")}`}
                          aria-label={`${member.name} Phone`}
                        >
                          <FontAwesomeIcon icon={faPhone} />
                        </Link>
                      )}
                      {member.email && (
                        <Link
                          href={`mailto:${member.email}`}
                          aria-label={`${member.name} Email`}
                        >
                          <FontAwesomeIcon icon={faEnvelope} />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="img relative z-2">
                  <Link href={`/nas-tym/${member.slug}`} style={{ position: "relative", height: "100%", width: "100%" }}>
                    <Image
                      fill
                      src={member.image}
                      alt={member.name}
                      className="object-cover full-size"
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 25vw"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;