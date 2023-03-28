import React from "react";
import SwiperCore, { Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';


import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);


export const HomePage = () => {


    return (
        <>

            <div className="slider slider-banner">
            <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                        <Swiper
                            direction={"horizontal"}
                            loop={true}
                            grabCursor={true}
                            centeredSlidesBounds={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.7,
                                    slidesPerColumn: 1,
                                    spaceBetween: 20,
                                },
                                420: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                480: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    centeredSlides: true,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                    navigation: {
                                        nextEl: ".swiper-button-next",
                                        prevEl: ".swiper-button-prev",
                                    },
                                },
                            }}
                            className="swiper banner d-flex align-items-center"
                        >
                            <div className={"swiper-wrapper d-flex align-items-center"}>
                        <SwiperSlide
                            className={"swiper-slide card--product d-flex justify-content-center align-items-end h-350px"}>
                            <img src="./assets/imgs/banner-1.jpeg" alt="banner"/>
                        </SwiperSlide>
                        <SwiperSlide
                            className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px"}>
                            <img src="./assets/imgs/banner-2.jpeg" alt="banner"/>
                        </SwiperSlide>
                            <SwiperSlide
                                className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px"}>
                            <img src="./assets/imgs/banner-3.jpeg" alt="banner"/>
                            </SwiperSlide>
                        <SwiperSlide
                                className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px"}>
                            <img src="./assets/imgs/banner-4.jpeg" alt="banner"/>
                        </SwiperSlide>
                </div>
            </Swiper>
                    {/*<div className="swiper-pagination"></div>*/}
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
                </div>
            </div>


        <div className="slider slider-blocks">
            <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <Swiper
                        direction={"horizontal"}
                       loop={false}
                       grabCursor={true}
                       centeredSlidesBounds={true}
                       centeredSlides={true}
                       breakpoints={{
                                320: {
                                  slidesPerView: 1.7,
                                  slidesPerColumn: 1,
                                  spaceBetween: 20,
                                },
                                420: {
                                  slidesPerView: 2.2,
                                  spaceBetween: 20,
                                },
                                480: {
                                  slidesPerView: 2.5,
                                  spaceBetween: 30,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }
                            }
                        className={"swiper blocks d-flex align-items-center"}
                    >
                        <div className={"swiper-wrapper d-flex align-items-center"}>
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/freenudesboy.jpg")', height: '350px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Конструктор букетов
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/speedcar.jpg")', height: '350px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Срочный заказ
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/constructor.jpg")', height: '350px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Букет на вкус флориста
                        </SwiperSlide>
                        </div>
                        <div className="swiper-pagination"></div>
                    </Swiper>
            </div>



            <div className="slider slider-perfect">
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <p className="text-white mt-5 headlines">Идеально к букету</p>
                    <Swiper
                        direction={'horizontal'}
                        loop={true}
                        breakpoints={{
                                320: {
                                  slidesPerView: 1.4,
                                  slidesPerColumn: 1,
                                  spaceBetween: 20,
                                },
                                420: {
                                  slidesPerView: 2.2,
                                  spaceBetween: 20,
                                },
                                480: {
                                  slidesPerView: 2.5,
                                  spaceBetween: 30,
                                },
                                768: {
                                  slidesPerView: 2.5,
                                  centeredSlides: true,
                                  spaceBetween: 30,
                                },
                                992: {
                                  slidesPerView: 4,
                                  spaceBetween: 30,
                                },
                                1200: {
                                  slidesPerView: 5,
                                  spaceBetween: 20,
                                },
                                1400: {
                                  slidesPerView: 6,
                                  spaceBetween: 60,
                                },
                              }}
                              pagination={{
                                el: ".slider-perfect .swiper-pagination"
                              }}
                               navigation={{
                                nextEl: ".slider-perfect .swiper-button-next",
                                prevEl: ".slider-perfect .swiper-button-prev",
                              }}
                            className="swiper perfect-s d-flex align-items-center">
                        <div className="swiper-wrapper d-flex align-items-center">
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-1.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-2.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-3.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-4.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-5.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-6.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide
                                className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                <div
                                    className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                    <div className="card--content card--image mb-3"
                                         style={{backgroundImage: 'url("./assets/imgs/flower-7.jpeg")'}}></div>
                                    <div
                                        className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                        <p className="m-0">Кустовая роза</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </div>
                        <div className="swiper-pagination"></div>

                    </Swiper>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>






            <div className="slider slider-selections slider-selection-1">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="text-white mt-5 headlines">Подборки</h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <p className="text-white mt-5 headlines">Монобукеты</p>
                    <div>
                        <Swiper
                            direction={'horizontal'}
                            loop={true}
                            grabCursor={true}
                            centeredSlidesBounds={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.4,
                                    slidesPerColumn: 1,
                                    spaceBetween: 20,
                                },
                                420: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                480: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    centeredSlides: true,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1400: {
                                    slidesPerView: 4,
                                    spaceBetween: 60,
                                },
                            }}
                            pagination={{
                                el: ".slider-selection-1 .swiper-pagination"
                            }}
                            navigation={{
                                nextEl: ".slider-selection-1 .swiper-button-next",
                                prevEl: ".slider-selection-1 .swiper-button-prev",
                            }}
                            className="swiper selections selections-1 d-flex align-items-center">

                            <div className="swiper-wrapper d-flex">

                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/box-flower-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                {/*    <div className="slider--card card--product d-flex justify-content-center align-items-center flex-column card--product-100_150 p-3">*/}
                                {/*    123*/}
                                {/*</div>*/}
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-3.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-flower-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-nuts-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div className="swiper-pagination"></div>

                        </Swiper>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                        </div>
                    </div>
            </div>





            <div className="slider slider-selections slider-selection-2">
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <p className="text-white mt-5 headlines">Группа подборок 2</p>
                <div>
                        <Swiper
                            direction={'horizontal'}
                            loop={true}
                            grabCursor={true}
                            centeredSlidesBounds={true}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1.4,
                                    slidesPerColumn: 1,
                                    spaceBetween: 20,
                                },
                                420: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 20,
                                },
                                480: {
                                    slidesPerView: 2.5,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2.5,
                                    centeredSlides: true,
                                    spaceBetween: 30,
                                },
                                992: {
                                    slidesPerView: 4,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1400: {
                                    slidesPerView: 4,
                                    spaceBetween: 60,
                                },
                            }}
                            pagination={{
                                el: ".slider-selection-2 .swiper-pagination"
                            }}
                            navigation={{
                                nextEl: ".slider-selection-2 .swiper-button-next",
                                prevEl: ".slider-selection-2 .swiper-button-prev",
                            }}
                            className="swiper selections selections-1 d-flex align-items-center">

                            <div className="swiper-wrapper d-flex">

                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/box-flower-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                    {/*    <div className="slider--card card--product d-flex justify-content-center align-items-center flex-column card--product-100_150 p-3">*/}
                                    {/*    123*/}
                                    {/*</div>*/}
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-3.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-flower-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-nuts-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-1.png")', backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </div>
                            <div className="swiper-pagination"></div>

                        </Swiper>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
};