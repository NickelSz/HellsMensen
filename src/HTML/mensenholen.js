const mensen_liste = document.getElementById("mensen_liste");
var alle_mensen = [];
var id_mensen = [];

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
        alle_mensen.push(mensen[count].name);
        id_mensen.push(mensen[count].id);
      }
    }
    var x = 0;
    for (x = 0; x < alle_mensen.length; x++) {
      var newMensenOption = document.createElement("option");
      newMensenOption.setAttribute("value", id_mensen[x]);
      newMensenOption.setAttribute("class", "mensen-option");
      newMensenOption.innerText = alle_mensen[x];
      mensen_liste.appendChild(newMensenOption);

      
    }
  });

const takeday = document.getElementById("takeday");
const table = document.getElementById("meal");

mensen_liste.onchange = function () {
  var id = mensen_liste.value;
  var date = new Date(selected_date_element.dataset.value);
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var apidate = "" + year + "-" + month + "-" + day;
  var url =
    "https://openmensa.org/api/v2/canteens/" +
    id +
    "/days/" +
    apidate +
    "/meals";
  console.log(month, year, day, apidate, url);
  const mensen = fetch(url)
    .then((response) => response.json())
    .then((food) => {
      var count = 0;
      for (count in food) {
        var newentry = document.createElement("tr");
        var gericht = document.createElement("div");
        gericht.innerHTML = food[count].name;
        gericht.setAttribute("class", "food" );
        var kategorie = document.createElement("div");
        kategorie.innerHTML = food[count].category;

        kategorie.setAttribute("class", "kategorie" );
        var preis = document.createElement("div");
        
        preis.innerHTML = food[count].prices.students;
        kategorie.setAttribute("class", "pricestudents" );

        table.appendChild(newentry);
        newentry.appendChild(gericht);
        newentry.appendChild(kategorie);
        newentry.appendChild(preis);

        if ( food[count].category == "Wahlmenü (Komponente ohne Fleisch)"){
          var vegi = document.createElement("img");
          vegi.setAttribute("src", "images/cake-black-18dp.svg");
          vegi.setAttribute("id", "vegilogo");
          newentry.appendChild(vegi);
        }
    
      }
    });
};
