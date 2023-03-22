import React from 'react';

const ProductCard = () => {
    return (
        <>
            <div className="popup--product-wrapper pop-up" id="popup--product">
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
                                         className="card--product mb-4 h-500px p-0 object-fit-cover"/>
                                </div>
                                <div className="row grid--3">
                                    <img src="../assets/imgs/product--image-2.jpg" alt="#"
                                         className="card--product me-2 w-100 h-150px object-fit-cover p-0 object-fit-cover"/>
                                    <img src="../assets/imgs/product--image-3.jpg" alt="#"
                                         className="card--product ms-2 me-2 w-100 h-150px object-fit-cover p-0 object-fit-cover"/>
                                    <img src="../assets/imgs/product--image-4.jpg" alt="#"
                                         className="card--product ms-2 w-100 h-150px object-fit-cover p-0 object-fit-cover"/>
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
                                <div className="d-flex justify-content-start align-items-center mt-4">
                                    <div className="love--wrapper circle-40 me-3">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15" fill="#DE33FE"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                fill="#DE33FE" />
                                        </svg>
                                    </div>
                                    <span>+160 баллов </span>
                                </div>
                                <div className="price--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/coin--yellow.svg" alt="price" className="circle-40 me-3"/>
                                    <span>+160 баллов </span>
                                </div>
                                <div className="car--wrapper d-flex  align-items-center mt-4">
                                    <img src="../assets/imgs/car.svg" alt="price" className="circle-40 me-3"/>
                                    <span>+160 баллов </span>
                                </div>
                                <div className="guarantee--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/guarantee.svg" alt="price" className="circle-40 me-3"/>
                                    <span>+160 баллов </span>
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
                                <div className="row grid--3">
                                    <div className="card--product card--product-square--150">

                                    </div>
                                    <div className="card--product card--product-square--150">

                                    </div>
                                    <div className="card--product card--product-square--150">

                                    </div>
                                </div>
                                <div
                                    className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end mt-5">
                                    <div className="card--interface pb-5">
                                        <div className="d-flex w-100 justify-content-between ">
                                            <div className="quantity--product mt-2">
                                                <button
                                                    className="minus d-flex justify-content-center align-items-center">-</button>
                                                <button className="num">0</button>
                                                <button className="plus d-flex justify-content-center align-items-center">+</button>
                                            </div>
                                            <a href="./ordering.html" className="ms-3 w-75 white--btn text-decoration-none">Купить
                                                сейчас</a>
                                        </div>
                                        <input type="button" value="Добавить в корзину" className="mt-3 w-100 white--btn"/>
                                    </div>
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
        </>
    );
};

export default ProductCard;