let teacherDavaa = {
    firstName: "Davaasuren",
    lastName: "Batbold",
    age: 29,
    experience: "5 Years",
    children: [],
    isMarried: true,
    address: {
        district: "Khan-Uul Dureg",
        Khoroolol: "2-r",
        Khoroo: "1-r",
        houseNumber: "016",
        doorNumber: "4"
    },
    GPA: 94.5,

    intro: function () {
        console.log(`My name is ${this.firstName} ${this.lastName}. I am ${this.age}. I have ${this.experience} of experience.
        I live in ${this.address.district}. district.`)
    },

}

teacherDavaa.intro()

let teacherDavaaClone = { ...teacherDavaa }

teacherDavaaClone.firstName = "Davaa real clone"

console.log(teacherDavaa)
console.log(teacherDavaaClone)

console.log(Object.keys(teacherDavaa))
console.log(Object.values(teacherDavaa))

let newTeacher = Object.create({
    firstName: "firstName",
    lastName: "lastName",
})
console.log(newTeacher)
