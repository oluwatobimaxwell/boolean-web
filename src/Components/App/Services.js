import React, { Component } from "react";
import AppLayer from "./AppLayer";

class Services extends Component {
  render() {
    return (
      <AppLayer navbarClass={"navbar navbar-expand-lg navbar-dark bg-transparent header-light fixed-top header-reverse-scroll"}>
        <section
          className="parallax bg-extra-dark-gray"
          data-parallax-background-ratio="0.5"
          style={{ backgroundImage: 'url("images/what-we-offers-bg-1.jpg")' }}
        >
          <div className="opacity-extra-medium bg-extra-dark-gray" />
          <div className="container">
            <div className="row align-items-stretch justify-content-center small-screen">
              <div className="col-12 col-xl-6 col-lg-7 col-md-8 position-relative page-title-extra-small text-center d-flex justify-content-center flex-column">
                <h1 className="alt-font text-white opacity-6 margin-20px-bottom">
                  What we offer
                </h1>
                <h3 className="text-white alt-font font-weight-500 letter-spacing-minus-1px line-height-50 sm-line-height-45 xs-line-height-30 no-margin-bottom">
                  we are a creative and outstanding technology firm
                </h3>
              </div>
              <div className="down-section text-center">
                <a href="#down-section" className="section-link">
                  <i className="ti-arrow-down icon-extra-small text-white bg-transparent-black padding-15px-all xs-padding-10px-all border-radius-100" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* end page title */}
        {/* start section */}
        <section className="bg-light-gray wow animate__fadeIn">
          <div className="container">
            <h4 style={{display:"flex", justifyContent:"center"}}>Our Core Values</h4>
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
                    Getting Things Done is the mantra we live by. Our ingenious team has a “can-do” attitude and believes in Getting Things Done. This mantra makes sense when we deliver our client’s project on time. 
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
                    We do care about our clients and their requirements, so we are committed to keep our words and deliver what we say. We maintain trust, transparency, and honesty throughout the project. 
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
                    We select very few clients. Reason? We don’t want to compromise with the quality we deliver. But, don’t believe in our words. If you have a specific requirement, try and test us. 
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
                    Excellent customer service is the number one job in any company! It is the personality of the company and the reason customers come back. Without customers there is no company!
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
                    We don’t believe in just finishing the job, we take it as our own work and nurture it with the utmost care to successfully deliver it. We hold ourselves accountable for the results. 
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
                      Innovation motivates action: to take risks, encourage new ideas, learn from mistakes, and constantly strive to exceed expectations. We generate solutions for our customers and raise the bar both within our workplace and throughout our industry.
                    </p>
                  </div>
                  <div className="feature-box-overlay bg-white border-radius-5px" />
                </div>
              </div>
              {/* end feature box item */}
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="wow animate__fadeIn">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-5 sm-margin-30px-bottom">
                <h5 className="alt-font font-weight-500 text-extra-dark-gray mb-0">
                  We design brand, digital experience that engaged the right
                  customers
                </h5>
              </div>
              <div className="col-12 col-lg-6 offset-lg-1 col-md-7">
                <div className="row row-cols-1 row-cols-sm-2">
                  {/* start counter item */}
                  <div className="col counter-style-01 last-paragraph-no-margin xs-margin-30px-bottom">
                    <h5
                      className="counter counter-number text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-1px margin-15px-bottom"
                      data-to={2530}
                      data-speed={7000}
                    >
                      5000
                    </h5>
                    <span className="alt-font font-weight-500 text-extra-dark-gray d-block margin-5px-bottom">
                      Hours Worked
                    </span>
              
                  </div>
                  {/* end counter item */}
                  {/* start counter item */}
                  <div className="col counter-style-01 last-paragraph-no-margin">
                    <h5
                      className="counter counter-number text-extra-dark-gray alt-font appear font-weight-600 letter-spacing-minus-1px margin-15px-bottom"
                      data-to={2000}
                      data-speed={7000}
                    >
                      200
                    </h5>
                    <span className="alt-font font-weight-500 text-extra-dark-gray d-block margin-5px-bottom">
                      Completed projects
                    </span>
                    
                  </div>
                  {/* end counter item */}
                </div>
              </div>
              <div className="col-12">
                <div className="w-100 h-1px bg-medium-gray margin-7-rem-top margin-8-rem-bottom sm-margin-5-rem-tb" />
              </div>
            </div>
            <div className="row">
              <div
                className="col-12 tab-style-01 wow animate__fadeIn"
                data-wow-delay="0.4s"
              >
                {/* start tab navigation */}
                <ul className="nav nav-tabs text-uppercase justify-content-center text-center alt-font font-weight-50 margin-7-rem-bottom lg-margin-5-rem-bottom md-margin-4-rem-bottom sm-margin-20px-bottom">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-bs-toggle="tab"
                      href="#planning-tab"
                    >
                      Web Development
                    </a>
                    <span className="tab-border bg-gradient-light-purple-light-orange" />
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#research-tab"
                    >
                      iOS Development
                    </a>
                    <span className="tab-border bg-gradient-light-purple-light-orange" />
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#target-tab"
                    >
                      Android Development
                    </a>
                    <span className="tab-border bg-gradient-light-purple-light-orange" />
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#campaign-tab"
                    >
                      UI/UX Design
                    </a>
                    <span className="tab-border bg-gradient-light-purple-light-orange" />
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-bs-toggle="tab"
                      href="#extra-tab"
                    >
                      Digital Marketing &amp; SEO
                    </a>
                    <span className="tab-border bg-gradient-light-purple-light-orange" />
                  </li>
                </ul>
                {/* end tab navigation */}
                <div className="tab-content">
                  {/* start tab item */}
                  <div
                    id="planning-tab"
                    className="tab-pane fade in active show"
                  >
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-end sm-margin-40px-bottom">
                        <img
                          src="images/what-we-offers-02.jpg"
                          className="w-90 sm-w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                       <h5 className="alt-font font-weight-300 text-extra-dark-gray">
                          Web Development
                        </h5>
                        <p className="w-85 lg-w-100">
                          
Our web development experts at The Boolean Tech have accomplished a wide range of commercial projects on varying website development platforms. These include WordPress, PHP, SharePoint, ASP.NET, CakePHP, Joomla and Drupal. As a reputed Web Development Company, we put our best possible efforts to achieve a huge appreciation and satisfaction from our clients.

Eye-catching themes, unique designs and visually appealing website layouts have helped us to obtain a strong position in the web development sector. Along with this, our experts at The Boolean Tech understand well that each business has specific requirements. Hence, we deploy unique solutions to meet the individual requirements of our global clients and deliver competitive business benefits.

                        </p>
                       
                      </div>
                    </div>
                  </div>
                  {/* end tab item */}
                  {/* start tab item */}
                  <div id="research-tab" className="tab-pane fade">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-end sm-margin-40px-bottom">
                        <img
                          src="images/what-we-offers-04.jpg"
                          className="w-90 sm-w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                        <h5 className="alt-font font-weight-300 text-extra-dark-gray">
                          iOS Development
                        </h5>
                        <p className="w-85 lg-w-100">
                        The Boolean Tech is well known company for iOS development and we have created a presence in Nigeria with our experience and clients who speak our work and who we had the privilege to work with in last 3+ years. We have developed numerous applications on iPad, and iPhone. The Boolean Tech has a zeal in this sector that makes us one of the most sought after development companies in the world.
The Boolean Tech is a leading name in Mobile app Development Companies in Nigeria. Our iOS Developers are experts in their trade and provide best solution in development. We are highly skilled in designing dynamic and interactive apps with highly customized features. 
                        </p>
                       
                      </div>
                    </div>
                  </div>
                  {/* end tab item */}
                  {/* start tab item */}
                  <div id="target-tab" className="tab-pane fade">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-end sm-margin-40px-bottom">
                        <img
                          src="images/what-we-offers-06.jpg"
                          className="w-90 sm-w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                        <h5 className="alt-font font-weight-300 text-extra-dark-gray">
                          Android Development
                          </h5>
                        <p className="w-85 lg-w-100">
                          
The Boolean Tech is a leading mobile app development company in Nigeria, with around 15+ apps in our portfolio working on all OS versions. We have an expert team in developing Android apps. We provide high end enhanced Android apps which helps clients to enhance their business in various industrial verticals.
We have a separate developing edge and highly technically sound team working from last 4 years in this sphere. Constant research and central approach with our clients and market have increased our diameter of experience in mobile app business.
                        </p>
                        
                      </div>
                    </div>
                  </div>
                  {/* end tab item */}
                  {/* start tab item */}
                  <div id="campaign-tab" className="tab-pane fade">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-end sm-margin-40px-bottom">
                        <img
                          src="images/what-we-offers-05.jpg"
                          className="w-90 sm-w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                  
                        <h5 className="alt-font font-weight-300 text-extra-dark-gray">
                          UI/UX Design
                        </h5>
                        <p className="w-85 lg-w-100">
                        With a strong focus on UI/UX design best practices, we make sure the your app feels cool using.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end tab item */}
                   {/* start tab item */}
                   <div id="extra-tab" className="tab-pane fade">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6 text-end sm-margin-40px-bottom">
                        <img
                          src="images/what-we-offers-05.jpg"
                          className="w-90 sm-w-100"
                          alt=""
                        />
                      </div>
                      <div className="col-12 col-lg-5 offset-lg-1 col-md-6">
                  
