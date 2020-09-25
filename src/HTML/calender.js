/**
 * Definiert eine neue Variable
 * @constant {date} neues datum;
 * 
 */

const date = new Date();

/**
 * neue Funktion um den Kalender auf ein bestimmtes Datum zu setzen
 * @returns {date} aktuelles Datum
 * 
 */

const renderCalendar = () => {
  date.setDate(1);

   /**
 * Definiert eine neue Variable idem er sich in der Query die Tage der Mensen raussucht, holt sich alle definierten Tage
 * @constant {date} monthDays
 * @returns {date} Monate und Tage
 * 
 */

  const monthDays = document.querySelector(".days");

  const lastDay = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();

  const prevLastDay = new Date(
    date.getFullYear(),
    date.getMonth(),
    0
  ).getDate();

  const firstDayIndex = date.getDay();

  const lastDayIndex = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDay();

  const nextDays = 7 - lastDayIndex - 1;

   /**
 * Definiert einen neuen Array mit allen Monaten
 * @constant {date} neue Monate
 * 
 */

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

   /**
 * Listet aktuellen Tag und Monat auf mit Hilfe von innerHTML
 * @return {date} Tag und Monat
 * 
 */

  document.querySelector(".date h1").innerHTML = months[date.getMonth()];

  document.querySelector(".date p").innerHTML = new Date().toDateString();

  let days = "";

   /**
 * hier fehlen noch Infos !!!
 * 
 */

  for (let x = firstDayIndex; x > 0; x--) {
    days += `<div class="prev-date">${prevLastDay - x + 1}</div>`;
  }

  for (let i = 1; i <= lastDay; i++) {
    if (
      i === new Date().getDate() &&
      date.getMonth() === new Date().getMonth()
    ) {
      days += `<div class="today">${i}</div>`;
    } else {
      days += `<div>${i}</div>`;
    }
  }

  for (let j = 1; j <= nextDays; j++) {
    days += `<div class="next-date">${j}</div>`;
    monthDays.innerHTML = days;
  }
};

/**
 * Neuer EventListner der beim drücken auf die Datums Conatiner ausgelöst wird und das den letzten Monat anzeigt
 * @param {event} event beim drücken des Monats Button 
 * 
 */

document.querySelector(".prev").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

/**
 * Neuer EventListner der beim drücken auf die Datums Conatiner ausgelöst wird und das den nächsten Monat anzeigt
 * @param {event} event beim drücken des Monats Button 
 * 
 */

document.querySelector(".next").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
