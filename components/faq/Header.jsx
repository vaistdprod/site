'use client';
import React, { useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';

function Header() {
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
      className="header page-header section-padding valign relative"
      data-overlay-dark="5"
    >
      <Image
        src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/bg43-j43iVV8imYG0SWudtzcTxqqeOkmbAP.jpg"
        alt=""
        fill
        className="object-cover"
        priority
        quality={55}
      />
      <div className="container relative z-7 pt-80">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-u ls1 fz-80">
                Nejčastější <span className="fw-200">dotazy</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;