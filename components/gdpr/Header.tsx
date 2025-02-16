'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/header/Header';

const PrivacyHeader = () => {
  return (
    <Header
      delay={2}
      overlayDark={5}
      className="header page-header section-padding flex align-center relative"
      bgContent={
        <Image
        src="/assets/imgs/bg/bg58.jpg"
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
            <h1 className="uppercase ls1 fz-80">Ochrana osobních údajů</h1>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default PrivacyHeader;