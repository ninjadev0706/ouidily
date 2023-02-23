import { useMediaQuery } from "react-responsive";

const InsideBox = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <section className="" id="benefit">
      <div className="inside-content p-10-pro">
        <div className={`insite-title text-green ${isDesktopOrLaptop ? 'text-50': 'text-35'} text-center`}>
          <p className="font-spirit" data-aos="fade-up" data-aos-duration="2000">
            What’s inside the box?
          </p>
          <p className="title-color text-left text-20 p-100">
            Our membership offers premium monthly boxes for you to discover new cannabis products locally sourced from New York at prices that beat your local spot. In each box, you can expect to receive between 5-9 products based on your personalized selections. Our team curates to your taste while ensuring you get maximum savings with a box valued up to $300. Depending on your preferences, the average grams will range.
          </p>
        </div>
        <div className={`d-flex ${isDesktopOrLaptop ? 'flex-row': 'flex-col'} justify-between`}>
          <div className={`${isDesktopOrLaptop ? 'max-w-200' : 'w-full py-10'}`}>
            <p className="text-blue-400 text-35 text-center">$300</p>
            <div className="text text-left  text-center">
              max value/ box
            </div>
          </div>
          <div className={`${isDesktopOrLaptop ? 'max-w-200' : 'w-full py-10'}`}>
            <p className="text-blue-400 text-35  text-center">6-7</p>
            <div className="text text-left  text-center">
              avg products/box
            </div>
          </div>
          <div className={`${isDesktopOrLaptop ? 'max-w-200' : 'w-full py-10'}`}>
            <p className="text-blue-400 text-35  text-center">16</p>
            <div className="text text-left  text-center">
              avg grams/ box
            </div>
          </div>
        </div>
        <div className={`insite-title ${isDesktopOrLaptop ? 'text-35':'text-20'} text-center p-100`}>
          <div>
            <div className="personal-btn text-color btn-bg p-10">
              <p data-aos="fade-up" data-aos-duration="2000">
                Personalize your box
              </p>
            </div>
          </div>
          <p className="text-blue-400 text-center text-20 p-20">
            starting at $99 a month
          </p>
        </div>
      </div>
    </section >
  );
};

export default InsideBox;
