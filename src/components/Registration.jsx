import React, {useEffect, useState} from 'react';
import {registerInitiate} from "../redux/reducers/userReducer/userReducer";
import {useDispatch, useSelector} from "react-redux";
import {userSelector} from "../redux/reducers/userReducer/userSelector";

const Registration = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const user = useSelector(userSelector);
    const dispatch = useDispatch();

    useEffect(() => {
            if(!user) {
                return;
            }
            document.querySelector('#popup--login').style.display = 'flex';
        }
        , [user])

    const handleSubmitRegister = (e) => {
        e.preventDefault();
        if(password !== passwordRepeat){
            alert('Password Invalid')
            return;
        }
        const photoURL = '../public/assets/imgs/user.png'
        dispatch(registerInitiate(email, password, photoURL))
        document.querySelector('#popup--registration').style.display = 'none'
    }

    return (
        <>
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
                        <input type="date" placeholder="Дата рождения" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
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
        </>
    );
};

export default Registration;