import React, {useEffect} from "react";
import SwiperCore, { Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';


import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import {useDispatch, useSelector} from "react-redux";
import {error, getItemsSelector, loader} from "../redux/reducers/itemsReducer/itemsSelector";
import {loadItems} from "../redux/reducers/itemsReducer/itemsReducer";

SwiperCore.use([Navigation, Pagination]);


export const HomePage = () => {

    const items = useSelector(getItemsSelector)
    const dispatch = useDispatch()
    const loading = useSelector(loader)
    const err = useSelector(error)

    useEffect(() => {
        dispatch(loadItems())
    }, [])

    if(loading) {
        return (
            <div><h2>Загрузка...</h2></div>
        )
    }

    if(err) {
        return (
            <div>
                <h2>Ошибка</h2>
                <button onClick={() => dispatch(loadItems())}>Перезагрузить страницу</button>
            </div>
        )
    }

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
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/freenudesboy.jpg")', height: '550px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Свежие поставки
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/speedcar.jpg")', height: '550px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Срочный заказ
                        </SwiperSlide>
                        <SwiperSlide className={"swiper-slide card--product d-flex justify-content-center align-items-end pb-4"} style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url("./assets/imgs/constructor.jpg")', height: '550px', backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: "no-repeat"}}>
                            Привезем быстрее всех
                        </SwiperSlide>
                        </div>
                        <div className="swiper-pagination"></div>
                    </Swiper>
            </div>



            <div className="slider slider-perfect">
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <p className="text-white mt-5 headlines">Выбирай технику</p>
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
                            {items.slice(0, 7).map((item) => {
                                return (
                                    <SwiperSlide
                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                        <div
                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                            <div className="card--content card--image mb-3"
                                                 style={{backgroundImage: `url(${item.thumbnail})`}}></div>
                                            <div
                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                <p className="m-0 align-items-center">{item.brand}</p>
                                                <p style={{textAlign: "center"}} className="m-0 align-items-center">{item.title}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}

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
                            <h3 className="text-white mt-5 headlines">Последние скидки</h3>
                        </div>
                    </div>
                </div>
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <p className="text-white mt-5 headlines">Косметика</p>
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
                                {items.slice(15, 20).map((item) => {
                                    return (
                                <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{background: `linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${item.thumbnail})`, backgroundSize: 'cover',
                                                 backgroundPosition: 'center',
                                                 backgroundRepeat: "no-repeat"}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0 align-items-center">{item.brand}</p>
                                            <p style={{textAlign: "center"}} className="m-0 align-items-center">{item.title}</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                        )})}

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
                    <p className="text-white mt-5 headlines">Парфюмерия</p>
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
                                {items.slice(10, 15).map((item) => {
                                    return (
                                        <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                            <div
                                                className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                <div className="card--content card--image mb-3"
                                                     style={{background: `linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)), url(${item.thumbnail})`, backgroundSize: 'cover',
                                                         backgroundPosition: 'center',
                                                         backgroundRepeat: "no-repeat"}}>
                                                </div>
                                                <div
                                                    className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                    <p className="m-0 align-items-center">{item.brand}</p>
                                                    <p style={{textAlign: "center"}} className="m-0 align-items-center">{item.title}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )})}
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