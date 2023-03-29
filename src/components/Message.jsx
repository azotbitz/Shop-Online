import React from 'react';

const Message = () => {
    return (
        <>
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
        </>
    );
};

export default Message;