                        <h5 className="alt-font font-weight-300 text-extra-dark-gray">
                          Digital Marketing &amp; SEO
                        </h5>
                        <p className="w-85 lg-w-100">
                          

The Boolean Tech provides digital marketing and market research support. Digital marketing services are the best medium to not only connect with clients and partners but also generate trust. Digital marketing is often referred to as ‘online marketing’, ‘internet marketing’ or ‘web marketing’. Digital Marketing is a wide term that refers to wide range of digital advertising techniques applied to attract customers.

The Boolean Tech has an edge over other players in digital marketing and market research industry. Our team provides a sharp and accurate solution with the combination of high professional development methodologies with advanced management tools which can shape up what you want.

                        </p>
                      </div>
                    </div>
                  </div>
                  {/* end tab item */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        {/* start section */}
        <section className="bg-light-gray wow animate__fadeIn">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-12 col-xl-4 offset-xl-2 col-lg-6 order-lg-2 md-margin-50px-bottom sm-margin-30px-bottom wow animate__fadeInRight"
                data-wow-delay="0.4s"
                data-wow-duration="0.6s"
              >
                <div className="outside-box-right">
                  <img
                    src="images/top_view_of_people.jpg"
                    className="box-shadow-medium border-radius-5px overflow-hidden"
                    alt=""
                  />
                </div>
              </div>
              <div
                className="col-12 col-xl-5 col-lg-6 order-lg-1 padding-five-right sm-padding-15px-right wow animate__fadeIn"
                data-wow-delay="0.2s"
              >
                <h5 className="alt-font cd-headline slide font-weight-500 text-extra-dark-gray line-height-40px margin-40px-bottom">
                  <span className="d-initial p-0">
                  We convert ideas into successful mobile and web-based solutions.
                  </span>
              
                </h5>
                <p>
                We provide end-to-end software development services without compromising standard processes and quality assurance. We have served multiple companies globally transforming concepts into genuine products. 
                </p>
                <ul className="list-style-01 text-extra-dark-gray">
                  <li>
                    <i className="fas fa-check text-extra-medium-gray" />
                    Advanced theme customization options
                    <span className="list-hover bg-white box-shadow-small border-radius-4px" />
                  </li>
                  <li>
                    <i className="fas fa-check text-extra-medium-gray" />
                    Build and customize stunning pages in minutes
                    <span className="list-hover bg-white box-shadow-small border-radius-4px" />
                  </li>
                  <li>
                    <i className="fas fa-check text-extra-medium-gray" />
                    Helping you to increase your website traffic
                    <span className="list-hover bg-white box-shadow-small border-radius-4px" />
                  </li>
                  <li>
                    <i className="fas fa-check text-extra-medium-gray" />
                    Browse amazing our social media features
                    <span className="list-hover bg-white box-shadow-small border-radius-4px" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        {/* end section */}
        
      </AppLayer>
    );
  }
}

export default Services;
