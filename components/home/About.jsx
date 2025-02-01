import React from 'react';
import Image from 'next/image';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div
                className="img"
                style={{ position: "relative" }}
              >
                <Image
                  fill
                  src="/assets/imgs/ostrava.jpg"
                  alt="Centrum Ostravy, nedaleko ulice 28. října, na které sídlí společnost TD Productions."
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 991px) 100vw, 50vw"
                />
              </div>
              <span className="icon">
                <Image
                  src="/assets/imgs/ae.svg"
                  alt="Logo programu Adobe After Effects"
                  width={75}
                  height={75}
                />
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/figma.svg"
                  alt="Logo programu Figma"
                  width={75}
                  height={75}
                />
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/react.svg"
                  alt="Logo knihovny React"
                  width={75}
                  height={75}
                />
              </span>
              <span className="icon">
                <Image
                  src="/assets/imgs/wp.svg"
                  alt="Logo CMS WordPress"
                  width={75}
                  height={75}
                />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">O nás</h6>
              <div className="text">
                <h4 className="mb-30">
                  Pomáháme vám přenést vaši vizi {' '}
                  <span className="d-revert fw-200">
                  ze světa
                  </span>{' '}
                  myšlenek <span className="d-revert fw-200">
                  do světa {' '}
                  </span>{' '}
                  reality.
                </h4>
                <p>
                  Jsme tým profesionálů s bohatými zkušenostmi v digitálním světě.
                  Naší ambicí je přetvořit zdánlivě neproveditelné nápady do hmatatelné reality.
                  Sázíme na kreativitu, preciznost a výsledky, které mluví samy za sebe.
                </p>

                <div className="numbers mt-50">
                  <div className="row lg-marg">
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">100%</h3>
                          <h6 className="p-color sub-title">
                            garance spokojenosti
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-60">
                            <Image
                              src="/assets/imgs/logo-light-stroke.svg"
                              alt="Logo TD Productions"
                              width={60}
                              height={60}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">40+</h3>
                          <h6 className="p-color sub-title">
                            hotových projektů
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-60">
                            <Image
                              src="/assets/imgs/logo-light-stroke.svg"
                              alt="Logo TD Productions"
                              width={60}
                              height={60}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;