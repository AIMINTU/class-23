//console.log("paiche2")
//  const newValue=document.getElementById("player-container")
//  //console.log(newValue.getAttribute("class"))
//  newValue.classList.add("newClass")
//  newValue.classList.remove("player-container")
//  console.log(newValue)
// const newvalue=newValue.getAttribute('class')
// console.log(newvalue)
// taka=newValue.classList.add("newClass")
const taka=document.getElementById('shanto')
taka.setAttribute('title',"Shanto re dekhte chai")
console.log(taka.innerText)
const dhaka=document.getElementById("cricket-team")
dhaka.innerHTML="<h4>this is from java new<h4>"

//console.log(dhaka.innerHTML)
console.log(dhaka)
const khulna=document.getElementById('cricket-team')
khulna.innerHTML=`
<ul> <li>this is from new.js</li>
    <li>this is from new.js</li>
    <li>this is from new.js</li>
<ul>`

// console.log(khulna)
// const Modi=document.getElementById('shanto')
// Modi.classList.add('first-list')
// console.log(Modi)

// const cannes=document.getElementById('Nam')
// cannes.style.color="red"
// cannes.style.backgroundColor="violet"
// cannes.style.padding="50px"
// cannes.style.border="20px dotted yellow"
// cannes.style.border="20px solid yellow"
// cannes.style.margin="50";
// console.log(cannes)
// const annecy=document.getElementById('player-container')
// annecy.childNotes
// console.log(annecy)
// const paragraph=document.createElement('p')
// paragraph.innerText="Hello from the other side"
// //console.log(paragraph)
// const section=document.getElementById('player-container')
// section.appendChild(paragraph)

const sections=document.createElement('section')
sections.setAttribute('id',"new-section")
const h2=document.createElement('h2')
h2.innerText="Last 10 years people in Dhaka changed lot"
const ul=document.createElement('ul')
const li1=document.createElement('li')
li1.innerText="We need to clean our city"
const li2=document.createElement('li')
li2.innerText="Now dhaka is very clean city"
ul.appendChild(li1)
ul.appendChild(li2)
sections.appendChild(h2)
sections.appendChild(ul)
const body=document.getElementById('container')
body.appendChild(sections)

console.log(body)
const newSection=document.getElementById('new-section')
console.log(newSection.firstChild)
newSection.firstChild.style.color="white"
newSection.firstChild.style.backgroundColor="purple"
newSection.firstChild.style.padding="40px"