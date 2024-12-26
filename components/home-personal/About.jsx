import React from 'react';

function About() {
  return (
    <section className="about-author section-padding">
      <div className="container with-pad">
        <div className="row lg-marg">
          <div className="col-lg-5 valign">
            <div className="profile-img">
              <div className="img">
                <img src="/assets/imgs/header/p2.jpg" alt="" />
              </div>
              <span className="icon">
                <img src="/assets/imgs/ae.svg" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/figma.svg" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/react.svg" alt="" />
              </span>
              <span className="icon">
                <img src="/assets/imgs/wp.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="col-lg-7 valign">
            <div className="cont">
              <h6 className="sub-title main-color mb-30">O nás</h6>
              <div className="text">
                <h4 className="mb-30">
                  Jsme tým profesionálů{' '}
                  <span className="d-revert fw-200">
                  s bohatými zkušenostmi v digitálním světě. Naší ambicí je přetvořit zdánlivě neproveditelné nápady do hmatatelné reality. Sázíme na
                  </span>{' '}
                  kreativitu, preciznost a výsledky, které mluví samy za sebe.
                </h4>
                <p>
                  I enjoy turning complex problems into simple, beautiful and
                  intuitive designs. My aim is to bring across your message and
                  identity in the most creative way. I created web design for
                  many famous brand companies.
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
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="item bord-thin-top pt-30 d-flex align-items-end mt-20">
                        <div>
                          <h3 className="fw-300 mb-10">30+</h3>
                          <h6 className="p-color sub-title">
                            hotových projektů
                          </h6>
                        </div>
                        <div className="ml-auto">
                          <div className="icon-img-40">
                            <img src="/assets/imgs/arw0.png" alt="" />
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
