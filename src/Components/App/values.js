import React, { Component } from 'react';
class ValueTile extends Component {
    render() { 
        const{icon, title, summary} = this.props
        return (
            <div className="col wow animate__fadeIn" data-wow-delay="0.4s">
            <div className="feature-box feature-box-shadow padding-twenty-tb padding-twelve-lr xs-padding-fifteen-tb xs-padding-eight-lr feature-box-light-hover">
              <div className="feature-box-icon">
                <i className={icon} />
              </div>
              <div className="feature-box-content last-paragraph-no-margin">
                <span className="text-extra-medium alt-font text-yellow text-gradient-orange-pink-hover d-block margin-5px-bottom font-weight-500">
                  {title}
                </span>
                <p>
                 {summary}
                </p>
              </div>
              <div className="feature-box-overlay bg-white" />
            </div>
          </div>
           );
    }
}
 
class Values extends Component {
    render() { 
        const menus = [
            {icon:"line-icon-Navigation-LeftWindow icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Getting things done", summary:"Getting things done is our bread and butter. With a  group of dedicated engineers you can be assured efficiency."},
            {icon:"line-icon-Cursor-Click2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Integrity", summary:"We maintain transparency all through our development process. Giving our clients utmost certainty we can be trusted with whatever is thrown our way."},
            {icon:"line-icon-Like-2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Quality at work", summary:"At Boolean Technologies we do not compromise in any category of our process."},
            {icon:"line-icon-Talk-Man icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Customer satisfaction", summary:"Excellent customer service is mandatory in any company. A field that seems to be lost in our region of the world. "},
            {icon:"line-icon-Heart icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Accountability", summary:"We take great pride in every project we execute as we believe this is the change our company can make in the world. We are answerable to our clients with every decision we make. "},
            {icon:"line-icon-Gear-2 icon-medium text-yellow margin-40px-bottom md-margin-20px-bottom", title:"Innovation", summary:"We take your idea and with our team of experienced researchers and developers transform that into a product far beyond your expectations."}
];
        return (
            menus.map((item, i) => {
                return <ValueTile key={"item-core-values" + i} {...item} />;
                //  return <TeamTile key={"item"+i} icon={item.icon} title={item.title} />
              })
              );
    }
}
 
export default Values;
