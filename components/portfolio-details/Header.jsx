'use client';

import React from 'react';
import Image from 'next/image';
import Header from '@/components/common/header/Header';

const ProjectHeader = ({ data }) => {
  return (
    <Header
      delay={2}
      overlayDark={5}
      className="header header-project flex align-end relative"
      bgContent={
        <Image
          src={data.images[0]}
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
          <div className="caption">
            <h1>{data.title}</h1>
          </div>
        </div>
      </div>
    </Header>
  );
};

export default ProjectHeader;
