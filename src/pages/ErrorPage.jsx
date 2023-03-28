import React from 'react';

const ErrorPage = () => {
    return (
        <>
            <div className="container">
                <div className="row mb-5 mt-5">
                    <div className="col-12 d-flex justify-content-center">
                        <h2 className="text-white">Ошибка 404</h2>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5 mb-5">
                    <div className="col-6 d-flex justify-content-center">
                        <p className="text-white text-center">Кажеться что -то пошло не так! Страница, которую вы
                            запрашиваете, не существует. Возможно она
                            устарела, была удалена, или был введен неверный адрес в адресную строке.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center mt-5">
                    <div className="col-12 col-sm-12 col-md-6 d-flex justify-content-center">
                        <a href='/'>
                        <input type="button" value="Перейти на главную" className="white--btn"/>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorPage;