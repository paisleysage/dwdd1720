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


let myCaption = document.createElement('figcaption')
myCaption.innerHTML = `Served ${presidents[x].took_office} to ${presidents[x].left_office} <br>Lived from ${presidents[x].born} to ${presidents[x].died} <br>Member of ${presidents[x].party} Party`

myTarget.appendChild(barDiv)
myTarget.appendChild(myImage)
myTarget.appendChild(myCaption)


} // end of loop