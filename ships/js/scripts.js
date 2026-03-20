// add links to the html
const myNavigation = document.querySelector("nav");
const myViewer = document.querySelector("main");

// go grab the data and then WAIT for the result
fetch("../data/starships.json")
  .then((response) => response.json())
  .then((shipArray) => {
    populateNav(shipArray);
  });

// populate the nav bar
function populateNav(allShips) {
  allShips.forEach((ship) => {
    let myButton = document.createElement("button");
    myButton.textContent = ship.name;
    myButton.addEventListener("click", () => showShip(ship));
    myNavigation.appendChild(myButton);
  }); // end of the loop
} // end of nav populate

// ship viewer
function showShip(shipData) {
  console.log(shipData);

  // create a figure and its parts
  let myFigure = document.createElement("figure");
  let myImage = document.createElement("img");
  let myCaption = document.createElement("figcaption");

  // assign data to the figure
  console.log(shipData.url);
  let urlArray = shipData.url.split("/");
  console.log(urlArray[5]);
  myImage.src = `https://resources.dgmuvu.com/ships/${urlArray[5]}.jpg`;
  myCaption.textContent = shipData.name;

  // assemble the figure
  myFigure.appendChild(myImage);
  myFigure.appendChild(myCaption);

  // add figure to html
  myViewer.textContent = "";
  myViewer.appendChild(myFigure);
}
