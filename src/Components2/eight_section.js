import React, { Component } from "react";
class EightSection extends Component {
  render() {
    return (
      <section
        className="big-section home-design-agency"
        style={{
          background: 'url("new_images/updated_boo_bg1.jpg")',
          "background-size": "100% 100%",
          "background-repeat": "no-repeat",
          "background-position": "left top",
          "position": "relative"
        }}
      >
        <div className="container"
        >
            <div
              className="wow animate__fadeIn"
              data-wow-delay="0.4s"
              style = {{
                position: "absolute",
                top: "0",
                left: "5px"
              }}              
            >
              <a
                href="/contact-us"
                className="btn btn-fancy btn-box-shadow btn-small btn-dark-gray"
              >
                Start a project
              </a>
            </div>
        </div>
      </section>
    );
  }
}

export default EightSection;
