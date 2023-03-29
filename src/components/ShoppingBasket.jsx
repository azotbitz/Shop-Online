import React from 'react';

const ShoppingBasket = () => {
    return (
        <>
            <div className="wrapper--basket" id="shopping--basket">
                <div className="shop--basket pop-up">
                    <div className="basket--content">
                        <div className="d-flex justify-content-between align-items-center mb-5">
                    <span className="basket--title">
                        Ваша корзина
                    </span>
                            <div
                                className="popup--closed pointer pop-up_btn d-flex justify-content-center align-items-center"
                                data-pop-up-status='0' data-pop-up-name="wrapper--basket">
                                <div className="cross">
                                    <div className="md"></div>
                                </div>
                            </div>
                        </div>
                        <div className="shopping--basket">

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
                                <span className="ms-4">В случае доставки товара не надлежащего качества
                            сообщите нам и мы его заменим</span>
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
                                <input type="button" value="Перейти к оформлению"
                                       className="text-center white--btn mt-2 ps-2 pe-2"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingBasket;