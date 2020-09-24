const student = document.getElementById("studentcheck");
const angestellter = document.getElementById("angestelltercheck");
const gast = document.getElementById("gastcheck");

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
