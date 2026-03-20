// add links to the html
const myNavigation = document.querySelector("nav");
const myViewer = document.querySelector("main");

// go grab the data and then WAIT for the result
fetch("../data/starships.json")
  .then((response) => response.json())
  .then((shipArray) => {
    console.log(shipArray);
    populateNav(shipArray);
  });

// populate the nav bar
function populateNav(allShips) {
  console.log(allShips);
  allShips.forEach((ship) => {
    let myButton = document.createElement("button");
    myButton.textContent = ship.name;
    myButton.addEventListener("click", () => showShip(ship));
    myNavigation.appendChild(myButton);
  }); // end of the loop
} // end of nav populate

// ship viewer
function showShip(x) {
  console.log(x.model);
}
