import React, { Component } from "react";
class EightSection extends Component {
  render() {
    return (
      <section
        className="big-section home-design-agency"
        style={{
          background: 'url("new_images/updated_boo_bg.jpg")',
          "background-size": "100% 100%",
          "background-repeat": "no-repeat",
          "background-position": "left top",
          "position": "relative"
        }}
      >
        <div className="container"
        style={{position: "absolute", inset:0}}
        >
          <div className="row align-items-center">
            <div
              className="col-12 col-lg-3 md-margin-4-rem-bottom xs-margin-3-rem-bottom wow animate__fadeInLeft"
              data-wow-delay="0.6s"
            >
              <div className="outside-box-left text-center text-lg-end">
                <span className="alt-font font-weight-600 text-big text-sunglow letter-spacing-minus-10px d-block padding-3-rem-right md-no-padding-right sm-letter-spacing-minus-1-half">
                  {/* agency */}
                </span>
              </div>
            </div>
            <div
              className="col-12 col-lg-6 text-center text-lg-start md-margin-3-rem-bottom wow animate__fadeIn"
              data-wow-delay="0.2s"
            >
              <h4 className="alt-font font-weight-500 text-extra-dark-gray mb-0 letter-spacing-minus-1px d-inline-block md-w-80 xs-w-100">
                {/* Express your creativity and start building your design */}
              </h4>
            </div>
            <div
              className="col-12 col-lg-3 text-center wow animate__fadeIn"
              data-wow-delay="0.4s"
              style = {{
                position: "absolute",
                top: "5%",
                right: "-5px",
              }}              
            >
              <a
                href="/contact-us"
                className="btn btn-fancy btn-box-shadow btn-medium btn-dark-gray"
              >
                Start a project
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default EightSection;
