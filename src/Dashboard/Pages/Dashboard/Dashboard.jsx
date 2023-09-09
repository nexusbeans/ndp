import React from "react";
import "./Dashboard.scss";
import DynamicImage from "../../../Components/DynamicImage";
import { Link } from "react-router-dom";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";

function Dashboard() {


  return (
    <div className="dashboarcontrol" id="dashboarcontrol">
      <Dashboardslidebar/>

      <aside className="codex-sidebar">
        <div className="logo-gridwrap">
          <a className="codexbrand-logo" href="index.html">
            <DynamicImage imageName="logo.png" />
          </a>
          <a className="codex-darklogo" href="index.html">
            <img
              className="img-fluid"
              src="../assets/images/logo/dark-logo.png"
              alt="theeme-logo"
            />
          </a>
          <div className="sidebar-action">
            <i data-feather="menu" />
          </div>
        </div>
        <div className="icon-logo">
          <a href="index.html">
            <img
              className="img-fluid"
              src="../assets/images/logo/icon-logo.png"
              alt="theeme-logo"
            />
          </a>
        </div>
        <div className="codex-menuwrapper">
          <ul className="codex-menu custom-scroll" data-simplebar="">
            <li className="cdxmenu-title">
              <h5>Dashboards</h5>
            </li>
            <li className="menu-item">
              <a href="index.html">
                <div className="icon-item">
                  <i data-feather="home" />
                </div>
                <span>default</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="ecommerce.html">
                <div className="icon-item">
                  <i data-feather="airplay" />
                </div>
                <span>ecommerce</span>
              </a>
            </li>
            <li className="cdxmenu-title">
              <h5>application</h5>
            </li>
            <li className="menu-item">
              <a href="calendar.html">
                <div className="icon-item">
                  <i data-feather="calendar" />
                </div>
                <span>calendar</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="chat.html">
                <div className="icon-item">
                  <i data-feather="message-square" />
                </div>
                <span>chat</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="todo.html">
                <div className="icon-item">
                  <i data-feather="clock" />
                </div>
                <span>todo</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="mail" />
                </div>
                <span>email</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="email-inbox.html">email inbox</a>
                </li>
                <li>
                  <a href="email-read.html">email read</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  {" "}
                  <i data-feather="user" />
                </div>
                <span>Users</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="profile.html">profile</a>
                </li>
                <li>
                  <a href="user-list.html">user list</a>
                </li>
                <li>
                  <a href="user-edit.html">user edit</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="shopping-bag" />
                </div>
                <span>ecommerce</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="product.html">product</a>
                </li>
                <li>
                  <a href="product-detail.html">product detail</a>
                </li>
                <li>
                  <a href="add-product.html">add product</a>
                </li>
                <li>
                  <a href="product-list.html">product list</a>
                </li>
                <li>
                  <a href="order-history.html">order history</a>
                </li>
                <li>
                  <a href="cart.html">cart</a>
                </li>
                <li>
                  <a href="wishlist.html">wishlist</a>
                </li>
                <li>
                  <a href="checkout.html">checkout</a>
                </li>
                <li>
                  <a href="pricing.html">pricing</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="invoice.html">
                <div className="icon-item">
                  <i data-feather="file-minus" />
                </div>
                <span>invoice</span>
              </a>
            </li>
            <li className="cdxmenu-title">
              <h5>pages</h5>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="command" />
                </div>
                <span>blog</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="blog.html">blog list</a>
                </li>
                <li>
                  <a href="blog-detail.html">blog-detail</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="key" />
                </div>
                <span>Authentication</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="login.html">login </a>
                </li>
                <li>
                  <a href="register.html">register</a>
                </li>
                <li>
                  <a href="forgot-password.html">forgot password</a>
                </li>
                <li>
                  <a href="new-password.html">reset password</a>
                </li>
                <li>
                  <a href="verify-email.html">verify email</a>
                </li>
                <li>
                  <a href="verify-pin.html">verify pin</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="error-page.html">
                <div className="icon-item">
                  <i data-feather="alert-triangle" />
                </div>
                <span>error 404</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="coming-soon.html">
                <div className="icon-item">
                  <i data-feather="watch" />
                </div>
                <span>coming soon</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="pie-chart" />
                </div>
                <span>Charts</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="chart-apex.html">apex chart</a>
                </li>
                <li className="menu-item">
                  <a href="chart-echarts.html">echarts</a>
                </li>
                <li className="menu-item">
                  <a href="chart-morris.html">morris charts</a>
                </li>
                <li className="menu-item">
                  <a href="chart-chartsjs.html">charts js</a>
                </li>
                <li className="menu-item">
                  <a href="chart-sparkline.html">sparkline charts</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="contacts.html">
                <div className="icon-item">
                  <i data-feather="phone-call" />
                </div>
                <span>contacts</span>
              </a>
            </li>
            <li className="menu-item">
              <a href="gallery.html">
                <div className="icon-item">
                  <i data-feather="image" />
                </div>
                <span>gallery</span>
              </a>
            </li>
            <li className="cdxmenu-title">
              <h5>Components</h5>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  {" "}
                  <i data-feather="book" />
                </div>
                <span>form</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="element-input.html">form element</a>
                </li>
                <li>
                  <a href="element-checkbox-radio.html">checkbox &amp; radio</a>
                </li>
                <li>
                  <a href="element-datepicker.html">datepicker</a>
                </li>
                <li>
                  <a href="element-uidatepicker.html">ui datepicker</a>
                </li>
                <li>
                  <a href="element-datetimepicker.html">datetimepicker</a>
                </li>
                <li>
                  <a href="form.html">basic form</a>
                </li>
                <li>
                  <a href="form-validation.html">validation</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  {" "}
                  <i data-feather="database" />
                </div>
                <span>Table</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="data-table.html">Datatable</a>
                </li>
                <li>
                  <a href="data-table-advance.html">Datatable Advance</a>
                </li>
                <li>
                  <a href="data-table-ajax.html">Datatable Ajax</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="layout" />
                </div>
                <span>Advance element</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="timeline-one.html">timeline one</a>
                </li>
                <li>
                  <a href="timeline-two.html">timeline two</a>
                </li>
                <li>
                  <a href="element-select2.html">select 2</a>
                </li>
                <li>
                  <a href="element-switch.html">switch</a>
                </li>
                <li>
                  <a href="element-dropzone.html">dropzone</a>
                </li>
                <li>
                  <a href="element-rangeslider.html">range slider</a>
                </li>
                <li>
                  <a href="bootstrap-notify.html">bootstrap notify</a>
                </li>
                <li>
                  <a href="element-sweetalert2.html">sweetalert2</a>
                </li>
                <li>
                  <a href="element-scrollbar.html">scrollbar</a>
                </li>
                <li>
                  <a href="element-lightbox.html">light box</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="layout" />
                </div>
                <span>Componet</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="element-typography.html">typography</a>
                </li>
                <li>
                  <a href="element-color.html">color</a>
                </li>
                <li>
                  <a href="element-themeclass.html">helper class</a>
                </li>
                <li>
                  <a href="element-alert.html">Alert</a>
                </li>
                <li>
                  <a href="element-avtar.html">Avtar</a>
                </li>
                <li>
                  <a href="element-button.html">Button</a>
                </li>
                <li>
                  <a href="element-grid.html">grid</a>
                </li>
                <li>
                  <a href="element-dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="element-breadcrumb.html">Breadcrumb</a>
                </li>
                <li>
                  <a href="element-collapse.html">Collapse</a>
                </li>
                <li>
                  <a href="element-accordion.html">Accordion</a>
                </li>
                <li>
                  <a href="element-badge.html">badge</a>
                </li>
                <li>
                  <a href="element-modal.html">modal</a>
                </li>
                <li>
                  <a href="element-tab.html">tabs</a>
                </li>
                <li>
                  <a href="element-popover.html">popover</a>
                </li>
                <li>
                  <a href="element-tooltip.html">tooltip</a>
                </li>
                <li>
                  <a href="element-card.html">card</a>
                </li>
                <li>
                  <a href="element-progressbar.html">progress bar</a>
                </li>
                <li>
                  <a href="element-pagination.html">pagination</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="javascript:void(0);">
                <div className="icon-item">
                  <i data-feather="slack" />
                </div>
                <span>Icons</span>
                <i className="fa fa-angle-down" />
              </a>
              <ul className="submenu-list">
                <li>
                  <a href="element-fontaw-icon.html">Font Awesome</a>
                </li>
                <li>
                  <a href="element-themify-icon.html">Themify</a>
                </li>
                <li>
                  <a href="element-feather-icon.html">Feather</a>
                </li>
                <li>
                  <a href="element-icoicon.html">icoicon</a>
                </li>
                <li>
                  <a href="element-flag-icon.html">flag</a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <a href="faq.html">
                <div className="icon-item">
                  <i data-feather="help-circle" />
                </div>
                <span>faq</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* sidebar end*/}
      <div className="themebody-wrap">
        {/* breadcrumb start*/}
        <div className="codex-breadcrumb">
          <div className="breadcrumb-contain">
            <div className="left-breadcrumb">
              <ul className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="index.html">
                    <h1>Dashboard</h1>
                  </a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="javascript:void(0);">Default</a>
                </li>
              </ul>
            </div>
            <div className="right-breadcrumb">
              <ul>
                <li>
                  <div className="bread-wrap">
                    <i className="fa fa-clock-o" />
                  </div>
                  <span className="liveTime" />
                </li>
                <li>
                  <div className="bread-wrap">
                    <i className="fa fa-calendar" />
                  </div>
                  <span className="getDate" />
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* breadcrumb end*/}
        {/* theme body start*/}
        <div className="theme-body common-dash" data-simplebar="">
          <div className="custom-container">
            <div className="row">
              <div className="col-xl-4 cdx-xl-50">
                <div className="card welcome-card overflow-hidden">
                  <div className="card-header" />
                  <div className="card-body">
                    <div className="img-wrap">
                      <img
                        className="img-fluid"
                        src="../assets/images/avtar/1.jpg"
                        alt="image"
                      />
                    </div>
                    <h3>Welcome to dear user</h3>
                    <p className="mb-10">
                      Congratulations! Your account has been Setup and you are
                      ready to configure your dashboard now.Configuration only
                      take a couple of seconds.
                    </p>
                    <p>
                      If you have any query for Configuration so contact *****
                      !!!
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 cdx-xl-50 cdxorder-xl-1">
                <div className="card countri-tbl">
                  <div className="card-header">
                    <h4>viewed Countries</h4>
                    <div className="setting-card action-menu">
                      <div className="action-toggle">
                        <i
                          className="codeCopy"
                          data-feather="more-horizontal"
                        />
                      </div>
                      <ul className="action-dropdown">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-o" />
                            weekly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-check-o" />
                            monthly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar" />
                            yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table tblbody-p0">
                        <tbody>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-gbr" />
                                </div>
                                <div className="media-body">United Kingdom</div>
                              </div>
                            </td>
                            <td className="text-success">
                              48.00%
                              <i className="fa fa-angle-down ml-5" />
                            </td>
                            <td> Nove/22</td>
                            <td>
                              <h6>905k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-umi" />
                                </div>
                                <div className="media-body">United states</div>
                              </div>
                            </td>
                            <td className="text-success">
                              30.7%
                              <i className="fa fa-angle-up ml-5" />
                            </td>
                            <td> Sep/15</td>
                            <td>
                              <h6>750k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-egy" />
                                </div>
                                <div className="media-body">Egypt</div>
                              </div>
                            </td>
                            <td className="text-danger">
                              25.7%
                              <i className="fa fa-angle-down ml-5" />
                            </td>
                            <td>Jun/16</td>
                            <td>
                              <h6>598k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-ind" />
                                </div>
                                <div className="media-body">India</div>
                              </div>
                            </td>
                            <td className="text-success">
                              35.00%
                              <i className="fa fa-angle-up ml-5" />
                            </td>
                            <td>Sep/17</td>
                            <td>
                              <h6>320k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-mkd" />
                                </div>
                                <div className="media-body">Makedonia</div>
                              </div>
                            </td>
                            <td className="text-success">
                              48.00%
                              <i className="fa fa-angle-down ml-5" />
                            </td>
                            <td>Octo/20</td>
                            <td>
                              <h6>748k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-niu" />
                                </div>
                                <div className="media-body">Niue</div>
                              </div>
                            </td>
                            <td className="text-danger">
                              28.07%
                              <i className="fa fa-angle-down ml-5" />
                            </td>
                            <td>Sep/18</td>
                            <td>
                              <h6>580k</h6>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="flag-wrap">
                                  <i className="flag-icon flag-icon-dnk" />
                                </div>
                                <div className="media-body">Denmark</div>
                              </div>
                            </td>
                            <td className="text-danger">
                              20.00%
                              <i className="fa fa-angle-down ml-5" />
                            </td>
                            <td> Dece/16</td>
                            <td>
                              <h6>777k</h6>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 cdx-xl-50">
                <div className="card support-inboxtbl">
                  <div className="card-header">
                    <h4>Support Inbox</h4>
                    <div className="setting-card action-menu">
                      <div className="action-toggle">
                        <i
                          className="codeCopy"
                          data-feather="more-horizontal"
                        />
                      </div>
                      <ul className="action-dropdown">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-o" />
                            weekly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-check-o" />
                            monthly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar" />
                            yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/6.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>Jordan Nt</h6>
                                  <p className="text-light">
                                    My item doesn’t shio to correct address
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                10 hours ago
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/2.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>Carolien Bloeme</h6>
                                  <p className="text-light">
                                    You Shipped Color, i need it to be
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">
                                8 hours ago
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/3.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>Lisanne Viscaal</h6>
                                  <p className="text-light">
                                    Can you please refund back my mony
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">
                                6 hours ago
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/4.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>Sun Jun</h6>
                                  <p className="text-light">
                                    Thank you very much for quick support!
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                4 hours ago
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/5.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">
                                  <h6>Tolos Joune</h6>
                                  <p className="text-light">
                                    My item doesn’t shio to correct address
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <span className="badge badge-primary">
                                30 minute ago
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 cdx-xl-100">
                <div className="row">
                  <div className="col-xxl-12">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="card project-status">
                          <div className="card-header">
                            <h4>Expenses</h4>
                            <div className="setting-card action-menu">
                              <a
                                className="action-toggle"
                                href="javascript:void(0)"
                              >
                                <i
                                  className="codeCopy"
                                  data-feather="more-horizontal"
                                />
                              </a>
                              <ul className="action-dropdown">
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-o" />
                                    weekly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-check-o" />
                                    monthly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar" />
                                    yearly
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body progressCounter">
                            <div className="media">
                              <div>
                                <h2>
                                  <span className="count">3238</span>
                                </h2>
                              </div>
                              <div className="media-body">
                                {" "}
                                <span className="badge badge-success">
                                  25.7%
                                  <i className="fa fa-angle-up" />
                                </span>
                              </div>
                            </div>
                            <div className="progress progress-primary">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={58}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card project-status">
                          <div className="card-header">
                            <h4>New Users</h4>
                            <div className="setting-card action-menu">
                              <a
                                className="action-toggle"
                                href="javascript:void(0)"
                              >
                                <i
                                  className="codeCopy"
                                  data-feather="more-horizontal"
                                />
                              </a>
                              <ul className="action-dropdown">
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-o" />
                                    weekly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-check-o" />
                                    monthly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar" />
                                    yearly{" "}
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body progressCounter">
                            <div className="media">
                              <div>
                                <h2>
                                  <span className="count">4850</span>
                                </h2>
                              </div>
                              <div className="media-body">
                                {" "}
                                <span className="badge badge-secondary">
                                  25.7%
                                  <i className="fa fa-angle-down" />
                                </span>
                              </div>
                            </div>
                            <div className="progress progress-secondary">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={88}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              >
                                {" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card project-status">
                          <div className="card-header">
                            <h4>New Clients</h4>
                            <div className="setting-card action-menu">
                              <a
                                className="action-toggle"
                                href="javascript:void(0)"
                              >
                                <i
                                  className="codeCopy"
                                  data-feather="more-horizontal"
                                />
                              </a>
                              <ul className="action-dropdown">
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-o" />
                                    weekly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-check-o" />
                                    monthly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar" />
                                    yearly
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body progressCounter">
                            <div className="media">
                              <div>
                                <h2>
                                  <span className="count">4198</span>
                                </h2>
                              </div>
                              <div className="media-body">
                                <span className="badge badge-danger">
                                  20.5%
                                  <i className="fa fa-angle-down" />
                                </span>
                              </div>
                            </div>
                            <div className="progress progress-info">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={78}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="card project-status">
                          <div className="card-header">
                            <h4>Employees</h4>
                            <div className="setting-card action-menu">
                              <a
                                className="action-toggle"
                                href="javascript:void(0)"
                              >
                                <i
                                  className="codeCopy"
                                  data-feather="more-horizontal"
                                />
                              </a>
                              <ul className="action-dropdown">
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-o" />
                                    weekly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar-check-o" />
                                    monthly
                                  </a>
                                </li>
                                <li>
                                  <a href="javascript:void(0);">
                                    <i className="fa fa-calendar" />
                                    yearly
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="card-body progressCounter">
                            <div className="media">
                              <div>
                                <h2>
                                  <span className="count">1899</span>
                                </h2>
                              </div>
                              <div className="media-body">
                                <span className="badge badge-success">
                                  15.2%
                                  <i className="fa fa-angle-up" />
                                </span>
                              </div>
                            </div>
                            <div className="progress progress-warning">
                              <div
                                className="progress-bar"
                                role="progressbar"
                                aria-valuenow={29}
                                aria-valuemin={0}
                                aria-valuemax={100}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 cdx-xl-50">
                <div className="card project-summarytbl">
                  <div className="card-header">
                    <h4>Project Detail</h4>
                    <div className="setting-card action-menu">
                      <div className="action-toggle">
                        <i
                          className="codeCopy"
                          data-feather="more-horizontal"
                        />
                      </div>
                      <ul className="action-dropdown">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-o" />
                            weekly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-check-o" />
                            monthly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar" />
                            yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Order</th>
                            <th>Project Name</th>
                            <th>Project Cost</th>
                            <th>Project Status</th>
                            <th>Payment</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>Racing Game</td>
                            <td>$45,376</td>
                            <td>Completed</td>
                            <td>
                              <span className="badge badge-primary">Done</span>
                            </td>
                          </tr>
                          <tr>
                            <td>2</td>
                            <td>Cytrust Dashboard</td>
                            <td>$40,258</td>
                            <td>In Progress</td>
                            <td>
                              <span className="badge badge-secondary">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>3</td>
                            <td>Travel App</td>
                            <td>$32,256</td>
                            <td>Completed</td>
                            <td>
                              <span className="badge badge-primary">Done</span>
                            </td>
                          </tr>
                          <tr>
                            <td>4</td>
                            <td>Reyalestet App</td>
                            <td>$25,058</td>
                            <td>In Progress</td>
                            <td>
                              <span className="badge badge-secondary">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>5</td>
                            <td>Agriculture Website</td>
                            <td>$36,585</td>
                            <td>In Progress</td>
                            <td>
                              {" "}
                              <span className="badge badge-secondary">
                                Pending
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>6</td>
                            <td>TRavel Website</td>
                            <td>$25,255</td>
                            <td>Completed</td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">Done</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 cdx-xl-50">
                <div className="card recent-ordertbl">
                  <div className="card-header">
                    <h4>Order detail</h4>
                    <div className="setting-card action-menu">
                      <div className="action-toggle">
                        <i
                          className="codeCopy"
                          data-feather="more-horizontal"
                        />
                      </div>
                      <ul className="action-dropdown">
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-o" />
                            weekly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar-check-o" />
                            monthly
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            <i className="fa fa-calendar" />
                            yearly
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Customer</th>
                            <th>Product</th>
                            <th>Amount</th>
                            <th>Vendor</th>
                            <th>Status</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/6.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">Mark Wangar</div>
                              </div>
                            </td>
                            <td>
                              <a
                                className="text-light"
                                href="product-detail.html"
                              >
                                {" "}
                                Apple Airpod Pro
                              </a>
                            </td>
                            <td>$847.39</td>
                            <td>Palestine</td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">Paid</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/2.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">Thomos Vactom</div>
                              </div>
                            </td>
                            <td>
                              <a
                                className="text-light"
                                href="product-detail.html"
                              >
                                Redmi Note 10s
                              </a>
                            </td>
                            <td>$470.34</td>
                            <td>Serbia</td>
                            <td>
                              {" "}
                              <span className="badge badge-secondary">
                                Unpaid
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/3.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">Johan Deo</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <a
                                className="text-light"
                                href="product-detail.html"
                              >
                                Razer kraken headset
                              </a>
                            </td>
                            <td>$394.39</td>
                            <td>Republic</td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">Paid</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/4.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">Leena Odem</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <a
                                className="text-light"
                                href="product-detail.html"
                              >
                                iphone 12 pro max
                              </a>
                            </td>
                            <td>$249.29</td>
                            <td>Greece</td>
                            <td>
                              {" "}
                              <span className="badge badge-primary">Paid</span>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="media">
                                <div className="img-wrap">
                                  <img
                                    className="img-fluid"
                                    src="../assets/images/avtar/5.jpg"
                                    alt="recent-product"
                                  />
                                </div>
                                <div className="media-body">Omini Rome</div>
                              </div>
                            </td>
                            <td>
                              {" "}
                              <a
                                className="text-light"
                                href="product-detail.html"
                              >
                                DJL Mavic Pro 2
                              </a>
                            </td>
                            <td>$147.70</td>
                            <td>Central</td>
                            <td>
                              {" "}
                              <span className="badge badge-secondary">
                                Unpaid
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 cdx-xl-100 cdxorder-xl-1">
                <div className="card dash-chat">
                  <div className="card-header">
                    <h4>live caht</h4>
                  </div>
                  <div className="card-body">
                    <div className="dash-chatbox">
                      <ul className="chating-list" data-simplebar="">
                        <li>
                          <div className="user-msgbox">
                            <div className="media">
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/1.jpg"
                                alt="image"
                              />
                              <div className="media-body">
                                <p>Lorem ipsum dolor sit amet</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="admin-msgbox">
                            <div className="media">
                              <div className="media-body">
                                <p>Adipisicing elit, sed do eiusmod.</p>
                              </div>
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/2.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="admin-msgbox">
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod.
                                </p>
                              </div>
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/2.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="user-msgbox">
                            <div className="media">
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/1.jpg"
                                alt="image"
                              />
                              <div className="media-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="admin-msgbox">
                            <div className="media">
                              <div className="media-body">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit, sed do eiusmod
                                </p>
                              </div>
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/2.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="user-msgbox">
                            <div className="media">
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/1.jpg"
                                alt="image"
                              />
                              <div className="media-body">
                                <p>Lorem ipsum dolor sit amet</p>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div className="admin-msgbox">
                            <div className="media">
                              <div className="media-body">
                                <p>Adipisicing elit, sed do eiusmod.</p>
                              </div>
                              <img
                                className="img-fluid"
                                src="../assets/images/avtar/2.jpg"
                                alt="image"
                              />
                            </div>
                          </div>
                        </li>
                      </ul>
                      <div className="userchat-typebox d-flex">
                        <a className="btn btn-primary mr-10">
                          <i data-feather="smile" />
                        </a>
                        <input
                          className="form-control"
                          type="text"
                          placeholder="Type a message"
                          defaultValue=""
                          autoComplete="off"
                        />
                        <a className="btn btn-primary ml-10">
                          {" "}
                          <i data-feather="send"> </i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* theme body end*/}
      </div>
      {/* footer start*/}
      <footer className="codex-footer">
        <p>Copyright 2022-23 © dmeki All rights reserved.</p>
      </footer>
      {/* footer end*/}
      {/* back to top start //*/}
      <div className="scroll-top">
        <i className="fa fa-angle-double-up" />
      </div>
      {/* back to top end //*/}
      {/* main jquery*/}
      {/* Theme Customizer*/}
      {/* Feather icons js*/}
      {/* Bootstrap js*/}
      {/* Scrollbar*/}
      {/* apex chart*/}
      {/* dashboard*/}
      {/* Custom script*/}
    </div>
  );
}

export default Dashboard;
