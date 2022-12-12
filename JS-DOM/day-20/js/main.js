document.getElementById("helloText").innerHTML = "hello world"

document.getElementsByClassName("dummy")[0].innerHTML = "Dummy"

console.log(document.getElementsByClassName("dummy")[0])

console.log(document.querySelector("#aimagNames"))
console.log(document.querySelector(".khangai"))
console.log(document.querySelectorAll(".khangai"))
console.log(document.getElementsByClassName("khangai"))

document.getElementById("demo").innerHTML = "Date : " + Date()

document.querySelector("img").src = "img/pic.svg"
document.querySelector("img").style = "height: 300px;"

const newDiv = document.createElement("h2");
const newContent = document.createTextNode("Манай сайтад тавтай морил");
newDiv.appendChild(newContent);
const h1 = document.querySelector("h1");
h1.appendChild(newDiv);