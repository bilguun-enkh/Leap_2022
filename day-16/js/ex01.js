let a = Number(prompt("Enter a number."))
let b = Number(prompt("Enter a number."))


function findMax(x, y) {
    if (x < y) {
        console.log(y + " is bigger than " + x)
    } else {
        console.log(x + " is bigger than " + y)
    }
}

findMax(a, b)