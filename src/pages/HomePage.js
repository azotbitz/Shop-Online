import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';

export const HomePage = () => {

    return (
        <>
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
                    // when window width is >= 480px
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
            >
        <div className="slider slider-banner">
            <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                <div className="swiper banner d-flex align-items-center">

                    <div className="swiper-wrapper d-flex align-items-center">

                        <SwiperSlide>
                            <div
                            className="swiper-slide card--product d-flex justify-content-center align-items-end h-350px">
                            <img src="./assets/imgs/banner-1.jpeg" alt="banner"/>
                        </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div
                            className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">
                            <img src="./assets/imgs/banner-2.jpeg" alt="banner"/>
                        </div>
                        </SwiperSlide>
                            <SwiperSlide>
                        <div
                            className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">
                            <img src="./assets/imgs/banner-3.jpeg" alt="banner"/>
                        </div>
                            </SwiperSlide>
                        <SwiperSlide>
                        <div
                            className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">
                            <img src="./assets/imgs/banner-4.jpeg" alt="banner"/>
                        </div>
                        </SwiperSlide>
                    </div>
                    <div className="swiper-pagination"></div>

                </div>

                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        </div>
            </Swiper>

        {/*<div className="slider slider-blocks">*/}
        {/*    <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">*/}
        {/*        <div className="swiper blocks d-flex align-items-center">*/}

        {/*            <div className="swiper-wrapper d-flex align-items-center">*/}

        {/*                <div style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/freenudesboy.jpg");'}}*/}
        {/*                     className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">*/}
        {/*                    Конструктор букетов*/}
        {/*                </div>*/}
        {/*                <div style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/speedcar.jpg");'}}*/}
        {/*                     className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">*/}
        {/*                    Срочный заказ*/}
        {/*                </div>*/}
        {/*                <div style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/constructor.jpg");'}}*/}
        {/*                     className="swiper-slide card--product d-flex justify-content-center align-items-end pb-4 h-350px">*/}
        {/*                    Букет на вкус флориста*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="swiper-pagination"></div>*/}

        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="slider slider-perfect">*/}
        {/*        <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">*/}
        {/*            <p className="text-white mt-5 headlines">Идеально к букету</p>*/}
        {/*            <div className="swiper perfect-s d-flex align-items-center">*/}

        {/*                <div className="swiper-wrapper d-flex align-items-center">*/}

        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-1.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-2.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-3.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-4.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-5.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-6.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div*/}
        {/*                        className="swiper-slide card--product d-flex justify-content-center align-items-center">*/}
        {/*                        <div*/}
        {/*                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                            <div className="card--content card--image mb-3"*/}
        {/*                                 style={{backgroundImage: 'url("./assets/imgs/flower-7.jpeg")'}}></div>*/}
        {/*                            <div*/}
        {/*                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                <p className="m-0">Кустовая роза</p>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div className="swiper-pagination"></div>*/}

        {/*            </div>*/}

        {/*            <div className="swiper-button-prev"></div>*/}
        {/*            <div className="swiper-button-next"></div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="slider slider-selections slider-selection-1">*/}
        {/*        <div className="container">*/}
        {/*            <div className="row">*/}
        {/*                <div className="col-12">*/}
        {/*                    <h3 className="text-white mt-5 headlines">Подборки</h3>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*        <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">*/}
        {/*            <p className="text-white mt-5 headlines">Монобукеты</p>*/}
        {/*            <div>*/}
        {/*                <div className="swiper selections selections-1 d-flex align-items-center">*/}

        {/*                    <div className="swiper-wrapper d-flex">*/}

        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                            <div className="slider--card card--product d-flex justify-content-center align-items-center flex-column card--product-100_150 p-3">*/}
        {/*                            123*/}
        {/*                        </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-3.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-flower-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-nuts-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="swiper-pagination"></div>*/}

        {/*                </div>*/}

        {/*                <div className="swiper-button-prev"></div>*/}
        {/*                <div className="swiper-button-next"></div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*    <div className="slider slider-selections slider-selection-2">*/}
        {/*        <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">*/}
        {/*            <p className="text-white mt-5 headlines">Группа подборок 2</p>*/}
        {/*            <div>*/}
        {/*                <div className="swiper selections selections-2 d-flex align-items-center">*/}

        {/*                    <div className="swiper-wrapper d-flex">*/}

        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                            <div className="slider--card card--product d-flex justify-content-center align-items-center flex-column card--product-100_150 p-3">*/}
        {/*                            123*/}
        {/*                        </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-3.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-flower-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-nuts-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                        <div className="swiper-slide d-flex justify-content-center align-items-center">*/}
        {/*                            <div*/}
        {/*                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">*/}
        {/*                                <div className="card--content card--image mb-3"*/}
        {/*                                     style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-1.png")'}}>*/}
        {/*                                </div>*/}
        {/*                                <div*/}
        {/*                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">*/}
        {/*                                    <p className="m-0">Кустовая роза</p>*/}
        {/*                                </div>*/}
        {/*                            </div>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="swiper-pagination"></div>*/}
        {/*                </div>*/}

        {/*                <div className="swiper-button-prev"></div>*/}
        {/*                <div className="swiper-button-next"></div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
        </>
    )
};