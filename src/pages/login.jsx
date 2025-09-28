import React from "react";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";

import '../styles/stylesLogin.css';
import useLogin from "../hooks/useLogin";

const Login = () => {
  const {
    wrapperRef,
    formLoginRef,
    showRegister,
    showLogin,
    showPopup,
    closePopup,
    handleLogin,
  } = useLogin();

  return (
    <>
      <header>
        <h2 className="logo">Allegra</h2>
        <nav className="navigation">
          <a href="index.html">Home</a>
          <a href="">Contact</a>
          <button className="btnLogin-popup" onClick={showPopup}>Login</button>
        </nav>
      </header>
      <div className="main-content">
        <div className="wrapper" ref={wrapperRef}>
          <span className="icon-close" onClick={closePopup}>
            <ion-icon name="close"></ion-icon>
          </span>
          <div className="form-box login">
            <h2>Login</h2>
            <form action="" id="formLogin" ref={formLoginRef} onSubmit={handleLogin}>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" id="email" name="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" id="password" name="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />Remember me
                </label>
                <a href="#">Forgot Password?</a>
              </div>
              <button type="submit" className="btn" id="btnLogin">
                Login
              </button>
              <div className="login-register">
                <p>
                  Don't have an account?
                  <a href="#" className="register-link" onClick={e => { e.preventDefault(); showRegister(); }}>
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
          <div className="form-box register">
            <h2>Sign up</h2>
            <form action="">
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input type="text" required />
                <label>Username</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="mail"></ion-icon>
                </span>
                <input type="email" required />
                <label>Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <ion-icon name="lock-closed"></ion-icon>
                </span>
                <input type="password" required />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" />I agree to the terms & conditions
                </label>
              </div>
              <button type="submit" className="btn">
                Sign Up
              </button>
              <div className="login-register">
                <p>
                  Already have an account?
                  <a href="#" className="login-link" onClick={e => { e.preventDefault(); showLogin(); }}>
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;