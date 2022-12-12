let array = [1, 4, 5, 6, 8, 10, 3, 2, 10, 9, 8]
console.log("Before " + array)

console.log("After " + array)

function isEven(x) {
    if (x % 2 == 0) {
        return true
    } else {
        return false
    }
}

function addTwoNumbers(x, y) {
    return x + y
}
console.log(addTwoNumbers(4, 5))

function multiply(x, y) {
    return x * y
}
console.log(multiply(4, 5))

function multiplyThree(x, y, z) {
    const m = x * y * z
    return m
}

const result = multiplyThree(4, 5, 6)
console.log(result)

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
console.log(array)