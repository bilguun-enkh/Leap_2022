let input = Number(prompt("Give me a number."))
let temp = 0

for (let i = 2; i < Math.floor(input / 2); i++) {
    if (input % i == 0) {
        temp = temp + 1
    }
}

console.log(temp)
if (temp == 0) {
    console.log("Prime number.")
} else {
    console.log('Not a prime number.')
}