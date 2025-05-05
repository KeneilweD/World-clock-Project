function updateTime() {
  let johannesburgElement = document.querySelector("#johannesburg");
  if (johannesburgElement) {
    let johannesburgDateElement = johannesburgElement.querySelector(".date");
    let johannesburgTimeElement = johannesburgElement.querySelector(".time");
    let johannesburgTime = moment().tz("Africa/Johannesburg");

    johannesburgDateElement.innerHTML =
      johannesburgTime.format(" MMMM D dddd  YYYY");
    johannesburgTimeElement.innerHTML = johannesburgTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  //Miami
  let miamiElement = document.querySelector("#miami");
  if (miamiElement) {
    let miamiDateElement = miamiElement.querySelector(".date");
    let miamiTimeElement = miamiElement.querySelector(".time");
    let miamiTime = moment().tz("America/New_York");

    miamiDateElement.innerHTML = miamiTime.format(" MMMM D ddd YYYY");
    miamiTimeElement.innerHTML = miamiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
  // Dubai
  //Photo by <a href="https://unsplash.com/@jnate?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Nathan John</a> on <a href="https://unsplash.com/photos/skyline-city-panorama-EX-DhiCkjyA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>

  let dubaiElement = document.querySelector("#dubai");
  if (dubaiElement) {
    let dubaiDateElement = dubaiElement.querySelector(".date");
    let dubaiTimeElelemt = dubaiElement.querySelector(".time");
    let dubaiTime = moment().tz("Asia/Dubai");

    dubaiDateElement.innerHTML = dubaiTime.format("dddd, MMMM D, YYYY");
    dubaiTimeElelemt.innerHTML = dubaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}
setInterval(updateTime, 1000);
updateTime();

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` <div class="city" id="miami">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:m:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div> 
         <a href="/">All cities</a>`;
}

let citySelect = document.querySelector("#city");
citySelect.addEventListener("change", updateCity);
