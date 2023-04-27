import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {addPurchase} from "../redux/reducers/purchaseReducer/purchaseReducer";



const Product = (props) => {
    let {item} = props;
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch();


    const handleAddToShoppingBasket = (e) => {
        e.preventDefault();
        if(quantity < 1 ){
            alert('Количество товара не может быть меньше 1!')
            return;
        }
        dispatch(addPurchase(item.id, quantity, item.thumbnail))
        document.querySelector('.popup--product-wrapper-' + item.id).style.display = 'none'
    }


    return (
        <>
            <div className={'popup--product-wrapper popup--product-wrapper-' + item.id + ' pop-up'} id='popup--product' style={{display: 'none'}}>
                <div className="container">
                    <div className="popup--product">
                        <div className="popup--closed pointer pop-up_btn_0 d-flex justify-content-center align-items-center"
                             data-pop-up-status='0' data-pop-up-name={"popup--product-wrapper-" + item.id}>
                            <div className="cross">
                                <div className="md"></div>
                            </div>
                        </div>
                        <div  className="row">
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 pb-3">
                                <div className="row">
                                    <img src={item.thumbnail} alt="#"
                                         className="card--product mb-4 p-0 object-fit-fill main--image--card--product"/>
                                </div>
                                <div className="row min--images">

                                    <img src={item.images[1]} alt="#"
                                         className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                    <img src={item.images[2]} alt="#"
                                         className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                    <img src={item.images[3]} alt="#"
                                         className="card--product object-fit-cover object-fit-cover min--image--card--product"/>
                                </div>
                            </div>
                            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-c-5">
                                <p className="popup--title">
                                    {item.title}
                                </p>
                                <span className="text-silver">Цена</span>
                                <div className="pop--price mt-2">
                                    <span id="new--price" className="new--price">{item.price}$</span>
                                    <span id="old--price" className="old--price">{item.price + Math.round(item.discountPercentage)}$</span>
                                </div>
                                <div className="d-flex justify-content-start align-items-center mt-4">
                                    <div className="love--wrapper card--product--icon me-3">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15" fill="#DE33FE"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                fill="#DE33FE" />
                                        </svg>
                                    </div>
                                    <span className="card--product-icon--text">Добавить в избранное</span>
                                </div>
                                <div className="price--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/coin--yellow.svg" alt="price" className="me-3 card--product--icon"/>
                                    <span className="card--product-icon--text">+160 баллов</span>
                                </div>
                                <div className="car--wrapper d-flex  align-items-center mt-4">
                                    <img src="../assets/imgs/car.svg" alt="price" className="me-3 card--product--icon"/>
                                    <span className="card--product-icon--text">Бесплатная доставка по городу</span>
                                </div>
                                <div className="guarantee--wrapper d-flex align-items-center mt-4">
                                    <img src="../assets/imgs/guarantee.svg" alt="price" className="me-3 card--product--icon"/>
                                    <span className="card--product-icon--text">В случае доставки товара ненадлежащего качества
                                сообщите нам и мы его заменим</span>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                                    <div
                                        className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 d-flex justify-content-end mt-5">
                                        <div className="card--interface pb-5">
                                            <div className="d-flex w-100 justify-content-between ">
                                                <div className="quantity--product">
                                                    <button style={{backgroundColor: "inherit"}} onClick={() => setQuantity(prev => prev - 1)}
                                                        className="d-flex justify-content-center align-items-center">-</button>
                                                    <button style={{backgroundColor: "inherit"}} className="">{quantity}</button>
                                                    <button style={{backgroundColor: "inherit"}} onClick={() => setQuantity(prev => prev + 1)} className="d-flex justify-content-center align-items-center">+</button>
                                                </div>
                                                <a href="/ordering" className="ms-3 w-75 white--btn text-decoration-none">Купить
                                                    сейчас</a>
                                            </div>

                                            <input onClick={handleAddToShoppingBasket} type="button" value="Добавить в корзину" className="mt-3 w-100 white--btn"/>

                                        </div>
                                    </div>

                                </div>
                                <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 ps-c-5">
                                    <span>Описание</span>
                                    <p>{item.description}</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;