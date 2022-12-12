let myButton = document.getElementById("myButton")
console.log(myButton)


let value = 0

function changeColor() {

    if (value == 0) {
        myButton.style = "background-color: green"
        value = 1

    } else {
        myButton.style = "background-color: white"
        value = 0

    }
}

myButton.addEventListener("click", changeColor)


let arrowFunc = () => {

}

// myButton.addEventListener("click", () => {
//     myButton.style = "background-color: red"
// })

let registerButton = document.querySelector("#register")

registerButton.disabled = true
document.getElementById("register").disabled = true

