'use client';

import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Image from 'next/image';
import Link from 'next/link';

function Header({ title, author, date, comments, coverImage, tags }) {
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo('.header', { y: 200 }, { y: 0 }, '+=2.5');
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
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption">
              <div className="sub-title fz-12">
                {tags && tags.slice(0, 2).map((tag, index) => (
                  <React.Fragment key={tag}>
                    <a href={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <span>{tag}{index < 1 ? ', ' : ''}</span>
                    </a>
                  </React.Fragment>
                ))}
              </div>
              <h1 className="fz-55 mt-30">{title}</h1>
            </div>
            <div className="info d-flex mt-40 align-items-center">
              <div className="left-info">
                <div className="d-flex align-items-center">
                  <div className="author-info">
                    <div className="d-flex align-items-center">
                      <a href="#0" className="circle-60">
                        {/* Use Next.js Image component for optimized loading */}
                        <Image
                          src="/assets/imgs/blog/author.png" // Replace with dynamic author image if available
                          alt={author}
                          className="circle-img"
                          width={60}
                          height={60}
                        />
                      </a>
                      <div className="ml-20">
                        <span className="opacity-7">Author</span>
                        <h6 className="fz-16">{author}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <span className="opacity-7">Published</span>
                    <h6 className="fz-16">
                      {new Date(date).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </h6>
                  </div>
                </div>
              </div>
              <div className="right-info ml-auto">
                <div>
                  <span className="pe-7s-comment fz-18 mr-10"></span>
                  <span className="opacity-7">{comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {coverImage && (
        <div
          className="background bg-img mt-80"
          data-background={coverImage}
        ></div>
      )}
    </div>
  );
}

export default Header;