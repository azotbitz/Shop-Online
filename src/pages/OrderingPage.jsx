import React from 'react';
import {useNavigate, Link} from "react-router-dom";

const OrderingPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="row pt-5">
                    <div className="col-12">
                        <Link to={'..'} onClick={(e) => {
                            e.preventDefault();
                            navigate(-1)}
                        }>
                        <a className="text-white text-decoration-none back" href="#">
                            &larr;
                        </a>
                        </Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 mt-4">
                        <h2>Оформление заказа</h2>
                    </div>
                </div>
                <div className="row pt-5 justify-content-between">
                    <div
                        className="col-xxl-7 col-xl-7 col-lg-6 col-md-6 col-sm-12 col-12 order-2 order-xxl-1 order-xl-1 order-lg-1 order-md-1 order-sm-2">
                        <p className="text-silver mt-2">
                            Выберите, кто будет получать заказ ?
                        </p>
                        <div className="tab--interface">
                            <button className="white--btn d-flex flex-column justify-content-center align-items-center"
                                    id="tab-i1--state-1">
                                <span>Я</span>
                                <span>Заказ будет доставлен вам лично</span>
                            </button>
                            <button
                                className="transparent--btn  d-flex flex-column justify-content-center align-items-center"
                                id="tab-i1--state-2">
                                <span>Получатель</span>
                                <span>Заказ будет доставлен другому
                                    человеку</span>
                            </button>
                        </div>
                        <div className="tab--content" id="tab--content-1">
                            <form action="">
                                <div id="tab--content-state-1" className="tab--content-state tab--content-state-active">
                                    <div className="content--grid">
                                        <div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Ваше имя*</label>
                                                <input type="text" placeholder="Имя"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Город доставки</label>
                                                <input type="text" placeholder="Москва"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Улица</label>
                                                <input type="text" placeholder="Название улицы"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Подъезд</label>
                                                <input type="text" placeholder="Подъезд"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Квартира</label>
                                                <input type="text" placeholder="Кв" className="input--transparent mt-2"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Ваша номер телефона*</label>
                                                <input type="text" placeholder="+7" className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Дата доставки*</label>
                                                <input type="text" placeholder="01.07.2021"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Номер дома</label>
                                                <input type="text" placeholder="№ Дома"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Этаж</label>
                                                <input type="text" placeholder="Этаж"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <form action="#" id="form">
                                <div id="tab--content-state-2" className="tab--content-state">
                                    <div className="content--grid">
                                        <div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Ваше имя*</label>
                                                <input name="name" type="text" placeholder="Имя"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Имя получителя*</label>
                                                <input name="name-2" type="text" placeholder="Москва"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Город доставки*</label>
                                                <input name="city" type="text" placeholder="Название улицы"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Ваша номер телефона*</label>
                                                <input name="phone" type="text" placeholder="+7"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Телефон получателя*</label>
                                                <input name="phone-2" type="text" placeholder="01.07.2021"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                            <div className="d-flex flex-column mt-4">
                                                <label htmlFor="#">Дата доставки*</label>
                                                <input name="date" type="text" placeholder="№ Дома"
                                                       className="input--transparent mt-2"/>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="mt-5">Уточнить адрес у получателя*</p><br/>
                                    <div>
                                        <label className="custom-radio pointer me-4" id="address-on">
                                            <input type="radio" name="clarification"/>
                                                <span>Да</span>
                                        </label>
                                        <label className="custom-radio pointer" id="address-off">
                                            <input type="radio" name="clarification" checked="checked"/>
                                                <span>Нет</span>
                                        </label>
                                    </div>
                                    <div className="content--grid mt-2">
                                        <div>
                                            <div
                                                className="address--section d-flex flex-column mt-4 section--input-disabled">
                                                <label htmlFor="#">Улица</label>
                                                <input name="street" type="text" placeholder="Название улицы"
                                                       className="input--transparent mt-2" disabled="true"/>
                                            </div>
                                            <div
                                                className="address--section d-flex flex-column mt-4 section--input-disabled">
                                                <label htmlFor="#">Подьезд</label>
                                                <input name="entrance" type="text" placeholder="Подъезд"
                                                       className="input--transparent mt-2" disabled="true"/>
                                            </div>
                                            <div
                                                className="address--section d-flex flex-column mt-4 section--input-disabled">
                                                <label htmlFor="#">Квартира </label>
                                                <input name="apartment" type="text" placeholder="Кв"
                                                       className="input--transparent mt-2" disabled="true"/>
                                            </div>
                                        </div>
                                        <div>
                                            <div
                                                className="address--section d-flex flex-column mt-4 section--input-disabled">
                                                <label htmlFor="#">Номер дома</label>
                                                <input name="house" type="text" placeholder="№ Дома"
                                                       className="input--transparent mt-2" disabled="true"/>
                                            </div>

                                            <div
                                                className="address--section d-flex flex-column mt-4 section--input-disabled">
                                                <label htmlFor="#">Этаж</label>
                                                <input name="floor" type="text" placeholder="Этаж"
                                                       className="input--transparent mt-2" disabled="true"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <p className="mt-5">Выберите время доставки *</p>
                            <div className="content--grid" id="time--delivery">
                                <div>
                                    <div className="content--grid">
                                        <div className="time--group">
                                            <input id="time1" name="asd" type="radio" value="10:00-12:00"
                                                   className="d-none"/>
                                                <label htmlFor="time1"
                                                       className="input--transparent w-100 mt-2 text-center pointer">10:00-12:00</label>
                                        </div>
                                        <div className="time--group">
                                            <input id="time2" name="asd" type="radio" value="13:00-15:00"
                                                   className="d-none"/>
                                                <label htmlFor="time2"
                                                       className="input--transparent w-100 mt-2 text-center pointer">13:00-15:00</label>
                                        </div>
                                    </div>
                                    <div className="content--grid">
                                        <div className="time--group">
                                            <input id="time3" name="asd" type="radio" value="15:00-18:00"
                                                   className="d-none"/>
                                                <label htmlFor="time3"
                                                       className="input--transparent w-100 mt-2 text-center pointer">15:00-18:00</label>
                                        </div>
                                        <div className="time--group">
                                            <input id="time4" name="asd" type="radio" value="18:00-20:00"
                                                   className="d-none"/>
                                                <label htmlFor="time4"
                                                       className="input--transparent w-100 mt-2 text-center pointer">18:00-20:00</label>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column mt-4 ">

                                        <div className="d-flex flex-column mt-4">

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="mt-2">Доставка вне режима работы ?</a>
                            <p className="mt-4">Звонок получателю перед отправкой*</p>
                            <div>
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="call"/>
                                        <span>Да</span>
                                </label>
                                <label className="custom-radio pointer">
                                    <input type="radio" name="call" checked="checked"/>
                                        <span>Нет</span>
                                </label>
                            </div>
                            <p className="mt-4">Доставка за город*</p>
                            <div>
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="out-of-town"/>
                                        <span>Да</span>
                                </label>
                                <label className="custom-radio pointer">
                                    <input type="radio" name="out-of-town" checked="checked"/>
                                        <span>Нет</span>
                                </label>
                            </div>
                            <p className="mt-4">Получить фото букета на whatsapp</p>
                            <div>
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="whatsapp"/>
                                        <span>Да</span>
                                </label>
                                <label className="custom-radio pointer">
                                    <input type="radio" name="whatsapp" checked="checked"/>
                                        <span>Нет</span>
                                </label>
                            </div>
                            <p className="mt-4">Большая открытка 250руб <span>(до 2500 символов)</span></p>
                            <div>
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="postcard"/>
                                        <span>Да</span>
                                </label>
                                <label className="custom-radio pointer">
                                    <input type="radio" name="postcard" checked="checked"/>
                                        <span>Нет</span>
                                </label>
                            </div>
                            <div className="content--grid mt-4">
                                <button id="post--card-on"
                                        className="white--btn d-flex flex-column justify-content-center align-items-center"
                                        id="tab-i1--state-1">
                                    <span>Открытка бесплатно</span>

                                </button>
                                <button id="post--card-off"
                                        className="transparent--btn  d-flex flex-column justify-content-center align-items-center"
                                        id="tab-i1--state-2">
                                    <span>Не нужна открытка</span>
                                </button>
                            </div>
                            <textarea id="post--card-area" contentEditable="true"
                                      placeholder="Текст к открытке не более 400 символов"
                                      className="input--transparent input--transparent-area mt-4" name="postcard--area"
                                      id="postcard--aria-1" maxLength='400'></textarea>
                            <p className="mt-4">Добавить комментарий</p>
                            <textarea contentEditable="true" placeholder="Ваш комметарий"
                                      className="input--transparent input--transparent-area mt-4" name="comment--area"
                                      id="comment--aria-1" maxLength='1000'></textarea>
                            <p className="mt-4">Выберите способ оплаты</p>
                            <div className="d-flex flex-column mt-4">
                                <input type="button" value="Банковская карта"
                                       className="input--transparent input--transparent-card ps-5 text-start text-silver mt-2 w-50"/>
                            </div>
                            <div className="d-flex mt-4">
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="offer"/>
                                    <span>Нажимая кнопку заказать вы соглашаетесь
                                        с условиями договора оферты</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div
                        className="col-xxl-4 col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12 order-1 order-xxl-2 order-xl-2 order-lg-2 order-md-2 order-sm-1">
                        <div className="shopping--basket">
                            <div className="basket--product card--product">
                                <div className="product--image">
                                    <img src="../assets/imgs/product--image-2.jpg" alt="#"/>
                                </div>
                                <div className="product--info d-flex flex-column">
                                    <span className="product--name">Кустовая роза белая</span>
                                    <span className="product--price">1999</span>
                                </div>
                                <div className="product--interface d-flex justify-content-end">
                                    <div className="w-100 d-flex justify-content-end">
                                        <button>
                                            <img src="../assets/imgs/love--light.svg" alt="love"/>
                                        </button>
                                        <button>
                                            <img src="../assets/imgs/trash.svg" alt="trash"/>
                                        </button>
                                    </div>
                                    <div className="quantity--product mt-2">
                                        <button
                                            className="minus d-flex justify-content-center align-items-center">-
                                        </button>
                                        <button className="num">0</button>
                                        <button className="plus d-flex justify-content-center align-items-center">+
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab--content-state">
                            <div className="content--grid">
                                <div>
                                    <div className="d-flex flex-column mt-4">
                                        <input name="promo-code" type="text" placeholder="Промокод"
                                               className="text-center input--transparent mt-2 ps-2 pe-2"/>
                                    </div>
                                </div>
                                <div>
                                    <div className="d-flex flex-column mt-4">
                                        <input type="button" value="Применить"
                                               className="text-center white--btn mt-2 ps-2 pe-2"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4 d-flex">
                                <div className="d-flex align-items-center w-75">
                                    <p className="m-0">Оплатить баллами</p>
                                </div>
                                <div className="d-flex align-items-center justify-content-end w-25">
                                    <div className="bonus--info">
                                        <span>166</span>
                                        <img src="../assets/imgs/coin.svg" alt="coin"/>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label className="custom-radio pointer me-4">
                                    <input type="radio" name="bonus-pay"/>
                                        <span>Да</span>
                                </label>
                                <label className="custom-radio pointer">
                                    <input type="radio" name="bonus-pay" checked="checked"/>
                                        <span>Нет</span>
                                </label>
                            </div>
                            <div className="list--icon mt-4">
                                <div className="d-flex align-items-center">
                                    <div className="icon--purple circle">
                                        <img src="../assets/imgs/speedcar--icon.svg" alt="speedcar"/>
                                    </div>
                                    <span className="ms-4">Бесплатная доставка по городу</span>
                                </div>
                            </div>
                            <div className="list--icon mt-4">
                                <div className="d-flex align-items-center">
                                    <div className="icon--green circle">
                                        <img src="../assets/imgs/guarantee.svg" alt="guarantee"/>
                                    </div>
                                    <span className="ms-4">Бесплатная доставка по городу</span>
                                </div>
                            </div>
                            <p className="mt-4">Детали цены</p>
                            <div className="result">
                                <div className="result--bonus d-flex justify-content-between w-100">
                                    <span>Будет начисленно</span>
                                    <div>
                                        <span id="result--bonus">166</span>
                                        <img src="../assets/imgs/coin.svg" alt="coin"/>
                                    </div>
                                </div>
                                <div className="sum d-flex justify-content-between w-100">
                                    <span>Сумма без учета баллов</span>
                                    <span>12 300₽</span>
                                </div>
                                <div className="result--coin d-flex justify-content-between w-100">
                                    <span>Итого:</span>
                                    <span>12 622₽</span>
                                </div>
                            </div>
                            <div>
                                <div className="d-flex flex-column mt-4">
                                    <input type="button" value="Заказать"
                                           className="text-center white--btn mt-2 ps-2 pe-2"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderingPage;