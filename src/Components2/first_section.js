import React, { Component } from 'react';
class FirstSection extends React.Component {
    render() { 
        return (
            <section
            className="parallax p-0"
            data-parallax-background-ratio="0.3"
            style={{
              backgroundImage: 'url("images/home-design-agency-bg-img-01.jpg")',
            }}
          >
            <div
              className="position-absolute cover-background top-0px left-0px w-100 h-100"
              data-parallax-background-ratio="0.5"
              style={{
                backgroundImage:
                  'url("images/home-design-agency-bg-img-01.png")',
              }}
            />
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 col-md-6 col-sm-7 full-screen md-h-650px sm-h-500px d-flex flex-column justify-content-center padding-8-rem-tb">
                  <h1 className="alt-font font-weight-600 title-large text-extra-dark-gray letter-spacing-minus-2px margin-4-half-rem-bottom sm-letter-spacing-minus-1-half xs-w-65">
                    We are a Creative Agency
                  </h1>
                  <a
                    href="/about-us"
                    className="btn btn-extra-large btn-expand-ltr text-extra-dark-gray btn-rounded align-self-start font-weight-600"
                  >
                    Read more
                    <span className="bg-white" />
                  </a>
                </div>
              </div>
            </div>
            <div className="scroll-down-bottom">
              <a
                href="#about"
                className="section-link d-block w-2px h-35px bg-white mx-auto right-0px left-0px position-absolute"
              >
                <span className="scroll-down-text alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1-half margin-5px-bottom">
                  scroll
                </span>
              </a>
            </div>
          </section>
          
        );
    }
}
 
export default FirstSection;