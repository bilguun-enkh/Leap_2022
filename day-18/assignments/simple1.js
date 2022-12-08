let array = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"]

array.sort()
console.log("1" + array)

array.reverse()
console.log("2 " + array)

array.shift()
console.log("3 " + array)

array.splice(array.length / 2, 1)
console.log("4 " + array)

array.pop()
console.log("5 " + array)

function remove(array) {
    let loopIndex = array.length
    for (let i = 0; i < loopIndex; i++) {
        array.pop()
    }
    return array
}

console.log("6 " + remove(array))