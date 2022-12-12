let blueBtn = document.getElementById("blueBtn")
let redBtn = document.getElementById("redBtn")
let greenBtn = document.getElementById("greenBtn")
let greyBtn = document.getElementById("greyBtn")
let yellowBtn = document.getElementById("yellowBtn")
let blackBtn = document.getElementById("blackBtn")
let bodyColor = document.querySelector("body")


function makeBlue() {
    bodyColor.style = "background-color: #0d6efd"
}
function makeRed() {
    bodyColor.style = "background-color: #dc3545"
}
function makeGreen() {
    bodyColor.style = "background-color: #198754"
}
function makeGrey() {
    bodyColor.style = "background-color: #198754"
}
function makeYellow() {
    bodyColor.style = "background-color: #ffc107"
}
function makeBlack() {
    bodyColor.style = "background-color: #212529"
}
debugger
bodyColor.style = "background-color: skyblue"

blueBtn.addEventListener("click", makeBlue)
redBtn.addEventListener("click", makeRed)
greenBtn.addEventListener("click", makeGreen)
greyBtn.addEventListener("click", makeGreen)
yellowBtn.addEventListener("click", makeYellow)
blackBtn.addEventListener("click",makeBlack)