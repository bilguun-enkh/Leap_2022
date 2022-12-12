function randomNumber() {
    let number = Math.ceil(Math.random() * 7)
    console.log(number)
    if (number == 1) {
        bodyColor.style = "background-color: red"
    }
    else if (number == 2) {
        bodyColor.style = "background-color: orange"
    }
    else if (number == 3) {
        bodyColor.style = "background-color: yellow"
    }
    else if (number == 4) {
        bodyColor.style = "background-color: green"
    }
    else if (number == 5) {
        bodyColor.style = "background-color: blue"
    }
    else if (number == 6) {
        bodyColor.style = "background-color: indigo"
    }
    else if (number == 7) {
        bodyColor.style = "background-color: violet"
    }
    else {
        bodyColor.style = "background-color: white"
    }
}
let bodyColor = document.querySelector("body")
let randomBtn = document.getElementById("randomBtn")

randomBtn.addEventListener("click", randomNumber)