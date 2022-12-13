console.log(window)
// window.alert("hello")

// window.open("https://google.com", "hello")
// let result = window.confirm("Do you want to quit?")
// let message = result ? "OK?": "Cancel?";
// alert(message)

let timeoutID;



// let counter = 0;
// 

function startInterval() {
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    setInterval(startInterval, 1000)
    myTimer.innerHTML = now
}
function stopInterval() {
    setInterval(stopInterval)
    let now = new Date()
    let myTimer = document.getElementById("myTimer")
    myTimer.innerHTML = now
}
let showAlert = document.getElementById("showAlert")
showAlert.addEventListener("click", startInterval)

let hideAlert = document.getElementById("hideAlert")
hideAlert.addEventListener("click", stopInterval)