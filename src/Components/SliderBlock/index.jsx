import React from "react";
import "./SliderBlock.scss";
import calImg from "../../assets/images/Calendar.jpg";
import calImg2 from "../../assets/images/cal2.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import { SectionWraper } from "../../assets/scss/globel";

const SliderBlock = () => {
  const sliderData = [
 
    { id: 2, image: calImg2 },
  ];

  return (
    <SectionWraper>
      <Swiper
        centeredSlides={true}

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
        {sliderData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="wraper_calender">
              <img
                src={slide.image}
                alt={`cal-img-${slide.id}`}
                className="img-fluid"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWraper>
  );
};

export default SliderBlock;
