import React, {useEffect} from 'react';

const ToWhomPage = () => {

useEffect(() => {
    let sliderRange = document.querySelector("#slider--range");
    sliderRange.addEventListener("change", function() {
        console.log(this.value);
    })

})

    return (
        <>
            <div className="slider mt-5">
                <div className="container-fluid container-md container-lg container-xl container-xxl">
                    <div className="swiper to--whom">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide d-flex justify-content-center align-items-center">
                                <div
                                    className="w-100 d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-4 text-center">
                                            <span>1. В связи с загруженным автомобильным трафиком в предпраздничные и праздничные дни,
                                                чсчсчсчс</span>
                                        </div>
                                        <div className="col-4 text-center">
                                            <h2>Для кого букет ?</h2>
                                        </div>
                                        <div className="col-4 text-center">
                                            <span>1. В связи с загруженным автомобильным трафиком в предпраздничные и праздничные дни, </span>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-5">
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                    </div>

                                    <div className="d-flex mt-5">
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-slide to--whom-slide_2 d-flex justify-content-center align-items-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <h2>Тип сборки</h2>
                                        </div>
                                    </div>
                                    <div className="d-flex mt-5">
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>

                                    </div>

                                    <div className="d-flex mt-5">
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>
                                        <div className="card--product d-flex justify-content-center align-items-center">
                                            1
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-slide to--whom-slide_3 d-flex justify-content-center align-items-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <h2>Выберите оттенки цветов в букете</h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <div
                                                className="card--product d-flex justify-content-center align-items-center">
                                                1
                                            </div>
                                            <span className="mt-4 text-center">Насыщенные тона</span>
                                            <p className="w-50 mt-4 text-center silver-text">В связи с загруженным
                                                автомобильным трафиком
                                                в предпраздничные и праздничные дни,
                                                чсчсчсчс</p>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <div
                                                className="card--product d-flex justify-content-center align-items-center">
                                                1
                                            </div>
                                            <span className="mt-4 text-center">Насыщенные тона</span>
                                            <p className="w-50 mt-4 text-center silver-text">В связи с загруженным
                                                автомобильным трафиком
                                                в предпраздничные и праздничные дни,
                                                чсчсчсчс</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-slide to--whom-slide_3 d-flex justify-content-center align-items-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <h2>Выберите оттенки цветов в букете</h2>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-center mt-5">
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <div
                                                className="card--product d-flex justify-content-center align-items-center">
                                                1
                                            </div>
                                            <div className="to--whom--colors mt-4">
                                                <div className="d-flex">
                                                    <div className="color color--pig me-3"></div>
                                                    <div className="color color--purple me-3"></div>
                                                    <div className="color color--white me-3"></div>
                                                    <div className="color color--yellow me-3"></div>
                                                    <div className="color color--green me-3"></div>
                                                    <div className="color color--blue"></div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="color color--orange me-3"></div>
                                                    <div className="color color--purple-2 me-3"></div>
                                                    <div className="color color--skiey me-3"></div>
                                                    <div className="color color--silver me-3"></div>
                                                    <div className="color color--black me-3"></div>
                                                    <div className="color color--beige"></div>
                                                </div>
                                            </div>
                                            <span className="mt-4 text-center">Насыщенные тона</span>
                                        </div>
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <div
                                                className="card--product d-flex justify-content-center align-items-center">
                                                1
                                            </div>
                                            <div className="to--whom--colors mt-4">
                                                <div className="d-flex">
                                                    <div className="color color--pig me-3"></div>
                                                    <div className="color color--purple me-3"></div>
                                                    <div className="color color--white me-3"></div>
                                                    <div className="color color--yellow me-3"></div>
                                                    <div className="color color--green me-3"></div>
                                                    <div className="color color--blue"></div>
                                                </div>
                                                <div className="d-flex mt-2">
                                                    <div className="color color--orange me-3"></div>
                                                    <div className="color color--purple-2 me-3"></div>
                                                    <div className="color color--skiey me-3"></div>
                                                    <div className="color color--silver me-3"></div>
                                                    <div className="color color--black me-3"></div>
                                                    <div className="color color--beige"></div>
                                                </div>
                                            </div>
                                            <span className="mt-4 text-center">Насыщенные тона</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-slide to--whom-slide_3 d-flex justify-content-center align-items-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <h2>Выберите оттенки цветов в букете</h2>
                                        </div>
                                    </div>
                                    <div className="slider-range--wrapper row d-flex justify-content-center mt-5 mb-4">
                                        <div className="d-flex justify-content-center align-items-center flex-column">
                                            <input type="range" id="slider--range" name="volume" min="1780"
                                                   max="100000000"/>
                                        </div>
                                    </div>
                                    <div className="row d-flex justify-content-center mt-5">
                                        <div className="col-6 d-flex justify-content-center">
                                            <input className="skiey--input" type="number" value="1750" min="1750"
                                                   max="1000000000"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="swiper-slide to--whom-slide_3 d-flex justify-content-center align-items-center">
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center h-100 pb-5 mb-5">
                                    <div className="row mt-5">
                                        <div className="col-12 text-center">
                                            <h2>Выберите оттенки цветов в букете</h2>
                                        </div>
                                    </div>
                                    <div className="slider">
                                        <div
                                            className="container-fluid container-md container-lg container-xl container-xxl">
                                            <p className="text-white mt-5">Монобукеты</p>
                                            <div className="swiper perfect">
                                                <div className="swiper-wrapper">
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        className="swiper-slide card--product d-flex justify-content-center align-items-center">
                                                        <div
                                                            className="slider--card d-flex justify-content-center align-items-center flex-column p-3">
                                                            <div className="card--content card--image mb-3"
                                                                 style={{backgroundImage: 'url("../assets/imgs/il1.svg")'}}></div>
                                                            <div
                                                                className="card--title d-flex justify-content-center align-items-center flex-column w-100">
                                                                <p className="m-0">Кустовая роза</p>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="swiper-pagination"></div>


                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>

                        <div className="whom--button">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default ToWhomPage;