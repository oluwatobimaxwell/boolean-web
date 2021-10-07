import React, { Component } from "react";
class FifthSection extends React.Component {
  render() {
    return (
      <section
        id="pricing"
        className="big-section pb-0 border-bottom border-width-1px border-color-medium-gray"
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-12 col-xl-4 col-lg-5 md-margin-5-rem-bottom sm-margin-6-half-rem-bottom text-center text-md-start wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <h4 className="alt-font font-weight-600 text-extra-dark-gray letter-spacing-minus-1px margin-2-half-rem-bottom">
                Hire dedicated creative designer?
              </h4>
              <p className="w-90 sm-w-100">
                Lorem ipsum dolor amet consectetur adipiscing do eiusmod tempor
                incididunt labore dolore magna ut enim ad minim veniam nostrud
                ullamco laboris nisi commodo.
              </p>
              <a
                href="pricing-packages.html"
                className="btn btn-fancy btn-medium btn-transparent-light-gray margin-20px-top"
              >
                Pricing packages
              </a>
            </div>
            <div className="col-12 col-xl-6 offset-xl-2 col-lg-7 md-padding-25px-left md-padding-35px-right sm-padding-15px-lr">
              <div className="row row-cols-1 row-cols-md-2 align-items-center sm-no-margin-lr">
                <div
                  className="col pricing-table-style-02 text-center px-0 sm-margin-30px-bottom xs-margin-15px-bottom wow animate__fadeInRight"
                  data-wow-delay="0.6s"
                >
                  {/* start pricing table */}
                  <div className="pricing-table bg-white box-shadow-small">
                    {/* start pricing header */}
                    <div className="pricing-header padding-55px-top">
                      <i className="line-icon-Boy icon-large text-sunglow" />
                      <span className="alt-font font-weight-600 text-extra-medium text-extra-dark-gray text-uppercase d-block margin-5px-top">
                        Standard
                      </span>
                    </div>
                    {/* end pricing header */}
                    {/* start pricing body */}
                    <div className="pricing-body padding-40px-tb">
                      <h4 className="alt-font font-weight-600 text-slate-blue mb-0 letter-spacing-minus-2px">
                        $800
                      </h4>
                      <div className="alt-font font-weight-500 text-small text-uppercase letter-spacing-1px margin-30px-bottom">
                        Per month
                      </div>
                      <ul className="list-style-03">
                        <li className="border-0 p-0 margin-10px-bottom">
                          Limited hours
                        </li>
                        <li className="border-0 p-0">Limited projects</li>
                      </ul>
                    </div>
                    {/* end pricing body */}
                    {/* start pricing footer */}
                    <div className="pricing-footer margin-55px-bottom">
                      <a
                        className="btn btn-fancy btn-small btn-transparent-light-gray"
                        href="pricing-packages.html"
                      >
                        Get started
                      </a>
                    </div>
                    {/* end pricing footer */}
                  </div>
                  {/* end pricing table */}
                </div>
                <div
                  className="col pricing-table-style-02 text-center px-0 wow animate__fadeIn"
                  data-wow-delay="0.3s"
                >
                  {/* start pricing table */}
                  <div className="pricing-table pricing-popular bg-white box-shadow-small">
                    <div className="popular-label alt-font font-weight-600 text-extra-small text-extra-dark-gray bg-sunglow text-uppercase padding-5px-tb">
                      Popular
                    </div>
                    {/* start pricing header */}
                    <div className="pricing-header padding-65px-top">
                      <i className="line-icon-Bee icon-large text-sunglow" />
                      <span className="alt-font font-weight-600 text-extra-medium text-extra-dark-gray text-uppercase d-block margin-5px-top">
                        Advanced
                      </span>
                    </div>
                    {/* end pricing header */}
                    {/* start pricing body */}
                    <div className="pricing-body padding-40px-tb">
                      <h4 className="alt-font font-weight-600 text-slate-blue mb-0 letter-spacing-minus-2px">
                        $1200
                      </h4>
                      <div className="alt-font font-weight-500 text-small text-uppercase letter-spacing-1px margin-30px-bottom">
                        Per month
                      </div>
                      <ul className="list-style-03">
                        <li className="border-0 p-0 margin-10px-bottom">
                          Unlimited hours
                        </li>
                        <li className="border-0 p-0 margin-10px-bottom">
                          Unlimited projects
                        </li>
                        <li className="border-0 p-0">Unlimited variations</li>
                      </ul>
                    </div>
                    {/* end pricing body */}
                    {/* start pricing footer */}
                    <div className="pricing-footer margin-65px-bottom">
                      <a
                        className="btn btn-fancy btn-small btn-dark-gray"
                        href="pricing-packages.html"
                      >
                        Get started
                      </a>
                    </div>
                    {/* end pricing footer */}
                  </div>
                  {/* end pricing table */}
                </div>
              </div>
            </div>
          </div>
          <div className="row align-items-center justify-content-center margin-10-rem-top md-margin-7-rem-top">
            <div
              className="col-12 col-lg-3 col-md-5 col-sm-6 text-center text-lg-end order-1 md-margin-5-rem-bottom xs-margin-4-rem-bottom wow animate__fadeInRight"
              data-wow-delay="0.7s"
            >
              <i className="fas fa-quote-right icon-small d-block opacity-3 margin-25px-bottom" />
              <span className="alt-font font-weight-500 text-large line-height-30px text-extra-dark-gray d-inline-block w-80">
                We offers perfect hiring models for your project requirements
              </span>
            </div>
            <div className="col-12 col-lg-6 col-md-8 p-0 order-3 order-lg-2 wow animate__fadeIn">
              <img src="images/home-design-agency-img-02.png" alt="" />
            </div>
            <div
              className="col-12 col-lg-3 col-md-5 col-sm-6 text-center text-lg-start order-2 order-lg-3 md-margin-5-rem-bottom xs-margin-7-rem-bottom wow animate__fadeInLeft"
              data-wow-delay="0.7s"
            >
              <i className="fas fa-quote-left icon-small d-block opacity-3 margin-25px-bottom" />
              <span className="alt-font font-weight-500 text-large line-height-30px text-extra-dark-gray d-inline-block w-80">
                Our highly qualified and skilled designer are here to help
              </span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FifthSection;
