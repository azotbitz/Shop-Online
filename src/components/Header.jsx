import React, {useState} from 'react';
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import CustomLink from "./CustomLink";

const Header = (props) => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let mainMenu = document.querySelector("#main--menu");
    const handleAuth = () => {
    //     if(user) {
    //         dispatch(logoutInitiate())
    //     }
    //     setTimeout(() => {
    //         navigate('/login')
    //     }, 1000);
     };
    const navToLogin = () => {
        navigate('/login')
    }
    // const { window } = props;
    // const [menuOpen, setMenuOpen] = useState(true);

    const openMainMenu = () => {
        mainMenu.style.display = "flex";
    }
    const closeMainMenu = () => {
        mainMenu.style.display = "none";
    }

    return (
        <>
             <div className="open--main-menu" id="main--menu" style={{display: "none"}}>
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
                                    <button className="lang--on">RUS</button>
                                    /
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
                                <div className="d-flex justify-content-between align-items-center"
                                     onClick={closeMainMenu}>
                                    <span className="me-4">Выход</span>
                                    <a href="#" className="header--btn phone">
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
                                    </div>
                                    <a href="/selections"
                                       className="header--btn selection"><span>Подборки</span></a>
                                    <a href="#" className="header--btn bals">1210</a>
                                    <a href="#" className="header--btn notifications">У</a>
                                    <a href="#" className="header--btn basket pop-up_btn" data-pop-up-status='1'
                                       data-pop-up-name="wrapper--basket">К</a>
                                    <a href="#" className="header--btn phone">
                                        <img src="./assets/imgs/phone.svg" alt="phone" className="header--btn-image"/>
                                    </a>
                                    <a href="#" className="header--btn search">
                                        <img src="./assets/imgs/search.svg" alt="search" className="header--btn-image"/>
                                    </a>
                                    <a href="#" className="header--btn burger" onClick={openMainMenu}>
                                        <span className="burger--text">Меню</span>
                                        <div className="burger--lines">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </a>
                                    <a href="#" className="header--btn account">А</a>
                                </div>
                                <div className="nav--row pt-2">
                                    <a href="#" className="header--btn constructor"><span>Виртуальный флорист</span></a>
                                    <a href="#" className="header--btn florist"><span>Cоздать букет</span></a>
                                    <a href="#" className="header--btn booking">Срочный заказ</a>
                                    <a href="#" className="header--btn car">
                                        <img src="./assets/imgs/speedcar-icon.svg" alt="speedcar"/>
                                    </a>

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
                                <a href="#" className="header--btn burger" onClick={openMainMenu}>
                                    <span className="burger--text">М</span>
                                    <div className="burger--lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a>
                                <a href="#" className="header--btn account">А</a>
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