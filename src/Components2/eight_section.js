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
              {/* <a
                href="/contact-us"
                className="btn btn-fancy btn-box-shadow btn-small btn-dark-gray"
              >
                Start a project
              </a> */}
              {/* <a href="/contact-us" className="btn-box-shadow btn-small btn btn-medium btn-fast-yellow btn-round-edge btn-fancy">
                Start a project!
              </a> */}
            </div>
        </div>        
        <div className="position-relative"
        style={{
          backgroundColor: "black",
        }}>
          <img src="new_images/creativity-bulb.jpg"
          style={{
            opacity: "0.65",
          }}></img>
          <div className="position-absolute" 
          style={{
              top: "25%",
              left: "45%"
          }}>
            <p style={{
                  color: "white",
                  lineHeight: "70px",
                  fontSize: "60px",
                  fontWeight: "1000",
            }}>We are a Technology Agency</p>
            <br/>
            <p style={{
                  fontSize: "25px",
                  fontWeight: "600",
                  color: "black",
            }}>Express your idea, we will build and design!</p>
            <br/><br/>
            <a href="/contact-us" className="btn-box-shadow btn-small btn btn-medium btn-round-edge btn-fancy"
            style={{
              backgroundColor: "white",
            }}>
              Start a project!
            </a>            
          </div>
        </div>
      </div>
    );
  }
}

export default EightSection;
