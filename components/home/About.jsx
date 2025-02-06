import React from 'react';
import Image from 'next/image';
import AnimatedHeading from '@/components/common/animations/AnimatedHeading';

function About() {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row lg-marg">
          <div className="col-lg-5 flex align-center">
            <div className="profile-img w-100 relative radius-250">
              <div className="img relative o-hidden radius-250">
                <Image
                  fill
                  src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/ostrava-pSlmFdt2nyEPo7m43e8YKETSALRTsm.jpg"
                  alt="Centrum Ostravy, nedaleko ulice 28. října, na které sídlí společnost TD Productions."
                  className="object-cover object-center"
                  sizes="(max-width: 991px) 75vw, (max-width: 1199px) 25vw, 30vw"
                />
              </div>
              <span className="icon absolute size-60 radius-20">
                <Image
                  src="/assets/imgs/ae.svg"
                  alt="Logo programu Adobe After Effects"
                  width={75}
                  height={75}
                  className="h-100"
                />
              </span>
              <span className="icon absolute size-60 radius-20">
                <Image
                  src="/assets/imgs/figma.svg"
                  alt="Logo programu Figma"
                  width={75}
                  height={75}
                  className="h-100"
                />
              </span>
              <span className="icon absolute size-60 radius-20">
                <Image
                  src="/assets/imgs/react.svg"
                  alt="Logo knihovny React"
                  width={75}
                  height={75}
                  className="h-100"
                />
              </span>
              <span className="icon absolute size-60 radius-20">
                <Image
                  src="/assets/imgs/wp.svg"
                  alt="Logo CMS WordPress"
                  width={75}
                  height={75}
                  className="h-100"
                />
              </span>
            </div>
          </div>
          <div className="col-lg-7 flex align-center">
            <div className="cont">
              <h2 className="sub-title main-color mb-30">O nás</h2>
              <AnimatedHeading tag="h3" className="mb-30 h4">
                Pomáháme vám přenést vaši vizi{' '}
                <span className="d-revert fw-200">ze světa</span>{' '}
                myšlenek <span className="d-revert fw-200">do světa {' '}</span>{' '}
                reality.
              </AnimatedHeading>
              <p>
                Jsme tým profesionálů s bohatými zkušenostmi v digitálním světě.
                Naší ambicí je přetvořit zdánlivě neproveditelné nápady do hmatatelné reality.
                Sázíme na kreativitu, preciznost a výsledky, které mluví samy za sebe.
              </p>

              <div className="numbers mt-50">
                <div className="row lg-marg">
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 flex align-end mt-20">
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
                            height={46}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="item bord-thin-top pt-30 flex align-end mt-20">
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
                            height={46}
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
    </section>
  );
}

export default About;