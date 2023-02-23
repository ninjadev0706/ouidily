import { useMediaQuery } from "react-responsive";
import Menu from "./Menu";

const PurchaseToken = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <section className="hero-section main-banner" id="home">
      <Menu />
      <div className="banner-inner">
        <div className="purchase-token">
          <div className="row">
            <div className="col-lg-12">
              <div className="lower-content">
                <div className="hero-body">
                  <div className="counter-col col-lg-6 col-md-12 col-sm-12">
                    <div className="inner">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="ban-contain">
                            <div className="banner-head">
                              <p className="header-title font-spirit" data-aos="zoom-in" data-aos-duration="2000">
                                Monthly Weed Box. <br /> Discover New Products. <br /> Save on Retail Prices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="add-btn">
                        <div className={`${isDesktopOrLaptop ? 'text-35' : 'text-25'} d-flex gap-10 wrapper bg-color`}>
                          <div className="text-color">Join the Waitlist</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-col col-lg-6 col-md-12 col-sm-12">
                    <div className="about-img" data-aos="zoom-in" data-aos-duration="2000">
                      <img src="/img/nugclub.png" alt="" className="img-fluid" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurchaseToken;
