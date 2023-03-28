// if (localStorage.getItem("destination-city") == null) {
//   localStorage.setItem("destination-city", "Выбрать город");
// }
//
// function goBack() {
//   console.log(window.history);
//   // window.history.back();
// }
//
// const citySelectArray = document.querySelectorAll(".select--city");
//
// document.querySelectorAll('input[name="city"]').forEach((e) => {
//   if (e.value == localStorage.getItem("destination-city")) {
//     e.checked = "true";
//   }
// });
//
// citySelectArray.forEach((e) => {
//   e.querySelector(".select span").innerText =
//     localStorage.getItem("destination-city");
//   e.addEventListener("click", () => {
//     let rect = e.getBoundingClientRect();
//     console.log(e);
//     let option = {
//       top: rect.top,
//       right: rect.right,
//       bottom: rect.bottom,
//       left: rect.left,
//     };
//     selectCity(e, option);
//   });
// });
//
// const selectCity = function (selected, city) {
//   const popup__city = document.querySelector(".popup--select-city");
//
//   popup__city.style.top = city.bottom + 10 + "px";
//   popup__city.style.left = city.left + "px";
//
//   popup__city.classList.contains("select-city--active")
//     ? popup__city.classList.remove("select-city--active")
//     : popup__city.classList.add("select-city--active");
//
//   document.querySelectorAll('input[name="city"]').forEach((e) => {
//     e.addEventListener("click", () => {
//       localStorage.setItem("destination-city", e.value);
//       selected.querySelector(".select span").innerText =
//         localStorage.getItem("destination-city");
//     });
//   });
// };
//
//
