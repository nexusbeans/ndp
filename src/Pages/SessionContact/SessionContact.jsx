import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./SessionContact.scss";
import { Button, Col, Container, Row } from "react-bootstrap";
import TitleWraper from "../../Components/TitleWraper";
import { Link } from "react-router-dom";

export default function SessionContact() {
  return (
    <>
      <Header />
      <main
        className="SessionContact_main default_layout"
        id="SessionContact_mainID"
      >
        <section className="story">
          <Container>
            <TitleWraper
              MainTitle={"Sir Ashish"}
              subTitle={"Sessions with Sri Ashish"}
            />
            <Row className="support" id="textspprt">
              <Col md={6}>
                {/* <div className="Title_sub">
                  <h3 className="formhd">Sessions with Sri Ashish</h3>
                </div> */}
                <div className="Title_sub__inner">
                  <p>
                 <strong> Sri Ashish</strong> is available online to answer all your queries. Your questions may be related to non-duality, understanding of the Three-Fold Path, your spiritual journey, the challenges, and obstacles you are facing on this path, or any clarification on the book's content. These forums are available to learn from him or seek his advice. 
                  </p>
                  <ul className="list_itemBlock">

                    <li>
                    Post your question or comments in the box on the side. The reply will be posted on various NDP social media platforms for everyone's benefit. Personal questions can be answered via email. 
                    </li>

                    <li>
                    Once a month, Sri Ashish will hold a one-hour interactive live session to discuss or answer any questions. You may register for these sessions here. 
                    </li>
                  </ul>
                </div>
                <a href="https://nexusbeans.in/avideos.html">

                  <div className="button_Outer ">
                      <Link to='/live-events' className="submit_btn">
                      Satsang Registration
                      </Link>
                    </div>
                </a>
              </Col>
              <Col md={6}>
                <div className="backgrounfoprm Block_itemsMain">
                  <h2>Submit Query</h2>
                  <form action="mail1.php" method="post" className="rightform">
                    <div id="blocks" className="form-group">

                      <div id="block" className="form-group">
                        <input
                          name="nameBA"
                          id="nameBA"
                          type="text"
                          placeholder="Your Name"
                          className="form-control form-field"
                          required=""
                        />
                      </div>



                      <div id="block" className="form-group">
                        <input
                          name="emailBA"
                          type="email"
                          placeholder="Email Address"
                          className="form-control form-field"
                          required=""
                        />
                      </div>


                      <div id="block" className="form-group">
                        <input
                          name="residenceBA"
                          type="text"
                          placeholder="Country of Residence"
                          className="form-control form-field"
                          required=""
                        />
                      </div>



                      <div id="block" className="form-group1">
                        <textarea
                          name="messageBA"
                          id="messageBA"
                          placeholder="Enter your Message"
                          className="form-control form-field"
                          defaultValue={""}
                        />
                      </div>

                      <div className="button_Outer ">
                      <Button className="submit_btn">
                        Send
                      </Button>
                    </div>
                    </div>
                  </form>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
