import React from 'react';
import Image from 'next/image';

function Marq() {
  const items = [
    'Webové stránky',
    'Webové aplikace',
    'Digitální marketing',
    'Implementace AI',
    'Fotoprodukce',
    'Videoprodukce'
  ];

  return (
    <section className="marq">
      <div className="main-marq lrg sub-bg pt-20 pb-20 shadow-off">
        <div className="slide-har st1">
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-60">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo"
                      width={33}
                      height={25}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {items.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-60">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo"
                      width={33}
                      height={25}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Marq;