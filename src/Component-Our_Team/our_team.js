import React, { Component } from "react";
class OurTeam extends React.Component {
  render() {
    return (
      <>
        {/* start header */}
        <header>
          {/* start navigation */}
          <nav className="navbar top-space navbar-expand-lg navbar-light bg-white header-light fixed-top header-reverse-scroll">
            <div className="container-lg nav-header-container">
              <div className="col-auto col-sm-6 col-lg-2 me-auto ps-lg-0">
                <a className="navbar-brand" href="index.html">
                  <img
                    src="images/logo-fast-blue-black.png"
                    data-at2x="images/logo-fast-blue-black@2x.png"
                    className="default-logo"
                    alt=""
                  />
                  <img
                    src="images/logo-fast-blue-black.png"
                    data-at2x="images/logo-fast-blue-black@2x.png"
                    className="alt-logo"
                    alt=""
                  />
                  <img
                    src="images/logo-fast-blue-black.png"
                    data-at2x="images/logo-fast-blue-black@2x.png"
                    className="mobile-logo"
                    alt=""
                  />
                </a>
              </div>
              <div className="col-auto menu-order px-lg-0">
                <button
                  className="navbar-toggler float-end"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-line" />
                  <span className="navbar-toggler-line" />
                  <span className="navbar-toggler-line" />
                  <span className="navbar-toggler-line" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav alt-font">
                    <li className="nav-item dropdown megamenu">
                      <a href="#" className="nav-link">
                        Home
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <div
                        className="menu-back-div dropdown-menu megamenu-content"
                        role="menu"
                      >
                        <div className="d-lg-flex justify-content-center">
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">Corporate</li>
                            <li>
                              <a href="home-startup.html">Startup</a>
                            </li>
                            <li>
                              <a href="home-business.html">Business</a>
                            </li>
                            <li>
                              <a href="home-corporate.html">Corporate</a>
                            </li>
                            <li>
                              <a href="home-finance.html">Finance</a>
                            </li>
                            <li>
                              <a href="home-application.html">Application</a>
                            </li>
                            <li>
                              <a href="home-consulting.html">Consulting</a>
                            </li>
                            <li>
                              <a href="home-digital-agency.html">
                                Digital agency
                              </a>
                            </li>
                            <li>
                              <a href="home-seo-agency.html">SEO agency</a>
                            </li>
                            <li>
                              <a href="home-events-conference.html">
                                Events &amp; conference
                              </a>
                            </li>
                            <li>
                              <a href="home-marketing-agency.html">
                                Marketing agency
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">Specialized</li>
                            <li>
                              <a href="home-restaurant.html">Restaurant</a>
                            </li>
                            <li>
                              <a href="home-architecture.html">Architecture</a>
                            </li>
                            <li>
                              <a href="home-hotel-resort.html">
                                Hotel &amp; resort
                              </a>
                            </li>
                            <li>
                              <a href="home-travel-agency.html">
                                Travel agency
                              </a>
                            </li>
                            <li>
                              <a href="home-yoga-meditation.html">
                                Yoga &amp; meditation
                              </a>
                            </li>
                            <li>
                              <a href="home-gym-fitness.html">
                                Gym &amp; fitness
                              </a>
                            </li>
                            <li>
                              <a href="home-spa-salon.html">Spa salon</a>
                            </li>
                            <li>
                              <a href="home-cafe.html">Cafe</a>
                            </li>
                            <li>
                              <a href="home-decor.html">Home decor</a>
                            </li>
                            <li>
                              <a href="home-dentist.html">Dentist</a>
                            </li>
                            <li>
                              <a href="home-interior-design.html">
                                Interior design
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">Portfolio</li>
                            <li>
                              <a href="home-design-agency.html">
                                Design agency
                              </a>
                            </li>
                            <li>
                              <a href="home-web-agency.html">Web agency</a>
                            </li>
                            <li>
                              <a href="home-creative-agency.html">
                                Creative agency
                              </a>
                            </li>
                            <li>
                              <a href="home-freelancer.html">Freelancer</a>
                            </li>
                            <li>
                              <a href="home-branding-agency.html">
                                Branding agency
                              </a>
                            </li>
                            <li>
                              <a href="home-photography.html">Photography</a>
                            </li>
                            <li>
                              <a href="home-personal-portfolio.html">
                                Personal portfolio
                              </a>
                            </li>
                            <li>
                              <a href="home-vertical-portfolio.html">
                                Vertical portfolio
                              </a>
                            </li>
                            <li>
                              <a href="home-interactive-portfolio.html">
                                Interactive portfolio
                              </a>
                            </li>
                            <li>
                              <a href="home-split-portfolio.html">
                                Split portfolio
                              </a>
                            </li>
                            <li>
                              <a href="home-creative-portfolio.html">
                                Creative portfolio
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">Other</li>
                            <li>
                              <a href="home-furniture-shop.html">
                                Furniture shop
                              </a>
                            </li>
                            <li>
                              <a href="home-fashion-shop.html">Fashion shop</a>
                            </li>
                            <li>
                              <a href="home-magazine.html">Magazine</a>
                            </li>
                            <li>
                              <a href="home-lifestyle-blog.html">
                                Lifestyle blog
                              </a>
                            </li>
                            <li>
                              <a href="home-classic-blog.html">Classic blog</a>
                            </li>
                            <li>
                              <a href="home-blog-metro.html">Blog metro</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown simple-dropdown">
                      <a href="#" className="nav-link">
                        Pages
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <ul className="dropdown-menu" role="menu">
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            About
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="about-me.html">About me</a>
                            </li>
                            <li>
                              <a href="about-us.html">About us</a>
                            </li>
                            <li>
                              <a href="our-story.html">Our story</a>
                            </li>
                            <li>
                              <a href="who-we-are.html">Who we are</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Services
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="our-services.html">Our services</a>
                            </li>
                            <li>
                              <a href="what-we-offers.html">What we offer</a>
                            </li>
                            <li>
                              <a href="our-process.html">Our process</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Contact
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="contact-us-simple.html">
                                Contact simple
                              </a>
                            </li>
                            <li>
                              <a href="contact-us-classic.html">
                                Contact classic
                              </a>
                            </li>
                            <li>
                              <a href="contact-us-modern.html">
                                Contact modern
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Additional pages
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="our-team.html">Our team</a>
                            </li>
                            <li>
                              <a href="latest-news.html">Latest news</a>
                            </li>
                            <li>
                              <a href="pricing-packages.html">
                                Pricing packages
                              </a>
                            </li>
                            <li>
                              <a href="404.html">Error 404</a>
                            </li>
                            <li>
                              <a href="maintenance.html">Maintenance</a>
                            </li>
                            <li>
                              <a href="coming-soon.html">Coming soon</a>
                            </li>
                            <li>
                              <a href="coming-soon-v2.html">Coming soon - V2</a>
                            </li>
                            <li>
                              <a href="faq.html">FAQ's</a>
                            </li>
                            <li>
                              <a href="search-result.html">Search result</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown simple-dropdown">
                      <a href="#" className="nav-link">
                        Portfolio
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <ul className="dropdown-menu" role="menu">
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio classic
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-classic-two-column.html">
                                Classic 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-classic-three-column.html">
                                Classic 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-classic-four-column.html">
                                Classic 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-classic-masonry.html">
                                Classic masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-classic-metro.html">
                                Classic metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio boxed
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-boxed-two-column.html">
                                Boxed 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-boxed-three-column.html">
                                Boxed 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-boxed-four-column.html">
                                Boxed 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-boxed-masonry.html">
                                Boxed masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-boxed-metro.html">
                                Boxed metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio colorful
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-colorful-two-column.html">
                                Colorful 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-colorful-three-column.html">
                                Colorful 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-colorful-four-column.html">
                                Colorful 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-colorful-masonry.html">
                                Colorful masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-colorful-metro.html">
                                Colorful metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio bordered
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-bordered-two-column.html">
                                Bordered 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-bordered-three-column.html">
                                Bordered 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-bordered-four-column.html">
                                Bordered 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-bordered-masonry.html">
                                Bordered masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-bordered-metro.html">
                                Bordered metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio overlay
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-overlay-two-column.html">
                                Overlay 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-overlay-three-column.html">
                                Overlay 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-overlay-four-column.html">
                                Overlay 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-overlay-masonry.html">
                                Overlay masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-overlay-metro.html">
                                Overlay metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio switch image
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-switch-image-two-column.html">
                                Switch image 2 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-switch-image-three-column.html">
                                Switch image 3 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-switch-image-four-column.html">
                                Switch image 4 column
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-switch-image-masonry.html">
                                Switch image masonry
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-switch-image-metro.html">
                                Switch image metro
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Portfolio other
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="portfolio-scattered.html">
                                Portfolio scattered
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-justified-gallery.html">
                                Justified gallery
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-slider.html">
                                Portfolio slider
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Single project page
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="single-project-page-01.html">
                                Single project page 01
                              </a>
                            </li>
                            <li>
                              <a href="single-project-page-02.html">
                                Single project page 02
                              </a>
                            </li>
                            <li>
                              <a href="single-project-page-03.html">
                                Single project page 03
                              </a>
                            </li>
                            <li>
                              <a href="single-project-page-04.html">
                                Single project page 04
                              </a>
                            </li>
                            <li>
                              <a href="single-project-page-05.html">
                                Single project page 05
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown megamenu">
                      <a href="javascript:void(0);" className="nav-link">
                        Elements
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <div
                        className="menu-back-div dropdown-menu megamenu-content"
                        role="menu"
                      >
                        <div className="d-lg-flex justify-content-center">
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">General</li>
                            <li>
                              <a href="accordions.html">
                                <i className="ti-layout-accordion-separated" />
                                Accordions
                              </a>
                            </li>
                            <li>
                              <a href="buttons.html">
                                <i className="ti-mouse" />
                                Buttons
                              </a>
                            </li>
                            <li>
                              <a href="team.html">
                                <i className="ti-user" />
                                Team
                              </a>
                            </li>
                            <li>
                              <a href="team-carousel.html">
                                <i className="ti-layout-slider-alt" />
                                Team carousel
                              </a>
                            </li>
                            <li>
                              <a href="clients.html">
                                <i className="ti-id-badge" />
                                Clients
                              </a>
                            </li>
                            <li>
                              <a href="client-carousel.html">
                                <i className="ti-layout-slider" />
                                Client carousel
                              </a>
                            </li>
                            <li>
                              <a href="subscribe.html">
                                <i className="ti-crown" />
                                Subscribe
                              </a>
                            </li>
                            <li>
                              <a href="call-to-action.html">
                                <i className="ti-eye" />
                                Call to action
                              </a>
                            </li>
                            <li>
                              <a href="tab.html">
                                <i className="ti-layout-tab" />
                                Tab
                              </a>
                            </li>
                            <li>
                              <a href="google-map.html">
                                <i className="ti-location-pin" />
                                Google map
                              </a>
                            </li>
                            <li>
                              <a href="contact-form.html">
                                <i className="ti-clipboard" />
                                Contact form
                              </a>
                            </li>
                            <li>
                              <a href="image-gallery.html">
                                <i className="ti-gallery" />
                                Image gallery
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">
                              Content &amp; infographics
                            </li>
                            <li>
                              <a href="progress-bar.html">
                                <i className="icon-hourglass" />
                                Progress bar
                              </a>
                            </li>
                            <li>
                              <a href="icon-with-text.html">
                                <i className="ti-layout-media-left" />
                                Icon with text
                              </a>
                            </li>
                            <li>
                              <a href="overline-icon-box.html">
                                <i className="ti-write" />
                                Over line icon box
                              </a>
                            </li>
                            <li>
                              <a href="custom-icon-with-text.html">
                                <i className="ti-vector" />
                                Custom icon with text
                              </a>
                            </li>
                            <li>
                              <a href="counters.html">
                                <i className="ti-timer" />
                                Counters
                              </a>
                            </li>
                            <li>
                              <a href="countdown.html">
                                <i className="ti-alarm-clock" />
                                Countdown
                              </a>
                            </li>
                            <li>
                              <a href="pie-charts.html">
                                <i className="ti-pie-chart" />
                                Pie charts
                              </a>
                            </li>
                            <li>
                              <a href="fancy-text-box.html">
                                <i className="ti-layout-cta-center" />
                                Fancy text box
                              </a>
                            </li>
                            <li>
                              <a href="text-box.html">
                                <i className="ti-layout-cta-left" />
                                Text box
                              </a>
                            </li>
                            <li>
                              <a href="fancy-text.html">
                                <i className="ti-text" />
                                Fancy text
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">Interactive</li>
                            <li>
                              <a href="testimonials.html">
                                <i className="ti-thought" />
                                Testimonials
                              </a>
                            </li>
                            <li>
                              <a href="testimonials-carousel.html">
                                <i className="ti-comments" />
                                Testimonials carousel
                              </a>
                            </li>
                            <li>
                              <a href="video.html">
                                <i className="ti-video-camera" />
                                Video
                              </a>
                            </li>
                            <li>
                              <a href="interactive-banners.html">
                                <i className="ti-image" />
                                Interactive banners
                              </a>
                            </li>
                            <li>
                              <a href="services.html">
                                <i className="ti-bookmark-alt" />
                                Services
                              </a>
                            </li>
                            <li>
                              <a href="info-banner.html">
                                <i className="ti-layout-slider" />
                                Info banner
                              </a>
                            </li>
                            <li>
                              <a href="rotate-box.html">
                                <i className="ti-package" />
                                Rotate box
                              </a>
                            </li>
                            <li>
                              <a href="process-step.html">
                                <i className="ti-layers" />
                                Process step
                              </a>
                            </li>
                            <li>
                              <a href="instagram.html">
                                <i className="ti-instagram" />
                                Instagram
                              </a>
                            </li>
                            <li>
                              <a href="parallax-scrolling.html">
                                <i className="ti-exchange-vertical" />
                                Parallax scrolling
                              </a>
                            </li>
                            <li>
                              <a href="text-slider.html">
                                <i className="ti-layout-media-overlay" />
                                Text slider
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block">
                            <li className="dropdown-header">
                              Text &amp; containers
                            </li>
                            <li>
                              <a href="heading.html">
                                <i className="ti-text" />
                                Heading
                              </a>
                            </li>
                            <li>
                              <a href="dropcaps.html">
                                <i className="ti-smallcap" />
                                Drop caps
                              </a>
                            </li>
                            <li>
                              <a href="columns.html">
                                <i className="ti-layout" />
                                Columns
                              </a>
                            </li>
                            <li>
                              <a href="blockquote.html">
                                <i className="ti-quote-left" />
                                Blockquote
                              </a>
                            </li>
                            <li>
                              <a href="highlights.html">
                                <i className="ti-underline" />
                                Highlights
                              </a>
                            </li>
                            <li>
                              <a href="message-box.html">
                                <i className="ti-layout-media-right-alt" />
                                Message box
                              </a>
                            </li>
                            <li>
                              <a href="social-icons.html">
                                <i className="ti-user" />
                                Social icons
                              </a>
                            </li>
                            <li>
                              <a href="lists.html">
                                <i className="ti-list" />
                                Lists
                              </a>
                            </li>
                            <li>
                              <a href="seperators.html">
                                <i className="ti-layout-line-solid" />
                                Separators
                              </a>
                            </li>
                            <li>
                              <a href="pricing-table.html">
                                <i className="ti-layout-column2" />
                                Pricing table
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item dropdown simple-dropdown">
                      <a href="#" className="nav-link">
                        Features
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <ul className="dropdown-menu" role="menu">
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Header and menu
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="transparent-header.html">
                                Transparent header
                              </a>
                            </li>
                            <li>
                              <a href="white-header.html">White header</a>
                            </li>
                            <li>
                              <a href="dark-header.html">Dark header</a>
                            </li>
                            <li>
                              <a href="header-with-top-bar.html">
                                Header with top bar
                              </a>
                            </li>
                            <li>
                              <a href="header-with-push.html">
                                Header with push
                              </a>
                            </li>
                            <li>
                              <a href="center-navigation.html">
                                Center navigation
                              </a>
                            </li>
                            <li>
                              <a href="center-logo.html">Center logo</a>
                            </li>
                            <li>
                              <a href="top-logo.html">Top logo</a>
                            </li>
                            <li>
                              <a href="one-page-navigation.html">
                                One page navigation
                              </a>
                            </li>
                            <li className="dropdown">
                              <a
                                data-bs-toggle="dropdown"
                                href="javascript:void(0);"
                              >
                                Hamburger menu
                                <i className="fas fa-angle-right dropdown-toggle" />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="hamburger-menu.html">
                                    Hamburger menu
                                  </a>
                                </li>
                                <li>
                                  <a href="hamburger-menu-modern.html">
                                    Hamburger menu modern
                                  </a>
                                </li>
                                <li>
                                  <a href="hamburger-menu-half.html">
                                    Hamburger menu half
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                data-bs-toggle="dropdown"
                                href="javascript:void(0);"
                              >
                                Left menu
                                <i className="fas fa-angle-right dropdown-toggle" />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="left-menu-classic.html">
                                    Left menu classic
                                  </a>
                                </li>
                                <li>
                                  <a href="left-menu-modern.html">
                                    Left menu modern
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                data-bs-toggle="dropdown"
                                href="javascript:void(0);"
                              >
                                Header type
                                <i className="fas fa-angle-right dropdown-toggle" />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="header-always-fixed.html">
                                    Always fixed
                                  </a>
                                </li>
                                <li>
                                  <a href="header-disable-fixed.html">
                                    Disable fixed
                                  </a>
                                </li>
                                <li>
                                  <a href="header-reverse-scroll.html">
                                    Reverse scroll
                                  </a>
                                </li>
                                <li>
                                  <a href="header-responsive-sticky.html">
                                    Responsive sticky
                                  </a>
                                </li>
                              </ul>
                            </li>
                            <li className="dropdown">
                              <a
                                data-bs-toggle="dropdown"
                                href="javascript:void(0);"
                              >
                                Mobile menu
                                <i className="fas fa-angle-right dropdown-toggle" />
                              </a>
                              <ul className="dropdown-menu">
                                <li>
                                  <a href="mobile-menu-classic.html">Classic</a>
                                </li>
                                <li>
                                  <a href="mobile-menu-modern.html">Modern</a>
                                </li>
                                <li>
                                  <a href="mobile-menu-full-screen.html">
                                    Full screen
                                  </a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Footer
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="footer-style-01.html">Footer style 01</a>
                            </li>
                            <li>
                              <a href="footer-style-02.html">Footer style 02</a>
                            </li>
                            <li>
                              <a href="footer-style-03.html">Footer style 03</a>
                            </li>
                            <li>
                              <a href="footer-style-04.html">Footer style 04</a>
                            </li>
                            <li>
                              <a href="footer-style-05.html">Footer style 05</a>
                            </li>
                            <li>
                              <a href="footer-style-06.html">Footer style 06</a>
                            </li>
                            <li>
                              <a href="footer-style-07.html">Footer style 07</a>
                            </li>
                            <li>
                              <a href="footer-style-08.html">Footer style 08</a>
                            </li>
                            <li>
                              <a href="footer-style-09.html">Footer style 09</a>
                            </li>
                            <li>
                              <a href="footer-style-10.html">Footer style 10</a>
                            </li>
                            <li>
                              <a href="footer-style-11.html">Footer style 11</a>
                            </li>
                            <li>
                              <a href="footer-style-12.html">Footer style 12</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Page title
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="page-title-left-alignment.html">
                                Left alignment
                              </a>
                            </li>
                            <li>
                              <a href="page-title-right-alignment.html">
                                Right alignment
                              </a>
                            </li>
                            <li>
                              <a href="page-title-center-alignment.html">
                                Center alignment
                              </a>
                            </li>
                            <li>
                              <a href="page-title-colorful-style.html">
                                Colorful style
                              </a>
                            </li>
                            <li>
                              <a href="page-title-big-typography.html">
                                Big typography
                              </a>
                            </li>
                            <li>
                              <a href="page-title-parallax-background.html">
                                Parallax background
                              </a>
                            </li>
                            <li>
                              <a href="page-title-separate-breadcrumbs.html">
                                Separate breadcrumbs
                              </a>
                            </li>
                            <li>
                              <a href="page-title-gallery-background.html">
                                Gallery background
                              </a>
                            </li>
                            <li>
                              <a href="page-title-background-video.html">
                                Background video
                              </a>
                            </li>
                            <li>
                              <a href="page-title-mini-version.html">
                                Mini version
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Modal popup
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="modal-simple.html">Simple modal</a>
                            </li>
                            <li>
                              <a href="modal-subscription.html">Subscription</a>
                            </li>
                            <li>
                              <a href="modal-contact-form.html">Contact form</a>
                            </li>
                            <li>
                              <a href="modal-youtube-video.html">
                                Youtube video
                              </a>
                            </li>
                            <li>
                              <a href="modal-vimeo-video.html">Vimeo video</a>
                            </li>
                            <li>
                              <a href="modal-google-map.html">Google map</a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Icon packs
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="icon-packs-icons-mind-line.html">
                                Icons mind line
                              </a>
                            </li>
                            <li>
                              <a href="icon-packs-icons-mind-solid.html">
                                Icons mind solid
                              </a>
                            </li>
                            <li>
                              <a href="icon-packs-feather.html">Feather</a>
                            </li>
                            <li>
                              <a href="icon-packs-font-awesome.html">
                                Font awesome
                              </a>
                            </li>
                            <li>
                              <a href="icon-packs-et-line.html">ET line</a>
                            </li>
                            <li>
                              <a href="icon-packs-themify.html">Themify</a>
                            </li>
                            <li>
                              <a href="icon-packs-simple-line.html">
                                Simple line
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a href="animations.html">Animations</a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown simple-dropdown">
                      <a href="#" className="nav-link">
                        Blog
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <ul className="dropdown-menu" role="menu">
                        <li className="dropdown">
                          <a href="blog-grid.html">Blog grid</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-masonry.html">Blog masonry</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-classic.html">Blog classic</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-simple.html">Blog simple</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-side-image.html">Blog side image</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-metro.html">Blog metro</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-overlay-image.html">
                            Blog overlay image
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-modern.html">Blog modern</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-clean.html">Blog clean</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-widget.html">Blog widget</a>
                        </li>
                        <li className="dropdown">
                          <a href="blog-standard.html">Blog standard</a>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Post layout
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="blog-post-layout-01.html">
                                Blog post layout 01
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-layout-02.html">
                                Blog post layout 02
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-layout-03.html">
                                Blog post layout 03
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-layout-04.html">
                                Blog post layout 04
                              </a>
                            </li>
                            <li>
                              <a href="blog-post-layout-05.html">
                                Blog post layout 05
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="dropdown">
                          <a
                            data-bs-toggle="dropdown"
                            href="javascript:void(0);"
                          >
                            Post types
                            <i className="fas fa-angle-right dropdown-toggle" />
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="blog-standard-post.html">
                                Standard post
                              </a>
                            </li>
                            <li>
                              <a href="blog-gallery-post.html">Gallery post</a>
                            </li>
                            <li>
                              <a href="blog-slider-post.html">Slider post</a>
                            </li>
                            <li>
                              <a href="blog-html5-video-post.html">
                                HTML5 video post
                              </a>
                            </li>
                            <li>
                              <a href="blog-youtube-video-post.html">
                                Youtube video post
                              </a>
                            </li>
                            <li>
                              <a href="blog-vimeo-video-post.html">
                                Vimeo video post
                              </a>
                            </li>
                            <li>
                              <a href="blog-audio-post.html">Audio post</a>
                            </li>
                            <li>
                              <a href="blog-blockquote-post.html">
                                Blockquote post
                              </a>
                            </li>
                            <li>
                              <a href="blog-full-width-post.html">
                                Full width post
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item dropdown megamenu">
                      <a href="javascript:void(0);" className="nav-link">
                        Shop
                      </a>
                      <i
                        className="fa fa-angle-down dropdown-toggle"
                        data-bs-toggle="dropdown"
                        aria-hidden="true"
                      />
                      <div
                        className="menu-back-div dropdown-menu megamenu-content"
                        role="menu"
                      >
                        <div className="d-lg-flex justify-content-center">
                          <ul className="d-lg-inline-block md-margin-15px-bottom">
                            <li className="dropdown-header">Shop layout</li>
                            <li>
                              <a href="shop-wide.html">Shop wide</a>
                            </li>
                            <li>
                              <a href="shop-left-sidebar.html">Left sidebar</a>
                            </li>
                            <li>
                              <a href="shop-right-sidebar.html">
                                Right sidebar
                              </a>
                            </li>
                            <li>
                              <a href="shop-only-categories.html">
                                Only categories
                              </a>
                            </li>
                            <li>
                              <a href="single-product.html">Single product</a>
                            </li>
                            <li className="dropdown-header">Utility pages</li>
                            <li>
                              <a href="shopping-cart.html">Shopping cart</a>
                            </li>
                            <li>
                              <a href="checkout.html">Checkout</a>
                            </li>
                            <li>
                              <a href="login-register.html">Login / Register</a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block d-none small-gap">
                            <li>
                              <a
                                href="index.html"
                                className="menu-banner-image"
                              >
                                <img src="images/menu-banner-01.jpg" alt="" />
                              </a>
                            </li>
                          </ul>
                          <ul className="d-lg-inline-block d-none no-padding-right">
                            <li>
                              <a
                                href="index.html"
                                className="menu-banner-image"
                              >
                                <img src="images/menu-banner-02.jpg" alt="" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto text-end hidden-xs pe-0 font-size-0">
                <div className="header-search-icon search-form-wrapper">
                  <a
                    href="javascript:void(0)"
                    className="search-form-icon header-search-form"
                  >
                    <i className="feather icon-feather-search" />
                  </a>
                  {/* start search input */}
                  <div className="form-wrapper">
                    <button
                      title="Close"
                      type="button"
                      className="search-close alt-font"
                    >
                      ×
                    </button>
                    <form
                      id="search-form"
                      role="search"
                      method="get"
                      className="search-form text-start"
                      action="search-result.html"
                    >
                      <div className="search-form-box">
                        <span className="search-label alt-font text-small text-uppercase text-medium-gray">
                          What are you looking for?
                        </span>
                        <input
                          className="search-input alt-font"
                          id="search-form-input5e219ef164995"
                          placeholder="Enter your keywords..."
                          name="s"
                          defaultValue
                          type="text"
                          autoComplete="off"
                        />
                        <button type="submit" className="search-button">
                          <i
                            className="feather icon-feather-search"
                            aria-hidden="true"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* end search input */}
                </div>
                <div className="header-language dropdown d-lg-inline-block">
                  <a href="javascript:void(0);">
                    <i className="feather icon-feather-globe" />
                  </a>
                  <ul className="dropdown-menu alt-font">
                    <li>
                      <a href="javascript:void(0);" title="English">
                        <span className="icon-country">
                          <img src="images/country-flag-16X16/usa.png" alt="" />
                        </span>
                        English
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="England">
                        <span className="icon-country">
                          <img
                            src="images/country-flag-16X16/england.png"
                            alt=""
                          />
                        </span>
                        England
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="France">
                        <span className="icon-country">
                          <img
                            src="images/country-flag-16X16/france.png"
                            alt=""
                          />
                        </span>
                        France
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Russian">
                        <span className="icon-country">
                          <img
                            src="images/country-flag-16X16/russian.png"
                            alt=""
                          />
                        </span>
                        Russian
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);" title="Spain">
                        <span className="icon-country">
                          <img
                            src="images/country-flag-16X16/spain.png"
                            alt=""
                          />
                        </span>
                        Spain
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="header-cart-icon dropdown">
                  <a href="javascript:void(0);">
                    <i className="feather icon-feather-shopping-bag" />
                    <span className="cart-count alt-font bg-fast-blue text-white">
                      2
                    </span>
                  </a>
                  <ul className="dropdown-menu cart-item-list">
                    <li className="cart-item align-items-center">
                      <a href="javascript:void(0);" className="alt-font close">
                        ×
                      </a>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            src="images/cart-image-01.jpg"
                            className="cart-thumb"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-detail alt-font">
                        <a href="single-product.html">Delica Omtantur</a>
                        <span className="item-ammount">$100.00</span>
                      </div>
                    </li>
                    <li className="cart-item align-items-center">
                      <a href="javascript:void(0);" className="alt-font close">
                        ×
                      </a>
                      <div className="product-image">
                        <a href="single-product.html">
                          <img
                            src="images/cart-image-02.jpg"
                            className="cart-thumb"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="product-detail alt-font">
                        <a href="single-product.html">Gianvito Rossi</a>
                        <span className="item-ammount">$99.99</span>
                      </div>
                    </li>
                    <li className="cart-item cart-total">
                      <div className="alt-font margin-15px-bottom">
                        <span className="w-50 d-inline-block text-medium text-uppercase">
                          Subtotal:
                        </span>
                        <span className="w-50 d-inline-block text-end text-medium font-weight-500">
                          $199.99
                        </span>
                      </div>
                      <a
                        href="shopping-cart.html"
                        className="btn btn-small btn-dark-gray"
                      >
                        view cart
                      </a>
                      <a
                        href="checkout.html"
                        className="btn btn-small btn-fast-blue"
                      >
                        checkout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </header>
        {/* end header */}
        {/* start section */}
        <section
          className="fix-background"
          style={{ backgroundImage: 'url("images/our-team-bg2.jpg")' }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 text-center margin-7-rem-bottom z-index-0">
                <div
                  className="tilt-box"
                  data-tilt-options='{ "maxTilt": 20, "perspective": 1000, "easing": "cubic-bezier(.03,.98,.52,.99)", "scale": 1, "speed": 500, "transition": true, "reset": true, "glare": false, "maxGlare": 1 }'
                >
                  <div className="margin-20px-bottom d-block">
                    <span className="alt-font font-weight-500 text-white text-uppercase text-small letter-spacing-1px bg-extra-dark-gray d-inline-block padding-20px-lr padding-5px-tb">
                      We are boolean tech highly creative team
                    </span>
                  </div>
                  <span
                    className="text-extra-big alt-font text-uppercase text-extra-dark-gray font-weight-700 letter-spacing-minus-5px image-mask cover-background xs-letter-spacing-minus-1px"
                    style={{
                      backgroundImage: 'url("images/fancy-text-img-01.jpg")',
                    }}
                  >
                    together
                  </span>
                </div>
              </div>
              <div className="down-section text-center margin-35px-bottom sm-no-margin-bottom">
                <a
                  href="#down-section"
                  className="section-link bg-white d-inline-block"
                >
                  <i className="feather icon-feather-arrow-down icon-extra-small text-gradient-sky-blue-pink box-shadow-small padding-15px-all xs-padding-10px-all border-radius-100" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section
          id="down-section"
          className="padding-100px-top md-padding-70px-top md-padding-40px-bottom sm-padding-50px-top xs-padding-20px-top sm-padding-25px-bottom"
        >
          <div className="container-fluid padding-seven-lr xl-padding-three-lr md-padding-2-half-rem-lr xs-padding-15px-lr">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 justify-content-center">
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-01.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Jemmy Watson
                    </div>
                    <span className="text-small text-uppercase">
                      Graphic designer
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-02.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Anna Sethesia
                    </div>
                    <span className="text-small text-uppercase">
                      Development head
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-03.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Gail Forcewind
                    </div>
                    <span className="text-small text-uppercase">
                      Project manager
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-04.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Nick Bocker
                    </div>
                    <span className="text-small text-uppercase">
                      Head of developer
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-05.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Monty Franklin
                    </div>
                    <span className="text-small text-uppercase">
                      Junior developer
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-06.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Bryan Melendez
                    </div>
                    <span className="text-small text-uppercase">
                      Product manager
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-07.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Laura Charette
                    </div>
                    <span className="text-small text-uppercase">
                      Financial manager
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
              {/* start team item */}
              <div className="col team-style-02 text-center">
                <figure>
                  <div className="team-member-image border-radius-5px overflow-hidden">
                    <img alt="" src="images/our-team-member-08.jpg" />
                    <div className="team-member-details bg-transparent-gradient-fast-blue-purple align-items-center justify-content-center d-flex flex-column padding-2-half-rem-lr">
                      <div className="text-white opacity-7 w-85 sm-w-95">
                        Lorem ipsum is simply dummy text of the printing
                        typesetting industry
                      </div>
                      <div className="social-icon w-100 position-absolute bottom-40px left-0px">
                        <a
                          href="https://www.facebook.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-facebook-f" />
                        </a>
                        <a
                          href="https://http://www.dribbble.com"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-dribbble" />
                        </a>
                        <a
                          href="https://twitter.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-twitter" />
                        </a>
                        <a
                          href="http://www.instagram.com/"
                          target="_blank"
                          className="icon-very-small text-white"
                        >
                          <i aria-hidden="true" className="fab fa-instagram" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <figcaption className="team-member-position text-center padding-35px-tb sm-padding-25px-tb">
                    <div className="text-extra-dark-gray alt-font line-height-18px text-medium text-uppercase font-weight-500">
                      Jemas Dossan
                    </div>
                    <span className="text-small text-uppercase">
                      Project manager
                    </span>
                  </figcaption>
                </figure>
              </div>
              {/* end team item */}
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="py-0 padding-seven-lr xl-padding-three-lr md-padding-2-half-rem-lr sm-no-padding-lr wow animate__fadeIn">
          <div className="bg-gradient-light-orange-light-pink border-radius-5px overflow-hidden padding-9-rem-top md-padding-6-rem-top">
            <div className="container">
              <div className="row align-items-center justify-content-center">
                <div
                  className="col-12 col-xl-5 col-lg-6 offset-xl-1 col-md-8 order-lg-2 padding-100px-bottom md-padding-6-rem-bottom text-center text-lg-start wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <span className="alt-font font-weight-500 text-large text-extra-dark-gray text-decoration-line-bottom d-inline-block margin-35px-bottom">
                    Awesomeness and creative people
                  </span>
                  <h4 className="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1-half margin-45px-bottom">
                    Teamwork is the ability work together toward a{" "}
                    <span className="font-weight-600">common vision</span>
                  </h4>
                  <a
                    href="#position-open"
                    className="btn btn-large btn-expand-ltr text-white section-link"
                  >
                    Join the people
                    <span className="bg-extra-dark-gray" />
                  </a>
                </div>
                <div
                  className="col-12 col-lg-6 order-lg-1 text-center align-self-end wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <img src="images/our-team-01.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="big-section wow animate__fadeIn">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-12 col-xl-3 col-lg-4 position-relative padding-2-rem-top md-margin-7-rem-bottom wow animate__fadeIn"
                data-wow-delay="0.4s"
              >
                <span className="alt-font font-weight-500 text-fast-blue d-block margin-20px-bottom">
                  Loved by our team
                </span>
                <h6 className="alt-font font-weight-500 text-extra-dark-gray letter-spacing-minus-1-half margin-3-half-rem-bottom lg-w-90">
                  What our employee are saying about us?
                </h6>
                <div className="swiper-button-next-nav swiper-button-next slider-navigation-style-03 rounded-circle">
                  <i className="feather icon-feather-arrow-right" />
                </div>
                <div className="swiper-button-previous-nav swiper-button-prev slider-navigation-style-03 rounded-circle">
                  <i className="feather icon-feather-arrow-left" />
                </div>
              </div>
              <div
                className="col-12 col-lg-8 offset-xl-1 wow animate__fadeIn"
                data-wow-delay="0.4s"
              >
                <div className="testimonials-carousel-style-01 swiper-simple-arrow-style-1">
                  <div
                    className="swiper-container"
                    data-slider-options='{ "loop": true, "slidesPerView": 1, "spaceBetween": 30, "observer": true, "observeParents": true, "autoplay": { "delay": 4500, "disableOnInteraction": false }, "navigation": { "nextEl": ".swiper-button-next-nav", "prevEl": ".swiper-button-previous-nav" }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 3 }, "768": { "slidesPerView": 2 } }, "effect": "slide" }'
                  >
                    <div className="swiper-wrapper">
                      {/* start testimonials item */}
                      <div className="swiper-slide text-center">
                        <div className="feature-box feature-box-left-icon-middle padding-3-rem-tb padding-3-half-rem-lr bg-white border-all border-color-medium-gray border-radius-6px last-paragraph-no-margin md-padding-2-rem-tb md-padding-2-half-rem-lr">
                          <div className="feature-box-icon margin-25px-right">
                            <img
                              className="rounded-circle w-65px h-65px"
                              src="images/avtar28.jpg"
                              alt="Herman Miller"
                            />
                          </div>
                          <div className="feature-box-content">
                            <div className="margin-15px-bottom text-very-small text-golden-yellow">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="text-extra-dark-gray text-medium alt-font font-weight-500 line-height-12px">
                              Herman Miller
                            </div>
                            <span className="text-small">ThemeZaa Design</span>
                          </div>
                          <p className="margin-30px-top">
                            There are design companies and then there are user
                            experience, design, consulting, interface design.
                          </p>
                        </div>
                      </div>
                      {/* end testimonials item */}
                      {/* start testimonials item */}
                      <div className="swiper-slide text-center">
                        <div className="feature-box feature-box-left-icon-middle padding-3-rem-tb padding-3-half-rem-lr bg-white border-all border-color-medium-gray border-radius-6px last-paragraph-no-margin md-padding-2-rem-tb md-padding-2-half-rem-lr">
                          <div className="feature-box-icon margin-20px-right">
                            <img
                              className="rounded-circle w-65px h-65px"
                              src="images/avtar27.jpg"
                              alt="Jeremy Girard"
                            />
                          </div>
                          <div className="feature-box-content">
                            <div className="margin-15px-bottom text-very-small text-golden-yellow">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="text-extra-dark-gray text-medium alt-font font-weight-500 line-height-12px">
                              Alexander Harvard
                            </div>
                            <span className="text-small">
                              Microsoft Corporation
                            </span>
                          </div>
                          <p className="margin-30px-top">
                            I wanted to hire the best and after looking at
                            several other companies, I knew Jacob was the
                            perfect guy.
                          </p>
                        </div>
                      </div>
                      {/* end testimonials item */}
                      {/* start testimonials item */}
                      <div className="swiper-slide text-center">
                        <div className="feature-box feature-box-left-icon-middle padding-3-rem-tb padding-3-half-rem-lr bg-white border-all border-color-medium-gray border-radius-6px last-paragraph-no-margin md-padding-2-rem-tb md-padding-2-half-rem-lr">
                          <div className="feature-box-icon margin-20px-right">
                            <img
                              className="rounded-circle w-65px h-65px"
                              src="images/avtar29.jpg"
                              alt="Jeremy Girard"
                            />
                          </div>
                          <div className="feature-box-content">
                            <div className="margin-15px-bottom text-very-small text-golden-yellow">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="text-extra-dark-gray text-medium alt-font font-weight-500 line-height-12px">
                              Lindsay Swanson
                            </div>
                            <span className="text-small">Envato Market</span>
                          </div>
                          <p className="margin-30px-top">
                            Absolutely amazing theme, flexible and awesome
                            design with possibilities. It's so easy to use and
                            to customize.
                          </p>
                        </div>
                      </div>
                      {/* end testimonials item */}
                      {/* start testimonials item */}
                      <div className="swiper-slide text-center">
                        <div className="feature-box feature-box-left-icon-middle padding-3-rem-tb padding-3-half-rem-lr bg-white border-all border-color-medium-gray border-radius-6px last-paragraph-no-margin md-padding-2-rem-tb md-padding-2-half-rem-lr">
                          <div className="feature-box-icon margin-20px-right">
                            <img
                              className="rounded-circle w-65px h-65px"
                              src="images/avtar30.jpg"
                              alt="Jeremy Girard"
                            />
                          </div>
                          <div className="feature-box-content">
                            <div className="margin-15px-bottom text-very-small text-golden-yellow">
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                              <i className="fas fa-star" />
                            </div>
                            <div className="text-extra-dark-gray text-medium alt-font font-weight-500 line-height-12px">
                              Jeremy Dupont
                            </div>
                            <span className="text-small">Google Marketing</span>
                          </div>
                          <p className="margin-30px-top">
                            Simply the great designs and best theme for
                            WooCommerce, loading fast, customisable and easy to
                            use.
                          </p>
                        </div>
                      </div>
                      {/* end testimonials item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="one-third-screen border-radius-5px position-relative py-0 margin-seven-lr xl-margin-three-lr md-margin-2-half-rem-lr sm-no-margin wow animate__fadeIn">
          <div className="container position-relative z-index-2">
            <div className="row align-items-center justify-content-center one-third-screen">
              <div className="col-12 text-center">
                <a
                  href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                  className="popup-youtube video-icon-box video-icon-double-large"
                >
                  <span>
                    <span className="video-icon bg-extra-dark-gray">
                      <i className="icon-simple-line-control-play text-white" />
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr bg-extra-dark-gray opacity-7" />
                        <span className="video-icon-sonar-afr bg-extra-dark-gray" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </div>
          {/* start slider */}
          <div
            className="swiper-container position-absolute top-0px"
            data-slider-options='{ "loop": true, "slidesPerView": 1, "effect": "fade", "keyboard": { "enabled": true, "onlyInViewport": true }, "autoplay": { "delay": 5000, "disableOnInteraction": false }, "fadeEffect": { "crossFade": true } }'
          >
            <div className="swiper-wrapper">
              {/* start slider item */}
              <div
                className="swiper-slide cover-background"
                style={{
                  backgroundImage: 'url("images/contact-us-modern-01.jpg")',
                }}
              />
              {/* end slider item */}
              {/* start slider item */}
              <div
                className="swiper-slide cover-background"
                style={{
                  backgroundImage: 'url("images/contact-us-modern-02.jpg")',
                }}
              />
              {/* end slider item */}
              {/* start slider item */}
              <div
                className="swiper-slide cover-background"
                style={{
                  backgroundImage: 'url("images/contact-us-modern-03.jpg")',
                }}
              />
              {/* end slider item */}
            </div>
          </div>
          {/* end slider */}
        </section>
        {/* end section */}
        {/* start section */}
        <section id="position-open" className="wow animate__fadeIn">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 col-lg-5 col-sm-7 text-center margin-5-rem-bottom sm-margin-3-rem-bottom">
                <span className="alt-font font-weight-500 text-fast-blue d-block margin-15px-bottom">
                  Opening positions
                </span>
                <h5 className="alt-font font-weight-500 text-extra-dark-gray d-inline-block letter-spacing-minus-1-half">
                  We talk a lot about hope helping and teamwork
                </h5>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-lg-3 row-cols-md-2 justify-content-center">
              {/* start interactive banner item */}
              <div
                className="col position-relative interactive-banners-style-12 text-center md-margin-5-half-rem-bottom sm-margin-7-half-rem-bottom xs-margin-6-half-rem-bottom wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <figure>
                  <div className="interactive-banners-image bg-extra-dark-gray border-radius-6px">
                    <img alt="our team 02" src="images/our-team-02.jpg" />
                    <div className="interactive-banners-details align-items-center justify-content-center d-flex flex-column">
                      <a
                        href="contact-us-simple.html"
                        className="bg-white border-radius-100 w-100px h-100px d-flex align-items-center justify-content-center flex-column padding-20px-all box-shadow-extra-large"
                      >
                        <i className="ti-user d-block text-large text-fast-blue margin-10px-bottom" />
                        <span className="alt-font font-weight-500 text-small line-height-14px text-extra-dark-gray text-uppercase w-100">
                          Apply now
                        </span>
                      </a>
                    </div>
                  </div>
                  <figcaption className="text-center">
                    <div className="bg-white d-inline-block border-radius-4px padding-three-tb padding-20px-lr w-70 box-shadow-medium alt-font font-weight-500 text-uppercase">
                      <span className="text-extra-dark-gray text-uppercase text-medium">
                        Senior web designer
                      </span>
                      <span className="alt-font text-extra-small d-block margin-5px-bottom">
                        2 position open
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* end interactive banner item */}
              {/* start interactive banner item */}
              <div
                className="col position-relative interactive-banners-style-12 text-center md-margin-5-half-rem-bottom sm-margin-7-half-rem-bottom xs-margin-6-half-rem-bottom wow animate__fadeIn"
                data-wow-delay="0.4s"
              >
                <figure>
                  <div className="interactive-banners-image bg-extra-dark-gray border-radius-6px">
                    <img alt="our team 02" src="images/our-team-03.jpg" />
                    <div className="interactive-banners-details align-items-center justify-content-center d-flex flex-column">
                      <a
                        href="contact-us-simple.html"
                        className="bg-white border-radius-100 w-100px h-100px d-flex align-items-center justify-content-center flex-column padding-20px-all box-shadow-extra-large"
                      >
                        <i className="ti-user d-block text-large text-fast-blue margin-10px-bottom" />
                        <span className="alt-font font-weight-500 text-small line-height-14px text-extra-dark-gray text-uppercase w-100">
                          Apply now
                        </span>
                      </a>
                    </div>
                  </div>
                  <figcaption className="text-center">
                    <div className="bg-white d-inline-block border-radius-4px padding-three-tb padding-20px-lr w-70 box-shadow-medium alt-font font-weight-500 text-uppercase">
                      <span className="text-extra-dark-gray text-uppercase text-medium">
                        Senior developer
                      </span>
                      <span className="alt-font text-extra-small d-block margin-5px-bottom">
                        3 position open
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* end interactive banner item */}
              {/* start interactive banner item */}
              <div
                className="col position-relative interactive-banners-style-12 text-center md-margin-5-half-rem-bottom xs-margin-5-half-rem-bottom wow animate__fadeIn"
                data-wow-delay="0.6s"
              >
                <figure>
                  <div className="interactive-banners-image bg-extra-dark-gray border-radius-6px">
                    <img alt="our team 02" src="images/our-team-04.jpg" />
                    <div className="interactive-banners-details align-items-center justify-content-center d-flex flex-column">
                      <a
                        href="contact-us-simple.html"
                        className="bg-white border-radius-100 w-100px h-100px d-flex align-items-center justify-content-center flex-column padding-20px-all box-shadow-extra-large"
                      >
                        <i className="ti-user d-block text-large text-fast-blue margin-10px-bottom" />
                        <span className="alt-font font-weight-500 text-small line-height-14px text-extra-dark-gray text-uppercase w-100">
                          Apply now
                        </span>
                      </a>
                    </div>
                  </div>
                  <figcaption className="text-center">
                    <div className="bg-white d-inline-block border-radius-4px padding-three-tb padding-20px-lr w-70 box-shadow-medium alt-font font-weight-500 text-uppercase">
                      <span className="text-extra-dark-gray text-uppercase text-medium">
                        UX design developer
                      </span>
                      <span className="alt-font text-extra-small d-block margin-5px-bottom">
                        4 position open
                      </span>
                    </div>
                  </figcaption>
                </figure>
              </div>
              {/* end interactive banner item */}
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start footer */}
        <footer className="footer-dark bg-slate-blue">
          <div className="footer-top padding-five-tb lg-padding-eight-tb md-padding-50px-tb">
            <div className="container">
              <div className="row">
                {/* start footer column */}
                <div className="col-12 col-lg-3 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                  <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                    Company
                  </span>
                  <ul>
                    <li>
                      <a href="about-us.html">About company</a>
                    </li>
                    <li>
                      <a href="our-services.html">Company services</a>
                    </li>
                    <li>
                      <a href="our-team.html">Job opportunities</a>
                    </li>
                    <li>
                      <a href="contact-us-classic.html">Contact us</a>
                    </li>
                  </ul>
                </div>
                {/* end footer column */}
                {/* start footer column */}
                <div className="col-12 col-lg-3 col-sm-6 md-margin-40px-bottom xs-margin-25px-bottom">
                  <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                    Customer
                  </span>
                  <ul>
                    <li>
                      <a href="faq.html">Client support</a>
                    </li>
                    <li>
                      <a href="pricing-packages.html">Pricing packages</a>
                    </li>
                    <li>
                      <a href="our-story.html">Company history</a>
                    </li>
                    <li>
                      <a href="our-process.html">Our process</a>
                    </li>
                  </ul>
                </div>
                {/* end footer column */}
                {/* start footer column */}
                <div className="col-12 col-lg-3 col-sm-6 xs-margin-25px-bottom">
                  <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom xs-margin-10px-bottom">
                    Get in touch
                  </span>
                  <p className="w-85 margin-15px-bottom">
                    27 Eden walk eden centre, Orchard view, Paris, France
                  </p>
                  <div>
                    <i className="feather icon-feather-phone-call icon-very-small margin-10px-right text-white" />
                    +1 234 567 8910
                  </div>
                  <div>
                    <i className="feather icon-feather-mail icon-very-small margin-10px-right text-white" />
                    <a href="#">info@yourdomain.com</a>
                  </div>
                </div>
                {/* end footer column */}
                {/* start footer column */}
                <div className="col-12 col-lg-3 col-sm-6">
                  <span className="alt-font font-weight-500 d-block text-white margin-20px-bottom">
                    Follow us on Instagram
                  </span>
                  <div className="w-100 d-inline-block margin-10px-top">
                    <ul
                      className="instafeed-grid instafeed-wrapper grid grid-3col xl-grid-3col lg-grid-3col md-grid-3col sm-grid-3col xs-grid-3col gutter-small"
                      data-total={3}
                    >
                      <li className="grid-item">
                        <figure>
                          <a href="#" data-href="{{link}}" target="_blank">
                            <img
                              src="#"
                              data-src="{{image}}"
                              className="insta-image"
                              alt=""
                            />
                            <span className="insta-counts">
                              <i className="fab fa-instagram" />
                              {"{"}
                              {"{"}likes{"}"}
                              {"}"}
                            </span>
                          </a>
                        </figure>
                      </li>
                    </ul>
                    <a
                      className="alt-font text-extra-small text-uppercase font-weight-500 margin-20px-top d-inline-block"
                      href="https://www.instagram.com/"
                      target="_blank"
                    >
                      <i className="fab fa-instagram icon-extra-small align-middle margin-10px-right text-gradient-light-purple-light-orange" />
                      <span className="d-inline-block align-middle">
                        Follow instagram
                      </span>
                    </a>
                  </div>
                </div>
                {/* end footer column */}
              </div>
            </div>
          </div>
          <div className="footer-bottom padding-40px-tb border-top border-color-white-transparent">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-12 col-md-3 text-center text-md-start sm-margin-20px-bottom">
                  <a href="index.html" className="footer-logo">
                    <img
                      src="images/logo-white.png"
                      data-at2x="images/logo-white@2x.png"
                      alt=""
                    />
                  </a>
                </div>
                <div className="col-12 col-md-6 text-center last-paragraph-no-margin sm-margin-20px-bottom">
                  <p>
                    © 2021 Litho is Proudly Powered by{" "}
                    <a href="https://www.themezaa.com/" target="_blank">
                      ThemeZaa
                    </a>
                  </p>
                </div>
                <div className="col-12 col-md-3 text-center text-md-end">
                  <div className="social-icon-style-12">
                    <ul className="extra-small-icon light">
                      <li>
                        <a
                          className="facebook"
                          href="https://www.facebook.com/"
                          target="_blank"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="dribbble"
                          href="http://www.dribbble.com"
                          target="_blank"
                        >
                          <i className="fab fa-dribbble" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="twitter"
                          href="http://www.twitter.com"
                          target="_blank"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                      </li>
                      <li>
                        <a
                          className="instagram"
                          href="http://www.instagram.com"
                          target="_blank"
                        >
                          <i className="fab fa-instagram" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* end footer */}
        {/* start scroll to top */}
        <a className="scroll-top-arrow" href="javascript:void(0);">
          <i className="feather icon-feather-arrow-up" />
        </a>
        {/* end scroll to top */}
      </>
    );
  }
}

export default OurTeam;
