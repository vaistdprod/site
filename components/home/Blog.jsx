import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function Blog({ posts = [] }) {
  if (!posts.length) return null;

  const topPosts = posts.slice(0, 2);

  return (
    <section className="blog">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="flex align-center mb-30">
            <h2 className="fw-600 fz-70 text-u  ">
              <span className="">
                Z naší <span className="fw-200">produkce</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/blog" className="btn btn-sm btn-bord radius-30">
                <span>Zobrazit vše</span>
              </Link>
              <FontAwesomeIcon icon={faArrowRight} className="icon" />
            </div>
          </div>
          <h6 className="sub-title main-color flex align-center">
            <span>Naše články</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {topPosts.map((post, idx) => (
            <div key={post.slug} className={`col-lg-6 ${idx === 0 ? 'md-mb50' : ''}`}>
              <div className="item">
                <div className="img fit-img o-hidden relative">
                  <Image
                    fill
                    src={post.coverImage}
                    alt={post.title}
                    className="img-fluid object-cover"
                    sizes="(max-width: 991px) 100vw, 50vw"
                  />
                </div>
                <div className="cont pt-40">
                  <div className="info sub-title p-color flex align-center mb-15">
                    <div>
                      <Link href={`/blog/${post.slug}`}>By : {post.author.name}</Link>
                    </div>
                    <div className="ml-30">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h4>{post.title}</h4>
                  <Link href={`/blog/${post.slug}`} className="btn-crev flex align-center mt-40">
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <FontAwesomeIcon icon={faArrowRight} />
                      </span>
                    </span>
                    <span className="text">Přečíst</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;