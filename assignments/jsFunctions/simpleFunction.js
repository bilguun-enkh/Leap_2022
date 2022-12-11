
function fullName() {
    console.log(`Bilguun Enkh-Amgalan`)
}
fullName()



function names(firstname, lastname) {
    let tempName = firstname + " " + lastname
    return tempName
}
let firstName = "Bilguun"
let lastName = "Enkh-Amgalan"
console.log(names(firstName, lastName))


function totalSum(x, y) {
    let sum = x + y
    return sum
}

console.log(totalSum(10, 15))

function rectArea(length, height) {
    area = length * height
    return area
}

console.log(rectArea(5, 2))

function perimeter(length, height) {
    let peri = 2 * (length + height)
    return peri
}

console.log(perimeter(5, 2))