const button = document.getElementById("searchmensabtn");
button.onclick = function () {
  const input = document.getElementById("suchfeld");

  const mensen_liste = document.getElementById("mensen_liste");
  mensen_liste.innerHTML = "";
  var alle_mensen = [];
  const mensen = fetch("https://openmensa.org/api/v2/canteens/")
  .then((response) => response.json())
  .then((mensen) => {
    var count = 0;
    for (count in mensen) {
      var i = 0;
      var isNew = true;
      for (i = 0; i < alle_mensen.length; i++) {
        if (mensen[count].mensen === alle_mensen[i]) {
          isNew = false;
        }
      }
      if (isNew) {
        alle_mensen.push([
          mensen[count].name,
          mensen[count].city,
          mensen[count].address,
          mensen[count].id,
        ]);
      }
    }
    var x = 0;
    for (x = 0; x < alle_mensen.length; x++) {
      if (alle_mensen[x][0].includes(input.value)) {
      var newentry = document.createElement("tr");
      newentry.setAttribute("class", "tabelle");
      newentry.setAttribute("id", "background");
      mensen_liste.appendChild(newentry);

      var newMensenOption = document.createElement("div");
      newMensenOption.setAttribute("value", alle_mensen[x].name);
      newMensenOption.setAttribute("class", "mensen-option");
      newMensenOption.innerText = alle_mensen[x][0];
      newentry.appendChild(newMensenOption);

      var defaultmensapic = document.createElement("img");
      defaultmensapic.setAttribute("src", "images/mensadefault.jpg");
      defaultmensapic.setAttribute("class", "defaultmensapic");

      var mensadetail = document.createElement("div");
      mensadetail.setAttribute("class", "mensadetailclasse");
      mensadetail.setAttribute("id", "mensadetailID");

      mensadetail.innerHTML =
      "Name:<br> "+
        alle_mensen[x][0] +
        "<br>Stadt:<br>" +
        alle_mensen[x][1] +
        "<br>Adresse:<br>" +
        alle_mensen[x][2];

      newentry.appendChild(defaultmensapic);
      newentry.appendChild(mensadetail);
    }
  }
  });
};




const mensen_liste = document.getElementById("mensen_liste");
var alle_mensen = [];
const mensen = fetch("https://openmensa.org/api/v2/canteens/")
  .then((response) => response.json())
  .then((mensen) => {
    var count = 0;
    for (count in mensen) {
      var i = 0;
      var isNew = true;
      for (i = 0; i < alle_mensen.length; i++) {
        if (mensen[count].mensen === alle_mensen[i]) {
          isNew = false;
        }
      }
      if (isNew) {
        alle_mensen.push(
          mensen[count].name);
      }
    }
    var x = 0;
    for (x = 0; x < alle_mensen.length; x++) {
      var newentry = document.createElement("tr");
      newentry.setAttribute("class", "tabelle");
      mensen_liste.appendChild(newentry);

      var newMensenOption = document.createElement("div");
      newMensenOption.setAttribute("value", alle_mensen[x].name);
      newMensenOption.setAttribute("class", "mensen-option");
      newMensenOption.innerText = alle_mensen[x];
      newentry.appendChild(newMensenOption);

      var defaultmensapic = document.createElement("img");
      defaultmensapic.setAttribute("src", "images/mensadefault.jpg");
      defaultmensapic.setAttribute("class", "defaultmensapic");
     
      newentry.appendChild(defaultmensapic);
    }
  });
