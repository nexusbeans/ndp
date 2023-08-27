import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "./HomeSlider.scss";
import { Link } from "react-router-dom";
// import sliderImageData from "../../Api/sliderImageData.json";
import sliderImageData from "../../Api/HomesliderData";


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
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={0}
                slidesPerView={1}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log("slide change")}
              >
                {sliderImageData.map((item) => (
                  <SwiperSlide key={item.id} className="slider-items">
                    <div className="item">
                      <Link to="/i-am-book">
                        <img src={item.imageUrl} className="bannerimg" alt="" />
                      </Link>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
