// let start = 0
// const max = 10
// while (start <= 10) {
//     if (start % 2 == 0) {
//         console.log(start)
//     }
//     start = start + 1
// }
// console.log("Process complete.")

// let count = 0
// const max2 = 20
// while (count <= 20) {
//     if (count % 2 != 0) {
//         console.log(count)
//     }
//     count = count + 1
// }
// console.log("Odd process complete.")

// let str = "Life is beautiful"
// let a = 0

// while (a < str.length) {
//     console.log(str.charAt(a))
//     a = a + 1
// }
// console.log("Finished")

const max = 10

for (let start = 0; start <= max; start++) {
    if (start % 2 == 0) {
        console.log(start)
    }
}
console.log("Even process complete.")

const max2 = 20

for (let count = 0; count <= max2; count++) {
    if (count % 2 != 0) {
        console.log(count)
    }
}
console.log("Odd process complete.")

let str = "Life is beautiful"

for (let a = 0; a < str.length; a++) {
    console.log(str.charAt(a).toUpperCase())
}
console.log("Finished")