let students = [
    {
        name: "Bilguun",
        birthOfYear: 1999,
        hobby: 'Sleeping',
        single: true
    },
    {
        name: "Bold",
        birthOfYear: 1952,
        hobby: 'Dancing',
        single: false,
    },
    {
        name: "Sugar",
        birthOfYear: 1998,
        hobby: 'Running',
        single: false,
    }
]

function findOld(array) {
    for (let i = 0; i < array.length; i++) {
        let tempBirth = 2022 - array[i].birthOfYear
        if (tempBirth > 20) {
            console.log(array[i].name)
        }
    }
}
findOld(students)

function findAge(array, name) {
    let age = 0
    for (let i = 0; i < array.length; i++) {
        if (name == array[i].name) {
            let age = 2022 - array[i].birthOfYear
            return age
        }
    }
}

console.log("Age of student " +findAge(students, "Bold"))

function single(array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].single == true) {
            console.log(`Single students: ${array[i].name}`)
        }
    }
}

single(students)