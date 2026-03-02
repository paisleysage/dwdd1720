import { people } from "../data/people.js";
console.log(people);

// tag the html elements
const myNavigation = document.querySelector("nav");
const myParent = document.querySelector("#peopleHere");

// loop through all the people
function displayPeople(x) {
  x.forEach(
    (person) => {
      const myFigure = document.createElement("figure");

      const myImage = document.createElement("img");

      const myCaption = document.createElement("figcaption");
      myCaption.textContent = person.name;
      // assemble the parts
      myFigure.appendChild(myImage);
      myFigure.appendChild(myCaption);

      // attach to HTML page
      myParent.appendChild(myFigure);
    }, // end of fat arrow function
  ); //end of the loop
} // end of function

// call the function
displayPeople(people);
