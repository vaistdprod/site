import React from 'react';
import Image from 'next/image';

export default function NumbersContent() {
  return (
    <section className="numbers section-padding pt-0">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="row">
            <div className="col-lg-4">
              <h6 className="title-border fz-14 relative uppercase ls1 radius-30 mb-30">TD záruka</h6>
            </div>
            <div className="col-lg-8">
              <div className="text">
                <h4>
                  Jsme vašimi partnery od prvotního plánování projektu až po jeho finální spuštění a následnou údržbu.
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row lg-marg justify-center">
          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20 md-mb30">
              <div>
                <h3 className="fw-300 mb-10">100%</h3>
                <h6 className="p-color sub-title">garance spokojenosti</h6>
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

          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20 md-mb30">
              <div>
                <h3 className="fw-300 mb-10">40+</h3>
                <h6 className="p-color sub-title">úspěšných projektů</h6>
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

          <div className="col-lg-4 col-md-6">
            <div className="item bord-thin-top pt-30 flex align-end mt-20">
              <div>
                <h3 className="fw-300 mb-10">24/7</h3>
                <h6 className="p-color sub-title">technická podpora</h6>
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
    </section>
  );
}
