// let a = "a"
// let b = "b"


// console.log(a < b)

// console.log(a == b)


// console.log(a === b)


// let c = 10
// let d = "10"

// console.log(c == d)
// console.log(c === d)


// let e = true
// let f = false

// console.log(e < f)
// console.log(e > f)


// let result = 10

// if (result > 10) {
//     console.log("more than 10")
// }   else {
//     console.log("less than 10")
// }

// result > 10 ? console.log("more than 10") : console.log("less than 10")


// let foodTax = prompt("Enter food amount")

// const tip1 = 3000
// const tip2 = 27500
// const tip3 = 100000

// let tipResult1 = (5000 <= tip1 && 30000 >= tip1) ? tip1 * 0.15 + tip1 : tip1 * 0.2 + tip1;
// console.log(tipResult1)

// let tipResult2 = (5000 <= tip2 && 30000 >= tip2) ? tip2 * 0.15 + tip2 : tip2 * 0.2 + tip2;
// console.log(tipResult2)

// let tipResult3 = (5000 <= tip3 && 30000 >= tip3) ? tip3 * 0.15 + tip3 : tip3 * 0.2 + tip3;
// console.log(tipResult3)


// const textResult = Number(prompt("Please enter your score."))
// const studentName = prompt("Please enter student name.")

// let studentResult;
// let unelgee;

// if (60 > textResult) {
//     studentResult = "Маш муу"
//     unelgee = "Тэнцээгүй"
// } else if (60 <= textResult && textResult < 70) {
//     studentResult = "Хангалттай"
//     unelgee = "Тэнцсэн"
// } else if (70 <= textResult && textResult < 80) {
//     studentResult = "Дунд"
//     unelgee = "Тэнцсэн"
// } else if (80 <= textResult && textResult < 90) {
//     studentResult = "Сайн"
//     unelgee = "Тэнцсэн"
// } else if (90 <= textResult && textResult <= 100) {
//     studentResult = "Маш сайн"
//     unelgee = "Тэнцсэн"
// } else {
//     studentResult = "Invalid grade"
//     unelgee = "Arai sain baina."
// }

// console.log(studentName + " " + studentResult + " " + unelgee)
// alert(studentName + " - " + studentResult + " - " + unelgee)

// console.log(`${studentName} - ${studentResult} - ${unelgee}`)


// let number = prompt("Please enter a number")
// let realNumber = number.length
// console.log(realNumber)

// if (realNumber != 10) {
//     alert(`Please enter only 10 digits`)
// } else {
//     alert(`Thank you`)
// }

// let str = "It is what it is"

// console.log(number[0]);
// console.log(number[1]);

// console.log(str.toUpperCase())
// console.log(str.toLowerCase())



// let char = (number.substr(0, 2))

// let otherNum = number.substr(2, 9)
// console.log(otherNum)


// if (!Number.isInteger(Number(char)) && Number.isInteger(Number(otherNum)) && number.length == 10) {
//     console.log("Correct")
// } else {
//     console.log("Error")
// }


// let firstName = "John"
// let fullName = firstName.concat(" ", 'Smith')
// console.log(fullName)
// console.log(firstName)

// console.log(Number("abc"))
// console.log(Number.isInteger(Number('abc')))
// console.log(Number('12345678'))
// console.log(Number.isInteger(Number('12345678')))


let phoneNumber = prompt("Please enter your phone number")
const countryCode = "+976"
console.log(Number.isInteger(countryCode))