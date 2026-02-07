import {presidents} from '../data/presidents.js'
console.log(presidents)

const pathStart = "//resources.dgmuvu.com/presidents/"

const myTarget = document.querySelector('#cards')

for (let x = 0; x < presidents.length; x++) {
let barDiv = document.createElement('div')
barDiv.innerHTML = `<p>${presidents[x].name}</p>`

let myImage = document.createElement('img')
myImage.setAttribute("src", pathStart+presidents[x].photo)
myImage.setAttribute("alt", presidents[x].name)


myTarget.appendChild(barDiv)
myTarget.appendChild(myImage)


} // end of loop