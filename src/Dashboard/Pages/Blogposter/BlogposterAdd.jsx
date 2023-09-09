import React from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";

function BlogposterAdd() {
  return (
    <>
      <Dashboardslidebar />
      <main className="addpost" id="dashboarcontrol">
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
                  <li className="breadcrumb-item">
                    <a href="javascript:void(0);">form</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0);">Input Element</a>
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
          <div className="theme-body codex-calendar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12">
                  <div className="card">
                    <div className="card-header">
                      <h4>Add Blog Post</h4>
                    </div>
                    <div className="card-body">
                      <form action="#">
                        <div className="form-group">
                          <label className="form-label">Simple Input</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder=""
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Placeholder</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Your Placeholder Title"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="Password input"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">number</label>
                          <input
                            className="form-control"
                            type="number"
                            placeholder="number"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">telephone</label>
                          <input
                            className="form-control"
                            type="tel"
                            defaultValue="+91 99555 99555"
                            placeholder="+91 99555 99555"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">url</label>
                          <input
                            className="form-control"
                            type="url"
                            defaultValue="https://example.com/"
                            placeholder="https://example.com/"
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Date and time</label>
                          <input
                            className="form-control"
                            type="datetime-local"
                            defaultValue="2023-03-13 18:45:00"
                          />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* theme body end*/}
        </div>
      </main>
      <DashboardFooter />
    </>
  );
}

export default BlogposterAdd;
