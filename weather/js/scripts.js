// write a default zipcode
let zip = "84120";

// set path to api on weather
const myKey = `14d39f65902a70efe1d8e665dbd48f84`;
const myPath = `https://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=${myKey}&units=imperial`;

// fetch remote json data for the current weather
fetch(myPath)
  .then((response) => response.json())
  .then((allData) => {
    console.log(allData);
  });

// function thta displays the current weather

// ask for a new zipcode

// data validation for the zipcode
