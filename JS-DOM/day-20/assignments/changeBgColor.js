let buttonChange = document.querySelector("#buttonChange")
let redBack = document.querySelector("#redBack")
let yellowBack = document.querySelector("#yellowBack")
buttonChange.addEventListener("click", () => {
    redBack.style = "background-color: red; font-size: 20px; color: white; font-family: Geneva; padding: 20px;"
    yellowBack.style = "background-color:yellow; font-size: 20px; color: red; font-family: Geneva; padding: 20px"
})