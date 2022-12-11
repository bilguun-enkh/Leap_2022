function max(x, y) {
    if (x < y) {
        console.log(y)
    } else {
        console.log(x)
    }
}

max(5, 6)

let array1 = [3, 5, 7, 8]

function find(array, x) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == x) {
            let index = array.indexOf(x)
            return index
        }
    }
}

console.log(find(array1, 8))

let array2 = ["three", "five", "seven", "eight"]

function findStr(array, str) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == str) {
            let index = array.indexOf(str)
            return index
        }
    }
}
console.log(findStr(array2, "five"))

function random(x, y) {
    return Math.floor(Math.random() * (y - x + 1)) + x;
}
console.log(random(1, 10))

function avg(array) {
    let sum = 0
    let avg = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
        avg = Math.round(sum / array.length)
    }
    return avg
}

console.log(avg(array1))

function sum(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i]
    }
    return sum
}

console.log(sum(array1))

function isPrime(x) {
    if (x < 2) return false;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) return false;
    }
    return true;
}

console.log(isPrime(2)); 
console.log(isPrime(4)); 


let string = "the brown fox jumped over the lazy dog"

function upperCase(str) {
    let tempUpper = str.toUpperCase()
    return tempUpper
}

console.log(upperCase(string))

function lowerCase(str) {
    let tempLower = str.toLowerCase()
    return tempLower
}

console.log(lowerCase(string))