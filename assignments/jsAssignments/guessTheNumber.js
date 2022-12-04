
let randNum = Math.floor(Math.random() * 100) + 1
console.log(randNum)

let input = Number(prompt("Guess the number from 1 to 100."))

while ( input != randNum) {
    if (input > randNum) {
        console.log("Your number is higher than the random number.")
    } else {
        console.log("Your number is lower than the random number.")
    }
    input = Number(prompt("Guess again"))
} 
console.log(`You got it correct! The number was ${randNum}.`)