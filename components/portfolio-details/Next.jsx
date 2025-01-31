'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Next({ nextProject, prevProject }) {
  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          {prevProject && (
            <div className="col-md-6 rest">
              <div
                className="text-left box"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  src={prevProject.img}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div
                  className="cont d-flex align-items-center"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <div>
                    <span className="mr-30 fz-30 fas fa-arrow-left"></span>
                  </div>
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Předchozí projekt</h6>
                    <Link
                      href={`/portfolio/${prevProject.id}`}
                      className="fz-40 fw-600 stroke"
                    >
                      {prevProject.title}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}

          {nextProject && (
            <div className="col-md-6 rest">
              <div
                className="text-right d-flex box"
                style={{ position: 'relative', overflow: 'hidden' }}
              >
                <Image
                  src={nextProject.img}
                  alt=""
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
                <div
                  className="ml-auto"
                  style={{ position: 'relative', zIndex: 2 }}
                >
                  <div className="cont d-flex align-items-center">
                    <div>
                      <h6 className="sub-title fz-16 mb-5">Další projekt</h6>
                      <Link
                        href={`/portfolio/${nextProject.id}`}
                        className="fz-40 fw-600 stroke"
                      >
                        {nextProject.title}
                      </Link>
                    </div>
                    <div>
                      <span className="ml-30 fz-30 fas fa-arrow-right"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div>
        <Link href="/portfolio" className="all-works-btn text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">Všechny projekty</span>
        </Link>
      </div>
    </section>
  );
}

export default Next;