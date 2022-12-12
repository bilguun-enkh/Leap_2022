let rabbit1 = {
    color: "white",
    rName: "Chandaga",
    gender: "Male",
    age: 2,
    jump: function() {
        console.log("Sorry, I broke my leg. I cannot jump.")
    },
    sayMyName: function () {
        console.log(`Your name is ${myName}`)
    }
}
console.log(rabbit1)
console.log(rabbit1.color)
console.log(rabbit1.rName)
rabbit1.color = 'Brown'
console.log(rabbit1.color)
rabbit1.jump()
rabbit1.sayMyName()

let rabbit2 = {
    color: "Indigo",
    rName: "Unibunny",
    gender: "female",
    age: 205,
    jump: function() {
        console.log("I can jump")
    }
}
console.log(rabbit2)

let rabbits = [rabbit1, rabbit2]
console.log(rabbits)