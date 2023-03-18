if (localStorage.getItem("destination-city") == null) {
  localStorage.setItem("destination-city", "Выбрать город");
}

function goBack() {
  console.log(window.history);
  // window.history.back();
}

const citySelectArray = document.querySelectorAll(".select--city");

document.querySelectorAll('input[name="city"]').forEach((e) => {
  if (e.value == localStorage.getItem("destination-city")) {
    e.checked = "true";
  }
});

citySelectArray.forEach((e) => {
  e.querySelector(".select span").innerText =
    localStorage.getItem("destination-city");
  e.addEventListener("click", () => {
    let rect = e.getBoundingClientRect();
    console.log(e);
    let option = {
      top: rect.top,
      right: rect.right,
      bottom: rect.bottom,
      left: rect.left,
    };
    selectCity(e, option);
  });
});

const selectCity = function (selected, city) {
  const popup__city = document.querySelector(".popup--select-city");

  popup__city.style.top = city.bottom + 10 + "px";
  popup__city.style.left = city.left + "px";

  popup__city.classList.contains("select-city--active")
    ? popup__city.classList.remove("select-city--active")
    : popup__city.classList.add("select-city--active");

  document.querySelectorAll('input[name="city"]').forEach((e) => {
    e.addEventListener("click", () => {
      localStorage.setItem("destination-city", e.value);
      selected.querySelector(".select span").innerText =
        localStorage.getItem("destination-city");
    });
  });
};

const toggleFavorite = function (candidate) {
  candidate.classList.contains("love--active")
    ? candidate.classList.remove("love--active")
    : candidate.classList.add("love--active");
};

const basket = document.querySelector("#shopping--basket");
let basketArray = [];

const removeProductToBasket = function (product__id) {
  const products = basket.querySelectorAll(".id--product");

  products.forEach((e) => {
    if (e.innerText == product__id) {
      e.parentElement.remove();
    }
  });
  const index = basketArray.indexOf(product__id);
  if (index > -1) {
    basketArray.splice(index, 1);
  }
};

const addProductToBasket = function (candidate) {
  const card = candidate.closest(".card--product");
  let option = {
    card__name: card.querySelector(".card--title-name").innerText,
    card__price: card.querySelector(".card--price").innerText,
    card__bonus: card.querySelector(".card--bonus").innerText,
    product__id: card.querySelector(".id--product").innerText,
  };

  if (basketArray.indexOf(Number(option.product__id)) == -1) {
    basketArray.push(Number(option.product__id));
    basket.innerHTML += `
    <div class="basket--product card--product">
    <div class="id--product">${option.product__id}</div>
                          <div class="product--image">
                              <img src="../assets/imgs/product--image-2.jpg" alt="#">
                          </div>
                          <div class="product--info d-flex flex-column">
                              <span class="product--name">${option.card__name}</span>
                              <span class="product--price">${option.card__price}</span>
                          </div>
                          <div class="product--interface d-flex justify-content-end">
                              <div class="w-100 d-flex justify-content-end">
                                  <button>
                                      <img src="../assets/imgs/love--light.svg" alt="love">
                                  </button>
                                  <button onClick="removeProductToBasket(${option.product__id})">
                                      <img src="../assets/imgs/trash.svg" alt="trash">
                                  </button>
                              </div>
                              <div class="quantity--product mt-2">
                                  <button class="minus">-</button>
                                  <button class="num">0</button>
                                  <button class="plus">+</button>
                              </div>
                          </div>
                      </div>
    `;
  }
};

let mainMenu = document.querySelector("#main--menu");

const closedMainMenu = function () {
  mainMenu.style.display = "none";
};

const openMainMenu = function () {
  mainMenu.style.display = "flex";
};

const openProductPopUp = function (subject) {
  subject.style.display = "flex";
  console.log(subject);
};

const closedProductPopUp = function (subject) {
  subject.style.display = "none";
};

let pop__up_btn = document.querySelectorAll(".pop-up_btn");
pop__up_btn.forEach((e) => {
  e.addEventListener("click", () => {
    const pop__up = document.querySelector(`.${e.dataset.popUpName}`);
    let status = Number(e.dataset.popUpStatus);
    let result = status
      ? (pop__up.style.display = "flex")
      : (pop__up.style.display = "none");

    // document.querySelector(".num").innerText = 0;
  });
});

const getCounterProduct = function () {
  const quantity__product = document.querySelectorAll(".quantity--product");
  quantity__product.forEach((e) => {
    e.addEventListener("click", () => {
      console.log(1);
    });
    const minus = e.querySelector(".minus");
    const plus = e.querySelector(".plus");
    const num = e.querySelector(".num");

    minus.addEventListener("click", () => {
      if (Number(num.innerText) > 0) {
        num.innerText = Number(num.innerText) - 1;
      }
    });
    plus.addEventListener("click", () => {
      num.innerText = Number(num.innerText) + 1;
    });
  });
};

const subject = document.querySelector(`#popup--product`);
if (subject != null) {
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

    if (
      delta > 0 &&
      side > (subject.clientHeight - vhToPixels(100) - 40) * -1
    ) {
      side -= 80;
    }
    if (delta < 0 && side < 00) {
      side += 80;
    }

    subject.style.top = side + "px";
    e.preventDefault ? e.preventDefault() : (e.returnValue = false);
  }
}
