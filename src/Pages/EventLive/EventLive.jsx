import React from 'react'
import './EventLive.scss'
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Button, Col, Container, Row } from 'react-bootstrap';
import TitleWraper from '../../Components/TitleWraper';
import { FaUserPlus, FaLocationDot, FaEnvelope, FaComments } from "react-icons/fa6";
import EventCalender from '../../Components/EventCalender';
import { useForm, ValidationError } from '@formspree/react';
import { GoogleCaptcha } from "../../Components/GoogleCaptcha/GoogleCaptcha";
import FormSubmit from '../FormSubmit/FormSubmit';


function EventLive() {
  const [state, handleSubmit] = useForm("mpzgplvn");
  if (state.succeeded) {
    return <><FormSubmit/></>;
  }
  return (
    <>
      <Header />
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
                  <EventCalender />
                </div>
              </Col>
              <Col md={6} className="rightform">
                <form onSubmit={handleSubmit} method="post" className="rightform_elements">
                <input type="hidden" value="Live Event Form" name="Form_Name" id="SESSION_PAGE_FORM" />
                  <div id="blocks" className="form-group">
                    <div className="col-md-12">
                      <div id="block" className="form-group">
                        <input
                          name="nameuser"
                          id="nameuser"
                          type="text"
                          placeholder="Your Name"
                          className="form-control form-field"
                          required
                        />
                        <ValidationError
                          prefix="Name User"
                          field="nameuser"
                          errors={state.errors}
                        />
                        <div className="icon_fields"><FaUserPlus /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix" />
                      <div id="block" className="form-group">
                        <input
                          id="email"
                          type="email"
                          name="email" className="form-control form-field" placeholder="Email Address"
                        />
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                        <div className="icon_fields"><FaEnvelope /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="clearfix" />
                      <div id="block" className="form-group">
                        <input
                          name="residence"
                          type="text"
                          placeholder="Country of Residence"
                          className="form-control form-field"
                          required
                        />
                        <ValidationError
                          prefix="residence"
                          field="residence"
                          errors={state.errors}
                        />

                        <div className="icon_fields"><FaLocationDot /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div id="block" className="form-group">
                        <select
                          className="form-control form-field"
                          name="selectcenterBA" required
                        >
                          <option selected="true" disabled="disabled">Date Pick</option>
                          <option value="27 Aug 2023">
                            27 Aug 2023
                          </option>
                        </select>
                        <div className="icon_fields"><FaComments /></div>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div id="block" className="form-group1">
                        <textarea
                          id="message"
                          name="message" className="form-control form-field" placeholder="Enter your Message"
                        />
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />

                      </div>
                    </div>
                    <GoogleCaptcha />
                    <div className="button_Outer ">
                      <Button type='submit' className="submit_btn">
                        Register
                      </Button>
                    </div>
                  </div>
                </form>
              </Col>
            </Row>
          </Container>
        </section>
      </main>

      <Footer />
    </>
  )
}

export default EventLive