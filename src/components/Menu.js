import React from "react";
import { useMediaQuery } from "react-responsive";

const Menu = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1000px)",
  });

  return (
    <section className="main-header">
      <header className="home-header">
        <nav className="navbar navbar-expand-lg align-items-center justify-between">
          <div className={`logo-color font-spirit font-weight-bold ${isDesktopOrLaptop ? 'text-75' : 'text-30'}`}>oui’dily</div>
          <div>
            {
              isDesktopOrLaptop ?
                <img src="/img/nav-icon.png" alt="" width="50px" />
                :
                <img src="/img/mobile-nav.png" alt="" width="30px" />
            }
          </div>
          {/* <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <img src="/img/nav-icon.png" alt="" />
            </span>
          </button> */}

          {/* <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
          >
            <ul className="navbar-nav mt-2 mt-lg-0 ml-auto mx-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About ICO
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#benefit">
                  Benefits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#token">
                  About Token
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#roadmap">
                  Roadmap
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#team">
                  Team
                </a>
              </li>
            </ul>
          </div> */}
        </nav>
      </header>
    </section>
  );
};

export default Menu;
