import { jellycat } from "../data/jellycat.js";
// console.log(jellycat);

// grab html references
const myNav = document.querySelector("nav");
const myViewer = document.querySelector("#viewer");

// nav items
jellycat.forEach((jellycat) => {
  console.log(jellycat);
  const myButton = document.createElement("button");
  myButton.textContent = jellycat.name;
  myButton.addEventListener("click", () => showJellycat(jellycat));
  myNav.appendChild(myButton);
});

function showJellycat(jellycat) {
  console.log(jellycat);

  let jellycatSection = document.createElement("section");
  let jellycatName = document.createElement("h2");
  let jellycatPrice = document.createElement("p");
  let jellycatPhoto = document.createElement("img");
  let jellycatDescription = document.createElement("p");
  let jellycatFeatures = document.createElement("ul");

  jellycatName.textContent = `${jellycat.name}`;
  jellycatPrice.textContent = `Price: ${jellycat.price}`;
  jellycatPhoto.src = `images/${jellycat.image}`;
  jellycatPhoto.alt = jellycat.name;
  jellycatDescription.textContent = `${jellycat.description}`;
  jellycat.features.forEach((feature) => {
    // console.log(feature);
    let theFeature = document.createElement("li");
    theFeature.textContent = feature;
    jellycatFeatures.appendChild(theFeature);
  });

  // assemble the card
  jellycatSection.appendChild(jellycatName);
  jellycatSection.appendChild(jellycatPhoto);
  jellycatSection.appendChild(jellycatDescription);
  jellycatSection.appendChild(jellycatPrice);
  jellycatSection.appendChild(jellycatFeatures);
  myViewer.textContent = "";
  myViewer.appendChild(jellycatSection);
} // end of the function
