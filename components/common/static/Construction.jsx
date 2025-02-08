import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Construction() {
  const marquess = ['Stránka ve výstavbě'];
  const AllMarquess = Array(8).fill(marquess).flat();

  return (
    <section className="page-error construction section-padding flex align-center">
      <div className="container">
        <div className="text-center">
          <h1 className="fw-700">Stavíme</h1>
          <p>Na této stránce se momentálně pracuje.</p>
          <Link href="/" className="btn btn-md btn-bg main-colorbg radius-30 mt-30">
            <span className="text">Zpět domů</span>
          </Link>
        </div>
      </div>
      <div className="marq">
        <div className="main-marq p-0 relative">
          <div className="slide-bar relative st1 flex strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="marq">
        <div className="main-marq p-0 relative">
          <div className="slide-bar relative st2 flex non-stroke">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="marq">
        <div className="main-marq p-0 relative">
          <div className="slide-bar relative st1 flex strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="marq">
        <div className="main-marq p-0 relative">
          <div className="slide-bar relative st2 flex non-stroke">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="flex align-center">
                    <span>{item}</span>
                    <span className="ml-40">
                      <FontAwesomeIcon icon={faExclamationTriangle} />
                    </span>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Construction;