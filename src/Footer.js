import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__left">
          <img className="img"
                src={require("./images/logo.png")}
                alt="logo"
                style={{ width: "50px" }}
              />
            <h3 className="footer__logo">Robotics Website</h3>
            <p className="footer__description">
              Explore the fascinating world of robotics.
            </p>
           
          </div>
          <div className="footer__right">
            <h3 className="footer__title">Subscribe to our Newsletter</h3>
            <form className="footer__form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer__input"
              /><br/>
              <button type="submit" className="footer__button">
                Subscribe
              </button>
            </form>
            <div>
            <nav className="footer__nav">
             <h4 className="h3">Quick links</h4>
               
                  <a href="/" className="footer__nav-link">
                    Home
                  </a>
                &nbsp; &nbsp; &nbsp;
               
                  <a href="/about" className="footer__nav-link">
                    About
                  </a>
                  &nbsp; &nbsp; &nbsp;
                
                  <a href="/products" className="footer__nav-link">
                    Products
                  </a>
                  &nbsp; &nbsp; &nbsp;
                
                  <a href="/contact" className="footer__nav-link">
                    Contact
                  </a>
             
            </nav>
           </div>
          </div>
        </div>
        <div className="footer__social">
              <h4 className="dev" style={{color:'white'}}>Developer</h4  >
              <div className="dev-list">
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
                <a
                  href="https://github.com/Sumeshc99/"
                  className="footer__social-link"
                >
                  Pushpak<i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/PunamMGahane"
                  className="footer__social-link"
                >
                  Punam<i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://github.com/bobadeganesh"
                  className="footer__social-link"
                >
                  Mahesh<i className="fab fa-instagram"></i>
                </a>
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
