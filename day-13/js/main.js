// console.log(Math.PI)
// console.log(Math.PI.toFixed(2))

// let budget = 1_000_000_000
// console.log(budget)

// let degrees = 45
// let rad = degrees * (Math.PI / 180)
// console.log(rad.toFixed(4))

// let a = 5, b = 9
// let diff = Math.abs(a - b)
// // console.log(diff)

// // console.log(Math.ceil(.95))

// // console.log(Math.floor(.95))

// // console.log(Math.round(0.9))

// // console.log(Math.max(1, 5, 2))
// // console.log(Math.min(1, 5, 2))

// // console.log(Math.pow(7, 3))

// // x2 = y2 + z2 /  x2 = 15*15 + 24*24


// // let y = Number(prompt("Enter Y"))
// // let y2 = Math.pow(y, 2)
// // // console.log(y2)

// // let z = Number(prompt('Enter Z'))
// // let z2 = Math.pow(z, 2)
// // // console.log(z2)

// // let x = Math.sqrt(z2 + y2 )
// // console.log(x + " Result")


// let Numb1 = Number(prompt("Please enter a minimun."))
// let Numb2 = Number(prompt("Please enter a maximum."))

// let max = Math.max(Numb1, Numb2)
// let min = Math.min(Numb1, Numb2)



// let count = 1
// console.log("Start")
// while (count <= 50) {
//     console.log(Math.round(Math.random() * (max - min) + min))
//     count = count +1
// }
// console.log("Finished")


// let ask = prompt("Do you want to play?").toLowerCase()

// while (ask == "yes" ) {
//     alert("Thanks")
//     ask = prompt("Do you want to play again?").toLowerCase()
// }
// console.log("Game over.")

let askNumb = Number(prompt("Please enter a number"))
let count = 1;
let sum;
while (count <= askNumb) {
    sum = (1 + askNumb) * askNumb / 2
    count = count + 1
}
console.log(sum)
console.log("FINISHED")


