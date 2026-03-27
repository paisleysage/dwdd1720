// referneces to the html
const parentTag = document.querySelector("#weatherCard");

// write a default zipcode
let zip = localStorage.getItem("myZipCode");
if (zip == null) {
  let defaultZip = "84120";
  localStorage.setItem("myZipCode", defaultZip);
  zip = defaultZip;
} // end if

console.log(zip);

// set path to api on weather
const myKey = `14d39f65902a70efe1d8e665dbd48f84`;
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`;

// fetch remote json data for the current weather
fetch(myPath)
  .then((response) => response.json())
  .then((allData) => {
    console.log(allData);
    currentWeather(allData);
  });

// function thta displays the current weather
function currentWeather(weatherResults) {
  console.log(weatherResults);
  console.log(weatherResults.name);
  console.log(weatherResults.main.temp);
  console.log(weatherResults.weather[0].icon);

  // current date
  const myDate = document.createElement("p");
  myDate.className = "date";
  const d = new Date();
  myDate.textContent = d.toDateString();
  parentTag.appendChild(myDate);

  // current icon
  const myWeatherIcon = document.createElement("img");
  // myWeatherIcon.src = `https://openweathermap.org/payload/api/media/file/${weatherResults.weather[0].icon}%402x.png`;
  myWeatherIcon.src = `https://openweathermap.org/img/wn/${weatherResults.weather[0].icon}@2x.png`;
  myWeatherIcon.alt = weatherResults.weather[0].description;
  parentTag.appendChild(myWeatherIcon);

  // current temp
  myCurrentTemp = document.createElement("p");
  myCurrentTemp.className = "temp";
  myCurrentTemp.innerHTML = weatherResults.main.temp + "&deg;F";
  parentTag.appendChild(myCurrentTemp);
} // end of current weather

// ask for a new zipcode

// data validation for the zipcode
