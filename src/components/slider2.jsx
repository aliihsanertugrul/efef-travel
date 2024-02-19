import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import slider from "./slider.json";
import 'swiper/css';
import { Link } from "react-router-dom";

const Slider2 = () => {
   
  return (
    <Swiper
    spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={1500}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
    >
      {slider.map((item) => (
        <SwiperSlide >  
            <div className="container text-end">
              <div className="detail-box">
                <h1>
                  {item.title} <br />
                  {item.title2} <br />
                  {item.title3}
                </h1>
                <div className="btn-box d-flex justify-content-end">
                  <Link to="/portfolio" className="btn1">
                    {item.btn1}
                  </Link>
                  <Link to="/contact" className="btn2">
                    {item.btn2}
                  </Link>
                </div>
              </div>
            </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
};

export default Slider2;
