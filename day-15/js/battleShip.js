
let input = 0
let guesses = 0
let isSunk = false
let hit = 0

let locations = [false, false, true, true, true, false, false]

for (let i = 0; i < locations.length; i++) {
    console.log(locations[i])
}

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
        if (input == locations[2] || input == locations[3] || input == locations[4]) {
            hit = hit + 1
            console.log("Hit")
        }
        if (locations[2] == input) {
            locations[2] = -1
        }
        if (locations[3] == input) {
            locations[3] = -1
        }
        if (locations[4] == input) {
            locations[4] = -1
        }
        if (hit == 3) {
            isSunk = true
            console.log(sunk + end)
        }
    } else {
        alert("Give me a number between 0 and 6")
    }
}
