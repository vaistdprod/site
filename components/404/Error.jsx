import React from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

function Error() {
  const marquess = ['Stránka nenalezena'];
  const AllMarquess = Array(8).fill(marquess).flat();

  return (
    <section className="page-error section-padding valign">
      <div className="container">
        <div className="text-center">
          <h1>404</h1>
          <p>Stránka, kterou hledáte, byla přesunuta, přejmenována nebo neexistuje.</p>
          <Link href="/" className="btn btn-md btn-bg main-colorbg radius-30 mt-30">
            <span className="text">Zpět domů</span>
          </Link>
        </div>
      </div>
      <div className="marq">
        <div className="main-marq">
          <div className="slide-har st1 strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="d-flex align-items-center">
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
                  <h4 className="d-flex align-items-center">
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
        <div className="main-marq">
          <div className="slide-har st2 non-strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="d-flex align-items-center">
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
                  <h4 className="d-flex align-items-center">
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
        <div className="main-marq">
          <div className="slide-har st1 strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="d-flex align-items-center">
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
                  <h4 className="d-flex align-items-center">
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
        <div className="main-marq">
          <div className="slide-har st2 non-strok">
            <div className="box">
              {AllMarquess.map((item, i) => (
                <div key={i} className="item">
                  <h4 className="d-flex align-items-center">
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
                  <h4 className="d-flex align-items-center">
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

export default Error;