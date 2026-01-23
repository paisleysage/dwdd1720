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

}) // end of the calculate function