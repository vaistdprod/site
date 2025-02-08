// components/blog/BlogContent.jsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faXTwitter, faSearch } from '@fortawesome/free-solid-svg-icons';
import CommentsList from '../comments/CommentsList';

export default function BlogContent({
  post,
  latestPosts,
  formData,
  status,
  handleChange,
  handleSubmit,
  generateShareUrl
}) {
  return (
    <div>
      <div className="main-post">
        <div className="item pb-60">
          <article>
            <div className="text" dangerouslySetInnerHTML={{ __html: post.content }} />
          </article>
          <div className="info-area mt-30 flex pt-50 bord-thin-top">
            <div>
              <div className="tags flex">
                <div className="flex align-center">
                  <span>Kategorie:</span>
                </div>
                <div>
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/blog?tag=${encodeURIComponent(tag)}`} className="tag-link">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="ml-auto">
              <div className="share-icon flex">
                <div className="flex align-center">
                  <span>Sdílet:</span>
                </div>
                <div>
                  <a href={generateShareUrl('facebook', post)} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faFacebookF} />
                  </a>
                  <a href={generateShareUrl('linkedin', post)} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <a href={generateShareUrl('twitter', post)} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faXTwitter} />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="author-area mt-50 bord-thin-bottom">
            <div className="flex">
              <div className="author-img mr-30">
                <div className="img relative">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-center full-size object-cover"
                  />
                </div>
              </div>
              <div className="cont flex align-center">
                <div className="w-100">
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

      <div className="sidebar">
        <div className="widget">
          <h6 className="title-widget">Hledáte konkrétní článek?</h6>
          <div className="search-box relative">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const query = e.target.elements['search-post'].value;
                // Router handling is done in the client wrapper.
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
            <div key={latestPost.slug} className="item flex align-center">
              <div>
                <div className="img o-hidden radius-5 relative">
                  <Link href={`/blog/${latestPost.slug}`} className="relative full-size">
                    <Image
                      src={latestPost.coverImage}
                      alt={latestPost.title}
                      width={90}
                      height={100}
                      className="img-fluid full-size object-cover"
                    />
                    <span className="date absolute size-50 circle z-3 fz-14">
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
  );
}
