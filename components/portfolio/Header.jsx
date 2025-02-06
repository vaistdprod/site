'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/Header';

const PortfolioHeader = () => {
  return (
    <Header
      delay={2}
      overlayDark={5}
      className="page-header section-padding flex align-center relative"
      bgContent={
        <Image
          src="https://6seb0zjl38si3gp0.public.blob.vercel-storage.com/bg24-V9U2dJj2OY752zmTv4DPuP5H99SQkW.jpg"
          alt=""
          fill
          className="object-cover"
          priority
          quality={55}
        />
      }
    >
      <div className="row">
        <div className="col-12">
          <div className="text-center pt-80">
            <h1 className="text-u ls1 fz-80">
              Naše <span className="fw-200">portfolio</span>
            </h1>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default PortfolioHeader;
