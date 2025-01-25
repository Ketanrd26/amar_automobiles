import React from "react";
import "./Herosection.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import bikeback from "../../assests/bike_back.webp";
import bikefront from "../../assests/bike_front.webp";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Herosection = () => {
  return (
    <>
      <div class="herosection_parent parent">
        <Swiper
          spaceBetween={0}
          centeredSlides={true}
          autoplay={{
            delay: 50000000,
            disableOnInteraction: false,
          }}
          pagination={false}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            <div class="slide_item">
              <div class="left">
                <h2>
                  Lorem ipsum dolor <br /> sit amet.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  doloremque, soluta, dicta maxime dolor adipisci consequuntur
                  
                </p>
                <div class="btn">
                    <div class="text">
                        Contact Us
                    </div>
                </div>
              </div>
              <div class="right">
                <img src={bikeback} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div class="slide_item2">
              <div class="left">
                <img src={bikefront} alt="" />
              </div>
              <div class="right">
              <h2>
                  Lorem ipsum dolor <br /> sit amet.
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
                  doloremque, soluta, dicta maxime dolor adipisci consequuntur
                  
                </p>
                <div class="btn">
                    <div class="text">
                        Contact Us
                    </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Herosection;
