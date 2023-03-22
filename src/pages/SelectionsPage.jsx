import React from 'react';
import ProductCard from "../components/ProductCard";

const SelectionsPage = () => {
    return (
        <>
            <div className="selections--page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-white pt-5">8 марта</h2>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card--product--wrapper">

                            <div data-product-id="0"
                                 className="card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                <div className="id--product">1</div>
                                <div className="card--content card--image mb-3"
                                     style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                    <div className="love--wrapper">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path className="love"
                                                  d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                  fill="#DE33FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="card--title d-flex justify-content-center align-items-center flex-column">
                                    <p className="w-100 text-start m-0 card--title-name">Кустовая роза 1</p>
                                    <div className="w-100 d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-4">
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
                                                <img src="../assets/imgs/shopping-basket.svg" alt="shopping-basket"
                                                     className="circle shopping-basket"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                <img src="../assets/imgs/share.svg" alt="share" className="circle"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                     className="circle calendar"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center w-100 ps-4">
                                            <p className="m-0"><span className="percent--value">54</span><span
                                                className="percent me-1">%</span></p>
                                            <span className="old--price">5340₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-product-id="0"
                                 className="card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                <div className="id--product">2</div>
                                <div className="card--content card--image mb-3"
                                     style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                    <div className="love--wrapper">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path className="love"
                                                  d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                  fill="#DE33FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="card--title d-flex justify-content-center align-items-center flex-column">
                                    <p className="w-100 text-start m-0 card--title-name">Кустовая роза 2</p>
                                    <div className="w-100 d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-4">
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
                                                <img src="../assets/imgs/shopping-basket.svg" alt="shopping-basket"
                                                     className="circle shopping-basket"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                <img src="../assets/imgs/share.svg" alt="share" className="circle"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                     className="circle calendar"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center w-100 ps-4">
                                            <p className="m-0"><span className="percent--value">14</span><span
                                                className="percent me-1">%</span></p>
                                            <span className="old--price">5340₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-product-id="0"
                                 className="card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                <div className="id--product">3</div>
                                <div className="card--content card--image mb-3"
                                     style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                    <div className="love--wrapper">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path className="love"
                                                  d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                  fill="#DE33FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="card--title d-flex justify-content-center align-items-center flex-column">
                                    <p className="w-100 text-start m-0 card--title-name">Кустовая роза 3</p>
                                    <div className="w-100 d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-4">
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
                                                <img src="../assets/imgs/shopping-basket.svg" alt="shopping-basket"
                                                     className="circle shopping-basket"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                <img src="../assets/imgs/share.svg" alt="share" className="circle"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                     className="circle calendar"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center w-100 ps-4">
                                            <p className="m-0"><span className="percent--value">24</span><span
                                                className="percent me-1">%</span></p>
                                            <span className="old--price">5340₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div data-product-id="0"
                                 className="card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                <div className="id--product">4</div>
                                <div className="card--content card--image mb-3"
                                     style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                    <div className="love--wrapper">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path className="love"
                                                  d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                  fill="#DE33FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="card--title d-flex justify-content-center align-items-center flex-column">
                                    <p className="w-100 text-start m-0 card--title-name">Кустовая роза 4</p>
                                    <div className="w-100 d-flex justify-content-between">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-4">
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
                                                <img src="../assets/imgs/shopping-basket.svg" alt="shopping-basket"
                                                     className="circle shopping-basket"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                <img src="../assets/imgs/share.svg" alt="share" className="circle"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                     className="circle calendar"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center w-100 ps-4">
                                            <p className="m-0"><span className="percent--value">100</span><span
                                                className="percent me-1">%</span></p>
                                            <span className="old--price">5340₽</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
                </div>
                <div className="row mt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <a href="#" className="text-white more pop-up_btn" data-pop-up-name="popup--payment"
                           data-pop-up-status="1">Показать ещё</a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default SelectionsPage;