import React from 'react';

const Payment = () => {
    return (
        <>
        <div className="pop-up popup--payment">
            <div className="message text-center">
                <div className="popup--closed pop-up_btn d-flex justify-content-center align-items-center" data-pop-up-status='0'
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
                        allowFullScreen="true" style={{width: '100%', height: '200px', position: 'relative'}}>
                </iframe>
            </div>
            <input type="button" className="white--btn mt-5" value="Оплатить"/>
                <p className="mt-5"><a href="#" className="text-white">Как осуществить оплату при заказе за город ?</a></p>
        </div>
        </div>
        </>
    );
};

export default Payment;