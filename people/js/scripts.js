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
      const explodedArray = person.url.split("/");
      const charNumber = explodedArray[5];
      myImage.src = `https://resources.dgmuvu.com/characters/${charNumber}.jpg`;
      myImage.alt = person.name;

      const myCaption = document.createElement("figcaption");
      myCaption.textContent = person.name;

      // assign gender class
      console.log(person.gender);
      switch (person.gender) {
        case "female":
          myFigure.className = "female";
          break;
        case "male":
          myFigure.className = "male";
          break;
        default:
          myFigure.className = "other";
      } // end of switch

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
