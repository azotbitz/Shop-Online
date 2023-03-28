import React, {useEffect, useState} from 'react';
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useDispatch, useSelector} from "react-redux";
import {loginInitiate, registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {loadingSelector, errorSelector} from '../redux/reducers/userReducer/userSelector'

const Header = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [date, setDate] = useState('');
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loadingSelector);
    const err = useSelector(errorSelector);

    useEffect(() => {
            if(!user) {
                return;
            }
            document.querySelector('#popup--login').style.display = 'flex';
        }
        , [user])


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

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        if(!email || ! password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if(password !== passwordRepeat){
            alert('Password Invalid')
            return;
        }
        dispatch(registerInitiate(email, password, date))
        document.querySelector('#popup--registration').style.display = 'none'
    }

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

    function goBack() {
        console.log(window.history);
        // window.history.back();
    }

    const handleAuth = () => {
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
            {/*login*/}
            <div className="popup--login pop-up wrapper--login" id="popup--login" style={{display: "none"}}>
                <form className="form--login d-flex flex-column" action="#" onSubmit={handleSubmitLogin}>
                    <div className="popup--closed pop-up_btn d-flex justify-content-center align-items-center pointer"
                         data-pop-up-status='0'
                         data-pop-up-name="wrapper--login">
                        <div className="cross">
                            <div className="md"></div>
                        </div>
                    </div>
                    <h4 style={{textAlign: 'center'}}>Войти</h4>
                    <div className="d-flex flex-column">
                        <label htmlFor="#">Ваш email</label>
                        <input type='email' placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="input--transparent input--transparent-email mt-2"/>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label htmlFor="#">Ваша пароль</label>
                        <input type="password" placeholder="Ваш пароль" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="input--transparent input--transparent-password mt-2"/>
                    </div>
                    <button type={"submit"} className="white--btn mt-4">Войти</button>
                    <div className="d-flex justify-content-center mt-4">
                        <span>или</span>
                    </div>
                    <button className="mt-4 input--transparent input--transparent-google">
                        <img src="" alt=""/>
                        Войти с помощью аккаунта Google
                    </button>
                    <button className="mt-4 input--transparent input--transparent-vk">
                        <img src="" alt=""/>
                        Войти с помощью аккаунта VK
                    </button>
                    <a className="mt-4 text-white">Забыли пароль?</a>
                    <p className="mt-4 text-white">Нет учётной записи ?
                        <a href="#" className="text-white pop-up_btn"
                           data-pop-up-status='1'
                           data-pop-up-name="popup--registration">Зарегистрироваться
                        </a>
                    </p>
                </form>
            </div>
            {/*registration*/}
            <div className="popup--registration pop-up" id="popup--registration" style={{display: "none"}}>
                <form className="form--registration d-flex flex-column" onSubmit={handleSubmitRegister} action="#">
                    <div className="popup--closed pop-up_btn d-flex justify-content-center align-items-center pointer"
                         data-pop-up-status='0'
                         data-pop-up-name="popup--registration">
                        <div className="cross">
                            <div className="md"></div>
                        </div>
                    </div>
                    <h4 style={{textAlign: 'center'}}>Зарегистрироваться</h4>
                    <div className="d-flex flex-column">
                        <label htmlFor="#">Ваш email</label>
                        <input type="email" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)}
                               className="input--transparent input--transparent-email mt-2"/>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label htmlFor="#">Ваша пароль</label>
                        <input type="password" placeholder="*********" value={password} onChange={(e) => setPassword(e.target.value)}
                               className="input--transparent input--transparent-password mt-2"/>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label htmlFor="#">Повторите пароль</label>
                        <input type="password" placeholder="*********" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)}
                               className="input--transparent input--transparent-password mt-2"/>
                    </div>
                    <div className="d-flex flex-column mt-4">
                        <label htmlFor="#">Ваша дата рождения</label>
                        <input type="date" placeholder="Дата рождения" value={date} onChange={(e) => setDate(e.target.value)}
                               className="input--transparent input--transparent-date mt-2"/>
                    </div>
                    <button type={"submit"} className="white--btn mt-4">Зарегистрироваться</button>
                    <div className="d-flex justify-content-center mt-4">
                        <span>или</span>
                    </div>
                    <button className="mt-4 input--transparent input--transparent-google">
                        <img src="" alt=""/>
                        Зарегистрироваться с помощью аккаунта Google
                    </button>
                    <button className="mt-4 input--transparent input--transparent-vk">
                        <img src="" alt=""/>
                        Зарегистрироваться с помощью аккаунта VK
                    </button>
                </form>
            </div>
            {/*basket*/}
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
            {/*payment*/}
            <div className='wrapper--payment' id='popup--payment' style={{display: 'none'}}>
            <div className="pop-up popup--payment">
                <div className="message text-center">
                    <div className="popup--closed pop-up_btn d-flex justify-content-center pointer align-items-center" data-pop-up-status='0'
                        data-pop-up-name="popup--payment">
                    <div className="cross">
                        <div className="md"></div>
                    </div>
                </div>
                <h4 className="pb-4">Спасибо за заказ!</h4>
                <span className="mt-3">ДОСТАВКА ПО ГОРОДУ БЕСПЛАТНАЯ</span>
                <p className="mt-3">Спасибо за заказ!</p>
                <h4 className="mt-3">№ 144 - 234 -4567</h4>
                <div><input type="text" className="input--transparent w-100 mt-3 mb-5" placeholder="Введите кол-во километров"/>
                </div>
                <div style={{position: 'relative', overflow: 'hidden'}}>
                    <a href="https://yandex.ru/maps/239/sochi/?utm_medium=mapframe&utm_source=maps"
                       style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '0px'}}>Сочи</a>
                    <a href="https://yandex.ru/maps/239/sochi/?ll=39.723095%2C43.585475&utm_medium=mapframe&utm_source=maps&z=12"
                       style={{color: '#eee', fontSize: '12px', position: 'absolute', top: '14px'}}>Яндекс Карты — транспорт, навигация,
                        поиск мест</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=39.723095%2C43.585475&z=12" frameBorder="1"
                            allowFullScreen={true} style={{width: '100%', height: '200px', position: 'relative'}}>
                    </iframe>
                </div>
                <input type="button" className="white--btn mt-5" value="Оплатить"/>
                    <p className="mt-5"><a href="#" className="text-white">Как осуществить оплату при заказе за город ?</a></p>
            </div>
        </div>
            </div>
            {/*message*/}
            <div className='wrapper--message' id="popup--message" style={{display: "none"}}>
            <div className="pop-up popup--message">
                <div className="message text-center">
                    <h4 className="pb-4">Уважаемые покупатели </h4>
                    <span>ДОСТАВКА ПО ГОРОДУ БЕСПЛАТНАЯ</span>
                    <p>А ТАК ЖЕ Мы с радостью поможем осуществить доставкуза пределы любого города , стоимость услуги
                        30₽/1км
                    </p>
                    <p>Если вы не знаете точного расстояния свяжитесь с менеджером 88005057233</p>
                    <p>Введите верный киллометраж - система автоматически посчитает стоимость доставки и направит Вас
                        настраницу
                        оплаты.</p>
                    <p className="pb-4">Так же вы можете оплатить повторную доставку в этом разделе, подробнее
                        88005057233</p>
                    <a className="popup--closed pop-up_btn d-flex justify-content-center pointer align-items-center" data-pop-up-status='0'
                       data-pop-up-name="wrapper--message">
                        <div className="cross">
                        <div className="md">
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            </div>
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