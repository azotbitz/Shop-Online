import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import {getItemsSelector} from "../redux/reducers/itemsReducer/itemsSelector"
import {loader, error} from "../redux/reducers/itemsReducer/itemsSelector";
import Product from "../components/Product";
import {ADD_PURCHASE} from "../redux/actionTypes";
import {searchItems} from "../redux/reducers/itemsReducer/itemsReducer";

const SearchPage = () => {
    const selectorData = useSelector(getItemsSelector);
    const [data, setData] = useState(Object.values(selectorData));
    const dispatch = useDispatch();
    const loading = useSelector(loader);
    const err = useSelector(error);
    const [filter, setFilter] = useState("");
    const [productsInfo, setProductsInfo] = useState([]);

    useEffect(() => {
        setData(selectorData)
    }, [selectorData])

    useEffect(() => {
        setTimeout(() => {
            const productAll = document.querySelectorAll(".card--product");
            const subjects = document.querySelectorAll(`#popup--product`);
            let basketArray = [];

            productAll.forEach(card => {
                card.addEventListener("click", (event) => {
                    if (event.target.classList.contains('shopping-basket') || event.target.classList.contains('shopping-basket-wrapper')) {
                        const product = event.target.closest('.shopping-basket-wrapper').querySelector(".shopping-basket")
                        addProductToBasket(product)
                    } else if (event.target.classList.contains('love--wrapper') || event.target.classList.contains('love') || event.target.classList.contains('love--svg')) {
                        const love = event.target.closest('.love--wrapper').querySelector(".love")
                        toggleFavorite(love)
                    } else if (event.target.classList.contains('share')) {
                        console.log('share');
                    } else if (event.target.classList.contains('calendar')) {
                        console.log('calendar');
                    } else {
                        let id = event.target.closest('.pop-up_btn_1')
                        const pop__up = document.querySelector(`.${id.dataset.popUpName}`);
                        let status = Number(id.dataset.popUpStatus);
                        if(status === 1) {
                            pop__up.style.display = "flex"
                        } else {
                            pop__up.style.display = "none"
                        }

                        let pop__up_btn = document.querySelectorAll(".pop-up_btn_0");
                        pop__up_btn.forEach((e) => {
                            e.addEventListener("click", () => {
                                const pop__up = document.querySelector(`.${e.dataset.popUpName}`);
                                let status = Number(e.dataset.popUpStatus);
                                let result = status
                                    ? (pop__up.style.display = "flex")
                                    : (pop__up.style.display = "none");
                            });
                        })

                        // setAmountProduct()

                        subjects.forEach((subject) => {
                            if (subject != null) {

                                console.log(subject)

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



                    }
                })
            })


            const addProductToBasket = function (candidate) {
                const card = candidate.closest(".card--product");
                let option = {
                    card__name: card.querySelector(".card--title-name").innerText,
                    card__price: card.querySelector(".card--price").innerText,
                    card__bonus: card.querySelector(".card--bonus").innerText,
                    product__id: card.querySelector(".id--product").innerText,
                    card__img: card.querySelector(".card-img-1").innerText
                };
                console.log(option)
                if (basketArray.indexOf(Number(option.product__id)) === -1) {
                    basketArray.push(option);
                    dispatch({
                        type: ADD_PURCHASE,
                        payload: basketArray
                    });

                }
            };

            const toggleFavorite = function (candidate) {
                candidate.classList.contains("love--active")
                    ? candidate.classList.remove("love--active")
                    : candidate.classList.add("love--active");
            };
        }, 500)

    }, [])


    const filterHandle = (fltr) => {

        if(fltr === 'price'){
            const lowestPriceGoods = data.sort((el1,el2) =>
                el1.price.toString().localeCompare(el2.price.toString(), undefined, {numeric: true}));
            setProductsInfo([...lowestPriceGoods]);
        }
        if(fltr === 'priceHigh'){
            const highestPriceGoods = data.sort((el1,el2) =>
                el2.price.toString().localeCompare(el1.price.toString(), undefined, {numeric: true}));
            setProductsInfo([...highestPriceGoods]);
        }
        if(fltr === 'rating') {
            const highestRatingGoods = data.sort((el1,el2) =>
                el2.rating.toString().localeCompare(el1.rating.toString(), undefined, {numeric: true}));
            setProductsInfo([...highestRatingGoods]);
        }

    }


    if(loading) {
        return (
            <div><h2>Загрузка...</h2></div>
        )
    }

    if(err) {
        return (
            <div>
                <h2>Ошибка</h2>
                <p>Повторите попытку поиска</p>
            </div>
        )
    }



    return (
        <>
            <div className="selections--page">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="text-white pt-5">Найдено по вашему запросу:</h2>
                    </div>
                    <div className="search-filter" style={{display: "flex", justifyContent: "flex-end"}}>
                        <div className="row">
                            <div className="col-12">
                                <div className="select">
                                    <select style={{background: 'linear-gradient(to right, rgba(0,0,0,.3),rgba(0,0,0,.3))'}}
                                            onChange={(e) => setFilter(e.target.value)}
                                            className="custom-select"
                                            aria-label="Filter">
                                        <option value="" disabled selected>Выбор фильтра</option>
                                        <option value='price'>По убыванию цены</option>
                                        <option value='priceHigh'>По возрастанию цены</option>
                                        <option value='rating'>По рейтингу</option>
                                    </select>
                                    <span className="focus"></span>
                                    <button style={{marginLeft: '10px'}} className='btn btn-primary' onClick={() => filterHandle(filter)}>Применить</button>
                                </div>
                            </div>
                        </div>
                </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12">
                        <div className="card--product--wrapper">
                    {data.map((item) => (
                        <div>
                            <div key={item.id} data-product-id="1" data-pop-up-status='1' data-pop-up-name={'popup--product-wrapper-' + item.id}
                                 className={`card--product pop-up_btn_1 d-flex justify-content-center align-items-center flex-column p-3 pointer`}>
                                <div className="id--product">{item.id}</div>
                                <div className="id--product card-img-1">{item.thumbnail}</div>
                                <div className="card--content card--image mb-3"
                                     style={{backgroundImage: `url(${item.thumbnail})`}}>
                                    <div className="love--wrapper">
                                        <svg className="love--svg" width="18" height="15" viewBox="0 0 18 15"
                                             fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path className="love"
                                                  d="M13.2188 0C12.242 0 11.3465 0.292168 10.5572 0.868407C9.80044 1.42085 9.29661 2.12449 9 2.63615C8.70339 2.12446 8.19956 1.42085 7.44282 0.868407C6.6535 0.292168 5.758 0 4.78125 0C2.05552 0 0 2.10455 0 4.89538C0 7.91044 2.5644 9.97331 6.44657 13.0962C7.10582 13.6265 7.85306 14.2277 8.62973 14.8688C8.73211 14.9534 8.86359 15 9 15C9.13641 15 9.26789 14.9534 9.37027 14.8688C10.147 14.2276 10.8942 13.6265 11.5539 13.0959C15.4356 9.97331 18 7.91044 18 4.89538C18 2.10455 15.9445 0 13.2188 0Z"
                                                  fill="#DE33FE"/>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    className="card--title d-flex justify-content-center align-items-center flex-column">
                                    <h5>{item.brand}</h5>
                                    <p className="w-100 text-center m-0 card--title-name">{item.title}</p>
                                    <div className="w-100 d-flex justify-content-around">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center me-4">
                                                <img src="../assets/imgs/coin.svg" alt="coin" className="me-2"/>
                                                <span className="card--price">{item.price}</span>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center">
                                                <img src="../assets/imgs/star.svg" alt="star" className="me-2"/>
                                                <span>{item.rating}</span>
                                            </div>
                                            <div className="d-flex justify-content-center align-items-center ms-4">
                                                <img style={{backgroundColor: "white"}} src="../assets/imgs/warehouse.png" alt="storage" className="me-2"/>
                                                <span className="card--bonus">{item.stock}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-100 d-flex justify-content-between mt-4">
                                        <div className="d-flex">
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 shopping-basket-wrapper">
                                                <img src="../assets/imgs/shopping-basket.svg" alt="shopping-basket"
                                                     className="circle shopping-basket"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column me-3 share">
                                                <img src="../assets/imgs/share.svg" alt="share" className="circle"/>
                                            </div>
                                            <div
                                                className="d-flex justify-content-center align-items-center flex-column">
                                                <img src="../assets/imgs/calendar.svg" alt="calendar"
                                                     className="circle calendar"/>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-around align-items-center w-100">
                                            <p className="m-0 ps-2"><span className="percent--value">{Math.round(item.discountPercentage
                                            )}</span><span
                                                className="percent me-1">%</span></p>
                                            <span className="old--price ps-1">{item.price + Math.round(item.discountPercentage
                                            )}$</span>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <Product item={item}/>
                        </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    );
};

export default SearchPage;