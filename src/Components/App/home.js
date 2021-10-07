import React, { Component } from "react";
import EightSection from "../../Components2/eight_section";
import FifthSection from "../../Components2/fifth_section";
import FirstSection from "../../Components2/first_section";
import Footer from "../../Components2/footer";
import FourthSection from "../../Components2/fourth_section";
import Header from "../../Components2/header";
import SecondSection from "../../Components2/second_section";
import SeventhSection from "../../Components2/seventh_section";
import SixthSection from "../../Components2/sixth_section";
import ThirdSection from "../../Components2/third_section";
class HomeApp extends Component {
  render() {
    return (
      <>
        <Header />
        {/* end header */}
        <div className="main-content">
          {/* start section */}
          <FirstSection />
          {/* end section */}
          {/* start section */}
          <SecondSection />
          {/* end section */}
          {/* start section */}
          <ThirdSection />
          {/* end section */}
          {/* start section */}
          <FourthSection />
          {/* end section */}
          {/* start section */}
          <FifthSection />
          {/* end section */}
          {/* start section */}
          <SixthSection />
          {/* end section */}
          {/* start section */}
          <SeventhSection />
          {/* end section */}
          {/* start section */}
          <EightSection />
          {/* end section */}
        </div>
        {/* start footer */}
        <Footer />
        {/* end footer */}
        <a className="scroll-top-arrow" href="javascript:void(0);">
          <i className="feather icon-feather-arrow-up"></i>
        </a>
      </>
    );
  }
}

export default HomeApp;
