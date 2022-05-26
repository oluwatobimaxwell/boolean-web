import React, { Component } from "react";
class EightSection extends Component {
  render() {
    return (
      <div>
        <div>
            <div
              className="wow animate__fadeIn"
              data-wow-delay="0.4s"
              style = {{
                float: "right"
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
        <img src="new_images/updated_boo_orgn.jpg"></img>
      </div>
    );
  }
}

export default EightSection;
