function updateTime() {
  let johannesburgElement = document.querySelector("#johannesburg");
  let johannesburgDateElement = johannesburgElement.querySelector(".date");
  let johannesburgTimeElement = johannesburgElement.querySelector(".time");
  let johannesburgTime = moment().tz("Africa/Johannesburg");

  johannesburgDateElement.innerHTML =
    johannesburgTime.format(" MMMM D dddd  YYYY");
  johannesburgTimeElement.innerHTML = johannesburgTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  //Miami
  let miamiElement = document.querySelector("#miami");
  let miamiDateElement = miamiElement.querySelector(".date");
  let miamiTimeElement = miamiElement.querySelector(".time");
  let miamiTime = moment().tz("America/New_York");

  miamiDateElement.innerHTML = miamiTime.format(" MMMM D ddd YYYY");
  miamiTimeElement.innerHTML = miamiTime.format("h:mm:ss [<small>]A[</small>]");
}
setInterval(updateTime, 1000);
updateTime();
