'use client';

import loadBackgroudImages from '@/common/loadBackgroudImages';
import React, { useEffect } from 'react';
import Link from 'next/link';

function Next({ data }) {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const { nextProject, prevProject } = data;

  return (
    <section className="next-project sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          {prevProject && (
            <div className="col-md-6 rest">
              <div
                className="text-left box bg-img"
                data-background={prevProject.img}
              >
                <div className="cont d-flex align-items-center">
                  <div>
                    <span className="mr-30 fz-30 fas fa-arrow-left"></span>
                  </div>
                  <div>
                    <h6 className="sub-title fz-16 mb-5">Předchozí projekt</h6>
                    <Link href={prevProject.link} className="fz-40 fw-600 stroke">
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
                className="text-right d-flex box bg-img"
                data-background={nextProject.img}
              >
                <div className="ml-auto">
                  <div className="cont d-flex align-items-center">
                    <div>
                      <h6 className="sub-title fz-16 mb-5">Další projekt</h6>
                      <Link href={nextProject.link} className="fz-40 fw-600 stroke">
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