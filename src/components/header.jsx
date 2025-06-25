import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ setCurrentPage }) => {
  return (
    <header className="header">
      <nav className="header__container container">
        <div className="header__logo">
          <h1><Link to="/">Allegra</Link></h1>
        </div>

        <ul className="header__links">
          <li className="header__link"><a href="#home" className="active">home</a></li>
          <li className="header__link"><a href="#new">new</a></li>
          <li className="header__link">
            <a href="#shop" onClick={e => { e.preventDefault(); if (typeof setCurrentPage === 'function') setCurrentPage('productos'); }}>shop</a>
          </li>
          <li className="header__link"><a href="#trending">trending</a></li>
        </ul>

        <div className="container-icon">
          <Link to="/cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993
              1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125
              1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1
              5.513 7.5h12.974c.576 0 1.059.435
              1.119 1.007ZM8.625 10.5a.375.375 0 1
              1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1
              1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
          </Link>
          <Link to="/login">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-user">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 
              0 3.75 3.75 0 0 1 7.5 0ZM4.501 
              20.118a7.5 7.5 0 0 1 14.998 
              0A17.933 17.933 0 0 1 12 
              21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </Link>
        </div>

        <div className="header__btn">
          <span style={{ "--i": 0 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 20 }}></span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
