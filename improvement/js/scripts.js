document.querySelector('#calculate').addEventListener('click', () => {
const width = Number (document.querySelector('#width').value);
console.log(width);

const depth = Number (document.querySelector('#depth').value);
console.log(depth);

const height = Number (document.querySelector('#height').value);
console.log(height);

const paintType = document.querySelector('#quality').selectedOptions[0].text;
console.log(paintType)

const quality = document.querySelector('#quality').selectedOptions[0].value;
console.log(quality)

let carpet = Math.ceil((width * depth) /9)
console.log(carpet + " yards of carpet")

let tackstrip = width + depth + width + depth
console.log(tackstrip + " feet of tackstrip")

let walls = ((width * height) + (depth * height)) * 2
walls = Math.ceil(walls/quality)
console.log(walls + " gallons of semi-gloss paint for the walls")

let ceiling = Math.ceil((width * depth) / quality)
console.log(ceiling + " gallons of flat paint for the ceiling")

let primer = ceiling + walls
console.log(primer + " gallons of primer")

}) // end of the calculate function