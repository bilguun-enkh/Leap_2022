let students = [
    {
        name: 'Сэд-Эрдэнэ',
        age: 19,
        gender: "male"
    },
    {
        name: 'Индра',
        age: 19,
        gender: "female"
    },
    {
        name: 'Хатнаа ',
        age: 21,
        gender: "male"
    },
    {
        name: 'Тэмүүлэн',
        age: 23,
        gender: "male"
    },
    {
        name: 'Намуун',
        age: 23,
        gender: "female"
    },
]


console.log(students)
function genderSort(object) {
    for (let i = 0; i < object.length; i++) {
        if (object[i].gender == "male") {
            console.log(`Male students ${object[i].name}`)
        } else {
            console.log(`Female students ${object[i].name}`)
        }
    }
}

genderSort(students)

function ageAvg(object) {
    let sum = 0
    let avg = 0
    for (let i = 0; i < object.length; i++) {
        sum = sum + object[i].age
        avg = sum / object.length
    }
    return avg

}

console.log(ageAvg(students))

for (let i = 0; i < students.length; i++) {
    students[i].surName = ""
}
console.log(students)


function sameAge(object) {
    let array19 = []
    let array21 = []
    let array23 = []
    for (let i = 0; i < object.length; i++) {
        if (object[i].age == 19) {
            array19.push(object[i])
        } else if (object[i].age == 21) {
            array21.push(object[i])
        } else {
            array23.push(object[i])
        }
    }
    console.log(array19)
    console.log(array21)
    console.log(array23)
}

sameAge(students)