// let count = 0
// let a = "123"
// let sum = 0

// while (count < a.length) {
//     console.log(a.charAt(count))
//     sum = sum + Number(a.charAt(count))
//     count = count + 1
// }
// console.log(sum)


// for (let count = 0, a = "123", sum = 0; count < a.length; count++) {
//     console.log(a.charAt(count))
//     sum = sum + Number(a.charAt())
// }
// console.log(sum)



// let sum = 0, rem = 0, n = 0;
// n = Number(prompt("Enter a number"))
// while (n > 0) {
//     rem = n % 10
//     sum = sum + rem
//     n = Math.floor(n / 10)
// }
// console.log(sum)

let n = 0, rem = 0, sum = 0;

for (n = Number(prompt("Give me a number")); n > 0; n = Math.floor(n / 10)) {
    rem = n % 10
    sum = sum + rem
}
console.log(sum)