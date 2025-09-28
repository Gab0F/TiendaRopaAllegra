import React, { useState } from "react";
import "../styles/styles.css";
import "../styles/stylesUser.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserSettings() {
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
    <div className="main-content">
      <div className="container light-style flex-grow-1 container-p-y user-bg-dark">
        <h4 className="font-weight-bold py-3 mb-4">Account settings</h4>
        <div className="card overflow-hidden user-card-dark">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <button className={`list-group-item list-group-item-action${tab === "account-general" ? " active" : ""} btn-user-nav`} onClick={() => setTab("account-general")}>General</button>
                <button className={`list-group-item list-group-item-action${tab === "account-change-password" ? " active" : ""} btn-user-nav`} onClick={() => setTab("account-change-password")}>Change password</button>
                <button className={`list-group-item list-group-item-action${tab === "account-info" ? " active" : ""} btn-user-nav`} onClick={() => setTab("account-info")}>Info</button>
              </div>
            </div>
            <div className="col-md-9">
              <div className="tab-content">
                {tab === "account-general" && (
                  <div className="tab-pane fade active show" id="account-general">
                    <div className="card-body media align-items-center">
                      <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="profile" className="d-block ui-w-80" />
                      <div className="media-body ml-4">
                        <label className="btn btn-outline-primary btn-user-sm">
                          Upload new photo
                          <input type="file" className="account-settings-fileinput" style={{ display: "none" }} />
                        </label> &nbsp;
                        <button type="button" className="btn btn-default md-btn-flat btn-user-sm">Reset</button>
                        <div className="text-light small mt-1">Allowed JPG, GIF or PNG. Max size of 800K</div>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control mb-1 user-input-dark" id="Username" value={username} onChange={e => setUsername(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input type="text" className="form-control user-input-dark" id="Name" value={name} onChange={e => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail</label>
                        <input type="text" className="form-control mb-1 user-input-dark" id="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
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
                        <input type="password" className="form-control user-input-dark" id="Current_password" value={currentPassword} onChange={e => setCurrentPassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">New password</label>
                        <input type="password" className="form-control user-input-dark" id="New_password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Repeat new password</label>
                        <input type="password" className="form-control user-input-dark" id="Repeat_new_password" value={repeatNewPassword} onChange={e => setRepeatNewPassword(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
                {tab === "account-info" && (
                  <div className="tab-pane fade active show" id="account-info">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Birthday</label>
                        <input type="text" className="form-control user-input-dark" id="Birthday" value={birthday} onChange={e => setBirthday(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country</label>
                        <select className="custom-select user-input-dark" id="Country" value={country} onChange={e => setCountry(e.target.value)}>
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
                        <input type="text" className="form-control user-input-dark" id="Phone" value={phone} onChange={e => setPhone(e.target.value)} />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="text-right mt-3">
          <button id="Save-btn" type="button" className="btn btn-primary btn-user-main">Save changes</button>&nbsp;
          <button id="Cancel-btn" type="button" className="btn btn-default btn-user-main">Cancel</button>
        </div>
      </div>
    </div>
  );
}
