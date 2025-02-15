'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/header/Header';

const BlogHeaderAlternate = () => {
  return (
    <Header
      delay={2}
      overlayDark={5}
      className="header page-header section-padding flex align-center relative"
      bgContent={
        <Image
        src="/assets/imgs/bg/bg43.jpg"
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
            <h1 className="uppercase ls1 fz-80">Blog</h1>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default BlogHeaderAlternate;