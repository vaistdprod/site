'use client';

import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';

function Header({ data }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2');
    tl.fromTo(
      '.header .container',
      { opacity: 0, translateY: 40 },
      { opacity: 1, translateY: 0 },
      '-=0'
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="header header-project bg-img d-flex align-items-end"
      data-background={data.images[0]}
      data-overlay-dark="9"
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="caption">
              <h1>{data.title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;