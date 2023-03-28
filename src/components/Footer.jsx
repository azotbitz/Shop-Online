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
                            <ul className="ul--reset w-100 footer--ul-top">
                                <p>Категории</p>
                                <li><a href="#">Конструктор букета</a></li>
                                <li><a href="#">Букет на вкус флориста</a></li>
                                <li><a href="#">Срочный заказ</a></li>
                                <li><a href="#">Идеально к букету</a></li>
                                <li><a href="#">Подборки</a></li>
                                <li><a href="#">Монобукеты</a></li>
                                <li><a href="#">Оплата доставки за город</a></li>
                            </ul>
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
                                <img src="../assets/imgs/logotype-blue.svg" alt="logotype" className="w-75"/>
                            </div>
                        </div>

                        <div className="footer--copyright  d-flex justify-content-between align-items-center">
                            <span>Сopyright © 2021 Beehapy</span>
                            <ul className="d-flex justify-content-between align-items-center ul--reset footer--nav">
                                <li className="me-3"><a href="#" className="text-white">Terms</a></li>
                                <li className="me-3"><a href="#" className="text-white">Privacy</a></li>
                                <li><a href="#" className="text-white">Cookies</a></li>
                            </ul>

                            <div className="footer--networks d-flex justify-content-between align-items-center">
                                <a href="https://www.instagram.com/beehappy24.ru/"
                                   className="header--btn instagram">
                                    <img src="../assets/imgs/instagram.svg" alt="instagram"
                                         className="header--btn-image"/></a>
                                <a href="https://wa.me/79891970713?text=Мне%20нужен%20букет%20index"
                                   className="header--btn whatsapp">
                                    <img src="../assets/imgs/whatsapp.svg" alt="whatsapp"
                                         className="header--btn-image"/></a>
                                <a href="https://vk.com/id596874506" className="header--btn vk">
                                    <img src="../assets/imgs/vk.svg" alt="vk" className="header--btn-image"/></a>
                                <a href="https://tlgg.ru/beehappy24ru" className="header--btn telegram">
                                    <img src="../assets/imgs/telegram.svg" alt="telegram"
                                         className="header--btn-image"/></a>
                                <a href="viber://add?number=79891970713" className="header--btn viber">
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
                            <input type="radio" value="Абакан" name="city"/>
                                <span>Абакан</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Азов" name="city"/>
                                <span>Азов</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Александров" name="city"/>
                                <span>Александров</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Алексин" name="city"/>
                                <span>Алексин</span>
                        </label>
                    </li>
                    <li className="mt-2">
                        <label className="custom-radio pointer me-4">
                            <input type="radio" value="Альметьевск" name="city"/>
                                <span>Альметьевск</span>
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