import React from 'react';

function Construction() {
  const marquess = ['Stránka ve výstavbě'];
  const AllMarquess = Array(8).fill(marquess).flat();

  return (
    <section className="page-error construction section-padding valign">
      <div className="container">
        <div className="text-center">
          <h1>Stavíme</h1>
          <p>Na této stránce se momentálně pracuje.</p>
          <a
            href="/"
            className="btn btn-md btn-bg main-colorbg radius-30 mt-30"
          >
            <span className="text">Zpět domů</span>
          </a>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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
                      <i className="fas fa-exclamation-triangle"></i>
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