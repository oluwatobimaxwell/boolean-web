import React, { Component } from 'react';
class SecondSection extends React.Component {
    render() { 
        return (
            <section id="about" className="big-section">
            <div className="container">
              <div className="row row-cols-1 row-cols-lg-5 row-cols-md-3 row-cols-sm-2 justify-content-center">
                {/* start feature box item */}
                <div
                  className="col text-center md-margin-50px-bottom wow animate__fadeIn"
                  data-wow-delay="0.1s"
                >
                  <a
                    href="#"
                    className="text-medium-gray text-sunglow-hover cursor-default"
                  >
                    <i className="line-icon-Vector-5 icon-large padding-20px-bottom" />
                    <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">
                      Good design
                    </span>
                  </a>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div
                  className="col text-center md-margin-50px-bottom wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <a
                    href="#"
                    className="text-medium-gray text-sunglow-hover cursor-default"
                  >
                    <i className="line-icon-Police icon-large padding-20px-bottom" />
                    <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">
                      Inspiring ideas
                    </span>
                  </a>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div
                  className="col text-center md-margin-50px-bottom wow animate__fadeIn"
                  data-wow-delay="0.3s"
                >
                  <a
                    href="#"
                    className="text-medium-gray text-sunglow-hover cursor-default"
                  >
                    <i className="line-icon-Bee icon-large padding-20px-bottom" />
                    <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">
                      Innovative code
                    </span>
                  </a>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div
                  className="col text-center sm-margin-50px-bottom wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <a
                    href="#"
                    className="text-medium-gray text-sunglow-hover cursor-default"
                  >
                    <i className="line-icon-Medal-2 icon-large padding-20px-bottom" />
                    <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">
                      Best quality
                    </span>
                  </a>
                </div>
                {/* end feature box item */}
                {/* start feature box item */}
                <div
                  className="col text-center wow animate__fadeIn"
                  data-wow-delay="0.5s"
                >
                  <a
                    href="#"
                    className="text-medium-gray text-sunglow-hover cursor-default"
                  >
                    <i className="line-icon-Idea-5 icon-large padding-20px-bottom" />
                    <span className="alt-font font-weight-600 text-extra-dark-gray text-uppercase d-block">
                      Brand analysis
                    </span>
                  </a>
                </div>
                {/* end feature box item */}
              </div>
              <div className="row align-items-end justify-content-center margin-10-half-rem-top md-margin-7-rem-top">
                <div
                  className="col-12 col-lg-3 pe-lg-0 md-margin-25px-bottom sm-margin-15px-bottom text-center text-lg-start wow animate__fadeIn"
                  data-wow-delay="0.2s"
                >
                  <span className="alt-font font-weight-600 title-large text-sunglow d-block letter-spacing-minus-5px sm-letter-spacing-minus-1-half">
                    hello<span className="text-extra-dark-gray">.</span>
                  </span>
                </div>
                <div
                  className="col-12 col-lg-5 col-md-10 text-lg-end md-margin-25px-bottom text-center text-lg-start wow animate__fadeIn"
                  data-wow-delay="0.4s"
                >
                  <h4 className="alt-font font-weight-600 text-extra-dark-gray d-block mb-0 padding-2-half-rem-right letter-spacing-minus-1px lg-no-padding-right">
                    Award winning agency specialising in creative design
                  </h4>
                </div>
                <div
                  className="col-12 col-lg-4 col-md-9 padding-30px-left md-padding-15px-left text-center text-lg-start wow animate__fadeIn"
                  data-wow-delay="0.6s"
                >
                  <p className="w-80 margin-15px-bottom lg-w-100">
                    Lorem ipsum dolor sit amet consectetur eiusmod tempor
                    incididunt labore magna ut enim ad minim veniam nostrud.
                  </p>
                  <a
                    href="about-us.html"
                    className="btn btn-link btn-extra-large text-extra-dark-gray font-weight-600"
                  >
                    Agency info
                  </a>
                </div>
              </div>
            </div>
          </section>
          
        );
    }
}
 
export default SecondSection;