'use client';

import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

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

  return (
    <div
      className="header header-project flex align-items-end relative"
      data-overlay-dark="5"
    >
      <Image
        src={data.images[0]}
        alt=""
        fill
        className="object-cover"
        priority
        quality={55}
      />

      <div className="container relative z-7">
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