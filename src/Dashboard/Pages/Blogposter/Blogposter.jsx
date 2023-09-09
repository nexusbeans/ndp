import React from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";

function Blogposter() {
  return (
    <>
      <Dashboardslidebar />
      <main className="blogposterMain" id="dashboarcontrol">
        <div className="themebody-wrap">
          <div className="codex-breadcrumb">
            <div className="breadcrumb-contain">
              <div className="left-breadcrumb">
                <ul className="breadcrumb mb-0">
                  <li className="breadcrumb-item">
                    <a href="index.html">
                      <h1>Dashboard</h1>
                    </a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">pages</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0);">blog</a>
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
                    <span className="getDate"> </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* theme body end*/}
          {/* theme body start*/}
          <div className="theme-body">
            <div className="custom-container">
              <div className="row">
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/1.jpg"
                        alt="1.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>17 jan 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/2.jpg"
                        alt="2.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>28 feb 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/3.jpg"
                        alt="3.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>25 march 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/4.jpg"
                        alt="4.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>30 apil 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/5.jpg"
                        alt="5.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>05 june 2022</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-sm-6 cdx-xl-50">
                  <div className="card blog-wrapper">
                    <div className="imgwrapper">
                      <img
                        className="img-fluid"
                        src="../assets/images/pages/blog/6.jpg"
                        alt="6.jpg"
                      />
                      <a className="hover-link" href="blog-detail.html">
                        <i data-feather="link" />
                      </a>
                    </div>
                    <div className="detailwrapper">
                      <a href="blog-detail.html">
                        <h4>letest news post</h4>
                      </a>
                      <ul className="blogsoc-list">
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="user" />
                            admin
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="message-circle" />
                            comment
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0)">
                            <i data-feather="thumbs-up" />
                            like
                          </a>
                        </li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="blog-footer">
                        <a className="btn btn-primary" href="blog-detail.html">
                          read more
                        </a>
                        <div className="date-info">
                          <i className="fa fa-calendar" />
                          <span>19 july 2022</span>
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
      </main>
      <DashboardFooter/>
    </>
  );
}

export default Blogposter;
