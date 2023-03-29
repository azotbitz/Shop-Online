import React, {useEffect, useState} from 'react';
import ShoppingBasket from "./ShoppingBasket";
import Message from "./Message";
import Payment from "./Payment";
import Menu from "./Menu";
import Registration from "./Registration";
import Login from "./Login";

const Header = () => {

    useEffect(() => {
        let pop__up_btn = document.querySelectorAll(".pop-up_btn");
        pop__up_btn.forEach((e) => {
            e.addEventListener("click", () => {
                const pop__up = document.querySelector(`.${e.dataset.popUpName}`);
                let status = Number(e.dataset.popUpStatus);
                let result = status
                    ? (pop__up.style.display = "flex")
                    : (pop__up.style.display = "none");
            });
        })

        let subjects = document.querySelectorAll(`.pop-up`);
        subjects.forEach(subject => {
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
        })


    })

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
        //
        // popup__city.style.top = city.bottom + 10 + "px";
        // popup__city.style.left = city.left + "px";

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

    const handleSubmitLogout = () => {
        //     if(user) {
        //         dispatch(logoutInitiate())
        //     }
        //     setTimeout(() => {
        //         navigate('/login')
        //     }, 1000);
    };

    return (
        <>
            {/*menu*/}
            <Menu/>
            {/*login*/}
            <Login/>
            {/*registration*/}
            <Registration/>
            {/*basket*/}
            <ShoppingBasket/>
            {/*payment*/}
            <Payment/>
            {/*message*/}
            <Message/>
            {/*header*/}
            <div id="header">
                <div className="container">
                    <div className="desktop-nav">
                        <div className="w-100 d-flex">
                            <div className="logotype d-flex justify-content-center align-items-center">
                                <a href="/"><img src="./assets/imgs/logotype.svg" alt="logotype"
                                                 className="logotype--img"/></a>
                            </div>
                            <div className="nav">
                                <div className="nav--row">
                                    <div className="select--city header--btn city pointer">
                                        <a
                                            className="select text-white text-decoration-none d-flex justify-content-center align-items-center">
                                            <span>Выбрать город</span>
                                        </a>
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
                                    </div>
                                    <a href="/selections"
                                       className="header--btn selection"><span>Подборки</span></a>
                                    <a href="#" className="header--btn bals">1210</a>
                                    <a href="#" className="header--btn notifications pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--message">У</a>
                                    <a href="#" className="header--btn basket pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--basket">К</a>
                                    <a href="#" className="header--btn phone">
                                        <img src="./assets/imgs/phone.svg" alt="phone" className="header--btn-image"/>
                                    </a>
                                    <a href="/search" className="header--btn search">
                                        <img src="./assets/imgs/search.svg" alt="search" className="header--btn-image"/>
                                    </a>
                                    <a href="#" className="header--btn burger pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--menu">
                                        <span className="burger--text">Меню</span>
                                        <div className="burger--lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#" className="header--btn account pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--login">А</a>
                                </div>
                                <div className="nav--row pt-2">
                                    <a href="/toWhom" className="header--btn constructor"><span>Виртуальный флорист</span></a>
                                    <a href="#" className="header--btn florist"><span>Cоздать букет</span></a>
                                    <a href="#" className="header--btn booking">Срочный заказ</a>
                                    <a href="#" className="header--btn car pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--payment">
                                        <img src="./assets/imgs/speedcar-icon.svg" alt="speedcar"/>
                                    </a>

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


                    <div className="mobile-nav">
                        <div className="w-100 d-flex">
                            <div className="logotype d-flex justify-content-center align-items-center">
                                <img src="../assets/imgs/logotype.svg" alt="logotype" className="logotype--img"/>
                            </div>
                            <div className="nav">
                                <a href="#" className="header--btn city"><span>М</span></a>
                                <a href="#" className="header--btn selection"><span>П</span></a>
                                <a href="#" className="header--btn bals">1210</a>
                                <a href="#" className="header--btn notifications">У</a>
                                <a href="#" className="header--btn basket pop-up_btn" data-pop-up-status='1'
                                   data-pop-up-name="wrapper--basket">К</a>
                                <a href="#" className="header--btn phone">
                                    <img src="../assets/imgs/phone.svg" alt="phone" className="header--btn-image"/>
                                </a>
                                <a href="#" className="header--btn search">
                                    <img src="../assets/imgs/search.svg" alt="search" className="header--btn-image"/>
                                </a>
                                <a href="#" className="header--btn burger pop-up_btn" data-pop-up-status='1'
                                   data-pop-up-name="wrapper--menu">
                                    <span className="burger--text">М</span>
                                    <div className="burger--lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                <a href="#" className="header--btn account pop-up_btn" data-pop-up-status='1'
                                   data-pop-up-name="wrapper--account">А</a>
                                <a href="#" className="header--btn constructor"><span>К</span></a>
                                <a href="#" className="header--btn florist"><span>Ф</span></a>
                                <a href="#" className="header--btn booking">С</a>
                                <a href="#" className="header--btn car">
                                    <img src="./assets/imgs/speedcar-icon.svg" alt="speedcar"/>
                                </a>

                                <a href="#" className="header--btn instagram">
                                    <img src="../assets/imgs/instagram.svg" alt="viber" className="header--btn-image"/></a>
                                <a href="#" className="header--btn whatsapp">
                                    <img src="../assets/imgs/whatsapp.svg" alt="viber"
                                         className="header--btn-image"/></a>
                                <a href="#" className="header--btn vk">
                                    <img src="../assets/imgs/vk.svg" alt="viber" className="header--btn-image"/></a>
                                <a href="#" className="header--btn telegram">
                                    <img src="../assets/imgs/telegram.svg" alt="viber"
                                         className="header--btn-image"/></a>
                                <a href="#" className="header--btn viber">
                                    <img src="../assets/imgs/viber.svg" alt="viber" className="header--btn-image"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;