import React, { Component } from "react";
class FourthSection extends React.Component {
  render() {
    return (
      <section className="bg-gradient-white-light-gray">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-12 col-lg-6 position-relative text-center md-margin-30px-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <img src="images/home-design-agency-img-01.png" alt="" />
              <div className="absolute-middle-center">
                <a
                  href="https://www.youtube.com/watch?v=g0f_BRYJLJE"
                  className="popup-youtube video-icon-box video-icon-large position-relative"
                >
                  <span>
                    <span className="video-icon bg-white">
                      <i className="icon-simple-line-control-play text-extra-dark-gray" />
                      <span className="video-icon-sonar">
                        <span className="video-icon-sonar-bfr bg-white opacity-7" />
                        <span className="video-icon-sonar-afr bg-white" />
                      </span>
                    </span>
                  </span>
                </a>
              </div>
            </div>
            <div className="col-12 col-xl-4 col-lg-5 offset-lg-1 col-md-7">
              <h4
                className="alt-font font-weight-600 text-extra-dark-gray margin-4-half-rem-bottom letter-spacing-minus-1px text-center text-lg-start wow animate__fadeInRight"
                data-wow-delay="0.2s"
              >
                Browse amazing design services!
              </h4>
              {/* start feature box item */}
              <div
                className="feature-box feature-box-left-icon-middle margin-4-half-rem-bottom wow animate__fadeInRight"
                data-wow-delay="0.3s"
              >
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                  <i className="line-icon-Cursor-Click2 icon-very-medium" />
                  <div className="feature-box-icon-hover bg-extra-dark-gray rounded-circle" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">
                    Powerfull options
                  </span>
                  <p>Lorem ipsum dolor consectet eiusmod tempor incididunt</p>
                </div>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div
                className="feature-box feature-box-left-icon-middle margin-4-half-rem-bottom wow animate__fadeInRight"
                data-wow-delay="0.4s"
              >
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                  <i className="line-icon-Sand-watch2 icon-very-medium" />
                  <div className="feature-box-icon-hover bg-extra-dark-gray rounded-circle" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">
                    Unlimited variations
                  </span>
                  <p>Lorem ipsum dolor consectet eiusmod tempor incididunt</p>
                </div>
              </div>
              {/* end feature box item */}
              {/* start feature box item */}
              <div
                className="feature-box feature-box-left-icon-middle wow animate__fadeInRight"
                data-wow-delay="0.5s"
              >
                <div className="feature-box-icon feature-box-icon-rounded dark bg-white w-85px h-85px rounded-circle box-shadow-small margin-40px-right">
                  <i className="line-icon-Idea-5 icon-very-medium" />
                  <div className="feature-box-icon-hover bg-extra-dark-gray rounded-circle" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="alt-font font-weight-500 margin-5px-bottom d-block text-extra-dark-gray">
                    Effective strategy
                  </span>
                  <p>Lorem ipsum dolor consectet eiusmod tempor incididunt</p>
                </div>
              </div>
              {/* end feature box item */}
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 text-center margin-7-rem-top lg-margin-4-half-rem-top wow animate__fadeIn"
              data-wow-delay="0.6s"
            >
              <span className="alt-font text-extra-dark-gray text-large">
                Are you interested in working with us?{" "}
                <a
                  href="#pricing"
                  className="font-weight-600 text-decoration-line-bottom text-extra-dark-gray text-black-hover section-link"
                >
                  Let's started now
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FourthSection;
