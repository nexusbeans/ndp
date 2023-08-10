import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ButtonElements.scss'
import bulkButtonicon from '../../assets/images/bulkOrder.png'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import TitleWraper from '../TitleWraper';


const BulkButton = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="buy_nowBtnItem">
        <Button variant="primary" onClick={handleShow} className="buyButton btnFix">
          Bulk Orders <span><img src={bulkButtonicon} alt="" /> </span>
        </Button>
      </div>

      <Modal show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
        centered>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <div className="popup-content_data">
            <TitleWraper
              MainTitle={"Bulk Order"}
              subTitle={"Bulk Orders"}
            />
            <div className="">
              <form action="mail1.php" method="post" className="rightform">
                <div id="blocks" className="form-group">
                  <div className="col-md-12">
                    <div id="block" className="form-group">
                      <input
                        name="nameBA"
                        id="nameBA"
                        type="text"
                        placeholder="Your Name"
                        className="form-control form-field"
                        required=""
                        data-nlok-ref-guid="6bc796b6-1a94-4428-9ad9-fa69ddf2824b"
                      />
                      <div
                        id="norton-idsafe-field-styling-divId"
                        style={{
                          height: "43.63636363636363px",
                          maxWidth: "43.63636363636363px",
                          verticalAlign: "top",
                          position: "absolute",
                          top: "8.181818181818183px",
                          left: "210.00274926686217px",
                          cursor: "pointer",
                          resize: "both",
                          zIndex: 2147483646
                        }}
                      >
                        <img
                          id="norton-idsafe-field-logo-imgId"
                          src="chrome-extension://admmjipmmciaobhojoghlmleefbicajg/images/ic-field-logo.svg"
                          style={{
                            height: "43.63636363636363px",
                            maxWidth: "43.63636363636363px"
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="clearfix" />
                    <div id="block" className="form-group">
                      <input
                        name="emailBA"
                        type="email"
                        placeholder="Email Address"
                        className="form-control form-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="clearfix" />
                    <div id="block" className="form-group">
                      <input
                        name="residenceBA"
                        type="text"
                        placeholder="Country of Residence"
                        className="form-control form-field"
                        required=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="block" className="form-group">
                      <select className="form-control form-field" name="selectcenterBA">
                        <option>Select Purpose</option>
                        <option value="">Contact</option>
                        <option value="">Review</option>
                        <option value="">Question</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div id="block" className="form-group1">
                      <textarea
                        name="messageBA"
                        id="messageBA"
                        placeholder="Enter your Message"
                        className="form-control form-field"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="button_Outer mt-3">
                      <Button className="submit_btn">
                        Send
                      </Button>
                    </div>
                </div>
              </form>
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  )
}
export default BulkButton