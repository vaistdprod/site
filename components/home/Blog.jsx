import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Blog({ posts = [] }) {
  // If no posts, bail
  if (!posts.length) return null;

  // Show however many you want — here, two
  const topPosts = posts.slice(0, 2);

  return (
    <section className="blog">
      <div className="container">
        <div className="sec-head mb-80">
          <div className="d-flex align-items-center mb-30">
            <h2 className="fw-600 fz-70 text-u d-rotate wow">
              <span className="rotate-text">
                Z naší <span className="fw-200">produkce</span>
              </span>
            </h2>
            <div className="ml-auto vi-more">
              <Link href="/blog" className="butn butn-sm butn-bord radius-30">
                <span>Zobrazit vše</span>
              </Link>
              <span className="icon fas fa-arrow-right"></span>
            </div>
          </div>
          <h6 className="sub-title main-color d-flex align-items-center">
            <span>Naše články</span>
            <span className="thin"></span>
          </h6>
        </div>
        <div className="row">
          {topPosts.map((post, idx) => (
            <div key={post.slug} className={`col-lg-6 ${idx === 0 ? 'md-mb50' : ''}`}>
              <div className="item">
                <div className="img fit-img">
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    width={800}
                    height={500}
                    className="img-fluid"
                  />
                </div>
                <div className="cont pt-40">
                  <div className="info sub-title p-color d-flex align-items-center mb-15">
                    <div>
                      <Link href={`/blog/${post.slug}`}>By : {post.author.name}</Link>
                    </div>
                    <div className="ml-30">
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                  </div>
                  <h4>{post.title}</h4>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="butn-crev d-flex align-items-center mt-40"
                  >
                    <span className="hover-this">
                      <span className="circle hover-anim">
                        <i className="fas fa-arrow-right"></i>
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