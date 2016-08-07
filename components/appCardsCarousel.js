import React from 'react';
import RightArrow from './rightArrow.js';
import LeftArrow from './leftArrow.js';
import Slider from 'react-slick';

class AppCardsCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appCardsData: [
        {
          appName: 'collbox',
          appDeveloper: 'by Collbox Inc.',
          appDesc: 'Click. Connect. Collect. CollBox simplifies the task of debt collection.',
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qxu6xgqr/Submitted30/LogoName.png',
          numReviews: '30',
          subscribeUrl: 'https://appcenter.intuit.com/collbox?locale=en-US'
        }, {
          appName: 'Breezeworks',
          appDeveloper: 'by Breezeworks, Inc.',
          appDesc: 'Simple Booking, Dispatching, and Billing automation for small-medium teams',
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qisuys55/Submitted13/LogoName.png',
          numReviews: '3',
          subscribeUrl: 'https://appcenter.intuit.com/app-b7qisuys55?locale=en-US'
        }, {
          appName: 'Expensify',
          appDeveloper: 'by Expensify, Inc.',
          appDesc: "Expense reports that don't suck!",
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7pjb9i9mn/Submitted19/icon-Expensify_large.png',
          numReviews: '300',
          subscribeUrl: 'https://appcenter.intuit.com/expensify?locale=en-US'
        }, {
          appName: 'Google Calendar for QuickBooks BETA',
          appDeveloper: 'by Intuit Inc.',
          appDesc: "Create time activities automatically from your Google Calendar events",
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7rpixc2q8/Submitted7/LogoName.png',
          numReviews: '0',
          subscribeUrl: 'https://appcenter.intuit.com/app-b7rpixc2q8?locale=en-US'
        }, {
          appName: 'ProRata',
          appDeveloper: 'by ProRata Inc.',
          appDesc: "Automated Revenue Recognition",
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7qzyt9ejq/Submitted20/LogoName.png',
          numReviews: '1',
          subscribeUrl: 'https://appcenter.intuit.com/prorata?locale=en-US'
        }, {
          appName: 'American Express',
          appDeveloper: 'by American Express',
          appDesc: "Now, automatically send your Business Card transactions to your QuickBooks.",
          imgUrl: 'https://images.appcenter.intuit.com/Content/images/AppCards/b7nvziiwie/Submitted35/OPENLogo150x150.png',
          numReviews: '3',
          subscribeUrl: 'https://appcenter.intuit.com/amex?locale=en-US'
        }
      ]
    };
  }
  render() {
    var appCards = this.state.appCardsData.map(function(appCardVal) {
      return (
        <div key={appCardVal.appName}>
          <a href={appCardVal.subscribeUrl}>
            <div className="home-bigappcard-class">
                <div className="home-bigappcard-inner">
                    <div className="appIcon size80">
                            <img src={appCardVal.imgUrl} className="themeColorAppCards" />
                    </div>
                    <div className="bigappcard-details">
                        <div className="bigappcard-display-name">
                            {appCardVal.appName}
                        </div>
                        <div className="bigappcard-vendor-name">
                            {appCardVal.appDeveloper}
                        </div>
                        <div className="bigappcard-tagline">
                            {appCardVal.appDesc}
                        </div>
                    </div>
                        <div className="ratings">
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="fa fa-star"></span>
                            <span className="review">
                                <span className="reviews">({appCardVal.numReviews})</span>
                            </span>
                        </div>
                </div>
            </div>
          </a>
        </div>
      )
    });
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className='container'>
        <div className="app-header left headinglight">Trending Now</div>
        <Slider {...settings} nextArrow={ <RightArrow />} prevArrow={ <LeftArrow />}>
          {appCards}
        </Slider>
      </div>
      );
  }
}

export default AppCardsCarousel;
