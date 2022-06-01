import React, { Component } from 'react';
class FirstSection extends Component {
    render() { 
        return (
            <section
            className="parallax p-0"
            data-parallax-background-ratio="0.3"
            style={{
              backgroundImage: 'url("new_images/boolean_bg_left1.jpg")',
            }}
          >
            <div
              className="position-absolute cover-background top-0px left-0px w-100 h-100"
              data-parallax-background-ratio="0.5"
              // style={{
              //   backgroundImage:
              //     'url("images/home-design-agency-bg-img-01.png")',
              // }}
            />
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-5 col-md-6 col-sm-7 full-screen md-h-650px sm-h-500px d-flex flex-column justify-content-center padding-8-rem-tb">
                  <h1 className="font-weight-600 text-extra-dark-gray letter-spacing-minus-2px margin-2-half-rem-bottom sm-letter-spacing-minus-1-half xs-w-65"
                  style={{
                    lineHeight: '95px'
                  }}>
                  We bring life to your Ideas!
                  </h1>
                  <h5 style={{
                    fontSize: "16px",
                  }}>We develop cool software</h5>
                  <br/><br/>
                  {/* <a
                    href="/about-us"
                    className="btn btn-extra-large btn-expand-ltr text-extra-dark-gray btn-rounded align-self-start font-weight-600"
                  >
                    className="btn-box-shadow btn-small btn btn-medium btn-round-edge btn-fancy"
                    Read more
                    <span className="bg-white" />
                  </a> */}
                  <a href="/contact-us" className="btn-box-shadow btn-small btn btn-medium btn-round-edge btn-fancy btn-expand-ltr"
                   style={{
                     width: "fit-content",
                   }}
                   >Start a project now</a>
                </div>
              </div>
            </div>
            
          </section>
          
        );
    }
}
 
export default FirstSection;