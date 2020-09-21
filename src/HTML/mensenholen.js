  
const mensen_liste = document.getElementById("mensen_liste");
var alle_mensen = [];
const mensen = fetch("https://openmensa.org/api/v2/canteens/")
  .then(response => response.json())
  .then(mensen => {
    var count = 0; 
    for (count in mensen){
      var i = 0; 
      var isNew = true;
      for (i=0; i <alle_mensen.length; i++){
        if (mensen[count].mensen === alle_mensen[i]){
          isNew = false;
        }
      }
      if (isNew){
        alle_mensen.push(mensen[count].name);
      }
    }
    var x = 0; 
    for (x = 0; x < alle_mensen.length; x++){
      var newMensenOption = document.createElement("option");
      newMensenOption.setAttribute("value", alle_mensen[x]);
      newMensenOption.setAttribute("class", "mensen-option");
      newMensenOption.innerText = alle_mensen[x];
      mensen_liste.appendChild(newMensenOption)
    }
    
  });