const calendar = document.querySelector("#app-calendar");

for( let day = 1; day < 31; day++){
    console.log(day)
calendar.insertAdjacentHTML("bevoreend", <div class="day"> ${day}</div>);

}

