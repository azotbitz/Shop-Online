import React, {useEffect, useState} from "react";

const Calendar = () => {

  let [date, useDate] = useState(new Date())
  useEffect(() => {
    let container = document.querySelector('.container--calendar')
    let months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сеньтябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    let days = [
      "Воскресенье",
      "Понидельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];

    function increment() {
      date.setMonth(date.getMonth() + 1);
      setMonth();
      renderMonth();
    }

    function decrement() {
      date.setMonth(date.getMonth() - 1);
      setMonth();
      renderMonth();
    }

    function setMonth() {
      document.querySelector("#month").innerHTML = `${
          months[date.getMonth()]
      } ${date.getFullYear()}`;
    }

    function resetMonth() {
      let table = container.querySelector(".table");
      if (table) {
        table.remove();
      }
    }

    const renderMonth = () => {

      let month = date.getMonth();
      let year = date.getFullYear();
      let startDayIndex = new Date(year, month, 1).getDay();
      let daysInMonth = new Date(year, month + 1, 0).getDate();
      let counter = 0;

      resetMonth();

      let table = document.createElement("table");
      table.setAttribute("class", "table");

      for (var i = 0; i <= 5; i++) {
        let tablerow = document.createElement("tr");

        for (var x = 0; x <= 6; x++) {
          let tablecell = document.createElement("td");
          let text = "";

          if (i === 0 && x === startDayIndex) {
            counter++;
            text = counter;
          } else if (counter > 0 && counter < daysInMonth) {
            counter++;
            text = counter;
          }
          if (date.getDay() === text) {
            // tablecell;
          }
          if (date.getDate() === text) {
            tablecell.classList.add("today");
          }
          tablecell.appendChild(document.createTextNode(text));
          tablerow.appendChild(tablecell);
        }
        table.appendChild(tablerow);
      }
      container.appendChild(table);
      selectDay();
    }

    const renderHeader = () => {

      let tr = document.createElement("tr");
      tr.classList = "w-100 d-flex";
      let elDecrement = document.createElement("button");
      elDecrement.innerText = `<`;
      elDecrement.classList = "calendar--btn";
      elDecrement.addEventListener("click", decrement);

      let elHeader = document.createElement("div");
      elHeader.classList = "ps-3 pe-3";
      elHeader.id = "month";
      elHeader.innerText = `${
          months[date.getMonth()]
      } ${date.getFullYear()}`;

      let elIncrement = document.createElement("button");
      elIncrement.innerText = `>`;
      elIncrement.classList = "calendar--btn";
      elIncrement.addEventListener("click", increment);

      tr.appendChild(elDecrement);
      tr.appendChild(elHeader);
      tr.appendChild(elIncrement);
      container.appendChild(tr);
    }

    function selectDay() {
      const year = date.getFullYear();
      let month = date.getMonth() + 1;
      const daysInMonth = new Date(year, month, 0).getDate();
      let selected__day;
      let passed__days = daysInMonth - date.getDate();
      this.container.querySelectorAll(".table td").forEach((e) => {
        e.addEventListener("click", () => {
          selected__day = e.innerText;

          let counter__days = getNumberOfDays(
              `${month}/${date.getDate()}/${year}`,
              `${date.getMonth() + 1}/${
                  e.innerText
              }/${date.getFullYear()}`
          );
          getIntermediateMonth(3, 6);
        });
      });
    }

    function getIntermediateMonth(current, last) {

    }

    function getNumberOfDays(start, end) {
      const date1 = new Date(start);
      const date2 = new Date(end);

      // One day in milliseconds
      const oneDay = 1000 * 60 * 60 * 24;

      // Calculating the time difference between two dates
      const diffInTime = date2.getTime() - date1.getTime();

      // Calculating the no. of days between two dates
      return Math.round(diffInTime / oneDay);
    }
  })





    return (
        <>
          <div className='container--calendar'>
          </div>
        </>
  )
};

export default Calendar;



