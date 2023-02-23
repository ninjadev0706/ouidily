import { useMediaQuery } from "react-responsive";

const Footer = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <footer className="mt-100">
      <div className={`footer-content ${isDesktopOrLaptop ? 'pt-10-pro pb-40' : 'p-100 pb-20'} title-color`}>
        {isDesktopOrLaptop && <div className="font-weight-bolder text-50">
          <p className="font-spirit">oui’dily</p>
        </div>}
        <div className={`${isDesktopOrLaptop ? 'text-25 p-25' : 'text-20'}`}>
          <p className={`${isDesktopOrLaptop ? 'py-10' : 'padding-3'} font-weight-bold`}>Contact Us</p>
          <p className={`${isDesktopOrLaptop ? 'py-10' : 'padding-3'} font-weight-bold`}>FAQ</p>
          <p className={`${isDesktopOrLaptop ? 'py-10' : 'padding-3'} font-weight-bold`}>Terms & Conditions</p>
          <p className={`${isDesktopOrLaptop ? 'py-10' : 'padding-3'} font-weight-bold`}>Privacy Policy</p>
        </div>
        <div className={`${isDesktopOrLaptop ? 'text-20':'text-15 py-10'} font-spirit`}>
          {isDesktopOrLaptop ? 'Copyright © 2023 - All Rights Reserved.' : 'Copyright © 2023'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
