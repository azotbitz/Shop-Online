import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {getItemsSelector} from "../redux/reducers/itemsReducer/itemsSelector"
import {loader, error} from "../redux/reducers/itemsReducer/itemsSelector";
import {loadItems} from "../redux/reducers/itemsReducer/itemsReducer";
import Search from "../components/Search";
import Filter from "../components/Filter";

const SearchPage = () => {
    const items = useSelector(getItemsSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);

    useEffect(() => {
        dispatch(loadItems())}, []
    )

        if(loading) {
            return (
                <div><h2>Loading</h2></div>
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

     items.map((item) => {
         console.log(item.brand)
     })


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-white">Поиск</h2>
                    </div>
                </div>
                <Search items={items}/>
                {/*<Filter items={items}/>*/}
            </div>
            {/*<div className="wrapper">*/}
            {/*    <ul className="card-grid">*/}
            {/*        {data.map((item) => (*/}
            {/*            <li key={item.alpha3Code}>*/}
            {/*                <article className="card">*/}
            {/*                    <div className="card-image">*/}
            {/*                        <img src={item.flag.large} alt={item.name} />*/}
            {/*                    </div>*/}
            {/*                    <div className="card-content">*/}
            {/*                        <h2 className="card-name">{item.name}</h2>*/}
            {/*                    </div>*/}
            {/*                </article>*/}
            {/*            </li>*/}
            {/*            ))}*/}
            {/*    </ul>*/}
            {/*</div>*/}
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-white mt-5">Конструктор букета</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="container-fluid container-md container-lg container-xl container-xxl">
                    <div className="wrapper--bouquet--designer-slider">
                        <div className="swiper bouquet--designer-slider">
                            <div className="swiper-wrapper pt-4">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card card--product d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column">
                                            <span>Кустовая роза</span>
                                            <span>2990₽</span>
                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="swiper-pagination"></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-white mt-5">Подборки</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="container-fluid container-md container-lg container-xl container-xxl">
                    <div className="wrapper--selections--product">
                        <div className="swiper selections--product pb-5 ">
                            <div className="swiper-wrapper pt-3  pb-5">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-white mt-5">Монобукеты</p>
                    </div>
                </div>
            </div>
            <div className="slider">
                <div className="container-fluid container-md container-lg container-xl container-xxl">
                    <div className="wrapper--selections--product">
                        <div className="swiper selections--product pb-5 ">
                            <div className="swiper-wrapper pt-3  pb-5">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div data-product-id="0"
                                         className="w-100 card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                        <div className="id--product">3</div>
                                        <div className="card--content w-100 card--image mb-3"
                                             style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                            <div className="love--wrapper">
                                                <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                     fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path className="love"
                                                          d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                          fill="#DE33FE"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div
                                            className="w-100 card--title d-flex justify-content-center align-items-center flex-column">
                                            <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                            <div className="w-100 d-flex justify-content-between">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center me-4">
                                                        <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                            <span className="card--bonus">78</span>
                                                    </div>
                                                    <div className="d-flex justify-content-center align-items-center">
                                                        <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                            <span>78</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="card--price">5340</span>
                                                    <span className="card--currency">₽</span>
                                                </div>
                                            </div>
                                            <div className="w-100 d-flex justify-content-between mt-4">
                                                <div className="d-flex">
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                        <img src="../assets/imgs/shopping-basket.svg"
                                                             alt="shopping-basket" className="circle shopping-basket"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                        <img src="../assets/imgs/share.svg" alt="share"
                                                             className="circle"/>
                                                    </div>
                                                    <div
                                                        className="d-flex justify-content-center align-items-center flex-column">
                                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                             className="circle calendar"/>
                                                    </div>
                                                </div>
                                                <div
                                                    className="d-flex justify-content-around align-items-center w-100 ps-4">
                                                    <p className="m-0"><span className="percent--value">24</span><span
                                                        className="percent me-1">%</span></p>
                                                    <span className="old--price">5340₽</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <p className="text-white mt-5 headlines">Группа подборок 2</p>
                    </div>
                </div>
            </div>
            <div className="slider slider-selections slider-selection-2">
                <div className="container-fluid container-md container-lg container-xl container-xxl position-relative">
                    <div>
                        <div className="swiper selections selections-2 d-flex align-items-center">
                            <div className="swiper-wrapper d-flex">
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-1.png")'}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                {/*    !-- <div*/}
                                {/*    className="slider--card card--product d-flex justify-content-center align-items-center flex-column card--product-100_150 p-3">*/}
                                {/*    123*/}
                                {/*</div> -->*/}
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-flower-3.png")'}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-flower-1.png")'}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/box-nuts-1.png")'}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide d-flex justify-content-center align-items-center">
                                    <div
                                        className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                        <div className="card--content card--image mb-3"
                                             style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3)),url("./assets/imgs/basket-1.png")'}}>
                                        </div>
                                        <div
                                            className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                            <p className="m-0">Кустовая роза</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination"></div>
                        </div>

                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SearchPage;