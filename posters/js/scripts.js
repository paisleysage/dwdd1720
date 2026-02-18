const btnList = document.querySelector("#list");
const btnGrid = document.querySelector("#grid");
const pageBody = document.querySelector("body");

btnList.addEventListener("click", () => (pageBody.className = "list"));
btnGrid.addEventListener("click", () => (pageBody.className = "grid"));

import { films } from "../data/films.js";

const myTarget = document.querySelector("#cards");

for (let x = 0; x < films.length; x++) {
  console.log(`film: ${films[x]}`);
  let barDiv = document.createElement("div");

  barDiv.classList.add("bar");

  barDiv.innerHTML = `<h2>${films[x].title}</h2>`;

  let myImage = document.createElement("img");
  myImage.setAttribute("src", `./images/${films[x].episode_id}.jpeg`);
  myImage.setAttribute("alt", films[x].title);

  let myCaption = document.createElement("figcaption");
  myCaption.innerHTML = `Director: ${films[x].director} <br>Producer: ${films[x].producer} <br>Release Date: ${films[x].release_date}`;

  myCaption.classList.add("caption");

  let myFigure = document.createElement("figure");

  myFigure.appendChild(barDiv);
  myFigure.appendChild(myImage);
  myFigure.appendChild(myCaption);

  myTarget.appendChild(myFigure);
} // end of loop
