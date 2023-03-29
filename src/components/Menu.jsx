import React from 'react';

const Menu = () => {
    return (
        <>
            <div className='wrapper--menu' id="main--menu" style={{display: "none"}}>
                <div className="open--main-menu">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between mt-5">
                                    <div className="d-flex justify-content-center align-items-center">
                                        <a href="#" className="header--btn phone">
                                            <img src="./assets/imgs/phone.svg" alt="phone" className="header--btn-image"/>
                                        </a>
                                    </div>
                                    <div className="country--value">
                                        <button className="lang--on">RUS</button>/
                                        <button className="lang--off">USD</button>/
                                        <button className="lang--off">TANG</button>
                                    </div>
                                    <div className="logotype d-flex justify-content-center align-items-center">
                                        <img src="./assets/imgs/logotype-low.svg" alt="logotype" className="logotype--img"/>
                                    </div>
                                    <div className="lang">
                                        <button className="lang--off">ENG</button>
                                        /
                                        <button className="lang--on">РУС</button>
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center">
                                        <span className="me-4">Выход</span>
                                        <a href="#" className="header--btn phone pop-up_btn" data-pop-up-status='0' data-pop-up-name="wrapper--menu">
                                            <div className="cross">
                                                <div className="md"></div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="d-flex theme">
                                        <a href="#" className="header--btn dark">
                                            <img src="./assets/imgs/dark-th-btn.svg" alt="viber"
                                                 className="header--btn-image"/></a>
                                        <a href="#" className="header--btn light">
                                            <img src="./assets/imgs/light-th-btn.svg" alt="viber"
                                                 className="header--btn-image"/></a>
                                    </div>
                                    <div className="d-flex">
                                        <a href="#" className="header--btn instagram">
                                            <img src="./assets/imgs/instagram.svg" alt="viber"
                                                 className="header--btn-image"/></a>
                                        <a href="#" className="header--btn whatsapp">
                                            <img src="./assets/imgs/whatsapp.svg" alt="viber"
                                                 className="header--btn-image"/></a>
                                        <a href="#" className="header--btn vk">
                                            <img src="./assets/imgs/vk.svg" alt="viber" className="header--btn-image"/></a>
                                        <a href="#" className="header--btn telegram">
                                            <img src="./assets/imgs/telegram.svg" alt="viber"
                                                 className="header--btn-image"/></a>
                                        <a href="#" className="header--btn viber">
                                            <img src="./assets/imgs/viber.svg" alt="viber" className="header--btn-image"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12">
                                <div className="open-nav-btns">
                                    <div className="row-btn d-flex justify-content-between mt-4">
                                        <a href="#" className="header--btn constructor"><span>Подборки</span></a>
                                        <a href="#" className="header--btn florist"><span>Подборки</span></a>
                                        <a href="#" className="header--btn perfect"><span>Подборки</span></a>
                                    </div>
                                    <div className="row-btn d-flex justify-content-between mt-4">
                                        <a href="#" className="header--btn selections"><span>Подборки</span></a>
                                        <a href="#" className="header--btn gratitude"><span>Быстрый заказ</span></a>
                                        <a href="#" className="header--btn news"><span>Быстрый заказ</span></a>
                                    </div>
                                    <div className="row-btn d-flex justify-content-between mt-4">
                                        <a href="#" className="header--btn booking"><span>Быстрый заказ</span></a>
                                        <a href="#" className="header--btn check"><span>Проверить заказ</span></a>
                                        <a href="#" className="header--btn subscription"><span>Цветочная подписка</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Menu;