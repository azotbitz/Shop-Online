import React, {useEffect} from 'react';
import SwiperCore, { Navigation, Pagination} from "swiper";
import {Swiper, SwiperSlide} from 'swiper/react';


import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination]);


const SelectionsPage = () => {

    useEffect(() => {
        const productAll = document.querySelectorAll(".card--product");
        let popupNewPrice = document.querySelector('#new--price');
        let popupOldPrice = document.querySelector('#old--price');
        let popupTitle = document.querySelector('#popup--title');
        const subject = document.querySelector(`#popup--product`);
        const basket = document.querySelector("#shopping--basket");
        let basketArray = [];
        productAll.forEach(card => {
            card.addEventListener("click", (event) => {
                if (event.target.classList.contains('shopping-basket') || event.target.classList.contains('shopping-basket-wrapper')) {
                    const product = event.target.closest('.shopping-basket-wrapper').querySelector(".shopping-basket")
                    addProductToBasket(product)
                } else if (event.target.classList.contains('love--wrapper') || event.target.classList.contains('love') || event.target.classList.contains('love--svg')) {
                    const love = event.target.closest('.love--wrapper').querySelector(".love")
                    toggleFavorite(love)
                } else if (event.target.classList.contains('share')) {
                    console.log('share');
                } else if (event.target.classList.contains('calendar')) {
                    console.log('calendar');
                } else {
                    document.querySelector('.popup--product-wrapper').style.display = "flex"
                    popupTitle.innerText = event.target.closest('.card--product').querySelector(".card--title-name").innerText;
                    let newPrice = event.target.closest('.card--product').querySelector(".card--price").innerText;
                    let percent = event.target.closest('.card--product').querySelector(".percent--value").innerText;
                    popupNewPrice.innerText = Math.floor(newPrice - newPrice / 100 * percent)
                    popupOldPrice.innerText = event.target.closest('.card--product').querySelector(".old--price").innerText
                    getCounterProduct()
                }
            })
        })


        if (subject != null) {
            if (subject.addEventListener) {
                if ("onwheel" in document) {
                    // IE9+, FF17+, Ch31+
                    subject.addEventListener("wheel", onWheel);
                } else if ("onmousewheel" in document) {
                    // устаревший вариант события
                    subject.addEventListener("mousewheel", onWheel);
                } else {
                    // Firefox < 17
                    subject.addEventListener("MozMousePixelScroll", onWheel);
                }
            } else {
                // IE8-
                subject.attachEvent("onmousewheel", onWheel);
            }

            function vhToPixels(vh) {
                return Math.round(window.innerHeight / (100 / vh));
            }

            let side = 0;
            function onWheel(e) {
                e = e || window.event;
                let delta = e.deltaY || e.detail || e.wheelDelta;
                let info = document.getElementById("delta");
                if (delta > 0 &&
                    side > (subject.clientHeight - vhToPixels(100) - 40) * -1) {
                    side -= 80;}
                if (delta < 0 && side < 0) {
                    side += 80;}
                subject.style.top = side + "px";
                e.preventDefault ? e.preventDefault() : (e.returnValue = false);
            }
        }

        let pop__up_btn = document.querySelectorAll(".pop-up_btn");
        pop__up_btn.forEach((e) => {
            e.addEventListener("click", () => {
                const pop__up = document.querySelector(`.${e.dataset.popUpName}`);
                let status = Number(e.dataset.popUpStatus);
                let result = status
                    ? (pop__up.style.display = "flex")
                    : (pop__up.style.display = "none");

                // document.querySelector(".num").innerText = 0;
            });
        })

        const addProductToBasket = function (candidate) {
            const card = candidate.closest(".card--product");
            let option = {
                card__name: card.querySelector(".card--title-name").innerText,
                card__price: card.querySelector(".card--price").innerText,
                card__bonus: card.querySelector(".card--bonus").innerText,
                product__id: card.querySelector(".id--product").innerText,
            };

            if (basketArray.indexOf(Number(option.product__id)) == -1) {
                basketArray.push(Number(option.product__id));
                basket.innerHTML += `
    <div className="basket--product card--product">
    <div className="id--product">${option.product__id}</div>
                          <div className="product--image">
                              <img src="../assets/imgs/product--image-2.jpg" alt="#">
                          </div>
                          <div className="product--info d-flex flex-column">
                              <span className="product--name">${option.card__name}</span>
                              <span className="product--price">${option.card__price}</span>
                          </div>
                          <div className="product--interface d-flex justify-content-end">
                              <div className="w-100 d-flex justify-content-end">
                                  <button>
                                      <img src="../assets/imgs/love--light.svg" alt="love">
                                  </button>
                                  <button onClick="removeProductToBasket(${option.product__id})">
                                      <img src="../assets/imgs/trash.svg" alt="trash">
                                  </button>
                              </div>
                              <div className="quantity--product mt-2">
                                  <button className="minus">-</button>
                                  <button className="num">0</button>
                                  <button className="plus">+</button>
                              </div>
                          </div>
                      </div>
    `;
            }
        };

        const removeProductToBasket = function (product__id) {
            const products = basket.querySelectorAll(".id--product");

            products.forEach((e) => {
                if (e.innerText == product__id) {
                    e.parentElement.remove();
                }
            });
            const index = basketArray.indexOf(product__id);
            if (index > -1) {
                basketArray.splice(index, 1);
            }
        };
    }, [])



    const toggleFavorite = function (candidate) {
        candidate.classNameList.contains("love--active")
            ? candidate.classNameList.remove("love--active")
            : candidate.classNameList.add("love--active");
    };

    const getCounterProduct = function () {
        const quantity__product = document.querySelectorAll(".quantity--product");
        quantity__product.forEach((e) => {
            e.addEventListener("click", () => {
                console.log(1);
            });
            const minus = e.querySelector(".minus");
            const plus = e.querySelector(".plus");
            const num = e.querySelector(".num");

            minus.addEventListener("click", () => {
                if (Number(num.innerText) > 0) {
                    num.innerText = Number(num.innerText) - 1;
                }
            });
            plus.addEventListener("click", () => {
                num.innerText = Number(num.innerText) + 1;
            });
        });
    };



    return (
        <>
            {/*product*/}
            <div className="popup--product-wrapper pop-up" id="popup--product" style={{display: 'none'}}>
                <div className="container">
                    <div className="popup--product">
                        <div className="popup--closed pointer pop-up_btn d-flex justify-content-center align-items-center"
                             data-pop-up-status='0' data-pop-up-name="popup--product-wrapper">
                            <div className="cross">
                                <div className="md"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pb-3">
                                <div className="row">
                                    <img src="../assets/imgs/product--image.jpg" alt="#"
                                         className="card--product mb-4 p-0 object-fit-cover main--image--card--product"/>
                                </div>
                                <div className="row min--images">
                                    <img src="../assets/imgs/product--image-2.jpg" alt="#"
                                         className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                        <img src="../assets/imgs/product--image-3.jpg" alt="#"
                                             className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                            <img src="../assets/imgs/product--image-4.jpg" alt="#"
                                                 className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-c-5">
                                <p id="popup--title" className="popup--title">
                                    Кустовая Роза (белая)
                                </p>
                                <span className="text-silver">Цена</span>
                                <div className="pop--price mt-2">
                                    <span id="new--price" className="new--price">2990$</span>
                                    <span id="old--price" className="old--price">2990$</span>
                                </div>

                                <div className="select--scale mt-4">
                                    <span className="text-silver">Выбор размера</span>
                                    <div className="scale mt-4">
                                        <div className="scale--s circle-40">S</div>
                                        <div className="scale--m circle-40">M</div>
                                        <div className="scale--l circle-40">L</div>
                                        <div className="scale--xl circle-40">XL</div>
                                        <div className="scale--xxl circle-40">XXL</div>
                                        <div className="scale--wow circle-40">Wow</div>
                                    </div>
                                </div>

                            {/*     <div className="to--whom--colors mt-4">*/}
                            {/*    <span className="text-silver">Выберите оттенок</span>*/}
                            {/*    <div className="d-flex mt-4">*/}
                            {/*        <div className="color color--pig me-3"></div>*/}
                            {/*        <div className="color color--purple me-3"></div>*/}
                            {/*        <div className="color color--white me-3"></div>*/}
                            {/*        <div className="color color--yellow me-3"></div>*/}
                            {/*        <div className="color color--green me-3"></div>*/}
                            {/*        <div className="color color--blue"></div>*/}
                            {/*    </div>*/}
                            {/*    <div className="d-flex mt-2">*/}
                            {/*        <div className="color color--orange me-3"></div>*/}
                            {/*        <div className="color color--purple-2 me-3"></div>*/}
                            {/*        <div className="color color--skiey me-3"></div>*/}
                            {/*        <div className="color color--silver me-3"></div>*/}
                            {/*        <div className="color color--black me-3"></div>*/}
                            {/*        <div className="color color--beige"></div>*/}
                            {/*    </div>*/}
                            {/*</div> */}
                                <div className="d-flex justify-content-start align-items-center mt-4">
                                    <div className="love--wrapper card--product--icon me-3">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15" fill="#DE33FE"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                fill="#DE33FE" />
                                        </svg>
                                    </div>
                                    <span className="card--product-icon--text">Добавить в избранное</span>
                                </div>
                                <div className="price--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/coin--yellow.svg" alt="price" className="me-3 card--product--icon"/>
                                        <span className="card--product-icon--text">+160 баллов</span>
                                </div>
                                <div className="car--wrapper d-flex  align-items-center mt-4">
                                    <img src="../assets/imgs/car.svg" alt="price" className="me-3 card--product--icon"/>
                                        <span className="card--product-icon--text">Бесплатная доставка по городу</span>
                                </div>
                                <div className="guarantee--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/guarantee.svg" alt="price" className="me-3 card--product--icon"/>
                            <span className="card--product-icon--text">В случае доставки товара ненадлежащего качества 
                                сообщите нам и мы его заменим</span>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-5">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                <div className="row mb-5">
                                    <div className="col-12">
                                        <span>Идеально к букету</span>
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-between">
                                    <div className="card--product card--product-square">

                                    </div>
                                    <div className="card--product card--product-square">

                                    </div>
                                    <div className="card--product card--product-square">

                                    </div>
                                </div>
                                <div
                                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end mt-5">
                                    <div className="card--interface pb-5">
                                        <div className="d-flex w-100 justify-content-between ">
                                            <div className="quantity--product">
                                                <button
                                                    className="minus d-flex justify-content-center align-items-center">-</button>
                                                <button className="num">0</button>
                                                <button className="plus d-flex justify-content-center align-items-center">+</button>
                                            </div>
                                            <a href="/ordering" className="ms-3 w-75 white--btn text-decoration-none">Купить
                                                сейчас</a>
                                        </div>
                                        <input type="button" value="Добавить в корзину" className="mt-3 w-100 white--btn"/>
                                    </div>
                                </div>
                                <div className="recommendations position-relative pb-2">
                                    <Swiper
                                        direction={"horizontal"}
                                        loop={true}
                                        grabCursor={true}
                                        centeredSlidesBounds={true}
                                        breakpoints={{
                                            320: {
                                                slidesPerView: 1,
                                                slidesPerColumn: 1,
                                                spaceBetween: 20,
                                            },
                                            420: {
                                                centeredSlides: true,
                                                slidesPerView: 1.5,
                                                spaceBetween: 20,
                                            },

                                            480: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            768: {
                                                slidesPerView: 2.5,
                                                centeredSlides: true,
                                                spaceBetween: 30,
                                            },
                                            992: {
                                                slidesPerView: 2,
                                                spaceBetween: 30,
                                            },
                                            1200: {
                                                slidesPerView: 2.2,
                                                centeredSlides: true,
                                                spaceBetween: 20,
                                            },
                                            1400: {
                                                slidesPerView: 2,
                                                spaceBetween: 50,
                                            },
                                            }
                                        }
                                        pagination={{
                                            el: ".recommendations--slider .swiper-pagination"
                                        }}
                                        className="swiper recommendations--slider p-1 pb-4">
                                        <div className="swiper-wrapper pt-3 pb-3">
                                            <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                                <div data-product-id="0"
                                                     className="w-100 card--product-min card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                                    <div className="id--product">3</div>
                                                    <div className="card--content w-100 card--image mb-3"
                                                         style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                                        <div className="love--wrapper">
                                                            <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path className="love"
                                                                      d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                                      fill="#DE33FE" />
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
                                                                    className="d-flex justify-content-center align-items-center flex-column me-12 shopping-basket-wrapper">
                                                                    <img src="../assets/imgs/shopping-basket.svg"
                                                                         alt="shopping-basket" className="circle shopping-basket"/>
                                                                </div>
                                                                <div
                                                                    className="d-flex justify-content-center align-items-center flex-column me-1 share">
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
                                                                className="d-flex justify-content-around align-items-center w-100 ps-2">
                                                                <p className="m-0"><span className="percent--value">24</span><span
                                                                    className="percent me-1">%</span></p>
                                                                <span className="old--price">5340₽</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                                <div data-product-id="0"
                                                     className="w-100 card--product-min card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                                    <div className="id--product">3</div>
                                                    <div className="card--content w-100 card--image mb-3"
                                                         style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                                        <div className="love--wrapper">
                                                            <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path className="love"
                                                                      d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                                      fill="#DE33FE" />
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
                                                                    className="d-flex justify-content-center align-items-center flex-column me-1 shopping-basket-wrapper">
                                                                    <img src="../assets/imgs/shopping-basket.svg"
                                                                         alt="shopping-basket" className="circle shopping-basket"/>
                                                                </div>
                                                                <div
                                                                    className="d-flex justify-content-center align-items-center flex-column me-1 share">
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
                                                                className="d-flex justify-content-around align-items-center w-100 ps-2">
                                                                <p className="m-0"><span className="percent--value">24</span><span
                                                                    className="percent me-1">%</span></p>
                                                                <span className="old--price">5340₽</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                            <SwiperSlide className="swiper-slide d-flex justify-content-center align-items-center">
                                                <div data-product-id="0"
                                                     className="w-100 card--product-min card--product d-flex justify-content-center align-items-center flex-column p-3 pointer">
                                                    <div className="id--product">3</div>
                                                    <div className="card--content w-100 card--image mb-3"
                                                         style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}>
                                                        <div className="love--wrapper">
                                                            <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path className="love"
                                                                      d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                                      fill="#DE33FE" />
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
                                                                    className="d-flex justify-content-center align-items-center flex-column me-1 shopping-basket-wrapper">
                                                                    <img src="../assets/imgs/shopping-basket.svg"
                                                                         alt="shopping-basket" className="circle shopping-basket"/>
                                                                </div>
                                                                <div
                                                                    className="d-flex justify-content-center align-items-center flex-column me-1 share">
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
                                                                className="d-flex justify-content-around align-items-center w-100 ps-2">
                                                                <p className="m-0"><span className="percent--value">24</span><span
                                                                    className="percent me-1">%</span></p>
                                                                <span className="old--price">5340₽</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        </div>
                                        <div className="swiper-pagination"></div>
                                    </Swiper>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-c-5">
                                <p>Календарь скидок</p>
                                <button
                                    className="transparent--btn border--white ps-3 pe-3 pt-2 pb-2 d-flex justify-content-between align-items-center">
                                    <p className="me-4 m-0">
                                        <img src="../assets/imgs/calendar--white.svg" alt="calendar--icon"/>
                                            <span className="ms-2">Календарь скидок</span>
                                    </p>
                                    <img src="../assets/imgs/arrow.svg" alt="arrow--icon" className="calendar--arrow"/>
                                </button><br/>
                                {/*<div className="calendar"></div>*/}
                                <span className="text-silver">Получи выгоду</span>
                                <p>При оплате заявки заблаговременно Вам доступна скидка, наша платформа рассчитает её
                                    самостоятельно для всех товаров , выберите желаемую дату исполнения.</p>
                                <ul>
                                    <li>От 7 дней - 5%</li>
                                    <li>От 14 дней – 10%</li>
                                    <li>От 21 дня - 15%</li>
                                </ul>
                                <div>
                                    <span>Описание</span>
                                    <p>Игрушка осьминог перевертыш стала популярна благодаря TikTok - ежедневно на Ozon ее
                                        покупают более 1000 раз. Ты тоже хочешь быть в тренде и ищешь популярный подарок на день
                                        рождение или просто так? </p>
                                    <p>Тогда осьминоги вывернушки как раз
                                        для тебя! Двусторонний осьминог заставит улыбнуться мальчика, девочку
                                        и даже взрослого человека!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*wrapper*/}
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