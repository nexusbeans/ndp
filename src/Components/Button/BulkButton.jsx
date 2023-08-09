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
                  <div className="button">
                    <input
                      name="submit"
                      type="submit"
                      defaultValue="Send"
                      className="form-in-sub"
                      style={{
                        color: "rgb(255, 255, 255)",
                        borderColor: "rgba(0, 0, 0, 0)",
                        fontSize: 24,
                        fontWeight: 500,
                        textTransform: "none",
                        borderRadius: 33,
                        backgroundColor: "#77c1c4",
                        textAlign: "center",
                        padding: "8px 0px 8px 0px",
                        width: "30%",
              /* marginLeft: 20, */ margin: "24px 0px 0px 17px",
                        height: 51
                      }}
                      data-nlok-ref-guid="7cf6ba16-7261-4572-9313-d3c237837b5b"
                    />
                    {/*<input name="submit" type="submit" value="Submit" class="form-in-sub" style="color: rgb(255, 255, 255);border-color: rgba(0, 0, 0, 0);font-size: 13px;font-weight: 500;text-transform: none;border-radius: 22px;background-color: #77c1c4;text-align: center;padding: 8px 0px 8px 0px;width: 30%;">*/}
                    {/*<input  name="submit" type="submit" value="Submit" class="form-in-sub" style="color: rgb(255, 255, 255); border-color: rgba(0, 0, 0, 0); font-size: 13px; font-weight: 500;  text-transform: none; border-radius: 4px; background-color: #560f6d; text-align: center;padding: 8px 0px 8px 0px;width: 93%;" >*/}
                  </div>
                </div>
              </form>
              {/*<p>Sri Ashish answers questions that are close to our heart but we never find a good solution to them. We struggle with them internally damaging our inner peace and happiness.</p>        */}
              {/*   <p>Whether these are deeper questions related to God and spirituality or concerning worldly matters of children, relationships, and health. The book emphasizes how to truly know yourself and by knowing that how you can eliminate the root cause of all problems. The methods suggested are not easy to implement. Yet, they are most effective in achieving a state of constant happiness.</p>*/}
              {/*   <p>This book allows you to explore the ideas of non-dualism and why it is so powerful among all spiritual paths. Why concepts like non-attachment and equanimity are the antidote to suffering and mental anguish that we all face in our daily lives.</p>*/}
            </div>
          </div>

        </Modal.Body>
      </Modal>
    </div>
  )
}
export default BulkButton