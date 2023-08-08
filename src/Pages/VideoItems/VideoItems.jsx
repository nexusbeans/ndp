import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./VideoItems.scss";
import img66 from "../../assets/images/66.jpg";
import { Col, Container, Row } from "react-bootstrap";
import Iframe from "react-iframe";
import TitleWraper from "../../Components/TitleWraper";

export default function VideoItems() {

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (id) => {
    setActiveTab(id);
  };
  return (
    <>
      <Header />
      <main className="video_elements default_layout" id="video_elementsID">
        <section className="story">
          <Container>
            <Row>
              <Col>

                <TitleWraper
                  MainTitle={"Gallery"}
                  subTitle={"Gallery"}
                />
                <div className=" streamingtab">
                  <div className="login-button-container clearfix">
                    <div className="btn_defaultVideo sign-in">
                      <button
                        className={
                          activeTab === 1
                            ? "active btn sign-in__button  btn_trigervideo"
                            : "btn sign-in__button  btn_trigervideo"
                        }
                        onClick={() => handleTabClick(1)}
                      >
                       Photo Gallery
                      </button>

                      <button
                        className={
                          activeTab === 2
                            ? "active btn sign-in__button  btn_trigervideo"
                            : "btn sign-in__button  btn_trigervideo"
                        }
                        onClick={() => handleTabClick(2)}
                      >
                        Video Gallery
                      </button>
                    </div>
                  </div>
                </div>
                <div className="Video_block">
                  {activeTab === 1 && (
                    <div className="register__form">
                      <div
                        id="registration-form-wrapper "
                        className="bottomframe Video_BlockItems"
                      >
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                        <div className="Video_blockElements">
                        <img src={img66} alt="" className="img-fluid"/>
                        </div>
                      </div>
                    </div>
                  )}
                  {activeTab === 2 && (
                    <div className="register__form">
                      <div
                        id="registration-form-wrapper "
                        className="bottomframe Video_BlockItems"
                      >
                        <div className="Video_blockElements">
                          {/*<div class="frame">*/}
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                          {/*</div>*/}
                        </div>
                        <div className="Video_blockElements">
                          {/*<div clasiframes="frame">*/}
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                          {/*</div>*/}
                        </div>
                        <div className="Video_blockElements">
                          {/*<div class="frame">*/}
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                          {/*<iframe width="300" height="315" style="border-radius: 12px;margin-left: 285%;" src="https://www.youtube.com/embed/Jx7B7yJsAwI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>*/}
                          {/*</div>*/}
                        </div>

                        <div className="Video_blockElements">
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="Video_blockElements">
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                        </div>
                        <div className="Video_blockElements">
                          <Iframe
                            width={350}
                            height={315}
                            className="yutbvideo"
                            src="https://www.youtube.com/embed/Jx7B7yJsAwI"
                            title="YouTube video player"
                            frameBorder={0}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen=""
                          />
                        </div>
                      </div>
                    </div>
                  )}
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
