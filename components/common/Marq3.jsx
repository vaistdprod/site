import React from 'react';
import Image from 'next/image'

function Marq() {
  const marquee = [
    'Webové stránky',
    'Webové aplikace',
    'Digitální marketing',
    'Implementace AI',
    'Fotoprodukce',
    'Videoprodukce',
  ];
  return (
    <section className="opacity-7">
      <div className="main-marq xlrg o-hidden">
        <div className="slide-bar st2 non-stroke">
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo TD Productions"
                      width={50}
                      height={50}
                    />
                  </span>
                </h4>
              </div>
            ))}
          </div>
          <div className="box">
            {marquee.map((item, i) => (
              <div key={i} className="item">
                <h4 className="d-flex align-items-center">
                  <span>{item}</span>
                  <span className="icon-img-50 ml-40">
                    <Image
                      src="/assets/imgs/logo-light.svg"
                      alt="Logo TD Productions"
                      width={50}
                      height={50}
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
