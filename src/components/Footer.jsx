import React from 'react';


const Footer = () => {
    return (
        <>
            <div id='footer'>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer">
                        <div className="footer--content d-flex justify-content-between align-items-center">
                            <ul className="ul--reset w-100 footer--ul-bottom">
                                <p>Информация</p>
                                <li><a href="#">Популярные вопросы</a></li>
                                <li><a href="#">Новости и скидки</a></li>
                                <li><a href="#">Оплата</a></li>
                                <li><a href="/about">О нас</a></li>
                                <li><a href="/offer">Договор оферты</a></li>
                                <li><a href="/policy">Политика конфеденциальности</a></li>
                                <li><a href="/contact">Контакты</a></li>
                            </ul>
                            <div className="footer--logotype d-flex justify-content-end align-items-center">
                                <img style={{borderRadius: '706px', width: '45%'}} src="../assets/imgs/logotype-blue.jpg" alt="logotype"/>
                            </div>
                        </div>

                        <div className="footer--copyright  d-flex justify-content-between align-items-center">
                            <span>Сopyright © 2023 Online Shop</span>
                            <ul className="d-flex justify-content-between align-items-center ul--reset footer--nav">
                                <li className="me-2"><a href="#" className="text-white text-decoration-none">Love</a></li>
                                <li className="me-2"><a href="#" className="text-white text-decoration-none">Your</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Job</a></li>
                            </ul>

                            <div className="footer--networks d-flex justify-content-between align-items-center">
                                <a href="#"
                                   className="header--btn instagram">
                                    <img src="../assets/imgs/instagram.svg" alt="instagram"
                                         className="header--btn-image"/></a>
                                <a href="#"
                                   className="header--btn whatsapp">
                                    <img src="../assets/imgs/whatsapp.svg" alt="whatsapp"
                                         className="header--btn-image"/></a>
                                <a href="#" className="header--btn vk">
                                    <img src="../assets/imgs/vk.svg" alt="vk" className="header--btn-image"/></a>
                                <a href="#" className="header--btn telegram">
                                    <img src="../assets/imgs/telegram.svg" alt="telegram"
                                         className="header--btn-image"/></a>
                                <a href="#" className="header--btn viber">
                                    <img src="../assets/imgs/viber.svg" alt="viber" className="header--btn-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

            <div className="popup--select-city p-3 pt-4">
                <ul className="ul--reset">
                    <li>
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Москва" name="city"/>
                                <span>Москва</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Санкт-Петербург" name="city"/>
                                <span>Санкт-Петербург</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Казань" name="city"/>
                                <span>Казань</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Ростов-на-Дону" name="city"/>
                                <span>Ростов-на-Дону</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Сочи" name="city"/>
                                <span>Сочи</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Анапа" name="city"/>
                                <span>Анапа</span>
                        </label>
                    </li>
                </ul>
            </div>
            </div>
        </>
    )
};

export default Footer;