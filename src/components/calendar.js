// Календарь

const calendarPopUp = document.querySelector("#calendar--popup");
const content = document.querySelector("#content");

let openCalendar = function () {
  calendarPopUp.style.display = "flex";
  content.style.opacity = 0;
};

let closedCalendar = function () {
  content.style.opacity = 1;
  calendarPopUp.style.display = "none";
};

class Calendar {
  constructor(container) {
    this.date = new Date();
    this.container = container;
    this.months = [
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
    this.days = [
      "Воскресенье",
      "Понидельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
  }

  increment() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.setmonth();
    this.renderMonth();
  }

  decrement() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.setmonth();
    this.renderMonth();
  }

  setmonth() {
    document.querySelector("#month").innerHTML = `${
      this.months[this.date.getMonth()]
    } ${this.date.getFullYear()}`;
  }

  resetMonth() {
    const container = this.container;
    let table = container.querySelector(".table");
    if (table) {
      table.remove();
    }
  }

  renderMonth() {
    const container = this.container;

    let date = this.date;
    let month = date.getMonth();
    let year = date.getFullYear();
    let startDayIndex = new Date(year, month, 1).getDay();
    let daysInMonth = new Date(year, month + 1, 0).getDate();
    let counter = 0;

    this.resetMonth();

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
        if (date.getDay() == text) {
          tablecell;
        }
        if (date.getDate() == text) {
          tablecell.classList.add("today");
        }
        tablecell.appendChild(document.createTextNode(text));
        tablerow.appendChild(tablecell);
      }
      table.appendChild(tablerow);
    }
    container.appendChild(table);
    this.selectDay();
  }

  renderHeader() {
    const container = this.container;

    let tr = document.createElement("tr");
    tr.classList = "w-100 d-flex";
    let elDecrement = document.createElement("button");
    elDecrement.innerText = `<`;
    elDecrement.classList = "calendar--btn";
    elDecrement.addEventListener("click", this.decrement.bind(this));
    console.log(this.decrement.bind(this));

    let elHeader = document.createElement("div");
    elHeader.classList = "ps-3 pe-3";
    elHeader.id = "month";
    elHeader.innerText = `${
      this.months[this.date.getMonth()]
    } ${this.date.getFullYear()}`;

    let elIncrement = document.createElement("button");
    elIncrement.innerText = `>`;
    elIncrement.classList = "calendar--btn";
    elIncrement.addEventListener("click", this.increment.bind(this));

    tr.appendChild(elDecrement);
    tr.appendChild(elHeader);
    tr.appendChild(elIncrement);
    container.appendChild(tr);
  }

  selectDay() {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    const daysInMonth = new Date(year, month, 0).getDate();
    let selected__day;
    let passed__days = daysInMonth - date.getDate();
    this.container.querySelectorAll(".table td").forEach((e) => {
      e.addEventListener("click", () => {
        selected__day = e.innerText;

        let counter__days = this.getNumberOfDays(
          `${month}/${date.getDate()}/${year}`,
          `${this.date.getMonth() + 1}/${
            e.innerText
          }/${this.date.getFullYear()}`
        );

        console.log(selected__day);
        this.getIntermediateMonth(3, 6);
      });
    });
  }

  getIntermediateMonth(current, last) {
    console.log(this.date.getDate());
    
  }

  getNumberOfDays(start, end) {
    console.log(start, end);
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);

    return diffInDays;
  }

  render() {
    this.renderHeader();
    this.renderMonth();
  }
}

const calendar = new Calendar(document.querySelector("#date-container"));
calendar.render();
