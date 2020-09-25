 /**
 * Definiert neue Konstanten die er sich aus der Query holt
 * @constant {button} Suchbutton
 * @constant {input} InputField
 * @constant {String} MensenListe
 * @constant {fetch} Id von der API
 * @return Name, City, Adresse und Id der Mensen aus der API
 * 
 * externe Quelle: https://www.youtube.com/watch?v=JJatzkPcmoI
 */

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

 /**
 * If Abfragen nach InputValue, for Schleife um den neu erstellten Array durchzugehen
 * @return input value + übereinstimmende Mensa
 * @return Mensen werden mit allen Werten ausgegeben 
 */

      var x = 0;
      for (x = 0; x < alle_mensen.length; x++) {
        if (alle_mensen[x][0].includes(input.value)) {
          var newentry = document.createElement("tr");
          newentry.setAttribute("class", "tabelle");
          newentry.setAttribute("id", "background");
          mensen_liste.appendChild(newentry);

          var newMensenOption = document.createElement("div");
          newMensenOption.setAttribute("value", alle_mensen[x].city);
          newMensenOption.setAttribute("class", "mensen-option");
          newMensenOption.innerText = alle_mensen[x][0];
          newentry.appendChild(newMensenOption);

          if (alle_mensen[x] == "Mensa HTW Wilhelminenhof") {
            console.log("wilhelm");
            var wilhelmpic = document.createElement("img");
            wilhelmpic.setAttribute(
              "src",
              "images/bildermensen/sized/wilhelm.jpg"
            );
            wilhelmpic.setAttribute("class", "wilhelminenhof");
            newentry.appendChild(wilhelmpic);
    
          } else if (alle_mensen[x] == "Mensa Wernigerode") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/weni.jpg");
            wernipic.setAttribute("class", "wenipic");
            newentry.appendChild(wernipic);
    
          } 
          else if (alle_mensen[x] == "DomCafete Halberstadt") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/halberstadt.jpg");
            wernipic.setAttribute("class", "halberstadt");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Hannover Hauptmensa") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Hannover, Contine") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa Caballus") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa HMTMH") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa TiHo-Tower") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa TiHo-Tower") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa HMTMH") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa Ricklinger Stadtweg") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Hannover, Mensa Große Pause") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Hannover, Cafeteria Herrenhausen") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Hannover Hauptmensa Marktstand") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
            wernipic.setAttribute("class", "hannover");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "ensa FU II Otto-von-Simson-Straße") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
            wernipic.setAttribute("class", "mensafu");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa FU II Otto-von-Simson-Straße") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
            wernipic.setAttribute("class", "mensafu");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa FU II Otto-von-Simson-Straße") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
            wernipic.setAttribute("class", "mensafu");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa FU Herrenhaus Düppel") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
            wernipic.setAttribute("class", "mensafu");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa FU Lankwitz Malteserstraße") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
            wernipic.setAttribute("class", "mensafu");
            newentry.appendChild(wernipic);
    
          }
          else if (alle_mensen[x] == "Mensa HTW Treskowallee") {
            console.log("werni");
            var wernipic = document.createElement("img");
            wernipic.setAttribute("src", "images/bildermensen/sized/treskow.jpg");
            wernipic.setAttribute("class", "treskow");
            newentry.appendChild(wernipic);
    
          }
          else {
            console.log("default");
            var defaultmensapic = document.createElement("img");
            defaultmensapic.setAttribute("src", "images/mensadefault.jpg");
            defaultmensapic.setAttribute("class", "defaultmensapic");
            newentry.appendChild(defaultmensapic);
          }

          var mensadetail = document.createElement("div");
          mensadetail.setAttribute("class", "mensadetailclasse");
          mensadetail.setAttribute("id", "mensadetailID");

          mensadetail.innerHTML =
            "Stadt:<br>" +
            alle_mensen[x][1] +
            "<br><br>Adresse:<br>" +
            alle_mensen[x][2] +
            "<br>";

          newentry.appendChild(defaultmensapic);
          newentry.appendChild(mensadetail);
        }
      }
    });
};

 /**
 * Legt fest welche Mensen welches Bild erhalten
 * @return bestimmte Mensen erhalten ein Bild wenn nach diesen gesucht werden
 * 
 */

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
        alle_mensen.push(mensen[count].name);
      }
    }
    var x = 0;
    for (x = 0; x < alle_mensen.length; x++) {
      var newentry = document.createElement("tr");
      newentry.setAttribute("class", "tabelle");
      mensen_liste.appendChild(newentry);

      var newMensenOption = document.createElement("div");
      newMensenOption.setAttribute("value", alle_mensen[x]);
      newMensenOption.setAttribute("class", "mensen-option");
      newMensenOption.innerText = alle_mensen[x];
      newentry.appendChild(newMensenOption);
      console.log(alle_mensen[x]);
      if (alle_mensen[x] == "Mensa HTW Wilhelminenhof") {
        console.log("wilhelm");
        var wilhelmpic = document.createElement("img");
        wilhelmpic.setAttribute(
          "src",
          "images/bildermensen/sized/wilhelm.jpg"
        );
        wilhelmpic.setAttribute("class", "wilhelminenhof");
        newentry.appendChild(wilhelmpic);

      } else if (alle_mensen[x] == "Mensa Wernigerode") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/weni.jpg");
        wernipic.setAttribute("class", "wenipic");
        newentry.appendChild(wernipic);

      } 
      else if (alle_mensen[x] == "DomCafete Halberstadt") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/halberstadt.jpg");
        wernipic.setAttribute("class", "halberstadt");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Hannover Hauptmensa") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Hannover, Contine") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa Caballus") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa HMTMH") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa TiHo-Tower") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa TiHo-Tower") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa HMTMH") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa Ricklinger Stadtweg") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Hannover, Mensa Große Pause") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Hannover, Cafeteria Herrenhausen") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Hannover Hauptmensa Marktstand") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/hannover.jpg");
        wernipic.setAttribute("class", "hannover");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "ensa FU II Otto-von-Simson-Straße") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
        wernipic.setAttribute("class", "mensafu");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa FU II Otto-von-Simson-Straße") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
        wernipic.setAttribute("class", "mensafu");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa FU II Otto-von-Simson-Straße") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
        wernipic.setAttribute("class", "mensafu");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa FU Herrenhaus Düppel") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
        wernipic.setAttribute("class", "mensafu");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa FU Lankwitz Malteserstraße") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/mensafu.jpg");
        wernipic.setAttribute("class", "mensafu");
        newentry.appendChild(wernipic);

      }
      else if (alle_mensen[x] == "Mensa HTW Treskowallee") {
        console.log("werni");
        var wernipic = document.createElement("img");
        wernipic.setAttribute("src", "images/bildermensen/sized/treskow.jpg");
        wernipic.setAttribute("class", "treskow");
        newentry.appendChild(wernipic);

      }
      else {
        console.log("default");
        var defaultmensapic = document.createElement("img");
        defaultmensapic.setAttribute("src", "images/mensadefault.jpg");
        defaultmensapic.setAttribute("class", "defaultmensapic");
        newentry.appendChild(defaultmensapic);
      }
    }
  });
