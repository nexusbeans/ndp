import React from "react";
import Dashboardslidebar from "../../ComponentDashboard/Dashboardslidebar/Dashboardslidebar";
import DashboardFooter from "../../ComponentDashboard/DashboardFooter/DashboardFooter";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function BlogposterAdd() {
  return (
    <>
      <Dashboardslidebar />
      <main className="addpost" id="dashboarcontrol">
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
                    <a href="javascript:void(0);">ecommerce</a>
                  </li>
                  <li className="breadcrumb-item active">
                    <a href="javascript:void(0);">add product</a>
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
          {/* breadcrumb end*/}
          {/* theme body start*/}
          <div className="theme-body cdxshopping-cart">
            <div className="custom-container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <div className="info-group">
                        <form>
                          <div className="form-group">
                            <label className="form-label">Product Name</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Your Product Name"
                            />
                          </div>
                          <div className="form-group">
                            <label className="form-label">
                              Product Description
                            </label>
                            <textarea
                              id="crowenkeditor"
                              placeholder="Enter YourProduct Description"
                              defaultValue={""}
                            />
                          </div>
                          <div className="form-group">
                            <div className="small-group">
                              <div>
                                <label className="form-label">Categories</label>
                                <select className="form-select">
                                  <option>Select Categories</option>
                                  <option>Fashion</option>
                                  <option>Cosmetics</option>
                                  <option>Sweater</option>
                                  <option>Dress</option>
                                  <option>Shirt</option>
                                  <option>Sandel</option>
                                  <option>Jacket</option>
                                  <option>Pent</option>
                                </select>
                              </div>
                              <div>
                                <label className="form-label">Brand</label>
                                <select className="form-select">
                                  <option>Select Brand</option>
                                  <option>Zara</option>
                                  <option>Cartier</option>
                                  <option>Lululemon</option>
                                  <option>Moncler</option>
                                  <option>Fendi</option>
                                  <option>Old Navy</option>
                                  <option>Moncler</option>
                                  <option>Delhiwear</option>
                                </select>
                              </div>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <label className="form-label">Comment</label>
                            <textarea
                              className="form-control"
                              placeholder="Enter Your Comment"
                              defaultValue={""}
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="card">
                    <div className="card-body">
                      <form
                        className="dropzone needsclick"
                        id="demo-upload"
                        action="/upload"
                      >
                        <div className="dz-message needsclick">
                          <div className="upload-icon">
                            <i className="fa fa-cloud-upload" />
                          </div>
                          <h3>Drop files here or click to upload.</h3>
                          <p>
                            (This is just a demo dropzone. Selected files are
                            <strong>not actually uploaded.)</strong>
                          </p>
                        </div>
                      </form>
                      <div
                        className="preview-dropzon"
                        style={{ display: "none" }}
                      >
                        <div className="dz-preview dz-file-preview">
                          <div className="dz-image">
                            <img data-dz-thumbnail="" src="" alt="" />
                          </div>
                          <div className="dz-details">
                            <div className="dz-size">
                              <span data-dz-size="" />
                            </div>
                            <div className="dz-filename">
                              <span data-dz-name="" />
                            </div>
                          </div>
                          <div className="dz-progress">
                            <span
                              className="dz-upload"
                              data-dz-uploadprogress=""
                            />
                          </div>
                          <div className="dz-success-mark">
                            <i className="fa fa-check" aria-hidden="true" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <div className="info-group">
                        <form>
                          <div className="form-group">
                            <label className="form-label">Price</label>
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Enter Product Price"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <label className="form-label">Status</label>
                            <div className="small-group">
                              <div>
                                <div className="chek-group">
                                  <span className="custom-check-input custom-chek">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      id="pricerange_1"
                                      name="Status"
                                    />
                                  </span>
                                  <label
                                    className="ml-5"
                                    htmlFor="pricerange_1"
                                  >
                                    Online
                                  </label>
                                </div>
                              </div>
                              <div>
                                <div className="chek-group">
                                  <span className="custom-check-input custom-chek">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      id="pricerange_2"
                                      name="Status"
                                    />
                                  </span>
                                  <label
                                    className="ml-5"
                                    htmlFor="pricerange_2"
                                  >
                                    Offline
                                  </label>
                                </div>
                              </div>
                              <div>
                                <div className="chek-group">
                                  <span className="custom-check-input custom-chek">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      id="pricerange_3"
                                      name="Status"
                                    />
                                  </span>
                                  <label
                                    className="ml-5"
                                    htmlFor="pricerange_3"
                                  >
                                    Draft
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="group-button text-end">
                    <a className="btn btn-success" href="javascript:void(0)">
                      Add
                    </a>
                    <a
                      className="btn btn-danger ml-15"
                      href="javascript:void(0)"
                    >
                      cancle
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <DashboardFooter />
    </>
  );
}

export default BlogposterAdd;
