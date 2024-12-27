import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Blog({ post }) {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row xlg-marg">
          <div className="col-lg-8">
            <div className="main-post">
              <div className="item pb-60">
                <article>
                  {post.coverImage && (
                    <div className="img mb-30">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        width={800}
                        height={500}
                        className="img-fluid"
                      />
                    </div>
                  )}

                  <div
                    className="text"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                </article>

                <div className="post-qoute mt-50">
                  <h6 className="fz-20">
                    <span className="l-block">
                      And the day came when the risk to remain tight in a bud
                      was more painful than the risk it took to blossom.
                    </span>
                    <span className="sub-title mt-20 mb-0"> - UiCamp</span>
                  </h6>
                </div>

                <div className="info-area flex pt-50 bord-thin-top">
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
                        <a href="https://www.facebook.com/tdprod.cz">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="https://www.linkedin.com/company/td-prod">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/tdprod.cz">
                          <i className="fab fa-instagram"></i>
                        </a>
                        <a href="https://www.x.com/tdprod.cz">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="author-area mt-50 bord-thin-bottom">
                  <div className="flex">
                    <div className="author-img mr-30">
                      <div className="img">
                        <Image
                          src="/assets/imgs/blog/author.png"
                          alt={post.author}
                          className="circle-img"
                          width={240}
                          height={240}
                        />
                      </div>
                    </div>
                    <div className="cont valign">
                      <div className="full-width">
                        <h6 className="fw-600 mb-10">{post.author}</h6>
                        <p>
                          {/* You can make the author bio dynamic by adding an `authorBio` field in your markdown files */}
                          Nulla eleifend, lectus eu gravida facilisis, ipsum metus
                          faucibus eros, vitae vulputate nibh libero ac metus.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comments Form */}
              <div className="comments-from mt-80">
                <div className="mb-60">
                  <h3>Leave a comment</h3>
                </div>
                <form id="contact-form" method="post" action="contact.php">
                  <div className="messages"></div>

                  <div className="controls row">
                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_name"
                          type="text"
                          name="name"
                          placeholder="Name"
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="form-group mb-30">
                        <input
                          id="form_email"
                          type="email"
                          name="email"
                          placeholder="Email"
                          required="required"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          id="form_message"
                          name="message"
                          placeholder="Message"
                          rows="4"
                          required="required"
                        ></textarea>
                      </div>
                      <div className="text-center">
                        <div className="mt-30">
                          <button type="submit">
                            <span className="text">Post Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="sidebar">
              {/* Search Widget */}
              <div className="widget">
                <h6 className="title-widget">Search Here</h6>
                <div className="search-box">
                  <input
                    type="text"
                    name="search-post"
                    placeholder="Search"
                  />
                  <span className="icon pe-7s-search"></span>
                </div>
              </div>

              {/* Categories Widget */}
              <div className="widget catogry">
                <h6 className="title-widget">Categories</h6>
                <ul className="rest">
                  {post.tags.map((tag) => (
                    <li key={tag}>
                      <span>
                        <Link href={`/blog?tag=${encodeURIComponent(tag)}`}>
                          {tag}
                        </Link>
                      </span>
                      {/* You can dynamically count tags if needed */}
                      <span className="ml-auto"> {`(${post.tags.filter(t => t === tag).length})`}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Latest Posts Widget */}
              <div className="widget last-post-thum">
                <h6 className="title-widget">Latest Posts</h6>
                {/* Assuming you pass latestPosts as a prop or fetch them here */}
                {/* Example Static Latest Posts */}
                <div className="item d-flex align-items-center">
                  <div>
                    <div className="img">
                      <Link href={`/blog/${post.slug}`}>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          width={240}
                          height={240}
                          className="img-fluid"
                        />
                        <span className="date">
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
                    <span className="tag">
                      {post.tags.map((tag) => (
                        <Link
                          key={tag}
                          href={`/blog?tag=${encodeURIComponent(tag)}`}
                        >
                          {tag}
                        </Link>
                      ))}
                    </span>
                    <h6>
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h6>
                  </div>
                </div>
                {/* Repeat the above block for more latest posts if available */}
              </div>

              {/* Tags Widget */}
              <div className="widget tags">
                <h6 className="title-widget">Tags</h6>
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
