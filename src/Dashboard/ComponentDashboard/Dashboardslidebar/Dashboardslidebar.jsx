import React from "react";
import { Link } from "react-router-dom";

const Dashboardslidebar = () => {
  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login-dashboard";
  };
  return (
    <>
      <header className="codex-header">
        <div className="header-contian d-flex justify-content-between align-items-center">
          <div className="header-left d-flex align-items-center">
            <div className="sidebar-action navicon-wrap">
              <i data-feather="menu" />
            </div>
            <div className="search-bar">
              <div className="form-group mb-0">
                <div className="input-group">
                  <input
                    className="form-control"
                    type="text"
                    defaultValue=""
                    placeholder="Search Here....."
                  />
                  <span className="input-group-text">
                    <i data-feather="search" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right d-flex align-items-center justify-content-end">
            <ul className="nav-iconlist">
              <li>
                <div className="navicon-wrap action-dark">
                  <i className="fa fa-moon-o icon-dark" />
                  <i
                    className="fa fa-sun-o icon-light"
                    style={{ display: "none" }}
                  />
                </div>
              </li>
              <li>
                <div className="navicon-wrap">
                  <i data-feather="bell" />
                  <div className="noti-count">04</div>
                </div>
                <div className="hover-dropdown navnotification-drop">
                  <div className="drop-header">
                    <h5>
                      notification<span>05</span>
                    </h5>
                  </div>
                  <ul data-simplebar="">
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-primary">
                            <i className="fa fa-check-square-o" />
                          </div>
                          <div className="media-body">
                            <h6>order Cheked</h6>
                            <span className="text-light">1 hour ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-secondary">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-success">
                            <i className="fa fa-money" />
                          </div>
                          <div className="media-body">
                            <h6>payment received</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-warning">
                            <i className="fa fa-truck" />
                          </div>
                          <div className="media-body">
                            <h6>order shipped</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-info">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-success">
                            <i className="fa fa-money" />
                          </div>
                          <div className="media-body">
                            <h6>payment received</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-warning">
                            <i className="fa fa-truck" />
                          </div>
                          <div className="media-body">
                            <h6>order shipped</h6>
                            <span className="text-light">2 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="icon-nav bg-info">
                            <i className="fa fa-first-order" />
                          </div>
                          <div className="media-body">
                            <h6>order receved</h6>
                            <span className="text-light">1 day ago</span>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="drop-footer">
                    <a href="email-inbox.html">See All Notification</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="navicon-wrap">
                  <i data-feather="shopping-cart" />
                  <div className="noti-count">07</div>
                </div>
                <div className="hover-dropdown navshop-drop">
                  <div className="drop-header">
                    <h5>
                      Shopping<span>7</span>
                    </h5>
                  </div>
                  <ul data-simplebar="">
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/1.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>teddy bear</h6>
                            <span className="text-light">$250</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/2.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>iphone</h6>
                            <span className="text-light">$140</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/3.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>Apple Airpod</h6>
                            <span className="text-light">$310</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/4.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>Motors</h6>
                            <span className="text-light">$510</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0);">
                        <div className="media">
                          <div className="img-wrap">
                            <img
                              className="img-fluid"
                              src="../assets/images/ecom-dashboard/small-pro/5.jpg"
                              alt=""
                            />
                          </div>
                          <div className="media-body">
                            <h6>iphone</h6>
                            <span className="text-light">$140</span>
                          </div>
                          <div className="close-pro">
                            <i className="ti-trash" />
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                  <div className="drop-footer">
                    <a href="checkout.html">Checkout All</a>
                  </div>
                </div>
              </li>
              <li>
                <div className="navicon-wrap btn-windowfull">
                  <i data-feather="maximize" />
                </div>
              </li>
              <li className="nav-profile">
                <div className="media">
                  <div className="user-icon">
                    <img
                      className="img-fluid rounded-50"
                      src="../assets/images/avtar/3.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="media-body">
                    <h6>Thomas Vactom</h6>
                    <span className="text-light">Web designer</span>
                  </div>
                </div>
                <div className="hover-dropdown navprofile-drop">
                  <ul>
                    <li>
                      <a href="profile.html">
                        <i className="ti-user" />
                        profile
                      </a>
                    </li>
                    <li>
                      <a href="email-inbox.html">
                        <i className="ti-email" />
                        inbox
                      </a>
                    </li>
                    <li>
                      <a href="user-edit.html">
                        <i className="ti-settings" />
                        setting
                      </a>
                    </li>
                    <li>
                      <Link onClick={logOut}>
                        <i className="fa fa-sign-out" />
                        log out
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Dashboardslidebar;
