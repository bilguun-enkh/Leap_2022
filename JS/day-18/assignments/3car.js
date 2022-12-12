carBrands = [
    ["Aston Martin Lagonda Ltd", "UK", 2016],
    ["Audi", "Germany", 2016],
    ["BMW", "Germany", 2016],
    ["Chevrolet", "USA", 2016],
    ["Dodge", "USA", 2016],
    ["Ferrari", "Italy", 2016],
    ["Honda", "Japan", 2016],
    ["Jaguar", "UK", 2016],
    ["Lamborghini", "Italy", 2016],
];


let input = prompt("Please enter a letter.")

function filterLetter(array) {
    for (let i = 0; i < carBrands.length; i++) {
        if (carBrands[i][0][0] == input) {
            console.log(carBrands[i])
        }
    }
}
console.log("1 " + filterLetter())