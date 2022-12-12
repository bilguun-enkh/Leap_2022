console.log("Shift")
let shiftArr = (arr) => {
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        if (i != 0) {
            tempArr.push(arr[i])
        }
    }
    return tempArr
}

let arr1 = [5, 10, 15]
console.log(shiftArr(arr1))

let firstElement = arr1.shift()
console.log(arr1)

console.log("Unshift")

let unshiftArray = function (arr, number) {
    let temp2 = []
    temp2.push(number)
    for (let i = 0; i < arr.length; i++) {
        temp2.push(arr[i])
    }
    return temp2
}

arr2 = [10, 15, 20, 25]
console.log(unshiftArray(arr2, 5))

console.log(arr2.unshift(5))
console.log(arr2)

console.log("Sort")
let sortArray = [1, 2, 8, 7, -1, 10]
// let min = -99999


function sortAlg(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        let indexMin = i
        for (let j = i + 1; j < arr.length - 1; j++) {
            if (arr[j] < arr[indexMin]) {
                indexMin = j
            }
        }
        temp = arr[i]
        arr[i] = arr[indexMin]
        arr[indexMin] = temp
    }
    return arr
}

console.log(sortAlg(sortArray))

console.log(sortArray.sort())
console.log(sortArray.reverse())

console.log("Slice")

function slice(array, index) {
    let temp = []
    for (let i = index; i < array.length; i++) {
        temp.push(array[i])
    }
    return temp
}

let sliceArray = [5, 10, 15, 20, 25]

console.log(slice(sliceArray, 3))
console.log(sliceArray.slice(3))

console.log("Splice")

let spliceNames = ["Davaa", "Lkhava", "Purev", "Byamba"]

spliceNames.splice(1, 0, "Myagmar")
spliceNames.splice(4, 0, "Baasan")
console.log(spliceNames)