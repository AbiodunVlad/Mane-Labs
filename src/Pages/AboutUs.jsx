import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const AboutUs = () => {
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
    <><div className="sm:mt-16 mt-24 w-full py-5 px-40 sm:px-5">
          <h1 className="text-center">About MÅNE Labs</h1>

          <p className=" py-10">
              Lorem ipsum dolor sit amet consectetur. Sem sed fringilla ornare
              pulvinar. In lorem turpis pulvinar nunc. Faucibus ut turpis consequat
              gravida tincidunt. Scelerisque a consectetur sed in bibendum nulla sit
              curabitur. Tristique erat posuere viverra gravida dictum quisque fusce
              sit aliquam. Nulla mauris at purus dignissim non pharetra integer.
          </p>
          <img src="/images/about1.png" className="m-auto">

          </img>
          <p className="py-5">
              Tellus sed feugiat mollis sapien urna integer leo. Elementum egestas
              neque id vulputate eu volutpat accumsan tristique id. Sit morbi lorem
              arcu enim dignissim. Ac tristique pellentesque commodo eget. Varius
              quam elementum cras fermentum mauris ornare gravida.
          </p>
      </div>
      <div className="py-10">
      <h1 className="text-center py-5">Our Team</h1>
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
              className="mySwiper w-screen   "
            >
              <SwiperSlide>
              <span className=" p-4 w-60 m-auto h-74 flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man.png"
                      
                      className="mx-auto pb-5"
                    ></img>
                  
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man2.png"
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man3.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/woman.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74  m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man3.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man2.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="py-10">
      <h1 className="text-center py-5">Our Partners</h1>
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
              <span className=" p-4 w-60 m-auto h-74 flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man.png"
                      
                      className="mx-auto pb-5"
                    ></img>
                  
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man2.png"
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man3.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>
                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/woman.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74  m-auto flex flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man3.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>

                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
              <SwiperSlide>
                <span className=" p-4 w-60 h-74 flex m-auto flex-col justify-center ">
                  <span>
                    <img
                      src="/images/man2.png"
                      width={250}
                      className="mx-auto pb-5"
                    ></img>
 
                  </span>
                  <p className="text-center ">Name</p>
                    <p className="text-center font-bold">Role</p>

                </span>
              </SwiperSlide>
            </Swiper>

            </div>
            <p className="text-center">We wait on you to join our partners’ list. Reach us to meet your software needs.</p>

          </>
  );
};

export default AboutUs;
