import React  from 'react';
import {useNavigate, Link} from "react-router-dom";

const ContactPage = () => {
    const navigate = useNavigate()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Link to={'..'} onClick={(e) => {
                        e.preventDefault();
                        navigate(-1)}
                        }>
                        <a className="text-white" href="#">
                            Назад
                        </a>
                        </Link>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <h2 className="text-white">Контакты</h2>
                    </div>
                </div>
                <div className="row">
                    <p className="mt-4">Адрес: 350002 г. Краснодар ул. Фабричная д.21 <br/>
                        Электронная почта: INFO@BEEHAPPY24.RU <br/>
                        Телефоны: 8 (800) 505 7233</p>
                    <p className="mt-4">Общество с ограниченной ответственностью "БииХеппи" <br/>
                        ИНН 2310216860/ ОГРН 1192375072780 <br/>
                        Юридическмй адрес: 350002 г. Краснодар ул. Фабричная д.21<br/>
                        Телефоны: 8 (800) 505 7233</p>
                </div>
            </div>
        </>
    );
};

export default ContactPage;