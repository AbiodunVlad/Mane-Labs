import { Button } from "@material-tailwind/react";
import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Section3 = () => {
    const breakpoints = {
        300: {
          slidesPerView: 1,
          spaceBetween: 40,
          loop: true,
          centeredSlides: true,
        },
        639: {
          slidesPerView: 1,
          spaceBetween: 4,
          loop: true,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 4,
          loop: true,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 40,
          loop: true,
          centeredSlides: true,
        },
      };
  return (
    <div>
      <div className="  py-14">
        <div>
          <h1 className=" px-40 sm:px-10 sm:text-3xl">Our Services</h1>

          <div className="flex sm:flex-col gap-10 py-10 ">
            <Swiper
             slidesPerView={"auto"}
          centeredSlides={true}
          watchSlidesProgress
          navigation={true}
          grabCursor={true}
          spaceBetween={30}
          loop={true}
              breakpoints={breakpoints}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper w-screen "
            >
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 m-auto h-60 flex flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60  m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" bg-light-blue-100 p-4 w-60 h-60 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/Icons/product.png"
                      width={60}
                      className="mx-auto pb-5"
                    ></img>
                    <p className="text-center ">Product Design</p>
                  </span>
                </span>
              </SwiperSlide>
            </Swiper>

           
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Section3;
