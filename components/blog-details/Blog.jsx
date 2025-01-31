'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import CommentsList from './CommentsList';

function Blog({ post, latestPosts }) {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Publikuji...');
    try {
      const res = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, slug: post.slug }),
      });

      if (res.ok) {
        setStatus('Komentář byl úspěšně publikován.');
        setFormData({ name: '', email: '', message: '' });
        router.refresh();
      } else {
        const error = await res.json();
        setStatus(`Error: ${error.error}`);
      }
    } catch (error) {
      setStatus('Nastala neočekávaná chyba.');
    }
  };

  const generateShareUrl = (platform) => {
    const currentUrl = `https://tdprod.cz/blog/${post.slug}`;
    const encodedUrl = encodeURIComponent(currentUrl);
    const encodedTitle = encodeURIComponent(post.title);

    switch (platform) {
      case 'facebook':
        return `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
      case 'linkedin':
        return `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}`;
      case 'instagram':
        return '#';
      case 'twitter':
        return `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
      default:
        return '#';
    }
  };

  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  {post.coverImage && (
                    <div
                      className="img mb-30"
                      style={{ position: "relative" }}
                    >
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        style={{ objectFit: "cover" }}
                        className="img-fluid"
                      />
                    </div>
                  )}

                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </article>

                <div className="info-area mt-30 flex pt-50 bord-thin-top">
                  <div>
                    <div className="tags flex">
                      <div className="valign">
                        <span>Kategorie:</span>
                      </div>
                      <div>
                        {post.tags.map((tag) => (
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
                  <div className="ml-auto">
                    <div className="share-icon flex">
                      <div className="valign">
                        <span>Sdílet:</span>
                      </div>
                      <div>
                        <a
                          href={generateShareUrl('facebook')}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                          href={generateShareUrl('linkedin')}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a
                          href={generateShareUrl('instagram')}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a
                          href={generateShareUrl('twitter')}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="fab fa-x-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author-area mt-50 bord-thin-bottom">
                  <div className="flex">
                    <div className="author-img mr-30">
                      <div
                        className="img"
                        style={{ position: "relative" }}
                      >
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          style={{ objectFit: "cover" }}
                          className="circle-img"
                        />
                      </div>
                    </div>
                    <div className="cont valign">
                      <div className="full-width">
                        <h6 className="fw-600 mb-10">{post.author.name}</h6>
                        <p>{post.author.bio}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="comments-form mt-80">
                <div className="mb-60">
                  <h3>Zanechte komentář</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="messages">{status}</div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Jméno"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="E-mail"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Komentář"
                          rows="4"
                          value={formData.message}
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <div className="mt-30">
                          <button type="submit">
                            <span className="text">Publikovat komentář</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
                <CommentsList slug={post.slug} />
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="sidebar">
              <div className="widget">
              <h6 className="title-widget">Hledáte konkrétní článek?</h6>
              <div className="search-box">
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
                    />
                    <button 
                      type="submit" 
                      aria-label="Vyhledat" 
                      className="icon"
                    >
                      <span className="fas fa-search" aria-hidden="true" />
                    </button>
                  </form>
                </div>
              </div>

              <div className="widget category">
                <h6 className="title-widget">Článek je v kategoriích:</h6>
                <ul className="rest">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span>
                        <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                          {tag}
                        </Link>
                      </span>
                      <span className="ml-auto">
                        {`(${post.tags.filter((t) => t === tag).length})`}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="widget last-post-thum">
                <h6 className="title-widget">Nejnovější příspěvky</h6>
                {latestPosts.map((latestPost) => (
                  <div key={latestPost.slug} className="item d-flex align-items-center">
                    <div>
                      <div
                        className="img"
                        style={{ position: "relative" }}
                      >
                        <Link href={`/blog/${latestPost.slug}`}>
                          <Image
                            src={latestPost.coverImage}
                            alt={latestPost.title}
                            fill
                            style={{ objectFit: "cover" }}
                            className="img-fluid"
                          />
                          <span className="date">
                            <span>
                              {new Date(latestPost.date).getDate()} /{' '}
                              {new Date(latestPost.date).toLocaleString('default', {
                                month: 'short',
                              })}
                            </span>
                          </span>
                        </Link>
                      </div>
                    </div>
                    <div className="cont">
                      <span className="tag">
                        {latestPost.tags.map((tag, index) => (
                          <React.Fragment key={tag}>
                            <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                              {tag}
                            </Link>
                            {index < latestPost.tags.length - 1 && ', '}
                          </React.Fragment>
                        ))}
                      </span>
                      <h6>
                        <Link href={`/blog/${latestPost.slug}`}>
                          {latestPost.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>

              <div className="widget tags">
                <h6 className="title-widget">Štítky</h6>
                <div className="tags-list">
                  {post.tags.map((tag) => (
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

export default Blog;