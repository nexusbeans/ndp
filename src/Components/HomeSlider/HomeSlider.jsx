import React from 'react'
import Banner1 from '../../assets/images/Banner-1.jpg'
import Banner2 from '../../assets/images/BANNER-2.jpg'
import Banner3 from '../../assets/images/BANNER-3.jpg'
import { Col, Container, Row } from 'react-bootstrap'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import './HomeSlider.scss'

const options = {
  margin: 0,
  responsiveClass: true,
  nav: true,
  dots: false,
  loop: true,
  autoplay: true,
  // navText: ["Prev", "Next"],
  smartSpeed: 1000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 1,
    },
    1000: {
      items: 1,

    }
  },
};

export default function HomeSlider() {
  return (

    <>
      <section className='Home_slider'>
        <Container fluid>
          <Row className="slider_elementsHome">
            <Col className='p-0'>
            <OwlCarousel className="slider-items owl-carousel" {...options}>
              <div class='item'>
                <a href="https://nexusbeans.in/a/i-am-book.html"
                ><img src={Banner1} className="bannerimg" alt=""
                  /></a>
              </div>
              <div class='item'>
                <a href="https://nexusbeans.in/a/i-am-book.html"
                ><img src={Banner2} className="bannerimg" alt=""
                  /></a>
              </div>
              <div class='item'>
                <a href="https://nexusbeans.in/a/i-am-book.html"
                ><img src={Banner3} className="bannerimg" alt=""
                  /></a>
              </div>
            </OwlCarousel>
       

            </Col>
          </Row>

        </Container>

      </section>
    </>
  )
}


