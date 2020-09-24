const schwein = document.getElementById("scheincheck");
const rind = document.getElementById("rindcheck");
const vegan = document.getElementById("vagancheck");
const vegi = document.getElementById("vegicheck");

schwein.onclick = function () {
  localStorage.setItem("scheincheck", JSON.stringify(schwein.checked));
};
rind.onclick = function () {
  localStorage.setItem("rindcheck", JSON.stringify(rind.checked));
};
vegan.onclick = function () {
  localStorage.setItem("vagancheck", JSON.stringify(vegan.checked));
};
vegi.onclick = function () {
  localStorage.setItem("vegicheck", JSON.stringify(vegi.checked));
};
function checkefood() {
  schwein.checked = JSON.parse(localStorage.getItem("scheincheck"));
  rind.checked = JSON.parse(localStorage.getItem("rindcheck"));
  vegan.checked = JSON.parse(localStorage.getItem("vagancheck"));
  vegi.checked = JSON.parse(localStorage.getItem("vegicheck"));
}

checkefood();
