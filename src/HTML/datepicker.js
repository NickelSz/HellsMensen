 /**
 * Definiert neue Konstanten die er sich aus der Query holt
 * @constant {date} date_picker_element
 * @constant {date} selected_date_element
 * @constant {date} dates_element
 * @constant {date} mth_element
 * @constant {date} next_mth_element
 * @constant {date} prev_mth_element
 * @constant {date} days_element
 */

const date_picker_element = document.querySelector('.date-picker');
const selected_date_element = document.querySelector('.date-picker .selected-date');
const dates_element = document.querySelector('.date-picker .dates');
const mth_element = document.querySelector('.date-picker .dates .month .mth');
const next_mth_element = document.querySelector('.date-picker .dates .month .next-mth');
const prev_mth_element = document.querySelector('.date-picker .dates .month .prev-mth');
const days_element = document.querySelector('.date-picker .dates .days');

/**
 * Definiert einen neuen Array mit allen Monaten
 * @constant {date} neue Monate
 * 
 */

 const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

 /**
 * Definiert neue Variablen für Datum, Monat, Tag und Jahr, sowie ein dateformatter und selector
 * @constant {date} neues Datum
 * @constant {date} neuen Tag
 * @constant {date} neuen Monat
 * @constant {date} neues Jahr
 * 
 */

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

mth_element.textContent = months[month] + ' ' + year;

selected_date_element.textContent = formatDate(date);
selected_date_element.dataset.value = selectedDate;

populateDates();

/**
 * Neue EventListner für Klick auf das Datum, nächsten Monat und letzten Monat
 * @event toggleDatePicker
 * @event goToNextMonth
 * @event goToPrevMonth
 * 
 */

date_picker_element.addEventListener('click', toggleDatePicker);
next_mth_element.addEventListener('click', goToNextMonth);
prev_mth_element.addEventListener('click', goToPrevMonth);

// FUNCTIONS
function toggleDatePicker (e) {
	if (!checkEventPathForClass(e.path, 'dates')) {
		dates_element.classList.toggle('active');
	}
}

/**
 * Setzt das momentane Datum
 * @param {date} e  
 * 
 */

function goToNextMonth (e) {
	month++;
	if (month > 11) {
		month = 0;
		year++;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

/**
 * Funktion zur berechnung des letzten Monats
 * @param {date} e 
 * @return {date} monat
 * 
 */

function goToPrevMonth (e) {
	month--;
	if (month < 0) {
		month = 11;
		year--;
	}
	mth_element.textContent = months[month] + ' ' + year;
	populateDates();
}

/**
 * Funktion zur Erstellung des Kalenders, for Schleife wird durchlaufen um für jeden Monat die Tage zu bestimmen 
 * und diese hinzuzufügen
 * @param {date} e 
 * @event EventListner um den Tag auszuwählen
 * 
 */

function populateDates (e) {
	days_element.innerHTML = '';
	let amount_days = 31;

	if (month == 1) {
		amount_days = 28;
	}

	for (let i = 0; i < amount_days; i++) {
		const day_element = document.createElement('div');
		day_element.classList.add('day');
		day_element.textContent = i + 1;

		if (selectedDay == (i + 1) && selectedYear == year && selectedMonth == month) {
			day_element.classList.add('selected');
		}

		day_element.addEventListener('click', function () {
			selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
			selectedDay = (i + 1);
			selectedMonth = month;
			selectedYear = year;

			selected_date_element.textContent = formatDate(selectedDate);
			selected_date_element.dataset.value = selectedDate;

			populateDates();
		});

		days_element.appendChild(day_element);
	}
}

/**
 * Funktion zur Erstellung des Kalenders, for Schleife wird durchlaufen um für jeden Monat die Tage zu bestimmen 
 * und diese hinzuzufügen (Helper Functions)
 * @param {date} e 
 * @event EventListner um den Tag auszuwählen
 * 
 */

function checkEventPathForClass (path, selector) {
	for (let i = 0; i < path.length; i++) {
		if (path[i].classList && path[i].classList.contains(selector)) {
			return true;
		}
	}
	
	return false;
}
/**
 * Funktion um das Datum richtig zu formatieren
 * @param {date} d 
 * @event EventListner um den Tag auszuwählen
 * 
 */

function formatDate (d) {
	let day = d.getDate();
	if (day < 10) {
		day = '0' + day;
	}

	let month = d.getMonth() + 1;
	if (month < 10) {
		month = '0' + month;
	}

	let year = d.getFullYear();

	return day + ' / ' + month + ' / ' + year;
}
