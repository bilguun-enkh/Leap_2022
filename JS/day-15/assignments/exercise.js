let x = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
]

let y = 0
for (let i = 0; i < x.length; i++) {
    y = (x[i] / 2) % 1
    // console.log(x[i])
    if (y == 0) {
        console.log("Even numbers " + x[i])
    }
    // if (y != 0) {
    //     console.log("Odd numbers " + x[i])
    // }
}

let arrays = [1, 2, 5, 3, 5, 6, 7, 8]

for (let i = 0; i < arrays.length; i++) {
    arrays[i] = arrays[i] + 1
    console.log(arrays[i])
}
console.log(arrays)