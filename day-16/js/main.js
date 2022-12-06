let array = [1,4,5,6,8,10,3,2,10,9,8]
console.log("Before " + array)
for (let i = 0; i < array.length; i++) {
    y = (array[i] / 2) % 1
    if (y == 0) {
        array[i] = array[i] + 4 
        console.log("Even number " + array[i])
    } else {
        array[i] = array[i] - 5
        console.log("Odd number " + array[i])
    }
}

console.log("After " + array)