import React from 'react'
import './EventLive.scss'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Button, Col, Container, Row } from 'react-bootstrap';
import TitleWraper from '../../Components/TitleWraper';
import { FaUserPlus,FaLocationDot,FaEnvelope,FaComments, FaCalendar } from "react-icons/fa6";
import EventCalender from '../../Components/EventCalender';

function EventLive() {
  return (
    <>
      <Header/>
      <main className='eventLive_main default_layout'>
        <section className='section_eventsLive section_msgDrop '>
          <Container>
          <TitleWraper
            MainTitle={"Live Event"}
            subTitle={"Live Event"}
          />
            <Row className='event_listRow'>
              <Col md={6}>
                <div className='live_eventPage'>
                  <EventCalender/>
                </div>
              </Col>
              <Col md={6} className="rightform">
                <form action="mail1.php" method="post" className="rightform_elements">
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
                        />
                         <div className="icon_fields"><FaUserPlus/></div>

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
                        <div className="icon_fields"><FaEnvelope/></div>
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
                      <div className="icon_fields"><FaLocationDot/></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div id="block" className="form-group">
                        <select
                          className="form-control form-field"
                          name="selectcenterBA"
                        >
                          <option>Pick Date</option>
                          <option value="09 Aug 2023">
                          09 Aug 2023
                          </option>
                          <option value="18 Aug 2023">
                          18 Aug 2023
                          </option>
                          <option value="21 Aug 2023">
                          21 Aug 2023
                          </option>
                          <option value="27 Aug 2023">
                          27 Aug 2023
                          </option>
                        </select>
                        <div className="icon_fields"><FaCalendar/></div>
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
                    <div className="button_Outer ">
                      <Button className="submit_btn">
                        Send
                      </Button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer/>
    </>
  )
}

export default EventLive