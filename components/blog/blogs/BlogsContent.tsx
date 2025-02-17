import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentAlt,
  faArrowRight,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Post } from '@/lib/posts';

interface BlogsContentProps {
  posts: Post[];
  tagCounts: { [key: string]: number };
  uniqueTags: string[];
  onSearchSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  generateShareUrl: (platform: string, post: Post) => string
}

export default function BlogsContent({
  posts,
  tagCounts,
  uniqueTags,
  onSearchSubmit,
  generateShareUrl
}: BlogsContentProps) {
  return (
    <section className="blog-main section-padding">
      <div className="container">
        <div className="row lg-marg justify-around">
          <div className="col-lg-8">
            <div className="md-mb80">
              {posts.map((post) => (
                <div key={post.slug} className="item mb-80">
                  <div className="img relative">
                    <Link href={`/blog/${post.slug}`} style={{ display: 'block', width: '100%', height: '100%', position: 'relative' }}>
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        className="img-fluid object-cover"
                        sizes="(max-width: 575px) 100vw, (max-width: 991px) 75vw, 60vw"
                      />
                    </Link>
                  </div>
                  <div className="content">
                    <div className="flex align-center mb-15">
                      <div className="post-date fz-12 radius-30 uppercase">
                        {new Date(post.date).toLocaleDateString()}
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
                    <div className="flex align-center main-color mt-40">
                      <Link href={`/blog/${post.slug}`} className="text mr-15">
                        <span>Přečíst</span>
                      </Link>
                      <Link href={`/blog/${post.slug}`}>
                        <FontAwesomeIcon icon={faArrowRight} />
                      </Link>
                    </div>
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
                  <form onSubmit={onSearchSubmit}>
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
                    <li className="flex radius-30" key={tag}>
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
                  <div key={post.slug} className="item flex align-center">
                    <div>
                      <div className="img o-hidden radius-5 relative">
                        <Link
                          href={`/blog/${post.slug}`}
                          className="relative full-size"
                        >
                          <Image
                            src={post.coverImage}
                            alt={post.title}
                            width={90}
                            height={100}
                            className="img-fluid full-size object-cover"
                          />
                          <span className="date text-center backdrop-10 absolute size-50 circle z-3 fz-14">
                            <span>
                              {new Date(post.date).getDate()} /{' '}
                              {new Date(post.date).toLocaleString('default', {
                                month: 'short',
                              })}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag radius-30 fz-12">
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
