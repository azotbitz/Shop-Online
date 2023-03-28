import React, {useEffect, useState} from 'react';
import Calendar from "react-calendar";

import 'react-calendar/dist/Calendar.css';


const WelcomePage = () => {

 const [date, setDate] = useState(new Date())

    useEffect(() => {

        // const calendar = new Calendar(document.querySelector("#date-container"));
        const calendarPopUp = document.querySelector("#calendar--popup");
        const calendarPopUpOpen = document.querySelector('#calendar--popup-open');
        const content = document.querySelector("#content");



        calendarPopUp.addEventListener("click", (event) => {
            closeCalendar()
        })
        let closeCalendar = function () {
            content.style.opacity = 1;
            calendarPopUp.style.display = "none";
        };

        calendarPopUpOpen.addEventListener("click", (event) => {
            openCalendar()
        })

        let openCalendar = function () {
            calendarPopUp.style.display = "flex";
            content.style.opacity = 0;
        };
    });

    useEffect(() => {
        const citySelectArray = document.querySelectorAll(".select--city");

        citySelectArray.forEach((e) => {
            e.querySelector(".select span").innerText =
                localStorage.getItem("destination-city");
            e.addEventListener("click", () => {
                let rect = e.getBoundingClientRect();
                let option = {
                    top: rect.top,
                    right: rect.right,
                    bottom: rect.bottom,
                    left: rect.left,
                };
                selectCity(e, option);
            });
        });


    })

    if (localStorage.getItem("destination-city") == null) {
        localStorage.setItem("destination-city", "Выбрать город");
    }

    document.querySelectorAll('input[name="city"]').forEach((e) => {
        if (e.value == localStorage.getItem("destination-city")) {
            e.checked = "true";
        }
    });

    const selectCity = function (selected, city) {
        const popup__city = document.querySelector(".popup--select-city");

        popup__city.style.top = city.bottom + 10 + "px";
        popup__city.style.left = city.left + "px";

        popup__city.classList.contains("select-city--active")
            ? popup__city.classList.remove("select-city--active")
            : popup__city.classList.add("select-city--active");

        document.querySelectorAll('input[name="city"]').forEach((e) => {
            e.addEventListener("click", () => {
                localStorage.setItem("destination-city", e.value);
                selected.querySelector(".select span").innerText =
                    localStorage.getItem("destination-city");
            });
        });
    };






    return (
        <>
            <div className="wrapper">
                <div id="calendar--popup" className="justify-content-center align-items-center flex-column">
                    <div className="closed">
                        <span></span>
                        <span></span>
                    </div>
                    <span className="calendar--title mb-3">Календарь скидок</span>
                        <div id='date-container'>
                        <Calendar value={date} onChange={setDate}/>
                        </div>

                    <p>Получите выгоду</p>
                    <p>При оплате заявки заблаговременно Вам доступна скидка, наша платформа рассчитает её
                        самостоятельно для
                        всех товаров , выберите желаемую дату исполнения.</p>
                    <p>От 7 дней - 5% <br/>
                        От 14 дней – 10% <br/>
                        От 21 дня - 15%</p>
                </div>
                <div id="content" className="welcome d-flex align-items-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="logotype d-flex justify-content-center align-items-center">
                                    <img src="../assets/imgs/logotype-low.svg" alt="logotype-low"
                                         className="logotype--img"/>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center mt-4">
                            <div className="col-4 text-center">
                                <p className="about-briefly">Удобный Мобильный сервис
                                    доставки сюрпризов и подарков</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center">
                                <span className="site-name">BeEhappy</span>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center">
                            <div
                                className="col-xxl-8 col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12 mt-4 d-flex justify-content-center align-items-center select--list">

                                <div className="select--city welcome--btn">
                                    <a className="select border--bottom-purple d-flex justify-content-center align-items-center">
                                        <span>Выбрать город</span>
                                        <img src="../assets/imgs/search.svg" alt="search"/>
                                    </a>
                                </div>



                                {/*calendar*/}
                                <div className="welcome--btn">
                                    <a className="select border--bottom-purple d-flex justify-content-center align-items-center" id='calendar--popup-open'>
                                        <img src="../assets/imgs/calendar.svg" alt="calendar"
                                             className="order-xxl-1 order-xl-1 order-lg-1 order-md-2 order-sm-2 order-2"/>
                                <span className="order-xxl-2 order-xl-2 order-lg-2 order-md-2 order-sm-1 order-1">Календарь
                                    скидок</span>
                                    </a>
                                </div>
                            </div>
                        </div>


                        <div className="row mt-5">
                            <div className="col-12 text-center">
                                <h3>О нас</h3>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-center align-items-center mt-3">
                            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12 text-center">
                                <p className="about">Это быстрая и бесплатная доставка
                                    цветов и подарков в Твоём городе
                                </p>
                                <p>Немного о нас
                                    Мы работаем с 2015 года
                                    у Нас богатый опыт в своём деле</p>
                                <p>Все Наши цветы это высококачественный
                                    импорт который транспортируется и хранится самыми современными способами</p>

                                <p>Быстрая транспортировка позволяет получать
                                    самые свежие местные и экзотические Цветы</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*select city*/}
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
        </>
    );
}

export default WelcomePage;