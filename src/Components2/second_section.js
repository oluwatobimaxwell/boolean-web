import React, { Component } from "react";
class SecondSection extends Component {
  render() {
    return (
      <section className="bg-light-gray wow animate__fadeIn">
        <div className="container">
          <h4 style={{ display: "flex", justifyContent: "center" }}>
            Our Core Values
          </h4>
          <div className="row row-cols-1 row-cols-lg-3 row-cols-sm-2">
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.2s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Navigation-LeftWindow icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray d-block margin-5px-bottom font-weight-500">
                    Getting things done
                  </span>
                  <p>
                    Getting Things Done is the mantra we live by. Our ingenious
                    team has a “can-do” attitude and believes in Getting Things
                    Done. This mantra makes sense when we deliver our client’s
                    project on time.
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Cursor-Click2 icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                    Integrity
                  </span>
                  <p>
                    We do care about our clients and their requirements, so we
                    are committed to keep our words and deliver what we say. We
                    maintain trust, transparency, and honesty throughout the
                    project.
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Like-2 icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray d-block margin-5px-bottom font-weight-500">
                    Quality at work
                  </span>
                  <p>
                    We select very few clients. Reason? We don’t want to
                    compromise with the quality we deliver. But, don’t believe
                    in our words. If you have a specific requirement, try and
                    test us.
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.2s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Talk-Man icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray d-block margin-5px-bottom font-weight-500">
                    Customer satisfaction
                  </span>
                  <p>
                    Excellent customer service is the number one job in any
                    company! It is the personality of the company and the reason
                    customers come back. Without customers there is no company!
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Heart icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                    Accountability
                  </span>
                  <p>
                    We don’t believe in just finishing the job, we take it as
                    our own work and nurture it with the utmost care to
                    successfully deliver it. We hold ourselves accountable for
                    the results.
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
            {/* start feature box item */}
            <div className="col wow animate__fadeIn" data-wow-delay="0.6s">
              <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr">
                <div className="feature-box-icon">
                  <i className="line-icon-Gear-2 icon-medium text-gradient-light-purple-light-orange margin-40px-bottom md-margin-20px-bottom" />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <span className="text-extra-medium alt-font text-extra-dark-gray d-block margin-5px-bottom font-weight-500">
                    Innovation
                  </span>
                  <p>
                    Innovation motivates action: to take risks, encourage new
                    ideas, learn from mistakes, and constantly strive to exceed
                    expectations. We generate solutions for our customers and
                    raise the bar both within our workplace and throughout our
                    industry.
                  </p>
                </div>
                <div className="feature-box-overlay bg-white border-radius-5px" />
              </div>
            </div>
            {/* end feature box item */}
          </div>
        </div>
      </section>
    );
  }
}

export default SecondSection;
