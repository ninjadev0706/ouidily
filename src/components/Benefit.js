import { useMediaQuery } from "react-responsive";
import { DeliverIcon, CalendarIcon, SaveIcon, SubscribeIcon, WomanIcon } from "./SvgIcon";

const Benefit = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <section className={`benefit ${isDesktopOrLaptop ? 'p-20-pro' : 'p-200'}`} id="benefit">
      <div className="benefit-content">
        <div className="p-100 text-color text-center">
          <p className={`${isDesktopOrLaptop ? 'text-50' : 'text-35'} font-spirit`} data-aos="fade-up" data-aos-duration="2000">
            How it works
          </p>
        </div>
        <>
          {
            isDesktopOrLaptop ?
              <>
                <div className="row justify-center ">
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <CalendarIcon />
                      </div>
                      <h6 className="font-spirit">2. Schedule</h6>
                      <div className="text text-left">
                        Choose how often you want to receive a box. Every month or every quarter, we got you.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <DeliverIcon />
                      </div>
                      <h6 className="font-spirit">4. Delivery</h6>
                      <div className="text text-left">
                        Select the delivery date. Boxes will be delivered within the first 2 weeks of every month.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <WomanIcon />
                      </div>
                      <h6 className="font-spirit">1. Customize</h6>
                      <div className="text text-left">
                        Select your favorite types of products and strains so we can create a box tailored to you.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <SubscribeIcon />
                      </div>
                      <h6 className="font-spirit">3. Subscribe</h6>
                      <div className="text text-left">
                        Pick the subscription plan that works for you. Annual plans can save you up to 35%.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <SaveIcon />
                      </div>
                      <h6 className="font-spirit">5. Savings</h6>
                      <div className="text text-left">
                        For $99* for the first month, you are guaranteed to have up to $300 worth of goodies.
                      </div>
                    </div>
                  </div>
                </div>
              </>
              :
              <>
                <div className="row">
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <WomanIcon />
                      </div>
                      <h6 className="font-spirit">1. Customize</h6>
                      <div className="text text-left">
                        Select your favorite types of products and strains so we can create a box tailored to you.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <CalendarIcon />
                      </div>
                      <h6 className="font-spirit">2. Schedule</h6>
                      <div className="text text-left">
                        Choose how often you want to receive a box. Every month or every quarter, we got you.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <SubscribeIcon />
                      </div>
                      <h6 className="font-spirit">3. Subscribe</h6>
                      <div className="text text-left">
                        Pick the subscription plan that works for you. Annual plans can save you up to 35%.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <DeliverIcon />
                      </div>
                      <h6 className="font-spirit">4. Delivery</h6>
                      <div className="text text-left">
                        Select the delivery date. Boxes will be delivered within the first 2 weeks of every month.
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="inner-box max-w-200 m-auto">
                      <div className="icon-box" data-aos="zoom-in" data-aos-duration="2000">
                        <SaveIcon />
                      </div>
                      <h6 className="font-spirit">5. Savings</h6>
                      <div className="text text-left">
                        For $99* for the first month, you are guaranteed to have up to $300 worth of goodies.
                      </div>
                    </div>
                  </div>
                </div>
              </>
          }
        </>
        <p className="text-color text-center p-100">
          *Monthly subscriptions start at $149 after first box
        </p>
      </div>
    </section >
  );
};

export default Benefit;
