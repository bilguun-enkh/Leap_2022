let now = new Date();
console.log(now)

let Jan01_1970 = new Date(0)
console.log(Jan01_1970)

let Dec31_1969 = new Date(-24 * 3600 * 1000)
console.log(Dec31_1969)

let today = new Date("2023-01-01")
console.log(today)
let diff = today - now
console.log(diff)

let time = new Date(diff)
console.log(time.getDate())