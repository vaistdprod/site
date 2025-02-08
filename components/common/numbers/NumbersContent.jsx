// components/home/NumbersContent.jsx
import React from 'react';

export default function NumbersContent() {
  return (
    <section className="numbers-crev relative section-padding">
      <div className="container">
        <div className="row lg-marg justify-center">
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">100%</h3>
              </div>
              <h6 className="p-color sub-title">garance spokojenosti</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center md-mb50">
              <div className="o-hidden">
                <h3 className="stroke">40+</h3>
              </div>
              <h6 className="p-color sub-title">vyhotovených projektů</h6>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="item text-center">
              <div className="o-hidden">
                <h3 className="stroke">24x7</h3>
              </div>
              <h6 className="p-color sub-title">podpora zákazníků</h6>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
