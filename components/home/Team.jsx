import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Team({ members = [] }) {

  if (!Array.isArray(members)) {
    console.error("Byly očekávaní 'members' v řadě, namísto toho jsou zde:", members);
    return null;
  }

  return (
    <section className="team-crev section-padding">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Pracujeme pro vás <span className="fw-200">nonstop</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/nas-tym" className="btn btn-sm btn-bord radius-30">
                <span>O nás</span>
              </Link>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Náš tým</span>
            <span className="thin"></span>
          </h6>
        </div>

        <div className="row">
          {members.slice(0, 5).map((member) => (
            <div key={member.slug} className="col-lg-3 col-md-6">
              <div className="item md-mb50">
                <div className="cont text-center pt-30 pb-30">
                  <Link href={`/nas-tym/${member.slug}`}>
                    <div className="info">
                      <h6>{member.name}</h6>
                      <span className="fz-14 p-color mt-10">{member.role}</span>
                    </div>
                  </Link>

                  <div className="social mt-20">
                    <div className="links">
                      {member.instagram && (
                        <Link
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Instagram`}
                        >
                          <i className="fab fa-instagram"></i>
                        </Link>
                      )}
                      {member.facebook && (
                        <Link
                          href={member.facebook}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} Facebook`}
                        >
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      )}
                      {member.phone && (
                        <Link href={`tel:${member.phone.replace(/\s+/g, '')}`} aria-label={`${member.name} Phone`}>
                          <i className="fas fa-phone"></i>
                        </Link>
                      )}
                      {member.email && (
                        <Link href={`mailto:${member.email}`} aria-label={`${member.name} Email`}>
                          <i className="fas fa-envelope"></i>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>

                <div className="img">
                  <Link href={`/nas-tym/${member.slug}`}>
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={300}
                      height={300}
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
