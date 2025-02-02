"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentAlt, faArrowRight, faSearch } from '@fortawesome/free-solid-svg-icons';

function Blogs({ posts, tagCounts, uniqueTags }) {
  const router = useRouter();
  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-content-around">
          <div className="col-lg-8">
            <div className="md-mb80">
              {posts.map((post) => (
                <div key={post.slug} className="item mb-80">
                  <div className="img" style={{ position: "relative" }}>
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="img-fluid object-cover"
                      sizes="(max-width: 991px) 100vw, 67vw"
                    />
                  </div>
                  <div className="content">
                    <div className="d-flex align-items-center mb-15">
                      <div className="post-date">
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                      <div className="commt opacity-7 fz-13">
                        <FontAwesomeIcon icon={faCommentAlt} className="mr-10" />
                        {post.comments} komentářů
                      </div>
                    </div>
                    <h3 className="mb-15">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title.split(' ').slice(0, 2).join(' ')}{' '}
                        <span className="fw-200">
                          {post.title.split(' ').slice(2).join(' ')}
                        </span>
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <Link href={`/blog/${post.slug}`} className="d-flex align-items-center main-color mt-40">
                      <span className="text mr-15">Přečíst</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget">
                <h6 className="title-widget">Hledáte konkrétní článek?</h6>
                <div className="search-box relative">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      const query = e.target.elements['search-post'].value;
                      router.push(`/blog?search=${encodeURIComponent(query)}`);
                    }}
                  >
                    <input
                      type="text"
                      name="search-post"
                      placeholder="Hledat..."
                      required
                      className="radius-5"
                    />
                    <button type="submit" aria-label="Vyhledat" className="icon">
                      <FontAwesomeIcon icon={faSearch} aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>
              <div className="widget catogry">
                <h6 className="title-widget">Kategorie</h6>
                <ul className="rest">
                  {uniqueTags.map((tag) => (
                    <li key={tag}>
                      <span>
                        <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                          {tag}
                        </Link>
                      </span>
                      <span className="ml-auto">{tagCounts[tag]}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="widget last-post-thum">
                <h6 className="title-widget">Nejnovější články</h6>
                {posts.slice(0, 3).map((post) => (
                  <div key={post.slug} className="item d-flex align-items-center">
                    <div>
                      <div className="img" style={{ position: "relative" }}>
                        <Link href={`/blog/${post.slug}`}>
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={90}
                            height={100}
                            className="img-fluid object-cover"
                          />
                          <span className="date">
                            <span>
                              {new Date(post.date).getDate()} . <br />{' '}
                              {new Date(post.date).toLocaleString('cs-CZ', { month: 'short' })}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        {post.tags.map((tag, index) => (
                          <React.Fragment key={tag}>
                            <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                              {tag}
                            </Link>
                            {index < post.tags.length - 1 && ', '}
                          </React.Fragment>
                        ))}
                      </span>
                      <h6>
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
              <div className="widget tags">
                <h6 className="title-widget">Štítky</h6>
                <div className="tags-list">
                  {uniqueTags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/blog?tag=${encodeURIComponent(tag)}`}
                      className="tag-link"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Blogs;