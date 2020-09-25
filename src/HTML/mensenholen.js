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
  table.innerHTML = "";
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
        newentry.setAttribute("class", "tabelle");
        table.appendChild(newentry);
        var zahl = 0;
        var urlnote = food[count].notes;
        for (zahl in urlnote) {
          if (
            urlnote[zahl] != "Schweinefleisch" &&
            urlnote[zahl] != "Rindfleisch" &&
            urlnote[zahl] != "vegan" &&
            urlnote[zahl] != "ohne Fleisch"
          ) {
            var gericht = document.createElement("div");
            gericht.innerHTML = food[count].name;
            gericht.setAttribute("class", "food");

            var defaultfoodpic = document.createElement("img");
            defaultfoodpic.setAttribute("src", "images/fooderror.jpeg");
            defaultfoodpic.setAttribute("class", "foodpic");
            newentry.appendChild(defaultfoodpic);

            if (food[count].name == "Kürbiseintopf") {
              var E1Eintopf = document.createElement("img");
              E1Eintopf.setAttribute(
                "src",
                "images/Essen/kürbiseintopf.jpg"
              );
              E1Eintopf.setAttribute("class", "foodpic");
              E1Eintopf.setAttribute("id", "eintopf");
              newentry.appendChild(E1Eintopf);
            }
            if (food[count].name == "Fingermöhren") {
              var E1Eintopf = document.createElement("img");
              E1Eintopf.setAttribute(
                "src",
                "images/Essen/möhren.jpg"
              );
              E1Eintopf.setAttribute("class", "foodpic");
              E1Eintopf.setAttribute("id", "eintopf");
              newentry.appendChild(E1Eintopf);
            }
            if (food[count].name == "Karamellpudding") {
              var E1Eintopf = document.createElement("img");
              E1Eintopf.setAttribute(
                "src",
                "images/Essen/Karamellpudding.jpg"
              );
              E1Eintopf.setAttribute("class", "foodpic");
              E1Eintopf.setAttribute("id", "eintopf");
              newentry.appendChild(E1Eintopf);
            }
            if (food[count].name == "Blumenkohl-Brokkoli-Gratin") {
              var E1Eintopf = document.createElement("img");
              E1Eintopf.setAttribute(
                "src",
                "images/Essen/brokoli.jpg"
              );
              E1Eintopf.setAttribute("class", "foodpic");
              E1Eintopf.setAttribute("id", "eintopf");
              newentry.appendChild(E1Eintopf);
            }
            var kategorie = document.createElement("div");
            kategorie.innerHTML = food[count].category;
            kategorie.setAttribute("class", "kategorie");
            if (
              food[count].category == "Wahlmenü (Komponente ohne Fleisch)"
            ) {
              var vegi = document.createElement("img");
              vegi.setAttribute("src", "images/vegetarian-mark.png");
              vegi.setAttribute("id", "vegilogo");
              newentry.appendChild(vegi);
            }
            if (food[count].category == "Menü") {
              var menulog = document.createElement("img");
              menulog.setAttribute("src", "images/menu_book-black-18dp.svg");
              menulog.setAttribute("id", "menulog");
              newentry.appendChild(menulog);
            }
            var infodetail = document.createElement("img");
            infodetail.setAttribute("src", "images/info-black-18dp.svg");
            infodetail.setAttribute("id", "detailinfo");

            var preis = document.createElement("div");
            if (JSON.parse(localStorage.getItem("studentcheck"))) {
              preis.innerHTML += food[count].prices.students + "€ ";
            }
            if (JSON.parse(localStorage.getItem("angestelltercheck"))) {
              preis.innerHTML += food[count].prices.employees + "€ ";
            }
            if (JSON.parse(localStorage.getItem("gastcheck"))) {
              preis.innerHTML += food[count].prices.others + "€";
            }

            preis.setAttribute("class", "preisstudents");

            table.appendChild(newentry);
            newentry.appendChild(gericht);
            newentry.appendChild(infodetail);

            newentry.appendChild(preis);
            break;

          }
          else {
            if (JSON.parse(localStorage.getItem("scheincheck"))) {
              if (urlnote[zahl] == "Schweinefleisch") {
                var gericht = document.createElement("div");
                gericht.innerHTML = food[count].name;
                gericht.setAttribute("class", "food");
  
                var defaultfoodpic = document.createElement("img");
                defaultfoodpic.setAttribute("src", "images/fooderror.jpeg");
                defaultfoodpic.setAttribute("class", "foodpic");
                newentry.appendChild(defaultfoodpic);
  
                if (food[count].name == "Erbseneintopf mit Mettenden") {
                  var E1Eintopf = document.createElement("img");
                  E1Eintopf.setAttribute(
                    "src",
                    "images/Erbsensuppe-Rezept-kochen-Eintopf-herzelieb-21.jpg"
                  );
                  E1Eintopf.setAttribute("class", "foodpic");
                  E1Eintopf.setAttribute("id", "eintopf");
                  newentry.appendChild(E1Eintopf);
                }
                var kategorie = document.createElement("div");
                kategorie.innerHTML = food[count].category;
                kategorie.setAttribute("class", "kategorie");
                if (food[count].category == "Eintopf") {
                  var kuh = document.createElement("img");
                  kuh.setAttribute("src", "images/kuh.png");
                  kuh.setAttribute("id", "kuh");
                  newentry.appendChild(kuh);
                }
                if (
                  food[count].category == "Wahlmenü (Komponente ohne Fleisch)"
                ) {
                  var vegi = document.createElement("img");
                  vegi.setAttribute("src", "images/vegetarian-mark.png");
                  vegi.setAttribute("id", "vegilogo");
                  newentry.appendChild(vegi);
                }
                if (food[count].category == "Menü") {
                  var menulog = document.createElement("img");
                  menulog.setAttribute("src", "images/menu_book-black-18dp.svg");
                  menulog.setAttribute("id", "menulog");
                  newentry.appendChild(menulog);
                }
                var infodetail = document.createElement("img");
                infodetail.setAttribute("src", "images/info-black-18dp.svg");
                infodetail.setAttribute("id", "detailinfo");
  
                var preis = document.createElement("div");
                if (JSON.parse(localStorage.getItem("studentcheck"))) {
                  preis.innerHTML += food[count].prices.students + "€ ";
                }
                if (JSON.parse(localStorage.getItem("angestelltercheck"))) {
                  preis.innerHTML += food[count].prices.employees + "€ ";
                }
                if (JSON.parse(localStorage.getItem("gastcheck"))) {
                  preis.innerHTML += food[count].prices.others + "€";
                }
  
                preis.setAttribute("class", "preisstudents");
  
                table.appendChild(newentry);
                newentry.appendChild(gericht);
                newentry.appendChild(infodetail);
  
                newentry.appendChild(preis);
                break;
              }
            }
            if (JSON.parse(localStorage.getItem("rindcheck"))) {
              if (urlnote[zahl] == "Rindfleisch") {
                var gericht = document.createElement("div");
                gericht.innerHTML = food[count].name;
                gericht.setAttribute("class", "food");
  
                var defaultfoodpic = document.createElement("img");
                defaultfoodpic.setAttribute("src", "images/fooderror.jpeg");
                defaultfoodpic.setAttribute("class", "foodpic");
                newentry.appendChild(defaultfoodpic);
  
                if (food[count].name == "Erbseneintopf mit Mettenden") {
                  var E1Eintopf = document.createElement("img");
                  E1Eintopf.setAttribute(
                    "src",
                    "images/Erbsensuppe-Rezept-kochen-Eintopf-herzelieb-21.jpg"
                  );
                  E1Eintopf.setAttribute("class", "foodpic");
                  E1Eintopf.setAttribute("id", "eintopf");
                  newentry.appendChild(E1Eintopf);
                }
                var kategorie = document.createElement("div");
                kategorie.innerHTML = food[count].category;
                kategorie.setAttribute("class", "kategorie");
                if (food[count].category == "Eintopf") {
                  var kuh = document.createElement("img");
                  kuh.setAttribute("src", "images/kuh.png");
                  kuh.setAttribute("id", "kuh");
                  newentry.appendChild(kuh);
                }
                if (
                  food[count].category == "Wahlmenü (Komponente ohne Fleisch)"
                ) {
                  var vegi = document.createElement("img");
                  vegi.setAttribute("src", "images/vegetarian-mark.png");
                  vegi.setAttribute("id", "vegilogo");
                  newentry.appendChild(vegi);
                }
                if (food[count].category == "Menü") {
                  var menulog = document.createElement("img");
                  menulog.setAttribute("src", "images/menu_book-black-18dp.svg");
                  menulog.setAttribute("id", "menulog");
                  newentry.appendChild(menulog);
                }
                var infodetail = document.createElement("img");
                infodetail.setAttribute("src", "images/info-black-18dp.svg");
                infodetail.setAttribute("id", "detailinfo");
  
                var preis = document.createElement("div");
                if (JSON.parse(localStorage.getItem("studentcheck"))) {
                  preis.innerHTML += food[count].prices.students + "€ ";
                }
                if (JSON.parse(localStorage.getItem("angestelltercheck"))) {
                  preis.innerHTML += food[count].prices.employees + "€ ";
                }
                if (JSON.parse(localStorage.getItem("gastcheck"))) {
                  preis.innerHTML += food[count].prices.others + "€";
                }
  
                preis.setAttribute("class", "preisstudents");
  
                table.appendChild(newentry);
                newentry.appendChild(gericht);
                newentry.appendChild(infodetail);
  
                newentry.appendChild(preis);
              }
            }
            if (JSON.parse(localStorage.getItem("vagancheck"))) {
              if (urlnote[zahl] == "vegan") {
                var gericht = document.createElement("div");
                gericht.innerHTML = food[count].name;
                gericht.setAttribute("class", "food");
  
                var defaultfoodpic = document.createElement("img");
                defaultfoodpic.setAttribute("src", "images/fooderror.jpeg");
                defaultfoodpic.setAttribute("class", "foodpic");
                newentry.appendChild(defaultfoodpic);
  
                if (food[count].name == "Erbseneintopf mit Mettenden") {
                  var E1Eintopf = document.createElement("img");
                  E1Eintopf.setAttribute(
                    "src",
                    "images/Erbsensuppe-Rezept-kochen-Eintopf-herzelieb-21.jpg"
                  );
                  E1Eintopf.setAttribute("class", "foodpic");
                  E1Eintopf.setAttribute("id", "eintopf");
                  newentry.appendChild(E1Eintopf);
                }
                var kategorie = document.createElement("div");
                kategorie.innerHTML = food[count].category;
                kategorie.setAttribute("class", "kategorie");
                if (food[count].category == "Eintopf") {
                  var kuh = document.createElement("img");
                  kuh.setAttribute("src", "images/kuh.png");
                  kuh.setAttribute("id", "kuh");
                  newentry.appendChild(kuh);
                }
                if (
                  food[count].category == "Wahlmenü (Komponente ohne Fleisch)"
                ) {
                  var vegi = document.createElement("img");
                  vegi.setAttribute("src", "images/vegetarian-mark.png");
                  vegi.setAttribute("id", "vegilogo");
                  newentry.appendChild(vegi);
                }
                if (food[count].category == "Menü") {
                  var menulog = document.createElement("img");
                  menulog.setAttribute("src", "images/menu_book-black-18dp.svg");
                  menulog.setAttribute("id", "menulog");
                  newentry.appendChild(menulog);
                }
                var infodetail = document.createElement("img");
                infodetail.setAttribute("src", "images/info-black-18dp.svg");
                infodetail.setAttribute("id", "detailinfo");
  
                var preis = document.createElement("div");
                if (JSON.parse(localStorage.getItem("studentcheck"))) {
                  preis.innerHTML += food[count].prices.students + "€ ";
                }
                if (JSON.parse(localStorage.getItem("angestelltercheck"))) {
                  preis.innerHTML += food[count].prices.employees + "€ ";
                }
                if (JSON.parse(localStorage.getItem("gastcheck"))) {
                  preis.innerHTML += food[count].prices.others + "€";
                }
  
                preis.setAttribute("class", "preisstudents");
  
                table.appendChild(newentry);
                newentry.appendChild(gericht);
                newentry.appendChild(infodetail);
  
                newentry.appendChild(preis);
              }
            }
            if (JSON.parse(localStorage.getItem("vegicheck"))) {
              if (urlnote[zahl] == "ohne Fleisch") {
                var gericht = document.createElement("div");
                gericht.innerHTML = food[count].name;
                gericht.setAttribute("class", "food");
  
                var defaultfoodpic = document.createElement("img");
                defaultfoodpic.setAttribute("src", "images/fooderror.jpeg");
                defaultfoodpic.setAttribute("class", "foodpic");
                newentry.appendChild(defaultfoodpic);
  
                if (food[count].name == "Erbseneintopf mit Mettenden") {
                  var E1Eintopf = document.createElement("img");
                  E1Eintopf.setAttribute(
                    "src",
                    "images/Erbsensuppe-Rezept-kochen-Eintopf-herzelieb-21.jpg"
                  );
                  E1Eintopf.setAttribute("class", "foodpic");
                  E1Eintopf.setAttribute("id", "eintopf");
                  newentry.appendChild(E1Eintopf);
                }
                var kategorie = document.createElement("div");
                kategorie.innerHTML = food[count].category;
                kategorie.setAttribute("class", "kategorie");
                if (food[count].category == "Eintopf") {
                  var kuh = document.createElement("img");
                  kuh.setAttribute("src", "images/kuh.png");
                  kuh.setAttribute("id", "kuh");
                  newentry.appendChild(kuh);
                }
                if (
                  food[count].category == "Wahlmenü (Komponente ohne Fleisch)"
                ) {
                  var vegi = document.createElement("img");
                  vegi.setAttribute("src", "images/vegetarian-mark.png");
                  vegi.setAttribute("id", "vegilogo");
                  newentry.appendChild(vegi);
                }
                if (food[count].category == "Menü") {
                  var menulog = document.createElement("img");
                  menulog.setAttribute("src", "images/menu_book-black-18dp.svg");
                  menulog.setAttribute("id", "menulog");
                  newentry.appendChild(menulog);
                }
                var infodetail = document.createElement("img");
                infodetail.setAttribute("src", "images/info-black-18dp.svg");
                infodetail.setAttribute("id", "detailinfo");
  
                var preis = document.createElement("div");
                if (JSON.parse(localStorage.getItem("studentcheck"))) {
                  preis.innerHTML += food[count].prices.students + "€ ";
                }
                if (JSON.parse(localStorage.getItem("angestelltercheck"))) {
                  preis.innerHTML += food[count].prices.employees + "€ ";
                }
                if (JSON.parse(localStorage.getItem("gastcheck"))) {
                  preis.innerHTML += food[count].prices.others + "€";
                }
  
                preis.setAttribute("class", "preisstudents");
  
                table.appendChild(newentry);
                newentry.appendChild(gericht);
                newentry.appendChild(infodetail);
  
                newentry.appendChild(preis);
              }
            }
          }
          
        }
       

      }
    });
};
