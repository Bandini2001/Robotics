import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
            <h3 className="footer__logo">Robotics Website</h3>
            <p className="footer__description">
              Explore the fascinating world of robotics.
            </p>
            <div className="footer__social">
              <h4 style={{color:'white'}}>developers github accounts</h4  >
              <div>
                <a
                  href="https://github.com/Sumeshc99/"
                  className="footer__social-link"
                >
                  Sumesh<i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://github.com/bandini2001"
                  className="footer__social-link"
                >
                  Bandini<i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://github.com/Payalm518"
                  className="footer__social-link"
                >
                  Payal<i className="fab fa-instagram"></i>
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/Sumeshc99/"
                  className="footer__social-link"
                >
                  pushpak<i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/PunamMGahane"
                  className="footer__social-link"
                >
                  punam<i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/bobadeganesh"
                  className="footer__social-link"
                >
                  mahesh<i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer__right">
            <h3 className="footer__title">Subscribe to our Newsletter</h3>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              />
              <button type="submit" className="footer__button">
                Subscribe
              </button>
            </form>
            <nav className="footer__nav">
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <a href="/" className="footer__nav-link">
                    Home
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/about" className="footer__nav-link">
                    About
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/products" className="footer__nav-link">
                    Products
                  </a>
                </li>
                <li className="footer__nav-item">
                  <a href="/contact" className="footer__nav-link">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <p className="footer__copy">
          &copy; 2023 Robotics Website. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
