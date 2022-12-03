
let randNum = Math.floor(Math.random() * 100) + 1
console.log(randNum)

let input = Number(prompt("Guess the number from 1 to 100."))

while ( input != randNum) {
    if (input.length == 3 ) {
        input = Number(prompt("Invalid input. Please enter a number from 1 to 100"))
    }
    input = Number(prompt("Guess again"))
} 
console.log(`You got it correct! The number was ${randNum}.`)