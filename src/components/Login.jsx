import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/userSelector";
import {loginInitiate} from "../redux/reducers/userReducer/userReducer";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        if(user){
            document.querySelector('#popup--login').style.display = 'none';
        }
    },[user])

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        if(!email || ! password) {
            return;
        }
        dispatch(loginInitiate(email, password))
    }



    return (
        <>
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
        </>
    );
};

export default Login;