'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Next({ nextProject, prevProject }) {
  return (
    <section className="next-project relative sub-bg">
      <div className="container-fluid rest">
        <div className="row">
          {prevProject && (
            <div className="col-md-6 rest">
              <div className="text-left box relative o-hidden">
                <Image
                  src={prevProject.img}
                  alt=""
                  fill
                  className="object-cover"
                  />
                <div
                  className="cont z-3 relative flex align-center"
                >
                  <div>
                    <FontAwesomeIcon icon={faArrowLeft} className="mr-30 fz-30" />
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
                className="text-right flex box relative o-hidden"
              >
                <Image
                  src={nextProject.img}
                  alt=""
                  fill
                  className="object-cover"
                  />
                <div
                  className="ml-auto relative z-2"
                >
                  <div className="cont z-3 relative flex align-center">
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
                      <FontAwesomeIcon icon={faArrowRight} className="ml-30 fz-30" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <Link href="/portfolio" className="all-works-btn absolute z-4 text-center">
          <span className="ti-view-grid fz-24 mb-10"></span>
          <span className="d-block fz-12 text-u ls1">Všechny projekty</span>
        </Link>
      </div>
    </section>
  );
}

export default Next;