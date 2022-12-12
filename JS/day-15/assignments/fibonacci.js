let f1 = 0
let f2 = 1
let n = 0
input = Number(prompt("Enter a number."))

while (0 <= n && n <= input) {
    let f3 = f1 + f2
    f1 = f2
    f2 = f3
    n = n + 1
    console.log(f3)
}