import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/styles.css';
import '../assets/css/stylesUser.css';

const UserAccountSettings = () => {
  return (
    <div className="account-settings-page">
      <header className="header">
        <nav className="header__container container">
          <div className="header__logo">
            <h1><Link to="/">Allegra</Link></h1>
          </div>
          <ul className="header__links">
            <li className="header__link"><a href="#home" className="active">home</a></li>
            <li className="header__link"><a href="#new">new</a></li>
            <li className="header__link"><a href="#shop">shop</a></li>
            <li className="header__link"><a href="#trending">trending</a></li>
          </ul>
          <div className="container-icon">
            <Link to="/cart">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-cart">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75...Z" />
              </svg>
            </Link>
            <Link to="/login">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="icon-user">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75...Z" />
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

      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account-general">General</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-change-password">Change password</a>
                <a className="list-group-item list-group-item-action" data-toggle="list" href="#account-info">Info</a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                <div className="tab-pane fade active show" id="account-general">
                  <div className="card-body media align-items-center">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="d-block ui-w-80" />
                    <div className="media-body ml-4">
                      <label className="btn btn-outline-primary">
                        Upload new photo
                        <input type="file" className="account-settings-fileinput" />
                      </label> &nbsp;
                      <button type="button" className="btn btn-default md-btn-flat">Reset</button>
                      <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                    </div>
                  </div>
                  <hr className="border-light m-0" />
                  <div className="card-body">
                    <div className="form-group">
                      <label className="form-label">Username</label>
                      <input type="text" className="form-control mb-1" id="Username" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" id="Name" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">E-mail</label>
                      <input type="text" className="form-control mb-1" id="E-mail" />
                      <div className="alert alert-warning mt-3">
                        Your email is not confirmed. Please check your inbox.<br />
                        <a href="#">Resend confirmation</a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="account-change-password">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Current password</label>
                      <input type="password" className="form-control" id="Current_password" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">New password</label>
                      <input type="password" className="form-control" id="New_password" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Repeat new password</label>
                      <input type="password" className="form-control" id="Repeat_new_password" />
                    </div>
                  </div>
                </div>

                <div className="tab-pane fade" id="account-info">
                  <div className="card-body pb-2">
                    <div className="form-group">
                      <label className="form-label">Birthday</label>
                      <input type="text" className="form-control" id="Birthday" defaultValue="May 3, 2005" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Country</label>
                      <select className="custom-select" id="Country" defaultValue="Nicaragua">
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
                      <input type="text" className="form-control" id="Phone" />
                    </div>
                  </div>
                </div>
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
};

export default UserAccountSettings;
