'use client';

import React, { useEffect, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import loadBackgroudImages from '@/common/loadBackgroudImages';
import Image from 'next/image';
import Link from 'next/link';

function Intro({ title, author, date, comments, coverImage, tags }) {
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
    <div className="header blog-header section-padding pb-0">
      <div className="container mt-80">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="caption">
              <div className="sub-title fz-12">
                {tags && tags.slice(0, 2).map((tag, index) => (
                  <React.Fragment key={tag}>
                    <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                      <span>{tag}{index < 1 ? ', ' : ''}</span>
                    </Link>
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
                      <Link href={`/nas-tym/${encodeURIComponent(author.slug)}`} className="circle-60">
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          className="circle-img"
                          width={240}
                          height={240}
                        />
                      </Link>
                      <div className="ml-20">
                        <span className="opacity-7">Autor</span>
                        <h6 className="fz-16">{author.name}</h6>
                      </div>
                    </div>
                  </div>
                  <div className="date ml-50">
                    <span className="opacity-7">Publikováno</span>
                    <h6 className="fz-16">
                      {new Date(date).toLocaleDateString('cs-CZ', {
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
                  <span className="fas fa-comment fz-18 mr-10"></span>
                  <span className="opacity-7">{comments} komentářů</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {coverImage && (
        <div
          className="background bg-img mt-80"
          style={{ backgroundImage: `url(${coverImage})` }}
        ></div>
      )}
    </div>
  );
}

export default Intro;