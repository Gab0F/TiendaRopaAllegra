import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <div className="footer__col">
          <div className="footer__logo">
            <h1><a href="/">Allegra</a></h1>
          </div>
          <div className="footer__description">
            <p>The very best of the best</p>
          </div>
        </div>

        <div className="footer__col">
          <div className="footer__title">
            <h3>company</h3>
            <ul className="footer__links">
              <li className="footer__link"><a href="#home">Home</a></li>
              <li className="footer__link"><a href="#new">New</a></li>
              <li className="footer__link"><a href="#shop">Shop</a></li>
              <li className="footer__link"><a href="#trending">Trending</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__col">
          <div className="footer__title">
            <h3>information</h3>
            <ul className="footer__links">
              <li className="footer__link">
                <a href="#">
                  <span className="material-symbols-rounded">location_on</span>
                  <p>Estelí, Nicaragua.</p>
                </a>
              </li>
              <li className="footer__link">
                <a href="#">
                  <span className="material-symbols-rounded">schedule</span>
                  <p>
                    Saturday - Thursday <br />
                    9AM - 12PM
                  </p>
                </a>
              </li>
              <li className="footer__link">
                <a href="tel:+50576501289">
                  <span className="material-symbols-rounded">call</span>
                  <p>+505 7650-1289</p>
                </a>
              </li>
              <li className="footer__link">
                <a href="mailto:allegra@gmail.com">
                  <span className="material-symbols-rounded">mail</span>
                  <p>allegra@gmail.com</p>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__col">
          <div className="footer__title">
            <h3>social media</h3>
          </div>
          <ul className="footer__links">
            <li className="footer__link"><a href="#">Instagram</a></li>
            <li className="footer__link"><a href="#">Facebook</a></li>
            <li className="footer__link"><a href="#">Whatsapp</a></li>
            <li className="footer__link"><a href="#">X</a></li>
          </ul>
        </div>
      </div>

      <div className="footer__copyRight">
        <p>&copy; 2025 <span>Allegra</span> All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
