let animals = [{
    type: "dog",
    sound: "woof"
},
{
    type: "cow",
    sound: "moo"
},
{
    type: "cat",
    sound: "meow"
}
]

function whatDoesTheFoxSay(array, animalType) {
    for (let i = 0; i < array.length; i++) {
        if ( animalType == animals[i].type)
        console.log(`${array[i].sound} - ${array[i].sound} - ${array[i].sound}`)
    }
}

whatDoesTheFoxSay(animals, "dog")
whatDoesTheFoxSay(animals, "cow")
whatDoesTheFoxSay(animals, "cat")