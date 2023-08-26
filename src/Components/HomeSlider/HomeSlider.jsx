import React from "react";
import Banner1 from "../../assets/images/Banner-1.jpg";
import Banner2 from "../../assets/images/BANNER-2.jpg";
import Banner3 from "../../assets/images/BANNER-3.jpg";
import Banner4 from "../../assets/images/BANNER-4.jpg.jpg";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "./HomeSlider.scss";
import { Link } from "react-router-dom";

export default function HomeSlider() {
  return (
    <>
      <section className="Home_slider">
        <Container fluid>
          <Row className="slider_elementsHome">
            <Col className="p-0">
              <Swiper
                centeredSlides={true}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                // install Swiper modules
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                <SwiperSlide className="slider-items">
                  <div class="item">
                    <Link to="/live-events">
                      <img src={Banner4} className="bannerimg" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-items">
                  {" "}
                  <div class="item">
                    <Link to="/i-am-book">
                      <img src={Banner1} className="bannerimg" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-items">
                  {" "}
                  <div class="item">
                    <Link to="/i-am-book">
                      <img src={Banner2} className="bannerimg" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>
                <SwiperSlide className="slider-items">
                  <div class="item">
                    <Link to="/i-am-book">
                      <img src={Banner3} className="bannerimg" alt="" />
                    </Link>
                  </div>
                </SwiperSlide>

              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
