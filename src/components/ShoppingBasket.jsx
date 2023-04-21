import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getShoppingBasketsSelector} from "../redux/reducers/basketReducer/basketSelector";
import {DELETE_PURCHASE} from "../redux/actionTypes";
import {loadShoppingBasket} from "../redux/reducers/basketReducer/basketReducer";
import {error, loader} from "../redux/reducers/basketReducer/basketSelector";
import {getPurchasesSelector} from "../redux/reducers/purchaseReducer/purchaseSelector";


const ShoppingBasket = () => {

    const basketArray = useSelector(getShoppingBasketsSelector);
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);
    console.log(basketArray)

    useEffect(() => {
        dispatch(loadShoppingBasket())}, [])

        const basket = document.querySelector("#shopping--basket");

    const deletePurchase = (id) => {
        dispatch({
            type: DELETE_PURCHASE,
            payload: id
        })
    }

    if(loading) {
        return (
            <div><h2>Loading</h2></div>
        )
    }

    if(err) {
        return (
            <div>
                <h2>Ошибка</h2>
                <button onClick={() => dispatch(loadShoppingBasket())}>Перезагрузить страницу</button>
            </div>
        )
    }

    return (
        <>
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
                        {basketArray.map((purchase) => {
                            return (
                                <div key={purchase.id}>
                                    <p className="mt-4">Детали цены</p>
                                <div className="result">
                                    <div className="result--bonus d-flex justify-content-between w-100">
                                        <span>Будет начисленно</span>
                                        <div>
                                            <span id="result--bonus">{purchase.discountPercentage}</span>
                                            <img src="../assets/imgs/coin.svg" alt="coin"/>
                                        </div>
                                    </div>
                                    <div className="sum d-flex justify-content-between w-100">
                                        <span>Сумма без учета баллов</span>
                                        <span>{purchase.price} $</span>
                                    </div>
                                    <div className="result--coin d-flex justify-content-between w-100">
                                        <span>Итого:</span>
                                        <span>{purchase.discountedPrice} $</span>
                                    </div>
                                </div>
                                <div className="basket--product card--product">
                                    <div className="id--product">{purchase.id}</div>
                                    <div className="product--image">
                                        <img src={`https://i.dummyjson.com/data/products/${purchase.id}/thumbnail.jpg`} height='350px'
                                        width='350px' alt="#"/>
                                    </div>
                                    <div className="product--info" style={{display: 'grid',
                                        justifyContent: 'center',
                                        textAlign: 'center'}}>
                                        <span className="product--name">{purchase.title}</span>
                                        <span className="product--price">{purchase.price}</span>
                                    </div>
                                    <div className="product--interface">
                                        <div className="w-100 d-flex justify-content-between">
                                            <button style={{backgroundColor: "black"}}>
                                                <img src="../assets/imgs/love--light.svg" alt="love"/>
                                            </button>
                                            <button style={{backgroundColor: 'red'}} onClick={() => deletePurchase(purchase.id)}>
                                                <img src="../assets/imgs/trash.svg" alt="trash"/>
                                            </button>
                                        </div>
                                        <div className="quantity--product mt-2">
                                            <button style={{cursor: "inherit"}} className="num">Количество товара: {purchase.quantity}</button>
                                        </div>
                                    </div>
                                </div>
                                    <div className="d-flex flex-column mt-4">
                                        <input type="button" value="Перейти к оформлению"
                                               className="text-center white--btn mt-2 ps-2 pe-2"/>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>
        </>
    );
};

export default ShoppingBasket;