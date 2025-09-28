import React, { useState } from "react";
// Si mueves los CSS a src/css, importa así:
// import "../css/styles.css";
// import "../css/stylesUser.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function UserSettings() {
  const [tab, setTab] = useState("account-general");
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("May 3, 2005");
  const [country, setCountry] = useState("Nicaragua");
  const [phone, setPhone] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState("");

  return (
    <div>
      {/* ...existing code... */}
      <header className="header">
        <nav className="header__container container">
          <div className="header__logo">
            <h1><a href="./">Allegra</a></h1>
          </div>
          <ul className="header__links">
            <li className="header__link">
              <a href="#home" className="active">home</a>
            </li>
            <li className="header__link">
              <a href="#new">new</a>
            </li>
            <li className="header__link">
              <a href="#shop">shop</a>
            </li>
            <li className="header__link">
              <a href="#trending">trending</a>
            </li>
          </ul>
          <div className="container-icon">
            <a href="cart.html">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
            </a>
            <a href="login.html">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-user">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </a>
          </div>
          <div className="header__btn">
            <span style={{ "--i": 0 }}></span>
            <span style={{ "--i": 10 }}></span>
            <span style={{ "--i": 20 }}></span>
          </div>
        </nav>
      </header>
      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <button className={`list-group-item list-group-item-action${tab === "account-general" ? " active" : ""}`} onClick={() => setTab("account-general")}>General</button>
                <button className={`list-group-item list-group-item-action${tab === "account-change-password" ? " active" : ""}`} onClick={() => setTab("account-change-password")}>Change password</button>
                <button className={`list-group-item list-group-item-action${tab === "account-info" ? " active" : ""}`} onClick={() => setTab("account-info")}>Info</button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                {tab === "account-general" && (
                  <div className="tab-pane fade active show" id="account-general">
                    <div className="card-body media align-items-center">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="d-block ui-w-80" />
                      <div className="media-body ml-4">
                        <label className="btn btn-outline-primary">
                          Upload new photo
                          <input type="file" className="account-settings-fileinput" style={{ display: "none" }} />
                        </label> &nbsp;
                        <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                        <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control mb-1" id="Username" value={username} onChange={e => setUsername(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control" id="Name" value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input type="text" className="form-control mb-1" id="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                        <div className="alert alert-warning mt-3">
                          Your email is not confirmed. Please check your inbox.<br />
                          <a href="#">Resend confirmation</a>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {tab === "account-change-password" && (
                  <div className="tab-pane fade active show" id="account-change-password">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Current password</label>
                        <input type="password" className="form-control" id="Current_password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control" id="New_password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Repeat new password</label>
                        <input type="password" className="form-control" id="Repeat_new_password" value={repeatNewPassword} onChange={e => setRepeatNewPassword(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
                {tab === "account-info" && (
                  <div className="tab-pane fade active show" id="account-info">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Birthday</label>
                        <input type="text" className="form-control" id="Birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select className="custom-select" id="Country" value={country} onChange={e => setCountry(e.target.value)}>
                          <option>USA</option>
                          <option>Canada</option>
                          <option>UK</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Nicaragua</option>
                          <option>Costa Rica</option>
                          <option>Guatemala</option>
                          <option>Colombia</option>
                          <option>Chile</option>
                          <option>Mexico</option>
                        </select>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                      <h6 className="mb-4">Contacts</h6>
                      <div className="form-group">
                        <label className="form-label">Phone</label>
                        <input type="text" className="form-control" id="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button id="Save-btn" type="button" className="btn btn-primary">Save changes</button>&nbsp;
          <button id="Cancel-btn" type="button" className="btn btn-default">Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;