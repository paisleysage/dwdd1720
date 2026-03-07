import { senators } from "../data/senators.js";

// tag the html elements
const myNavigation = document.querySelector("nav");
const myParent = document.querySelector("#senatorsHere");

// create an all senators button
const btnAll = document.createElement("button");
btnAll.textContent = "All Senators";
btnAll.addEventListener("click", () => {
  displaySenators(senators);
});

// create a women button
const btnWomen = document.createElement("button");
btnWomen.classList.add("women");
btnWomen.textContent = "Women";
btnWomen.addEventListener("click", () => {
  const arrayWomen = senators.filter((person) => person.gender === "F");
  displaySenators(arrayWomen);
}); // end of button

// create a men button
const btnMen = document.createElement("button");
btnMen.classList.add("men");
btnMen.textContent = "Men";
btnMen.addEventListener("click", () => {
  const arrayMen = senators.filter((person) => person.gender === "M");
  displaySenators(arrayMen);
}); // end of button

// create a republican button
const btnRep = document.createElement("button");
btnRep.classList.add("republican");
btnRep.textContent = "Republicans";
btnRep.addEventListener("click", () => {
  const arrayRep = senators.filter((person) => person.party === "R");
  displaySenators(arrayRep);
}); // end of button

// create a democrat button
const btnDem = document.createElement("button");
btnDem.classList.add("democrat");
btnDem.textContent = "Democrats";
btnDem.addEventListener("click", () => {
  const arrayDem = senators.filter((person) => person.party === "D");
  displaySenators(arrayDem);
}); // end of button

// add buttons to page
myNavigation.appendChild(btnAll);
myNavigation.appendChild(btnWomen);
myNavigation.appendChild(btnMen);
myNavigation.appendChild(btnRep);
myNavigation.appendChild(btnDem);

// loop through all the people
function displaySenators(x) {
  myParent.textContent = "";
  x.forEach(
    (senators) => {
      const myFigure = document.createElement("figure");

      const myImage = document.createElement("img");

      myImage.src = `https://unitedstates.github.io/images/congress/225x275/${senators.id}.jpg`;
      myImage.alt = senators.first_name + senators.last_name;

      const myName = document.createElement("figcaption");
      myName.textContent = `${senators.first_name} ${senators.last_name}`;
      myName.classList.add("my-name");

      console.log(senators.first_name);
      console.log(senators.last_name);

      const myState = document.createElement("figcaption");
      myState.textContent = `State: ${senators.state}`;
      myState.classList.add("my-state");

      const myPhone = document.createElement("figcaption");
      myPhone.textContent = senators.phone;
      myPhone.classList.add("my-phone");

      const myOffice = document.createElement("figcaption");
      myOffice.textContent = senators.office;
      myOffice.classList.add("my-office");

      // assign gender class
      console.log(senators.gender);
      switch (senators.gender) {
        case "F":
          myFigure.className = "women";
          break;
        case "M":
          myFigure.className = "men";
          break;
      } // end of switch

      // assign party class
      console.log(senators.party);
      switch (senators.party) {
        case "R":
          myFigure.className = "republican";
          break;
        case "D":
          myFigure.className = "democrat";
          break;
      } // end of switch

      // assemble the parts
      myFigure.appendChild(myName);
      myFigure.appendChild(myImage);
      myFigure.appendChild(myState);
      myFigure.appendChild(myPhone);
      myFigure.appendChild(myOffice);

      // attach to HTML page
      myParent.appendChild(myFigure);
    }, // end of fat arrow function
  ); //end of the loop
} // end of function

// call the function
displaySenators(senators);
