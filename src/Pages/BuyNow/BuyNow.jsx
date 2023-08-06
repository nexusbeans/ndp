import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Col, Container, Row } from "react-bootstrap";
import booKImg from "../../assets/images/buy-book.png";
import booKImgIC from "../../assets/images/titlei.png";
import "./BuyNow.scss";
import TitleWraper from "../../Components/TitleWraper";
import { Link } from "react-router-dom";
import BuyIcon from '../../assets/images/buy-iconitem.png'

export default function BuyNow() {
  return (
    <>
      <Header />
      <main className="BuyNow_main" id="BuyNow_MainID">
        <section className="BookSection story_bg">
          <Container>
            <Row className="centerLayer">
              <Col md={5}>
                <div className="BookImage_section">
                  <img src={booKImg} className="img-fluid" alt="" />
                </div>
              </Col>
              <Col md={7}>
                <div className="BookImage_section_title">
                  <img src={booKImgIC} className="img-fluid" alt="" />
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <section className="story">
          <Container>
            <TitleWraper MainTitle={"Buy Now"} subTitle={"Buy Now"} />
            <Row className=" support">
              <Col>
                <div className="buy_items">
                  <div className="buy_card">
                    <div>
                      <Link to="#" className="buyButton">
                        BuyNow <span><img src={BuyIcon} alt="" /> </span>
                      </Link>
                    </div>
                  </div>
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
