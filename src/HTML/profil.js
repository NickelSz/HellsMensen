
/**
 * Definiert neue Konstanten die er sich aus der Datenbank holt
 * @constant {string} student
 * @constant {string} angestellter
 * @constant {string} gast
 * 
 */

 const student = document.getElementById("studentcheck");
const angestellter = document.getElementById("angestelltercheck");
const gast = document.getElementById("gastcheck");

/**
 * Definiert neue Konstanten die er sich aus der Datenbank holt, checkt dann nach selektierten Werten
 * @param {Event} "" Funktion
 * @param {Event} "" Funktion
 * @param {Event} "" Funktion
 * @param {Event} ""  checkedRole Funktion
 * 
 */

student.onclick = function () {
  localStorage.setItem("studentcheck", JSON.stringify(student.checked));
};
angestellter.onclick = function () {
  localStorage.setItem("angestelltercheck", JSON.stringify(angestellter.checked));
};
gast.onclick = function () {
  localStorage.setItem("gastcheck", JSON.stringify(gast.checked));
};

function checkedrole() {
  student.checked = JSON.parse(localStorage.getItem("studentcheck"));
  angestellter.checked = JSON.parse(localStorage.getItem("angestelltercheck"));
  gast.checked = JSON.parse(localStorage.getItem("gastcheck"));
 
}

checkedrole();
