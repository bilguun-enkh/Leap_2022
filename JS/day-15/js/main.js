
let input = 0
let guesses = 0
let isSunk = false
let hit = 0

let loc1 = 3
let loc2 = 4
let loc3 = 5

let out = "You've run out of guesses. "
let sunk = "You have sunk the ship! "
let end = "The game has ended."


console.log("The game has began.")

while (!isSunk) {
    let input = Number(prompt("Please shoot."))
    console.log(input)
    guesses = guesses + 1
    console.log("You've guessed " + guesses + " times.")
    if (guesses > 5) {
        console.log(out + end)
        break
    }
    if (input > 0 && input < 7) {
        if (input == loc1 || input == loc2 || input == loc3) {
            hit = hit + 1
            console.log("Hit")
        }
        if (loc1 == input) {
            loc1 = -1
        }
        if (loc2 == input) {
            loc2 = -1
        }
        if (loc3 == input) {
            loc3 = -1
        }
        if (hit == 3) {
            isSunk = true
            console.log(sunk + end)
        }
    } else {
        alert("Give me a number between 0 and 6")
    }
}
